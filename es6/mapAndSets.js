'use strict';
const maps = new Map();

const obj1 = {name:'sunil',Id: 1};
const obj2 = {name:'shankar', Id:2};
const obj3 = {name:'sunil',Id: 1};

maps.set(obj1,"user");
maps.set(obj2, 'admin');
maps.set(obj3,"superuser");


console.log(maps.get(obj1));
console.log(maps.get(obj3));

function segr(...a){
    console.log(`${a[0]}`);
}

let arr = [1,2 ,3 ,4];
// console.log(a);
// console.log(r)

segr(1,2,3,4);