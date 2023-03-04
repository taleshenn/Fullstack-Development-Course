O método find()/*  é um dos métodos de iteração de array que permite encontrar e retornar O PRIMEIRO ELEMENTO
que satisfaz uma determinada condição. Ele recebe uma função callback como argumento que deve ser uma função 
que retorna true um elemento é encontrado */ RETORNA o elemento e INTERROMPE a iteração.

const pessoas = [
    { nome: "João", idade: 20 }, // observe que o contéudo desse array é um conjunto de objetos. Entre {} existem CHAVE:VALOR
    { nome: "Maria", idade: 30 },
    { nome: "Pedro", idade: 25 },
    { nome: "Ana", idade: 35 }
  ];
  
  // Encontra a primeira pessoa com idade maior ou igual a 30
  const pessoa = pessoas.find(function(p) {
    return p.idade >= 30;
  });
  
  console.log(pessoa); // { nome: "Maria", idade: 30 }
  
  /*  Neste exemplo, find() é usado para encontrar a primeira pessoa no array pessoas que tem uma idade maior ou igual a 30. 
  A função callback passada para find() recebe um parâmetro "p" que representa cada elemento do array em cada iteração. 
  A função retorna true se a idade da pessoa for maior ou igual a 30, e false caso contrário o find() retorna 
  o primeiro elemento encontrado que atenda à condição, que neste caso é a pessoa com nome "Maria" e idade 30. 
  Observe que find() interrompe a iteração depois de encontrar o primeiro elemento que satisfaz a condição.
  
  O "p" aqui é usado por fazer sentido e refere-se a pessoa. Se fosse usuário usariamos "u" por exemplo.
  
  O método find() é útil quando você precisa encontrar um único elemento em um array que atenda a uma determinada condição, 
  e não quer iterar pelo array inteiro.
  */

  PARA FIXAR //Alguns pontos importantes sobre o método find() 

  /*
  * Ele retorna o primeiro elemento do array que atende à condição especificada na função de callback passada como parâmetro. 
  Caso nenhum elemento atenda à condição, é retornado UNDEFINED.
  
  * A função de callback passada como parâmetro deve ter como argumento o elemento atual do array 
  (ou seja, cada objeto no exemplo que usamos) e deve retornar um valor booleano indicando se o elemento atende à condição especificada. 
  
  * É possível especificar um segundo parâmetro opcional para o método find(), que representa o valor this dentro da função de callback.
  */

  const pessoas = [
    { nome: "João", idade: 20 },
    { nome: "Maria", idade: 30 },
    { nome: "Pedro", idade: 25 },
    { nome: "Ana", idade: 35 }
  ];
  
  // Encontra a primeira pessoa com idade maior ou igual a 30
  const pessoa = pessoas.find(function(elemento) {
    // Verifica se a idade do elemento é maior ou igual a 30
    return elemento.idade >= 30;
  });
  
  console.log(pessoa); // { nome: "Maria", idade: 30 }
  
  // Retorna a primeira pessoa com nome "Pedro"
  const pedro = pessoas.find(function(elemento) {
    // Verifica se o nome do elemento é "Pedro"
    return elemento.nome === "Pedro";
  });
  
  console.log(pedro); // { nome: "Pedro", idade: 25 }
  
  // Retorna undefined, já que não há ninguém com nome "José"
  const jose = pessoas.find(function(elemento) {
    // Verifica se o nome do elemento é "José"
    return elemento.nome === "José";
  });
  
  console.log(jose); // undefined
  
NOTE QUE /* neste exemplo, 
    1 - o método find() é usado para encontrar a primeira pessoa com idade maior ou igual a 30, 
    2 - a primeira pessoa com nome "Pedro" e 
    3 - tenta encontrar a primeira pessoa com nome "José" (que não existe no array). 
A função de callback em cada caso retorna true caso a condição especificada seja atendida e false caso contrário.
*/

PARA NÃO FICAR dúvida sobre FUNÇAO CALLBACK 

/* No exemplo que usamos havia duas funções:
A função find(), que é uma função de ORDEM SUPERIOR que aceita uma FUNÇAO DE RETORN0 DE CHAMADA (callback) como argumento. 
Nesse caso, a função CALLBACK é definida como uma função anônima. */

const pessoas = [
    { nome: "João", idade: 20 }, 
    { nome: "Maria", idade: 30 },
    { nome: "Pedro", idade: 25 },
    { nome: "Ana", idade: 35 }
  ];
  
  const pessoa = pessoas.find(/* ISTO AQUI */function(p) {
    return p.idade >= 30; /* ATÉ AQUI */
  });


// ISOLEI AQUI PARA FINS DE VISUALIZAR MELHOR 
// Essa função é executada em cada elemento do array pessoas até que seja encontrada
// a primeira pessoa cuja idade seja maior ou igual a 30. 
function(p) {
    return p.idade >= 30;
  }

REPETINDO PARA NÃO ESQUECER
// Uma função callback é uma função que é passada como argumento para outra função de ordem superior.

CONFUSO sobre o que é função de ordem superior?
// é uma função que aceita uma ou mais funções como argumentos e/ou retorna uma função como resultado.
// Ou seja, é uma função que manipula outras funções, tratando-as como valores.
/*
Algumas funções de ordem superior comuns em JavaScript incluem map, filter, reduce, find, forEach e sort. 
Cada uma dessas funções aceita uma função CALLBACK como argumento 
Cada uma dessas funçoes manipula um array ou objeto de maneira diferente.
Veja os outros aquivos nesse repositório em que explico cada uma dessas funções superiores mais detalhadamente.
*/
