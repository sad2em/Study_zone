import test from 'node:test';
import assert from 'node:assert/strict';
import {lesson,cards} from '../src/lessons/lesson-06/content.js';
import {exercises} from '../src/lessons/lesson-06/exercises.js';
import {evaluate} from '../src/js/engine.js';

test('session 06: GEOINT sections, visual cues, priorities, and 120-minute plan',()=>{
 assert.equal(lesson.id,'06');
 assert.equal(lesson.duration,'120 دقيقة');
 assert.equal(lesson.sections.length,9);
 assert.equal(lesson.sections.reduce((sum,s)=>sum+Number.parseInt(s.time,10),0),120);
 assert.equal(cards.length,14);
 assert.equal(new Set(lesson.sections.map(s=>s.id)).size,9);
 for(const section of lesson.sections){
  assert.ok(section.icon);
  assert.ok(Array.isArray(section.flow)&&section.flow.length>=4);
  assert.ok(section.title&&section.lead&&section.warning);
  assert.ok(section.body.length>=5);
  for(const block of section.body){
   assert.ok(['must','understand','ai'].includes(block.tag));
   if(block.link){assert.equal(block.link.length,2);assert.match(block.link[1],/^https:\/\//);}
  }
 }
});

test('session 06: twelve exercises and unique IDs',()=>{
 assert.equal(exercises.length,12);
 assert.equal(new Set(exercises.map(e=>e.id)).size,12);
 assert.deepEqual(
  [...new Set(exercises.map(e=>e.type))].sort(),
  ['ach','classification','evidence','matching','mistake','practical','report','scenario','sequence'].sort()
 );
 for(const exercise of exercises)assert.ok(exercise.title&&exercise.desc&&exercise.hint);
});

test('session 06: representative GEOINT answers are graded correctly',()=>{
 assert.equal(evaluate(exercises.find(e=>e.id==='s6-resolution'),1).correct,true);
 assert.equal(evaluate(exercises.find(e=>e.id==='s6-clouds'),1).correct,true);
 assert.equal(evaluate(exercises.find(e=>e.id==='s6-chronology'),1).correct,true);
 assert.equal(evaluate(exercises.find(e=>e.id==='s6-geolocation'),2).correct,true);
 assert.equal(evaluate(exercises.find(e=>e.id==='s6-crowd'),1).correct,true);
 assert.equal(evaluate(exercises.find(e=>e.id==='s6-safety'),2).correct,true);
 assert.equal(evaluate(exercises.find(e=>e.id==='s6-indexes'),{
  'NDWI (McFeeters)':'water','NDMI':'moisture','MNDWI':'builtwater','NBR':'burn'
 }).correct,true);
 assert.equal(evaluate(exercises.find(e=>e.id==='s6-bands'),{
  'B3 Green':'10','B8 NIR':'10','B11 SWIR1':'20','B12 SWIR2':'20','B10 Cirrus':'60'
 }).correct,true);
});
