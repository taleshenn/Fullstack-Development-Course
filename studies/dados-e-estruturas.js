/* Ao estudar ES6, é importante começar pelos conceitos fundamentais da linguagem, 
como variáveis, tipos de dados, funções, loops e condicionais. 
Depois de dominar esses conceitos, você pode avançar para recursos mais avançados, 
como arrow functions, classes, destructuring, template literals, spread e rest operators, entre outros.*/

TIPOS DE DADOS NO ES6

• String // (string): uma sequência de caracteres.
• Number // (número): um valor numérico, que pode ser um inteiro ou um número de ponto flutuante (floater).
• Boolean // um valor verdadeiro ou falso.
• Null // um valor que representa a ausência de qualquer objeto ou valor.
• Undefined // um valor que representa a ausência de qualquer valor.
• Object // um valor que pode conter propriedades e métodos.
• Symbol // um valor primitivo que é único e imutável.


// ESTRUTURAS DE DADOS
São formas de armazenar e organizar dados em um programa JavaScript.
Permitem organizar ou agrupar os tipos dados acima e os manipular de maneira mais eficiente.

• Arrays //- uma coleção de valores que podem ser acessados por índice.
• Objetos //- uma coleção de pares de chave/valor.
• Mapas //- uma coleção de pares de chave/valor em que as chaves podem ser de qualquer tipo, incluindo objetos.
• Conjuntos // (Set) - uma coleção de valores únicos (não repetidos).
• WeakMap //- um objeto semelhante a um mapa, mas em que as chaves são fracamente referenciadas e podem ser removidas pelo coletor de lixo.
• WeakSet //- um objeto semelhante a um conjunto, mas em que os valores são fracamente referenciados e podem ser removidos pelo coletor de lixo. */

DETALHANDO AS ESTRUTURAS DE DADOS

• ARRAYS
//São um tipo de objetos que permitem armazenar vários valores em uma única variável.
//Para criar um array usa-se a sintaxe de colchetes [] e adicionar os valores separados por vírgula.
const meuArray = [1, 2, 3, 4];

//  Podemos acessar os valores de um array usando seu índice, que começa em 0.
const meuArray = [1, 2, 3, 4];
console.log(meuArray[0]); // 1

// • Métodos de manipulação do array
const meuArray = [1, 2, 3, 4];

push(); //- adiciona um novo valor ao final do array.
meuArray.push(5);
console.log(meuArray); // [1, 2, 3, 4, 5]

pop(); //- remove o último valor do array.
meuArray.pop();
console.log(meuArray); // [1, 2, 3, 4]

shift(); //- remove o primeiro valor do array.
meuArray.shift();
console.log(meuArray); // [2, 3, 4]

unshift(); //- adiciona um novo valor ao início do array.
meuArray.unshift(0);
console.log(meuArray); // [0, 1, 2, 3, 4]

slice(); //- retorna uma cópia de uma parte do array, especificada pelos índices de início e fim.
const novoArray = meuArray.slice(1, 3);
console.log(novoArray); // [1, 2]

splice(); //- adiciona ou remove elementos de um array, especificados pelos índices de início e fim.
meuArray.splice(2, 1);
console.log(meuArray); // [0, 1, 3, 4]

concat(); //- junta dois ou mais arrays.
const outroArray = [5, 6, 7];
const arrayConcatenado = meuArray.concat(outroArray);
console.log(arrayConcatenado); // [0, 1, 3, 4, 5, 6, 7]

sort(); //- classifica os valores do array em ordem alfabética ou numérica.
arrayConcatenado.sort();
console.log(arrayConcatenado); // [0, 1, 3, 4, 5, 6, 7]

reverse(); //- inverte a ordem dos valores do array.
arrayConcatenado.reverse();
console.log(arrayConcatenado); // [7, 6, 5, 4, 3, 1, 0]

forEach(); //- executa uma função para cada elemento do array.
arrayConcatenado.forEach((valor) => {
	console.log(valor * 2);
});

OBJECTS
// São estruturas de dados que permitem armazenar coleções de PARES de Chave-Valor
// com o uso de chaves de objeto {}, a sintaxe de chaves de objeto fica assim:
const pessoa = {
	nome: "João",
	idade: 30,
	profissao: "Desenvolvedor",
};
/* Nesse exemplo, criamos um objeto chamado pessoa com três propriedades: nome, idade e profissao. 
Cada propriedade (o que está entre {}) é definida como um par de chave-valor, onde a chave (Ex.: nome) é uma string 
e o valor (Ex.: "João") pode ser qualquer tipo de dado como os citados no início desse compilado. */

