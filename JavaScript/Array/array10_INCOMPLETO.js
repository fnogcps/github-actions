const alunos = [
  {nome: 'João', nota: 7.3, bolsista: false},
  {nome: 'Maria', nota: 9.2, bolsista: true},
  {nome: 'Pedro', nota: 9.8, bolsista: false},
  {nome: 'Ana', nota: 8.7, bolsista: true},
];

const resultado = alunos.map(a => a.nota);
console.log(resultado);

// Todos os alunos são bolsistas?
console.log(alunos.every(s => s.bolsista));

// Algum aluno é bolsista?
console.log(alunos.map(s => s.bolsista).includes(true));
