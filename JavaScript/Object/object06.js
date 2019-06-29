// Object.assign, Object.freeze

const objectOne = {x: 1};
const objectTwo = {y: 2};
const objectThree = {z: 3};

const objectFour = Object.assign(objectOne, objectTwo, objectThree);
console.log(objectFour);

const objectFive = Object.assign(objectThree, objectTwo, objectOne);
Object.freeze(objectFive);

objectFive.value = 50;
console.log(objectFive);
