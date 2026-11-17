import test from 'node:test';
import assert from 'node:assert/strict';
import {lesson,cards} from '../src/lessons/lesson-05/content.js';
import {exercises} from '../src/lessons/lesson-05/exercises.js';
import {evaluate} from '../src/js/engine.js';

test('session 05: nine structured sections, 120 minutes, and review cards',()=>{
 assert.equal(lesson.id,'05');
 assert.equal(lesson.duration,'120 دقيقة');
 assert.equal(lesson.sections.length,9);
 assert.equal(lesson.sections.reduce((sum,s)=>sum+Number.parseInt(s.time,10),0),120);
 assert.equal(cards.length,14);
 assert.equal(new Set(lesson.sections.map(s=>s.id)).size,9);
 for(const section of lesson.sections){
  assert.ok(section.title&&section.lead&&section.warning);
  assert.ok(section.body.length>=5);
  for(const block of section.body)assert.ok(['must','understand','ai'].includes(block.tag));
  for(const block of section.body.filter(b=>b.link))assert.equal(block.link.length,2);
 }
});

test('session 05: twelve exercises, all interactive types, and unique IDs',()=>{
 assert.equal(exercises.length,12);
 assert.equal(new Set(exercises.map(e=>e.id)).size,12);
 assert.deepEqual(
  [...new Set(exercises.map(e=>e.type))].sort(),
  ['ach','classification','evidence','matching','mistake','practical','report','scenario','sequence'].sort()
 );
 for(const exercise of exercises)assert.ok(exercise.title&&exercise.desc&&exercise.hint);
 assert.equal(evaluate(exercises.find(e=>e.id==='s5-ubo'),1).correct,true);
 assert.equal(evaluate(exercises.find(e=>e.id==='s5-icij'),0).correct,true);
 assert.equal(evaluate(exercises.find(e=>e.id==='s5-financial'),{
  '10-K':'annual','10-Q':'quarterly','8-K':'event','Form 990':'nonprofit'
 }).correct,true);
});
