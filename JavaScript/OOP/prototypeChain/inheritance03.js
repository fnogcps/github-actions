const objectOne = {x: 5, y: 10};
console.log('objectOne:', objectOne);

const objectTwo = Object.create(objectOne);
objectTwo.y = 100;

console.log('\nobjectTwo:', objectTwo);
console.log(`objectTwo.x: ${objectTwo.x}`);
console.log(`objectTwo.y: ${objectTwo.y}\n`);

const objectThree = Object.assign(objectTwo);
console.log('objectThree:', objectThree);
