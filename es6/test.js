'use strict';

Object.prototype.superior = function(name){
  var that = this;
  var method = that[name];
  console.log('inside' + method);
  return function(){
  return method.apply(that, arguments);
  }
}

function cat(m){
m = m || {};

m.says = function(){
  return 'meow' + m.name + 'meow';  
}
return m;
}

var superiorCat = cat({name:'sunil'});
var superiorSays = superiorCat.superior('says');
console.log(superiorSays);
superiorCat.says = function(){
  return 'i like to decorate' + superiorSays();
}

console.log(superiorCat.says());