// É possivel acessar acessar as propriedades de um objeto usando dois tipo de sintaxe:
// PONTO
console.log(pessoa.nome); // "João"

// ou COLCHETES
console.log(pessoa["nome"]); // "João"

SAIBA ISSO
// É possível atribuir propriedades á um objeto usando nomes dinâmicos através de colchetes:
// Aqui temos duas variáveis:
const chave = "nome";
const valor = "João";

// Criando um objeto chamado pessoa com uma propriedade dinâmica,
// a chave usada aqui é o valor da variável chave, definida anteriormente,
// e o valor vem variável valor, também definida anteriormente
const pessoa = {
	[chave]: valor,
};
// isto equivale a escrever de forma literal:
const pessoa = {
	nome: "João",
};

// Imprimindo a propriedade "nome" do objeto pessoa,
// que foi criada dinamicamente com o valor "João"
console.log(pessoa.nome); // "João"

/////////////////////////////////////////////////////////////////////////////////////////////////////////
ISSO É IMPORTANTE. /* Vou repetir aqui para melhorar a fixação dessa informação.
Durante esse estudo eu precisei entender melhor a diferença entre sintaxe LITERAL e NÃO LITERAL.
A ATRIBUIÇÃO DE PROPRIEDADES EM OBJETOS pode ser feita de duas maneiras: LITERAL e NÃO LITERAL.*/
/////////////////////////////////////////////////////////////////////////////////////////////////////////

// A forma LITERAL de criar uma propriedade em um objeto é
// através da ATRIBUIÇÃO DIRETA para definir a chave e/ou valor:
const pessoa = {
	nome: "João",
};

// Já a forma NÃO LITERAL de criar uma propriedade em um objeto é
// através do USO DE VARIÁVEIS ou EXPRESSÕES para definir a chave e/ou valor:
const chave = "nome"; // Nesse exemplo, a chave é definida dinamicamente pela variável chave,
const valor = "João"; // O valor é definido pela variável valor.
const pessoa = { [chave]: valor }; // a sintaxe de colchetes [] indica que se trata de uma expressão.

/* Ambas as formas criam propriedades em objetos, 
mas a forma não literal permite a CRIAÇÃO DINÂMICA de propriedades, 
o que pode ser útil em situações em que as chaves e valores não são conhecidos antecipadamente 
ou podem variar em tempo de execução.
*/

// Outra forma de criar Objects é usando sintaxe de 
PROPRIEDADES ABREVIADAS
/////////////////////
const nome = "João";
const idade = 30;
const pessoa = { nome, idade };

console.log(pessoa.nome); // "João"
console.log(pessoa.idade); // 30

/* Nesse exemplo, criamos um objeto pessoa com duas propriedades abreviadas, nome e idade, 
cujos valores foram definidos a partir das variáveis nome e idade, respectivamente.
*/

///////////
IMPORTANTE
///////////
//Um objeto pode conter um MÉTODO diretamente nele:
const pessoa = {
	nome: "João",
	idade: 30,
	profissao: "Desenvolvedor",
	saudacao() {
		console.log(`Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`);
		// O método saudacao foi adicionado ao objeto pessoa e exibe uma mensagem
		// de saudação com o nome e a idade da pessoa.
	},
};

pessoa.saudacao(); // "Olá, meu nome é João e eu tenho 30 anos."


///////////
IMPORTANTE
///////////
// Embora os termos "MÉTODO" e "FUNÇÃO" sejam frequentemente usados como sinônimos, 
// na relaidade no Javascript eles têm significados ligeiramente diferentes.

MÉTODO 
// É UMA FUNÇÃO que é um pertencente a objeto. 
//É definido dentro do corpo do objeto e é acessado usando a notação de ponto ou colchetes.
ATENÇÃO // Se o nome do método contiver caracteres especiais ou espaços, 
// é preciso usar somente a notação de colchetes , do contrário retorna um erro.

const obj = {
    'meu método'() {
      console.log('Olá, mundo!');
    }
  };
    
  // Acesso usando notação de colchetes
  obj['meu método'](); // Olá, mundo!
  
  // Acesso usando notação de ponto
  obj.meu método(); // A sintaxe retornará um erro porque o nome do método contém um espaço ("meu método"), 


FUNÇÃO 
/* É um bloco de código NOMEADO e AUTÔNOMO que pode ser invocado por seu nome. 
As funções podem ser definidas dentro ou fora de objetos e são usadas para executar tarefas específicas ou retornar valores.
Ou seja, todo método é uma função mas nem todas as funções são métodos. */



ESSE COMPILADO CONTINUARÁ em breve com 

Set
Map
WeakSet
WeakMap