const arrMfr = ["Mercedes", "Audi", "BMW"];
const arrMfr2 = ["Volvo", "Porshe", "Maserati"];
const arrMfr3 = ["Ford", "Nissan", "Fiat"];

function printArr(name, index) {
  console.log(`${index}. ${name}`);
}

arrMfr.forEach(printArr);

arrMfr2.forEach(function(name, index) {
  console.log(`${index}. ${name}`);
});

arrMfr3.forEach((name, index) => console.log(`${index}. ${name}`));
