// .value to get the data from the form
let registerFormData = document.getElementById("registerForm");

// listen the click on the sed button
registerFormData.addEventListener("submit", (e) => {
    // prevent page relaod
    e.preventDefault();
    
    // .value to get the data from the input username
    let userFake = document.getElementById("user").value;
    // .value to get the data from the input loginFake
    let passwordFake = document.getElementById("pass").value;
    console.log(userFake);
    console.log(passwordFake);
    if (userFake == "" && passwordFake == "") {
        localStorage.removeItem.users
        alert("Incorrect credentials")
    }
    else {
        // creating a new object array
        let users = new Array();
    }

    // checking if the property already exists
    if (localStorage.hasOwnProperty("users")) {
        //Pull the properties values from localstorage
        //turn the jason string to a js object IF IT EXISTS
        users = JSON.parse(localStorage.getItem("users"));
    }

    // Add a new objecto in to the array
    users.push({ userFake, passwordFake });

    // Save to localsotage
    localStorage.setItem("users", JSON.stringify(users));
});
//incomplete exercise