// Object.preventExtensions, Object.seal

const objectOne = Object.preventExtensions({
  valueOne: 200,
  valueTwo: 400,
  valueThree: 600,
});

console.log(
  `Object.isExtensible [objectOne]: ${Object.isExtensible(objectOne)}\n`,
);

objectOne.valueFour = 800; // false
objectOne.valueOne = 100; // true
delete valueTwo; // false

console.log(objectOne);

const objectTwo = Object.seal({valueOne: 'A', valueTwo: 'B'});

console.log(`\nObject.isSealed [objectTwo]: ${Object.isSealed(objectTwo)}\n`);

objectTwo.valueThree = 'C'; // false
objectTwo.valueOne = 'Z'; // true
delete valueTwo; // false

console.log(objectTwo);
