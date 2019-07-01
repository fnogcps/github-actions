// My custom Array.map

Array.prototype.myMap = function(callback) {
  let arrayTemp = [];
  for (i = 0; i < this.length; i++) {
    arrayTemp.push(callback(this[i]));
  }

  return arrayTemp;
};

const objectOne = [
  '{"product": "A", "price": 12.5 }',
  '{"product": "B", "price": 9.90 }',
  '{"product": "C", "price": 50.20 }',
  '{"product": "D", "price": 3.50 }',
];

const arrayOne = objectOne.map(JSON.parse);
arrayOne.forEach(cvalue => console.log(`Price: ${cvalue.price}`));
