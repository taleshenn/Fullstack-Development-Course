function loginFake() {
	// .value to get the data from the input username
	let userFake = document.querySelector("#user").value;
	// .value to call the function loginFake
	let passwordFake = document.querySelector("#pass").value;
	// event onclick to get the data from the input password

	if (userFake == "admin" && passwordFake == "admin") {
		addEventListener("submit", (event) => {
			event.preventDefault();
			alert(`Logged in as ${userFake} with the password ${passwordFake}`);
		});
	} else {
		alert("Incorrect credentials");
	}
}
