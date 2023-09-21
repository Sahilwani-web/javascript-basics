//1 Simple function
function vehicle(name,maker,engine){
    this.name = name;
    this.maker = maker;
    this.engine = engine;
}
let car  = new vehicle('GT','BMW','1998cc');


console.log(car.name);
console.log(car.maker);
console.log(car['engine']);


//2 Creating js objects with object literal
let car1 = {
    name : 'GT',
    maker : 'BMW',
    engine : '1998cc'
};
// Property accessor
console.log(car1.name); //dot notation
console.log(car1['maker']); //bracket notation


//3 Adding methods to the car object
let car2 = {
    name : 'GT',
    maker : 'BMW',
    engine : '1998cc',
    start : function(){
        console.log('Starting the engine...');
    }
};
car2.start();
// Adding method stop() later to the object
car2.stop = function() {
    console.log('Applying Brake...');  
}
car2.stop();


//4   object.Create();
const coder = {
    isStudying : false,
    printIntroduction : function(){
        console.log(`My name is ${this.name}. Am I studying?: ${this.isStudying}`);
    }
};
const me = Object.create(coder);
me.name = 'Sahil';
me.isStudying = true;
me.printIntroduction();


//5 Using es6 classes
class Vehicle {
    constructor(name, maker, engine) {
      this.name = name;
      this.maker =  maker;
      this.engine = engine;
    }
  }
    
  let car3 = new Vehicle('GT', 'BMW', '1998cc');
    
  console.log(car3.name);