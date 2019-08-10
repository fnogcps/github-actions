// Lexical scoping

{
  {
    let a = 1000;
    console.log(a);
  }
}

var a = 2000;
const c = 30;
let b = 20;

function example() {
  b = 30;
}

example();

console.log(a, b, c);
