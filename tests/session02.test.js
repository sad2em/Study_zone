import test from 'node:test';
import assert from 'node:assert/strict';
import {lesson,cards} from '../src/lessons/lesson-02/content.js';
import {exercises} from '../src/lessons/lesson-02/exercises.js';
import {evaluate} from '../src/js/engine.js';

test('session 02 has five complete sections with educational content',()=>{
 assert.equal(lesson.id,'02');assert.equal(lesson.sections.length,5);
 assert.equal(new Set(lesson.sections.map(s=>s.id)).size,5);
 for(const s of lesson.sections){assert.ok(s.body.length>=5);assert.ok(s.warning);for(const b of s.body)assert.ok(['must','understand','ai'].includes(b.tag))}
 assert.ok(cards.length>=8);
});
test('session 02 practice has ten independent exercises and grades correctly',()=>{
 assert.equal(exercises.length,10);assert.equal(new Set(exercises.map(x=>x.id)).size,10);
 assert.ok(exercises.every(x=>x.id.startsWith('s2-')));
 for(const x of exercises){assert.ok(x.title&&x.desc);if(x.type==='evidence'||x.type==='ach'||x.type==='scenario'||x.type==='mistake')assert.equal(evaluate(x,x.correct).correct,true)}
});