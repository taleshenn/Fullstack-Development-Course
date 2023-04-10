// verifica se as credenciais já existem no localStorage
function checkCredentials() {
	const username = localStorage.getItem("username");
	const password = localStorage.getItem("password");

	if (username && password) {
		// redireciona para a página de logout
		window.location.href = "logout.html";
	}
}

// salva as credenciais no localStorage e redireciona para a página de logout
function saveCredentials(username, password) {
	localStorage.setItem("username", username);
	localStorage.setItem("password", password);

	const logoutButton = document.querySelector("#logoutButton");
	if (logoutButton) {
		logoutButton.addEventListener("click", logout);
	}

	window.location.href = "logout.html";
}

// função que é executada quando o formulário é submetido
function handleFormSubmit(event) {
	event.preventDefault();
	const username = document.querySelector("#user").value;
	const password = document.querySelector("#pass").value;

	// verifica se as credenciais estão corretas
	if (username === "admins" && password === "admins") {
		// salva as credenciais no localStorage
		saveCredentials(username, password);
	} else {
		alert("Usuário ou senha inválidos");
	}
}

// função para fazer logout, removendo as credenciais do localStorage
function logout() {
	localStorage.removeItem("username");
	localStorage.removeItem("password");
	window.location.href = "login.html";
}

// verifica se as credenciais já existem no localStorage ao carregar a página
window.addEventListener("load", checkCredentials);

// adiciona o evento de submit no formulário
const form = document.querySelector("#loginForm");
form.addEventListener("submit", handleFormSubmit);

// adiciona o evento de click no botão de logout
const logoutButton = document.querySelector("#logoutButton");
if (logoutButton) {
	logoutButton.addEventListener("click", logout);
}
