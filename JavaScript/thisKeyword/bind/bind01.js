// bind #1

function funcOne() {
  console.log(this.x);
  console.log(this.y);
}

function funcTwo() {
  return {x: 10, y: 20};
}

funcOne.bind(funcTwo())();
