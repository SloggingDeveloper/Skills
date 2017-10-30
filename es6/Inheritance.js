'use strict';

class Vehicle{
    constructor(){
        this.passengers = []
    }

    AddPassengers(name){
        this.passengers.push(name);
    }
}

class Car extends Vehicle{
    constructor(){
        super();
    }

    deployAirbag(){
        console.log("wooosh");
    }
}

class InsurancePolicy {}
 const addInsrancePolicy = Symbol();
 const getInsurancePolicy = Symbol();   
 const IsInsured = Symbol(); 
 
function makeInsurable(pro){
 
 pro[addInsrancePolicy] = function(policy) {this.insurancePolicy = policy;}
 pro[getInsurancePolicy] = function() {return this.insurancePolicy;}
 pro[IsInsured] = function(){return !!this.insurancePolicy;}
}

makeInsurable(Car.prototype);

const car = new Car();
car.AddPassengers("shankar");
car.AddPassengers("sunil");
car.AddPassengers("sid");
car.addInsrancePolicy(new InsurancePolicy());
console.log(car);

console.log(car instanceof Car);
console.log(car instanceof Vehicle);



for(let prop in car){
    console.log(car.hasOwnProperty(prop));
    if(car.hasOwnProperty(prop))
    console.log(prop);
}

console.log(Object.keys);
console.log(car);