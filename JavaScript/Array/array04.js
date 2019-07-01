// My custom Array.forEach

arrayOne = ['Felipe', 'Nogueira'];

myforEach = array => {
  for (index in array) {
    console.log(`${index} - ${array[index]}`);
  }
};

myforEach(arrayOne);

myforEach = array => {
  for (index in array) {
    console.log(`${index} - ${array[index]}`);
  }
};

// Custom forEach #2

Array.prototype.myforEach = function(callback) {
  for (i = 0; i < this.length; ++i) {
    callback(this[i], i, this);
  }
};

arrayOne.myforEach((value, index) => console.log(`${index} - ${value}`));
