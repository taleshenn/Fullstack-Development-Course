///////////////////////////////////////////////////
// Jason - Converter e verificar
console.log("Estudo de json");
///////////////////////////////////////////////////
//criei um json simples
let testeJson = '{"nome": "tales" , "sobrenome": "henn"}';
//confirmei que é uma string
console.log(typeof testeJson);

console.log(testeJson);

//converti em objeto
let objetificado = JSON.parse(testeJson);
// confirmei que é um objeto
console.log(typeof objetificado);
console.log(objetificado);
//verifiquei se é um array NÃO É
console.log(Array.isArray(objetificado));
//verifiquei novamente se é um array NÃO É
console.log(objetificado instanceof Array);
// mas consigo acessar um item como se fosse array.

// como estou acessando usando pelo NOME do índice então
// significa que estou acessando um OBJETO.
// Se eu usasse o NÚMERO da posição então seria de fato um ARRAY
console.log(objetificado.nome);
///////////////////////////////////////////////////
console.log("Estudo de localStorage");

///////////////////////////////////////////////////
// local Storage
///////////////////////////////////////////////////

// adiciona item no localStorage
// precisa dois arqumentos
//NÃO ESQUECER que é string. Usar aspas.
localStorage.setItem("nome", "tales");

// recupera dado do localStorage
// precisa salvar em uma variavel
//NÃO ESQUECER que é string. Usar aspas.
let dadoRecuperado = localStorage.getItem("nome");
console.log(dadoRecuperado);

// remove o dado do localStorage.
//NÃO ESQUECER que é string. Usar aspas.
localStorage.removeItem("nome");

///////////////////////////////////////////////////
// setTimeout
///////////////////////////////////////////////////

//determina o tempo de espera para rodar a função
setTimeout(() => {
	console.log("Estudo de setTimeout");
	console.log("Hello there!");
}, 2000 /*  é aqui que vai o tempo, antes de fechar os parenteses*/);

// acima foi executado a funcão de forma anonima
// para executar de forma declarada é possivel fazer isto atribuindo
// a funcao a uma variável
let esperaParaExecutar = () => {
	console.log("General Kenobi!");
	console.log("Os dois acima são resultado do setTimeout");
	console.log("As repetições abaixo são do setInterval");
};

let executar = setTimeout(esperaParaExecutar, 2000); // aqui fica mais simplicado para visualizar

console.log(executar);

///////////////////////////////////////////////////
// setInterval
///////////////////////////////////////////////////

// determina de quanto em quanto tempo a função volta a ser executada
// útil para fazer fetch de algum API que muda dados contantemente
setInterval(() => {
	console.log("Hello there!");
}, 1000 * 10 /*  é aqui que vai o tempo, antes de fechar os parenteses*/);

// declarando em variavel fica mais facil para interromper a funcao
let intervalo = setInterval(() => {
	console.log("General Kenobi!");
}, 1000 * 10);
console.log(intervalo);

// nesse caso para interromper pode ser usado em conjunto
// com setTimeout ou com um evento de clique
// abaixo só vai funcionar para o segundo exemplo
// que chama "General Kenobi!" pois ele foi declarado
//descomentar para ver
clearInterval(intervalo);

///////////////////////////////////////////////////
// Spread
///////////////////////////////////////////////////
