'use strict';
const fs = require('fs');
const Emitter = require('events').EventEmitter;

class Countdown extends Emitter {
    constructor(length, superstitiousNumber){
        super();
        this.length = length;
        this.superstitiousNumber = superstitiousNumber;
    }

    go(){
        const countdown = this;
        return new Promise(function(resolve, reject){
            setTimeout(function(){
             for(let i = countdown.length; i >= 0 ; i--){
                 if(i === countdown.superstitiousNumber)
                   return reject(new Error("no to be continued"));
                   countdown.emit('tick',i);
             }
             resolve('completed');
            })
        })
    }
}

const c = new Countdown(14, 16);

function launch(){
    return new Promise(function(resolve, reject){
        if(Math.random() > 0.5) { reject('failed'); return};
       setTimeout(function(){ console.log('i am launching');
       resolve('done');
    }, 2000);
    });
}

// c.on('tick',function(i){console.log(i);});

// c.go().then(launch).then((data) => console.log('done'), (rej) => console.log(rej)).catch(function(err){console.log(err.message);});

function spreadIt(a,b,...c){
 console.log(c);
}
spreadIt(...[10,20,30,40]);
