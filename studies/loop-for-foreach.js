//LOOP FOR E FOREACH

/*
O loop FOR é uma ESTRUTURA DE CONTROLE DE FLUXO que permite a 
execução repetida de um bloco de código ENQUANTO uma determinada CONDIÇÃO é VERDADEIRA. 
O FOR é bastante utilizado em situações em que se tem um conjunto de dados a ser percorrido, como é o caso de um array.

A sintaxe do loop FOR é a seguinte:
*/
for (inicialização; condição; expressão final) {
    // bloco de código a ser executado
  }
 /*
A INICIALIZAÇÃO é executada apenas uma vez no início do loop e é utilizada para declarar e inicializar uma variável de controle do loop.
A CONDIÇÃO é verificada a cada iteração do loop. Se ela for verdadeira, o bloco de código dentro do loop é executado. Se for falsa, o loop é encerrado.
A EXPRESSÃO final é executada após cada iteração do loop e é utilizada para atualizar a variável de controle do loop.
 */ 

// Define a função somar com o operador REST para receber um número indeterminado de argumentos
function somar(...meuArray) {
    // Inicializa a variável soma com o valor zero
    let soma = 0;
    
    for (let i = 0; i < meuArray.length; i++) {
        /* Na linha acima é iniciado um loop 'FOR' que vai percorrer cada elemento 
        do array meuArray, que foi criado anteriormente usando o operador rest.*/
      soma += meuArray[i];
      /* Dentro do loop, a expressão meuArray[i] é usada para acessar o valor do elemento 
      atual do array, que é adicionado à variável soma com o operador "+=". 
      Isso é repetido até que todos os elementos do array tenham sido percorridos.
      O operador "+=" é usado para adicionar o valor de cada elemento à variável soma.
      Isso significa que o "i" refere-se ao índice desse valor. Índice (index) aqui é sinônimo de posição do elemento no array.
      NOTE: Nesse exemplo a expressão meuArray[i], acessa o valor do elemento que está na posição "i" do array meuArray.*/  
    }
    // Retorna o valor final da variável soma
    return soma;
  }
  
  // Chama a função somar com dois diferentes conjuntos de argumentos e exibe o resultado no console
  console.log(somar(1, 2, 3)); // 6
  console.log(somar(4, 5, 6, 7)); // 22

  /* Qual a diferença entre FOR e FOREACH 
  
  O for é uma estrutura de loop tradicional que já existe desde a primeira versão do JavaScript 
  e permite iterar sobre um array usando um contador. Ele é uma estrutura de controle mais flexível 
  e pode ser usado para iterar sobre qualquer tipo de objeto, desde que seja possível acessar seus 
  elementos por índices numéricos. No entanto, o for é considerado menos legível e mais suscetível 
  a erros de programação do que outras estruturas mais modernas, como o forEach.
  
  Já o forEach é um método específico para arrays introduzido no ES5 e que se tornou ainda mais 
  popular no ES6. Ele é uma função de ordem superior que recebe uma função de callback como argumento 
  e executa essa função para cada elemento do array. A função de callback é executada com três 
  argumentos: o valor do elemento, o índice do elemento e o próprio array. 
  O forEach é mais fácil de usar e mais legível do que o for, e é especialmente útil quando se 
  trata de executar uma tarefa para cada elemento de um array, como imprimir ou atualizar seus valores. */
  
  // A sintaxe do loop forEach é a seguinte:
  array.forEach(elemento => {
    // código a ser executado para cada elemento do array
  });
  /* Onde array é o array que se deseja iterar e elemento é cada elemento do array, 
  que pode ser utilizado na função de callback que será executada para cada elemento. 
  A função de callback é definida como uma arrow function (função flecha) 
  que recebe como parâmetro cada elemento do array. 
  É possível utilizar outros parâmetros opcionais, como o índice e o próprio array, 
  que podem ser acessados dentro da função de callback.
  */

/* É possível refatorar a função somar utilizando o método forEach ao invés de for.
Veja abaixo como ficaria a função refatorada:
*/
  function somar(...meuArray) {
    let soma = 0;
    meuArray.forEach(numero => {
      soma += numero;
    });
    return soma;
  }
  
  console.log(somar(1, 2, 3)); // 6
  console.log(somar(4, 5, 6, 7)); // 22
  
/*A vantagem de utilizar o método forEach é que o código fica mais conciso e legível, 
sem precisar utilizar a variável de controle i e sem precisar acessar os elementos do array através de seu índice.
O método forEach itera sobre cada elemento do array e executa uma função callback para cada um deles. 
Neste exemplo acima, a função callback recebe um parâmetro numero, que é o valor do elemento atual do array, 
e adiciona esse valor à variável soma. No final, a função retorna o valor da soma total dos elementos do array.
*/


  function somar(...meuArray) {
    let soma = 0;
    // loop forEach utilizado para percorrer cada elemento do array
    meuArray.forEach(numero => {
      soma += numero;
    });
    /* No exemplo acima, a função callback é declarada como uma arrow function numero => { soma += numero } 
    Dentro da função callback, é feita a soma do valor atual da variável soma com o valor do elemento do array sendo percorrido
    que é retornado no final da execução do loop. */
    return soma;
    // retorna a soma dos elementos
  }
  
  // chama a função somar passando os argumentos 1, 2 e 3 e imprime o resultado no console
  console.log(somar(1, 2, 3)); // 6
  
  // chama a função somar passando os argumentos 4, 5, 6 e 7 e imprime o resultado no console
  console.log(somar(4, 5, 6, 7)); // 22
  