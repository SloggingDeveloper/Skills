'use strict';

const sentences = [{subject: 'javascript', verb: 'is', object: 'great'},
 {subject: 'elephant', verb: 'are', object: 'large'}];

 function say({subject, verb, object}){
  console.log(`${subject} ${verb} ${object}`);
 }

 for(let s of sentences){
     say(s);
 }

let x = 2;
const r1 = x++ + x++;
const r2 = ++x + ++x;
const r3 = x++ + ++x;
const r4 = ++x + x++;
let y = 10;
const r5 = y-- + y--;
const r6 = --y + --y;
const r7 = y-- + --y;
const r8 = --y + y--;
console.log(`${r1} - ${r2} - ${r3} - ${r4} - ${r5} - ${r6} - ${r7} - ${r8}`);




 