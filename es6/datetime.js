'use strict';

const moment = require('moment-timezone');



const val = moment.tz();

console.log(val.calendar());
const d = new Date(1986,9,16);
const d1 = new Date(1999,10,16);
console.log(moment(d).dayOfYear());
console.log(moment(d).format("YYYY MMMM [its] Mo [Month] [the] Do HH:mm a"));

console.log(d1 > d);
console.log(d1-d);
console.log((d1-d)/1000/60/60/24);
console.log(d1 + d);
const dates = [d1, d];

dates.sort((a, b) => b - a );

for(let d of dates){
    console.log(d);
}

const mom = moment();
console.log(mom);

console.log(mom);
console.log(mom.subtract(50,'seconds').fromNow());
