//RECOMENDO ler o outro estudo sobre REST.
//No final deste aqui tem um comparativo entre os dois operadores.
//Para facilitar o entendimento estou usando a mesma função.

function somar(...meuArray) {
	// declarando a função 'somar' com o operador Rest
	let soma = 0; // declarando a variável 'soma' com o valor inicial 0
	for (let i = 0; i < meuArray.length; i++) {
		// iniciando um loop com a variável 'i' começando em 0 e
		//percorrendo o array 'meuArray' com o comprimento da variável 'meuArray'
		soma += meuArray[i]; // adicionando o valor atual do array à variável 'soma'
	}
	return soma;
	// retornando o valor da variável 'soma'
}

console.log(somar(1, 2, 3));
// chamando a função 'somar' com os valores 1, 2, 3 passados como argumento e exibindo o resultado no console (6)
console.log(somar(4, 5, 6, 7));
// chamando a função 'somar' com os valores 4, 5, 6, 7 passados como argumento e exibindo o resultado no console (22)

/*
  Podemos usar o operador SPREAD para passar um array como argumento para a função somar(). 
  Veja o exemplo abaixo:
*/
function somar(...meuArray) {
	let soma = 0;
	for (let i = 0; i < meuArray.length; i++) {
		soma += meuArray[i];
	}
	return soma;
}

const array1 = [1, 2, 3];
const array2 = [4, 5, 6, 7];

console.log(somar(...array1)); // 6
console.log(somar(...array2)); // 22

/*
Neste exemplo, criamos dois arrays, "array1" e "array2", e usamos o operador spread "..." 
para passá-los como argumentos para a função somar(). 
Quando usamos o operador spread para passar um array como argumento, 
ele é desestruturado em seus elementos individuais, que são então passados para a função
como argumentos separados. Ou seja, o operador spread expande o array em seus elementos individuais.
*/

/*
Para usar o operador Spread na função somar(), podemos passar um array como argumento 
em vez de passar vários valores separados por vírgulas. 
Para isso, precisamos usar o operador Spread antes do nome do array:
*/
console.log(somar(...array2)); // 22
/*
Nesse caso, o operador Spread "..." é usado antes do nome do array array2, 
o que faz com que os elementos do array sejam "espalhados" como argumentos para a função somar.
Além disso, o operador Spread "..." também pode ser usado para criar um novo array com base em outro array:
*/
const array1 = [1, 2, 3];
const array2 = [4, 5, 6, 7];
const araysCombinados = [...array1, ...array2];

console.log(araysCombinados); // [1, 2, 3, 4, 5, 6,7]
/*
Nesse exemplo, o operador Spread "..." é usado para combinar os arrays array1 e array2 em um único array chamado arraysCombinados.
*/

/*
Em resumo, o operador REST é usado para agrupar argumentos em uma lista dentro de uma função, 
enquanto o operador SPREAD é usado para expandir um array ou objeto em partes individuais. 
Ambos são muito úteis para trabalhar com DADOS VARIÁVEIS em JavaScript.
*/

/*
O operador REST é usado para criar funções que aceitam um número indefinido de argumentos, 
que são agrupados em um array dentro da função. Ele é representado por três pontos (...) antes de um parâmetro de função
e pode ser usado para criar uma lista de argumentos variáveis, como em:
*/
function minhaFuncao(...meuArray) {
	// corpo da função
}
/*
Já o operador SPREAD é usado para expandir um array ou objeto em partes individuais. 
Ele é representado pelo mesmo símbolo de três pontos (...) e pode ser usado para criar uma CÓPIA RASA de um array ou objeto, 
para combinar dois arrays ou objetos em um só ou para passar os elementos de um array ou objeto como argumentos de uma função, como em:
*/
const array1 = [1, 2, 3];
const array2 = [4, 5, 6, 7];
const araysCombinados = [...array1, ...array2];

console.log(araysCombinados); // [1, 2, 3, 4, 5, 6,7]

/*
Esse exemplo abaixo é interessante para ver como o SPREAD se comporta.
Vamios usar os operadores rest e spread em uma mesma função que recebe como parâmetro um array de frutas:
*/

function misturarFrutas(...frutas) {
	// Operador Rest é usado para receber um número indefinido de argumentos e agrupá-los em um array chamado frutas

	let frutasMisturadas = [];

	for (let i = 0; i < frutas.length; i++) {
		frutasMisturadas = [...frutasMisturadas, ...frutas[i].split("")];
		// Operador Spread é usado para espalhar as letras de cada fruta do array frutas em um novo array chamado frutasMisturadas
	}

	return frutasMisturadas;
}

console.log(misturarFrutas("banana", "maçã", "laranja"));
// Output: ["b", "a", "n", "a", "n", "a", "m", "a", "ç", "ã", "l", "a", "r", "a", "n", "j", "a"]

/*
  Neste exemplo, o operador rest é usado para receber um número indefinido de argumentos e agrupá-los em um array chamado frutas. 
  Em seguida, o operador spread é usado para espalhar as letras de cada fruta do array frutas em um novo array chamado frutasMisturadas.
  */

/* OBSERVAÇÃO: Por que foi usado SPLIT?
 Se não fosse usado o split, a função não funcionaria corretamente, pois o operador "..." não é capaz de dividir uma string em seus caracteres individuais. 
 O método split() foi  utilizado para dividir uma string em um array de substrings com base em um separador especificado, que no caso foi a vírgula (",").
 Sem o split, o resultado seria uma array com apenas um elemento, que seria a string completa passada como argumento para a função.

Por exemplo, se chamássemos a função concatenaria da seguinte forma:
*/
console.log(concatenar("maçãbananaabacaxi"));
// O resultado seria a string "maçãbananaabacaxi", em vez de uma array com as palavras separadas por vírgula.
