const scope = 'Global';

function funcA() {
  const scope = 'Local';
  function funcB() {
    return scope;
  }
  return funcB();
}

console.log(funcA());
console.log(scope);
