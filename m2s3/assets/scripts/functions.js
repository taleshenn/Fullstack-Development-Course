document.getElementById("loginForm").addEventListener("submit", login);
function login(event) {
	event.preventDefault();
	let email = document.getElementById("email").value;
	let senha = document.getElementById("senha").value;
	console.log("email:", email);
	console.log("senha:", senha);
}
