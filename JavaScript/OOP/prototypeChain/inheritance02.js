// Prototype chain
Object.prototype.valueZero = 'Z';

const objectOne = {valueOne: 'A'};
const objectTwo = {__proto__: objectOne, valueTwo: 'B'};
const objectThree = {__proto__: objectTwo, valueThree: 'C'};

console.log(`objectThree.valueZero: ${objectThree.valueZero}`);
console.log(`objectThree.valueOne: ${objectThree.valueOne}`);
console.log(`objectThree.valueTwo: ${objectThree.valueTwo}`);

const car = {
  carSpeedCurrent: 0,
  carSpeedLimit: 200,

  accMore(d) {
    if (this.carSpeedCurrent + d <= this.carSpeedLimit) {
      this.carSpeedCurrent += d;
    } else {
      this.carSpeedCurrent = this.carSpeedLimit;
    }
  },

  status() {
    return `
    Car model: ${this.carModel}
    Speed current: ${this.carSpeedCurrent} km/h
    Speed limit: ${this.carSpeedLimit} km/h
    `;
  },
};

const ferrari = {
  carModel: 'F40',
  // Shadowing
  carSpeedLimit: 324,
};

const volvo = {
  carModel: 'V40',
};

Object.setPrototypeOf(ferrari, car);
Object.setPrototypeOf(volvo, car);

console.log(ferrari);
console.log(volvo);

volvo.accMore(100);
console.log(volvo.status());

ferrari.accMore(300);
console.log(ferrari.status());
