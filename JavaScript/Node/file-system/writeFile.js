const fs = require('fs');
const personOne = {
  name: 'William',
  age: 34,
};

fs.writeFile(__dirname + '/personOne.json', JSON.stringify(personOne), err => {
  console.log(err || 'File created!');
});
