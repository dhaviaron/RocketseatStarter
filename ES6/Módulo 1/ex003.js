const arr = [1, 2, 3, 4, 5].map(ar => ar + 10);

const usuario = { nome: 'Diego', idade: 23 };
const mostraIdade = usuario => usuario.idade;

const nome = "Diego";
const idade = 23;
const mostraUsuario = (nome = 'Diego', idade = 18) => ({
    nome,
    idade
});

const promise = () => new Promise((resolve, reject) => resolve());