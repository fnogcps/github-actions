const fs = require('fs');

// Synchronous
const path = __dirname + '/example.json';
const data = fs.readFileSync(path, 'utf-8');
console.log(data);

// Asynchronous

fs.readFile(path, 'utf-8', (err, j) => {
  const v = JSON.parse(j);
  console.log(v.person.name);
});

fs.readdir(__dirname, (err, f) => {
  console.log(f);
});
