function loginFake() {

    // .value to get the data from the input username
    let userFake = document.getElementById("user").value;
    // .value to call the function loginFake
    let passwordFake = document.getElementById("pass").value;
    // event onclick to get the data from the input password 

    if (userFake == "admin" && passwordFake == "admin") {
        alert(`Logged in as ${userFake} with the password ${passwordFake}`)
    }
    else {
        alert("Incorrect credentials")
    }

}