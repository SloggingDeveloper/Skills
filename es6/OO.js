'use strict';

const car = (function () {    
   
    const prop = new WeakMap();
    class Car {      
     
   static GetVin(){
      return  Car.vinNumber++;
   }
        constructor(color, make, model) {
            this.color = color;
            this.vin = Car.GetVin();
            this.make = make;
            this.model = model;
        }

        start() {
            this.engineOn = true;
            this.speed = 0;
            this._useGears = ['P', 'N', 'R', 'D'];
            prop.set(this, {userGear : this._useGears[0]});
        }

        stop() {
            this.engineOn = false;
            this.speed = 0;
        }

        set currentGear(value){
           if(!this._useGears.find(x => x === value))
           throw new Error(`invalid gear ${value}`);
           prop.set(this, {userGear : value});
        }

        get currentGear(){
            return prop.get(this).userGear;
        }

        shifGear(gear){
            this.currentGear = gear;
        }

        // drive(){
        //     this.currentGear = this.useGears[3];
        // }

        // reverse(){
        //     this.currentGear = this.useGears[2];
        // }

        // neutral(){
        //     this.currentGear = this.useGears[1];
        // }
    }
    Car.vinNumber = 0;
    return Car;
})();

const obj = new car('red', 'sedan', 'i10');
console.log(obj);
console.log(new car('red', 'sedan', 'corolla'));

