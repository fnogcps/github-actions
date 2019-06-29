const ferrari = {
  carModel: 'F40',
  carSpeedLimit: 324,
};

const volvo = {
  carModel: 'B40',
  carSpeedLimit: 200,
};

console.log(ferrari.__proto__ === Object.prototype);
console.log(volvo.__proto__ === Object.prototype);
console.log(Object.prototype.__proto__);
