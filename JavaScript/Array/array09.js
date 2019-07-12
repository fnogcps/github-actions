// My custom Array.filter

Array.prototype.myFilter = function(callback) {
  let arrayTemp = [];

  for (i = 0; i < this.length; i++) {
    callback(this[i]) ? arrayTemp.push(this[i]) : null;
  }

  return arrayTemp;
};

const peopleList = [
  {name: 'João', age: 24, state: 'SP'},
  {name: 'Pedro', age: 17, state: 'MG'},
  {name: 'Felipe', age: 29, state: 'SP'},
  {name: 'Rodrigo', age: 33, state: 'SC'},
  {name: 'Matheus', age: 12, state: 'MS'},
];

console.log(
  'Age < 20:',
  peopleList.myFilter(function(p) {
    return p.age < 20;
  }),
);

const filter = peopleList.myFilter(p => p.age > 25 && p.state == 'SP');

console.log('\nAge > 25 and from SP:', filter);
console.log('Age > 30:', peopleList.myFilter(p => p.age > 30));
