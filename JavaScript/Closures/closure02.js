// Lexical scoping

{
  {
    let a = 1000;
  }
}

var a = 2000;
const c = 30;
let b = 20;

console.log(a, b, c);
