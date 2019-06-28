// Object.keys, Object.values, Object.entries

const objectOne = { name: "Rodrigo", age: 26 };
const objectTwo = { name: "Paulo", age: 21 };
const objectThree = { name: "José", age: 14 };

console.log(Object.keys(objectOne));
console.log(Object.values(objectTwo));
console.log(Object.entries(objectThree));

Object.entries(objectTwo).forEach(([index, value]) => {
  console.log(`${index}: ${value}`);
});
