import test from 'node:test';
import assert from 'node:assert/strict';
import {lesson,cards} from '../src/lessons/lesson-07/content.js';
import {exercises} from '../src/lessons/lesson-07/exercises.js';
import {evaluate} from '../src/js/engine.js';

test('session 07: nine sections, 120 minutes, visual structure, and priorities',()=>{
 assert.equal(lesson.id,'07');
 assert.equal(lesson.duration,'120 دقيقة');
 assert.equal(lesson.sections.length,9);
 assert.equal(lesson.sections.reduce((sum,s)=>sum+Number.parseInt(s.time,10),0),120);
 assert.equal(cards.length,14);
 assert.equal(new Set(lesson.sections.map(s=>s.id)).size,9);
 for(const section of lesson.sections){
  assert.ok(section.icon);
  assert.ok(Array.isArray(section.flow)&&section.flow.length>=5);
  assert.ok(section.title&&section.lead&&section.warning);
  assert.ok(section.body.length>=5);
  for(const block of section.body){
   assert.ok(['must','understand','ai'].includes(block.tag));
   if(block.link){assert.equal(block.link.length,2);assert.match(block.link[1],/^https:\/\//);}
  }
 }
});

test('session 07: twelve exercises with unique IDs and supported assessment types',()=>{
 assert.equal(exercises.length,12);
 assert.equal(new Set(exercises.map(e=>e.id)).size,12);
 assert.deepEqual(
  [...new Set(exercises.map(e=>e.type))].sort(),
  ['ach','classification','evidence','matching','mistake','report','scenario','sequence','short'].sort()
 );
 for(const exercise of exercises)assert.ok(exercise.title&&exercise.desc&&exercise.hint);
});

test('session 07: representative answers grade as expected',()=>{
 assert.equal(evaluate(exercises.find(e=>e.id==='s7-uxo'),2).correct,true);
 assert.equal(evaluate(exercises.find(e=>e.id==='s7-satellite'),1).correct,true);
 assert.equal(evaluate(exercises.find(e=>e.id==='s7-adsb'),2).correct,true);
 assert.equal(evaluate(exercises.find(e=>e.id==='s7-aircraft'),0).correct,true);
 assert.equal(evaluate(exercises.find(e=>e.id==='s7-darkfleet'),1).correct,true);
 assert.equal(evaluate(exercises.find(e=>e.id==='s7-chain'),[
  'التحقق من الجهة الناشرة وتاريخ التقرير',
  'قراءة المنهج ونطاق التتبع',
  'مراجعة مصادر الأدلة وحق الرد',
  'تمييز النتيجة المؤكدة عن الفرضية',
  'كتابة ما يثبته التقرير وما لا يثبته'
 ]).correct,true);
 assert.equal(evaluate(exercises.find(e=>e.id==='s7-evidence'),{
  'يظهر في التقرير الأممي أن صورة التقطت في تاريخ محدد':'observed',
  'شكل الضرر يتوافق مع أكثر من تفسير':'limit',
  'الجهة X نفذت الهجوم حتماً':'unsupported',
  'تم التحقق من رابط الوثيقة في موقع الجهة الناشرة':'verified'
 }).correct,true);
});
