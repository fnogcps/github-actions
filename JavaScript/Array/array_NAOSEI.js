// ////////////////

const objectOne = {0: 'valueOne', 1: 'valueTwo', 2: 'valueThree'};
console.log('objectOne:', objectOne);

Object.defineProperty(objectOne, 'toString', {
  value: function() {
    return Object.values(this);
  },
  enumerable: false,
});

console.log('objectOne[0]:', objectOne[0]);

const arrayOne = ['valueFour', 'valueFive'];
console.log('objectOne, arrayOne:', objectOne.toString(), arrayOne);
