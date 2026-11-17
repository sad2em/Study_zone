import test from 'node:test';
import assert from 'node:assert/strict';
import {lesson,cards} from '../src/lessons/lesson-04/content.js';
import {exercises} from '../src/lessons/lesson-04/exercises.js';
import {evaluate} from '../src/js/engine.js';

test('session 04: nine structured sections and twelve review cards',()=>{
 assert.equal(lesson.id,'04');
 assert.equal(lesson.sections.length,9);
 assert.equal(lesson.sections.reduce((sum,s)=>sum+Number.parseInt(s.time,10),0),120);
 assert.equal(cards.length,12);
 assert.equal(new Set(lesson.sections.map(s=>s.id)).size,9);
 for(const section of lesson.sections){
  assert.ok(section.body.length>=5);
  assert.ok(section.warning);
  for(const block of section.body)assert.ok(['must','understand','ai'].includes(block.tag));
 }
});

test('session 04: eleven exercises cover different assessment formats',()=>{
 assert.equal(exercises.length,11);
 assert.equal(new Set(exercises.map(e=>e.id)).size,11);
 assert.deepEqual([...new Set(exercises.map(e=>e.type))].sort(),['ach','classification','evidence','matching','mistake','practical','report','scenario','sequence','short'].sort());
 for(const e of exercises)assert.ok(e.title&&e.desc&&e.hint);
 assert.equal(evaluate(exercises.find(e=>e.id==='s4-pressure'),2).correct,true);
 assert.equal(evaluate(exercises.find(e=>e.id==='s4-identity'),0).correct,false);
});
