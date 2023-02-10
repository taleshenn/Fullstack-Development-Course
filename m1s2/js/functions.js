function signin() {
    let username = document.getElementById("username").value
    let password = document.getElementById("password").value
    let login = document.getElementById("login")
    
    if (username == "" && password == "") 
    {
        console.log(`Logado como ${username} e senha ${password}`)
    }
    login.addEventListener("click", function(signin)
