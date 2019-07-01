// Array.map #2

const objectOne = [
  '{"product": "A", "price": 12.5 }',
  '{"product": "B", "price": 9.90 }',
  '{"product": "C", "price": 50.20 }',
  '{"product": "D", "price": 3.50 }',
];

const arrayOne = objectOne.map(JSON.parse);
arrayOne.forEach(cvalue => console.log(`Price: ${cvalue.price}`));
