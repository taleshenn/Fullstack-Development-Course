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

OBSERVAÇÃO
/* Não vou incluir nesse momento o estudo sobre WeakSet e WeakMap mas segue uma breve leitura sobre essas estruturas.
O aprendizado sobre o WeakSet e o WeakMap pode ser importante para certas situações em que a gestão de memória é crítica. 
Essas estruturas de dados têm como característica principal a possibilidade de manter referências fracas (weak references) aos objetos,
o que significa que esses objetos podem ser coletados pelo garbage collector se não houver outras referências fortes a eles.

Embora o uso do WeakSet e do WeakMap possa ser menos comum em comparação com outras estruturas de dados, é importante entender
as suas características e como elas podem ser aplicadas em certos contextos. Alguns casos de uso comuns incluem o gerenciamento 
de caches de dados ou a associação de metadados a objetos sem aumentar o risco de vazamento de memória.

Em resumo, o aprendizado sobre o WeakSet e o WeakMap pode ser útil em situações específicas em que a gestão de memória é uma preocupação
e é importante garantir que objetos não sejam mantidos na memória desnecessariamente.
*/

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



SET
/* O Set é uma coleção não ordenada de valores únicos. 
Isso significa que ele permite armazenar valores únicos de qualquer tipo, 
incluindo valores primitivos e objetos. 
Os valores em um Set são exclusivos, ou seja, um valor só pode estar presente uma vez no Set.
Para criar um Set, você pode simplesmente usar o operador new junto com a palavra-chave Set, 
semelhante à criação de um objeto.*/

const meuSet = new Set();

/* Para adicionar um valor ao Set, usa-se o método add(). 
Por exemplo, para adicionar uma string "hello" e um número 42 ao Set, você pode fazer assim: */

meuSet.add("hello");
meuSet.add(42);

// Também é possível passar uma matriz de valores ao construtor do Set:

const meuSet = new Set([1, 2, 3, 4, 5]);

// Para verificar se um valor está presente no Set, usa-se o método has(). 
// Por exemplo, para verificar se o valor 42 está presente em meuSet, você pode fazer assim:

if (meuSet.has(42)) {
	console.log("O valor 42 está presente em meuSet.");
  }

// Para remover um valor do Set, usa-se o método delete().
// Por exemplo, para remover o valor "hello" de meuSet, você pode fazer assim:

meuSet.delete("hello");

// Você também pode usar o método clear() para remover todos os valores do Set:

meuSet.clear();

// Por fim, você pode iterar pelos valores em um Set usando o método forEach(). 
// Por exemplo, para imprimir todos os valores em meuSet, você pode fazer assim:

meuSet.forEach(valor => {
	console.log(valor);
  });

O SET É USADO /* para armazenar coleções de valores únicos. 
Isso significa que um valor pode ocorrer apenas uma vez em um Set, 
independentemente de como foi adicionado. 
O Set é útil em situações onde você precisa armazenar uma lista de valores únicos, 
sem se preocupar com a ordem em que eles são armazenados.

Por exemplo, você pode usar um Set para armazenar uma lista de IDs de usuários em um sistema, 
garantindo que cada ID apareça apenas uma vez.

Aqui está um exemplo de como usar um Set para armazenar uma lista de valores únicos:
*/

const meuSet = new Set();

meuSet.add(1);
meuSet.add(2);
meuSet.add(3);
meuSet.add(3); // este valor não será adicionado novamente, pois já existe no Set

console.log(meuSet); // Set { 1, 2, 3 }


