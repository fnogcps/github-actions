console.log(typeof String);
console.log(typeof Array);
console.log(typeof Object);

String.prototype.reverse = function() {
  return this.split('')
    .reverse()
    .join('');
};

console.log('Felipe Nogueira\n'.reverse());
