/* Crie um perfil em HTML/CSS e faça com que ele seja populado com informações obtidas da API do seu github.
Você pode mudar o final do endpoint com seu usuário para obter suas informações.
https://api.github.com/users/DaniSimoni */

async function search() {
	let dataAddress = await fetch("https://api.github.com/users/taleshenn");
	let dataRecovered = await dataAddress.json();
	document.getElementById("avatar_url").src = dataRecovered?.avatar_url;
	document.getElementById("name").innerHTML = dataRecovered?.name;
	document.getElementById("bio").innerHTML = dataRecovered?.bio;
	document.getElementById("html_url").innerHTML = dataRecovered?.html_url;
	console.log(dataRecovered.avatar_url.value);
	console.log(dataRecovered);
}
search();
