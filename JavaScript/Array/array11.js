// My custom Array.flatMap

const objectOne = [
  {
    group: 'Group 1',
    people: [
      {
        name: 'João',
        number: 5,
      },
      {
        name: 'Felipe',
        number: 15,
      },
    ],
  },
  {
    group: 'Group 2',
    people: [
      {
        name: 'Matheus',
        number: 2.5,
      },
      {
        name: 'Pedro',
        number: 20,
      },
    ],
  },
];

groupNumsOne = g => g.people.map(p => p.number);
groupNumsTwo = objectOne.map(groupNumsOne);

Array.prototype.flatMap = function(callback) {
  return Array.prototype.concat.apply([], this.map(callback));
};

console.log(groupNumsTwo);
console.log(objectOne.flatMap(groupNumsOne));

gNumsSum = objectOne.flatMap(groupNumsOne).reduce((x, y) => x + y);
console.log('Sum:', gNumsSum);
