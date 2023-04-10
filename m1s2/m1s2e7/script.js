// Referência ao formulário HTML e a área onde a tabela será exibida
const form = document.querySelector("form");
const msgArea = document.querySelector("#msg-area");

form.addEventListener("submit", (e) => {
	e.preventDefault(); // Evite que o formulário seja enviado e a página seja recarregada

	// Obtem o valor inserido e converte o em um número decimal
	const cash = parseFloat(
		document.querySelector("#cash").value.replace(/\,/g, ".")
	);

	// Cria uma string com a tabela de 50 linhas com base no valor inserido pelo usuário
	let tableHtml = "<table>";
	for (let i = 1; i <= 50; i++) {
		const rowTotal = (i * cash).toFixed(2);
		tableHtml += `<tr><td>${i}</td><td>R$ ${rowTotal}</td></tr>`;
	}
	tableHtml += "</table>";

	// Adiciona a string HTML da tabela à área de mensagem na página
	msgArea.innerHTML = tableHtml;
});

// Converte um valor monetário com vírgula para um número decimal com ponto
function convertToFloat(money) {
	return parseFloat(money.replace(/\,/g, "."));
}
