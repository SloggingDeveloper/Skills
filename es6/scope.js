'use strict';


let scopeInmain = 10;
function test(){
    this.name = 'sunil';
    
    this.Do = function(){ return () => {console.log(this.name);}}
}

var te = new test();
te.Do()();