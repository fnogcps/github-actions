// Array.forEach

const arrayOne = ['A', 'B', 'C', 'D'];
arrayOne.forEach(function(l, i) {
  console.log(`${++i} - ${l}`);
});

const showArray = (l, i) => console.log(`${++i} - ${l}`);
arrayOne.forEach(showArray);
