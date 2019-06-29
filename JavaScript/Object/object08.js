// JSON.stringify, JSON.parse

console.log(typeof JSON);

const objectOne = {
  valueOne: 300,
  valueTwo: 600,
  valueThree: 900,
  function() {
    valueOne + valueTwo + valueThree;
  },
};

console.log(JSON.stringify(objectOne));
console.log(
  JSON.parse('{ "valueFour": 200, "valueFive": 400, "valueSix": 600 }'),
);

console.log(
  JSON.parse(
    '{ "valueNum": 200, "valueStr": "str", "valueBool": false, "valueArr": [] }',
  ),
);
