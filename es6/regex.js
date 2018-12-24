'use strict';

// const html = 'html with <a href = bb> some link </a> and some javascript' +
// '<script src=/src/></script>';
// const match = html.match(/area|a|script|href/ig);
// console.log(match);

// const digits = '129 students passed by and 99 dettol kids remained';
// const digitsMatched = digits.match(/\S/ig);
// console.log(digitsMatched);

// const number = "469-585-3996";
// console.log(number.replace(/\D/ig, ''));

const site = "visit http://mySite.com or https://some1.com";
console.log(site.match(/[a-zA-Z]+[\.](?:com|org|in)/ig));
console.log(site.match(/(?:https?):\/\/[a-zA-Z0-9]+(\.)(com|org)/ig));