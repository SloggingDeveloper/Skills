'use strict';

// const arr = [{name:'widget', price:1},,{name:'gadget',price:2},{name:'gadget',price:2}];

// console.log(arr.map(x => x.name));
// console.log(arr.map(x => x.price));
// console.log(arr.filter(x => x.price > 1));

// const names = arr.map(x => x.name);
// //console.log(names.map(String.toLowerCase));
// console.log(arr.reduce((a, x) =>  a + x.price));

const word = ['sunil','shankar','baharati','mallesh','dhruva','kanishq','kartik','basu','gautami','aditi','niharika','suvarna','siddhant','shweta'];

console.log(word.reduce((a, x) => x.length > 5 ? a + " " + x:a, ''));
console.log(word.filter(x => x.length > 5).join(' '));
const sym = Symbol();
const obj = {name : 'sunil', lastName: 'ganiger', [sym] : 4, xtreme : true, xcuse: true, xtra : true };
word.forEach((a) => console.log(a));
//for(let item of word){
  //  console.log(item);
//}

// for(let item in obj){
//     if(obj.hasOwnProperty(item))
//     console.log(`${item} - ${obj[item]}`);
// }

Object.keys(obj).filter((a) => a.match(/^x/)).forEach((a) => console.log(`${a} - ${obj[a]}`));

