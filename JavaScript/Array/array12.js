const students = [
  {name: 'João', grade: 7.3, scholarship: false},
  {name: 'Maria', grade: 9.2, scholarship: true},
  {name: 'Pedro', grade: 9.8, scholarship: false},
  {name: 'Ana', grade: 8.7, scholarship: true},
];

const result = students.map(a => a.grade);
console.log(result);

console.log(students.every(s => s.scholarship));
console.log(students.map(s => s.scholarship).includes(true));
