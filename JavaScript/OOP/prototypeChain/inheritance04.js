function myObject() {}
console.log(myObject.prototype);

const objectOne = new myObject();
const objectTwo = new myObject();

console.log(myObject.prototype === objectTwo.__proto__);
console.log(objectOne.__proto__ === objectTwo.__proto__);

myObject.prototype.valueOne = 50;
myObject.prototype.valueTwo = 300;

console.log(`\nobjectOne.valueOne: ${objectOne.valueOne}`);
objectTwo.valueTwo = 10;
console.log(`objectTwo.valueTwo: ${objectTwo.valueTwo}\n`);

console.log(new myObject().__proto__ === myObject.prototype); // true
console.log(myObject.__proto__ === Function.prototype); // true
console.log(Function.prototype.__proto__ === Object.prototype); // true
