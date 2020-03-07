// Array.filter

const peopleList = [
  {name: 'João', age: 24, state: 'SP'},
  {name: 'Pedro', age: 17, state: 'MG'},
  {name: 'Felipe', age: 29, state: 'SP'},
  {name: 'Rodrigo', age: 33, state: 'SC'},
  {name: 'Matheus', age: 12, state: 'MS'},
];

console.log(
  'Age < 20:',
  peopleList.filter(function(p) {
    return p.age < 20;
  }),
);

const filterOne = peopleList.filter(p => p.age > 25 && p.state == 'SP');

console.log('\nAge > 25 and from SP:', filterOne);
console.log(
  'Age > 30:',
  peopleList.filter(p => p.age > 30),
);
