/*
Para contar as vogais em cada string, você pode usar o método map para transformar cada string em um array de caracteres, 
e em seguida, usar o método reduce para contar o número de vogais em cada array de caracteres. Aqui está um exemplo:
*/

const nomes = ["Ana", "João", "Maria", "Pedro", "José"];

const vogais = ["a", "e", "i", "o", "u"];

const contagemVogais = nomes.map((nome) => {
	const caracteres = nome.toLowerCase().split("");
	const contagem = caracteres.reduce((acc, curr) => {
		if (vogais.includes(curr)) {
			return acc + 1;
		} else {
			return acc;
		}
	}, 0);
	return { nome, contagem };
});

console.log(contagemVogais);
// [{ nome: "Ana", contagem: 2 }, { nome: "João", contagem: 2 }, { nome: "Maria", contagem: 3 }, { nome: "Pedro", contagem: 2 }, { nome: "José", contagem: 2 }]

/*
Nesse exemplo, usamos map para criar um novo array com objetos contendo o nome e o número de vogais em cada nome. 
Em seguida, usamos split para transformar cada string em um array de caracteres, e reduce para contar o número de 
vogais em cada array de caracteres. O resultado é um array de objetos com o nome e o número de vogais em cada nome.
*/
