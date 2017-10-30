'use strict';

// let book = ["twinkle twinkle"," alice in wonderland", "my country is wonderful", "i love my family"];

// const it = book.values();

// console.log(`${it.next} - ${it.done}`);
// console.log(`${it.next} - ${it.done}`);
// console.log(`${it.next} - ${it.done}`);
// console.log(`${it.next} - ${it.done}`);
// console.log(`${it.next} - ${it.done}`);

class Log{
    constructor(){
        this._messages = [];
    }

    add(message){
    this._messages.push(message);
}

 [Symbol.iterator](){
    let i =0;
    
    return {next() {
        if(i >= messages.length)
          return {value: undefined, done: true};

          return {value : messages[i++], done: false};
    }}
 }

}

// const log = new Log();
// log.add("test 1");
// log.add("test 2");

// for(let item of log){
//    console.log(item);
// }

class Fibonicci{
    constructor(){

    }

    [Symbol.iterator](){

       let a =0, b= 1;
        return {
            next(){
              const retValue = {value : b, done: false};
               b += a;
               a = retValue.value
               retValue.value = b;
               return retValue;
            }
        }
    }
}

// const fib = new Fibonicci();

// let i = 0;
// for(let item of fib){
//     console.log(item);
//     i++;
//  if(i >= 10)
//   break;
// }

function* favourite(){
    let name = yield "my name is";
    let color = yield "i love color";

    yield `${name} loves ${color}`;

}

const it = favourite();
console.log(it.next());
console.log(it.next('sunil'));
console.log(it.next('red'));
console.log(it.next());

