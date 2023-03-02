// FUNÇÃO EXEMPLO
function somar(...meuArray) {
    let soma = 0;
    for (let i = 0; i < meuArray.length; i++) {
      soma += meuArray[i];
    }
    return soma;
  }
  
  console.log(somar(1, 2, 3)); // 6
  console.log(somar(4, 5, 6, 7)); // 22
  
/*
No exemplo acima, a função somar recebe um número indeterminado de argumentos usando o operador REST. 
Dentro da função, os argumentos são acessados como um array chamado meuArray. 
Em seguida, a função percorre o array com um loop 'FOR' para somar seus elementos.

Em resumo, o código define uma função chamada 'somar' que utiliza o operador rest para receber um número variável 
de argumentos. A função itera sobre os argumentos utilizando um loop 'FOR' e 
adiciona cada um deles a uma variável chamada 'soma'. Por fim, a função retorna o valor da soma.

*/

/* O operador REST no ES6 é representado por três pontos (...) 
e é utilizado para agrupar argumentos de uma função em um array.
Suponha que você tenha uma função que recebe um número indeterminado de argumentos
e você precisa acessar esses argumentos como um array. 
Usando o operador REST, você pode definir o parâmetro da função com o prefixo ... 
para indicar que ele deve agrupar os argumentos em um array.
*/

/* Nessa linha abaixo, a função somar() é declarada com o operador rest ... seguido do parâmetro meuArray.
Nesse caso o operador rest esta sendo usado para receber um número indefinido de argumentos 
e armazena em um array chamado meuArray.
*/
function somar(...meuArray) {
	let soma = 0; // Cria uma variável com nome 'soma'  e atribui a ela o valor zero.
/*
Na linha abaixo é iniciado um loop 'FOR' que vai percorrer cada
elemento do array meuArray, que foi criado anteriormente usando o operador rest.
*/
	for (let i = 0; i < meuArray.length; i++) {
/*
A variável "i" foi criada com o valor inicial de 0 porque ela será usada como índice 
para percorrer o array meuArray e acessar cada um de seus elementos. 
No início do loop, o valor de "i" é igual a 0 e, a cada iteração, 
ele é incrementado em 1 com o operador i++. Isso permite que a cada passo do loop, 
a variável "i" assuma um valor diferente e seja usada para acessar o elemento correspondente no array, 
utilizando a sintaxe meuArray[i]. Assim, o loop percorre todos os elementos do array, 
somando-os à variável soma e retornando o resultado no final.

A condição "i < meuArray.length" verifica se o valor da variável "i" é menor do que o comprimento do array. 
Isso garante que o loop só será executado enquanto houver elementos no array ainda não percorridos.

A instrução "i++" é executada após cada iteração, incrementando o valor da variável "i" em 1.
 Isso garante que o loop avance para o próximo elemento do array a cada iteração.
*/
    soma += meuArray[i]; 
/* Dentro do loop, a expressão meuArray[i] é usada para acessar o valor do elemento atual do array, 
que é adicionado à variável soma com o operador "+=". 
O operador "+=" é usado para adicionar o valor de cada elemento à variável soma.
Isso é repetido até que todos os elementos do array tenham sido percorridos.

NOTE: Nesse exemplo a expressão meuArray[i], acessa o valor do elemento que está na posição "i" do array meuArray.
Isso significa que o "i" refere-se ao índice desse valor. Índice (index) aqui é sinônimo de posição do elemento no array.
*/
	}
	// Por fim, a função retorna a soma total dos números passados como argumento.
	return soma;
}

// Chamadas da função 'somar' com diferentes números de argumentos.
console.log(somar(1, 2, 3)); // Exibe '6' no console.
console.log(somar(4, 5, 6, 7)); // Exibe '22' no console.

/* 
O operador REST também pode ser usado em outras situações, 
como na definição de parâmetros de uma função ou na cópia de arrays e objetos.
*/

//OS ARGUMENTOS podem ser passados para a função somar() de diversas formas, como por exemplo:

//01. Passando argumentos separados por vírgula
somar(1, 2, 3, 4);

// 02. Passando um array como argumento
let meuArray = [1, 2, 3, 4];
somar(...meuArray);

// 03. Combinando argumentos separados por vírgula com um array
somar(1, 2, ...numeros);

// 04. Usando o operador rest (...) para passar um número variável de argumentos
function somar(...numeros) {
    ...
 }
 somar(1);
 somar(1, 2, 3);
 somar(1, 2, 3, 4, 5);
 
/* 
É possível passar argumentos para a função somar() através do DOM. 
Para isso, você pode utilizar as propriedades do objeto event para obter os valores dos elementos HTML que contém os argumentos, 
e em seguida passá-los como parâmetros para a função.
Por exemplo, em um formulário HTML com dois campos de entrada para números e um botão para somá-los:

<form>
  <input type="number" id="numero1">
  <input type="number" id="numero2">
  <button id="botao-somar">Somar</button>
</form>

Você pode adicionar um ouvinte de eventos ao botão para chamar a função somar() com os valores dos campos de entrada:
*/
const numero1 = document.getElementById('numero1');
const numero2 = document.getElementById('numero2');
const botaoSomar = document.getElementById('botao-somar');

botaoSomar.addEventListener('click', function(event) {
  event.preventDefault(); // evita o envio do formulário ou recarregar a página automaticamente, algo que é padrão(defalut) no JS

  const resultado = somar(Number(numero1.value), Number(numero2.value));
  console.log(resultado);
});

/*
Neste exemplo, o evento de clique no botão é capturado pelo ouvinte, que chama a função somar() 
com os valores dos campos de entrada convertidos em números.
O resultado é exibido no console. Note que foi necessário converter os valores para número, usando Nunber()
pois o valor retornado pelo método value dos elementos de entrada é sempre uma string.
*/





