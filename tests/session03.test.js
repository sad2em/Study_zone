import test from 'node:test';
import assert from 'node:assert/strict';
import {lesson,cards} from '../src/lessons/lesson-03/content.js';
import {exercises} from '../src/lessons/lesson-03/exercises.js';
import {evaluate} from '../src/js/engine.js';
test('session 03: eight sections, structured content, and review cards',()=>{
 assert.equal(lesson.id,'03');assert.equal(lesson.sections.length,8);assert.equal(cards.length,10);
 assert.equal(new Set(lesson.sections.map(s=>s.id)).size,8);
 for(const section of lesson.sections){assert.ok(section.body.length>=5);assert.ok(section.warning);for(const b of section.body)assert.ok(['must','understand','ai'].includes(b.tag))}
});
test('session 03: 10 independent exercises with grading',()=>{
 assert.equal(exercises.length,10);assert.equal(new Set(exercises.map(e=>e.id)).size,10);
 assert.deepEqual([...new Set(exercises.map(e=>e.type))].sort(),['ach','classification','evidence','matching','mistake','practical','report','scenario','sequence','short'].sort());
 for(const e of exercises){assert.ok(e.title&&e.desc&&e.hint);}
 assert.equal(evaluate(exercises.find(e=>e.id==='s3-handle'),1).correct,true);
 assert.equal(evaluate(exercises.find(e=>e.id==='s3-metric'),2).correct,false);
});