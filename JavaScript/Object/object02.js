// Object.prototype

const objectOne = {};
console.log(typeof objectOne, objectOne);

const objectTwo = new Object();
console.log(typeof objectTwo, objectTwo);

const objectThree = Object.create(Object.prototype);
console.log(typeof objectThree, objectThree);
