const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' }, 
    { nome: 'Joao', idade: 31, empresa: 'Rocketseat' }, 
    { nome: 'Pedro', idade: 30, empresa: 'Facebook' },
];

const newMap = usuarios.map(usuario => usuario.idade);


const newFilter = usuarios
    .filter(usuario => usuario.empresa === 'Rocketseat' && usuario.idade > 18);

const newFind = usuarios.find(usuario => usuario.empresa === 'Google');

const newMap2 = usuarios
    .map(usuario => ({...usuario, idade: usuario.idade * 2}))
    .filter(usuario => usuario.idade <= 50);

console.log(newMap);
console.log(newFind);
console.log(newFilter)
console.log(newMap2)