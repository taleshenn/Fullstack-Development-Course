O método filter 
/* é utilizado para criar um novo array a partir de outro,
contendo somente os elementos que satisfazem uma determinada condição. 
Ele recebe uma função de callback como argumento, que é executada para 
cada elemento do array original, e retorna true ou false indicando 
se o elemento deve ou não ser mantido no novo array.*/

const numeros = [1, 2, 3, 4, 5];

const numerosPares = numeros.filter(function(numero) {
  return numero % 2 === 0;
});

console.log(numerosPares); // [2, 4]

/* No exemplo acima, criamos um novo array numerosPares a partir do array numeros, 
contendo somente os números pares. A função de callback passada para o método filter 
recebe cada número do array numeros, e verifica se o resto da divisão por 2 é igual a zero 
(ou seja, se é um número par). Se for, a função retorna true, indicando que o número deve ser 
mantido no novo array. Se não for, a função retorna false, indicando que o número deve ser descartado.
O resultado do código acima é [2, 4], que é o novo array contendo somente os números pares do array original.
*/

Uma coisa importante
/* para se ter em mente sobre o método filter() é que ele NÃO MODIFICA O ARRAY ORIGINAL.
 Em vez disso, ele retorna um novo array contendo apenas os elementos que atendem a uma determinada condição.*/

Outro ponto importante 
/* é que a função de callback passada para o método filter() deve retornar um valor booleano (true ou false). 
Se a função retornar true para um determinado elemento, esse elemento será incluído no novo array retornado pelo método filter(). 
Se a função retornar false, o elemento será excluído do novo array.*/

Por fim
/* como o método filter() NÃO REMOVE ELEMENTOS DO ARRAY ORIGINAL, se essa for a necessidade com base em uma determinada condição,
pode usar o método splice() ou outras técnicas de manipulação de arrays.
Segue abaixo outro exemplo, agora de como usar o método filter() para filtrar um array de números e retornar apenas os números maiores do que 5:
*/

const numeros = [2, 5, 8, 10, 3, 6];

const numerosMaioresQue5 = numeros.filter(function(numero) {
  return numero > 5;
});

console.log(numerosMaioresQue5); // Output: [8, 10, 6]

/* o método filter pode ser usado em muitas situações diferentes, 
incluindo uma lista de nomes de pessoas. 
Por exemplo, suponha que temos um array com vários nomes e queremos*/ FILTRAR /* apenas os 
nomes que começam com a letra "A". Podemos fazer isso usando o método filter, da seguinte forma:
*/
const nomes = ['ALICE', 'BRUNO', 'AMANDA', 'CARLOS', 'ANDRÉ', 'ANA'];

const nomesComA = nomes.filter((nome) => {
  return nome.startsWith('A');
});

console.log(nomesComA); // [ ALICE', 'AMANDA', 'ANDRÉ', 'ANA']

/*
Nesse exemplo acima, estamos usando a função startsWith() para verificar se o nome começa com a letra "A". 
A função de callback passada para o método filter retorna true se o nome começa com "A", e false caso contrário. 
O método filter cria um novo array contendo apenas os elementos que satisfazem essa condição, ou seja, 
apenas os nomes que começam com a letra "A".*/

PARA NÃO CONFUNDIR A INTENSÃO DE FILTRAR ITENS COM A VERIFICAÇAO DA EXISTÊNCIA DE UM ÍTEM, veja o próximo exemplo

/*
Nesse exemplo abaixo , a função filter() é usada para filtrar apenas os elementos do array que contêm a letra "A". 
O método includes() verifica se a string contém a letra "A" e retorna verdadeiro ou falso.
*/

const nomes = ['ALICE', 'BRUNO', 'AMANDA', 'CARLOS', 'ANDRÉ', 'ANA'];

const nomesComA = nomes.filter((nome) => {
    return nome.includes('A');
  });
  
  console.log(nomesComA); // ['ALICE', 'AMANDA', 'CARLOS', 'ANDRÉ', 'ANA']

QUE DIFERENÇA FEZ USAR includes E startWith NOS DOIS EXEMPLOS?

//A principal diferença entre os métodos includes e startsWith é que o método 
includes verifica se uma string é encontrada em qualquer posição da outra string, 
//enquanto o método 
startsWith verifica se uma string é encontrada apenas no início da outra string.

/* No exemplo dado, o método startsWith é utilizado para verificar se o nome começa com a letra "A". 
Isso significa que nomes como "Ana" e "Amanda" serão incluídos no resultado, enquanto nomes como "Carlos" e "Bruno" não serão.*/

// Já no exemplo com o método 
includes, o objetivo é verificar se o nome contém a letra "A" em qualquer posição. 

/*Isso significa que todos os nomes que contêm a letra "A", incluindo nomes como "Carlos" e "Bruno", serão incluídos no resultado.
//Em resumo, a escolha do método a ser utilizado dependerá do objetivo específico da filtragem que se deseja realizar.*/

NOS DOIS EXEMPLOS O MÉTODO filter FOI ESSENCIAL PARA O RESULTADO?

// Sim, o filter() permite FILTRAR os elementos de um array com base em uma determinada condição, 
retornando um novo array 
//contendo apenas os elementos que satisfazem essa condição. 
// Nos dois exemplos o filter() foi usado para filtrar os nomes do array "nomes" que COMEÇAM com a letra "A" ou que CONTÉM a letra "A", 
// resultando em um novo array contendo apenas esses nomes.
// NOTE QUE OS RESULTADOS SÃO DIFERENTES NOS DOIS EXEMPLOS ACIMA

OUTRO MÉTODO SERIA MAIS EFICIENTE QUE filter NESSES CASOS?

/* No caso dos exemplos que usamos, o método filter é uma boa escolha porque ele permite filtrar um array 
com base em uma determinada condição, retornando um novo array com os elementos que atendem a essa condição. 
Em outras palavras, ele nos ajuda a obter um subconjunto do array original, contendo apenas os elementos que queremos.

Existem outros métodos de manipulação de arrays no ES6, como */ map, reduce, some, every, find /* entre outros. 
Cada um desses métodos tem um propósito específico e é adequado para situações diferentes. */
EM RESUMO, /* a escolha do método mais adequado depende do que queremos fazer com o array. 
Para filtrar os elementos que atendem a uma determinada condição, o método filter é uma boa escolha. 
Para transformar os elementos de um array, o método map é mais adequado. 
Para reduzir um array a um único valor, o método reduce é uma boa opção.

*/