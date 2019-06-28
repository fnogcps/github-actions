const values = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0];
console.log('Less than 7 ➞', values.filter(i => i <= 7));
console.log(
  'Greater than 7 ➞',
  values.filter(function(i) {
    return i >= 7;
  }),
);
