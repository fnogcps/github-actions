// bind #2

function funcOne(a, b) {
  return this * a * b;
}

console.log(funcOne.bind(3, 3)(3));
