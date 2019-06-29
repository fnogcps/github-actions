// Object.defineProperty

const objectOne = {name: 'José'};
Object.defineProperty(objectOne, 'age', {
  enumerable: true,
  writable: false,
  value: 16,
});

objectOne.age = 23;
console.log(objectOne);

const objectTwo = {name: 'Marcos'};
Object.defineProperty(objectTwo, 'age', {
  enumerable: false,
  writable: true,
  value: 28,
});

objectTwo.age = 26;
console.log(objectTwo);
console.log(Object.keys(objectTwo));