O SET EM RESUMO 
/*
• Elementos no Set são únicos, sso significa que não há duplicatas permitidas.
• Valores NaN são considerados iguais entre si no Set. Isso significa que o Set só pode ter um único valor NaN.
• A ordem dos elementos não é garantida: Isso ocorre porque os elementos são armazenados internamente em uma tabela hash, 
o que significa que a ordem de inserção não é necessariamente a ordem em que os elementos são armazenados.
• O tamanho do Set pode ser encontrado usando a propriedade "size" assim como em um Map.
• Os valores em um Set podem ser iterados usando "for...of". Isso pode ser útil para realizar operações em todos os elementos do Set.
• O método "forEach" pode ser usado em um Set para executar uma determinada função em cada elemento do Set.
• Os elementos em um Set são comparados usando "SameValueZero" (mesmo valor zero): 
para determinar se dois valores são iguais dentro de um Set, é usada a mesma comparação usada no operador "===" (SameValueZero).
*/


MAP
/* O Map é uma estrutura de dados que permite armazenar pares chave-valor, onde as chaves e os valores podem ser de qualquer tipo. 
A principal diferença do Map em relação ao Object é que as chaves do Map podem ser de qualquer tipo, não apenas strings ou símbolos.
*/

// Para criar um Map vazio, podemos usar a sintaxe new Map().
const meuMap = new Map();

// Em seguida, podemos adicionar pares chave-valor usando o método set(chave, valor). 
meuMap.set('chave1', 'valor1');
meuMap.set(2, 'valor2');
meuMap.set({chave: 'chave3'}, 'valor3');

// Para recuperar o valor de uma chave, usamos o método get(chave).
console.log(meuMap.get('chave1')); // 'valor1'
console.log(meuMap.get(2)); // 'valor2'
console.log(meuMap.get({chave: 'chave3'})); // undefined

// Podemos verificar se uma chave existe usando o método has(chave)
console.log(meuMap.has('chave1')); // true
console.log(meuMap.has('chave2')); // false

// Podemos remover uma entrada do Map usando o método delete(chave)
meuMap.delete('chave1');

// Também podemos obter o número de entradas no Map usando a propriedade size.
console.log(meuMap.size); // 2

// O método clear remove todos os elementos do Map:
meuMap.set('chave1', 'valor1');
meuMap.clear(); // limpa o mapa

// O método forEach() é chamado diretamente no objeto Map e recebe uma função de callback como parâmetro:
const meuMap = new Map();
meuMap.set('chave1', 'valor1');
meuMap.set('chave2', 'valor2');

meuMap.forEach(function(valor, chave) {
  console.log(chave + ': ' + valor);
});
// Output:
// chave1: valor1
// chave2: valor2

// Ou ainda usando arrow functions:

const meuMap = new Map();
meuMap.set('chave1', 'valor1');
meuMap.set('chave2', 'valor2');

meuMap.forEach((valor, chave) => console.log(chave + ': ' + valor));
// Output:
// chave1: valor1
// chave2: valor2


O MAP é útil /*  para armazenar dados que precisam ser acessados de forma rápida e eficiente por meio de uma chave.
Algumas situações em que o MAP pode ser útil incluem:
• Armazenamento de informações de configuração do aplicativo, como parâmetros de conexão com o banco de dados, chaves de API, etc;
• Armazenamento de dados de usuários, como nomes, endereços de e-mail, senhas criptografadas, etc;
• Armazenamento de informações de localização, como endereços, coordenadas geográficas, etc;
• Armazenamento de dados temporários usados em operações específicas do aplicativo. */

A escolha entre o uso de Object e Map /*depende do que você precisa para a sua implementação. 
O objeto é uma estrutura de dados simples que permite armazenar pares de chave-valor, enquanto 
o Map permite que as chaves sejam de qualquer tipo, incluindo objetos e funções, e oferece alguns recursos extras, 
como a ordem de inserção e iteração de elementos.

Sendo assim, se você precisa armazenar pares de chave-valor simples e a ordem dos elementos não importa, 
o Object é uma escolha adequada. Por outro lado, se você precisa trabalhar com chaves de tipos diversos ou se 
a ordem de inserção e iteração dos elementos é importante, o Map é a opção mais indicada.
*/
