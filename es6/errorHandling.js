'use strict'

function a(){
    console.log("a called");
    b();
    console.log('exiting a');
}

function b(){
    console.log("a called");
    c();
    console.log('exiting a');
}

function c(){
    console.log("a called");
    d();
    console.log('exiting a');
}

function d(){
    console.log("a called");   
    throw new Error("testing went wrong");
}


try{
    a();
}
catch (err){
    console.log(err.stack)
}