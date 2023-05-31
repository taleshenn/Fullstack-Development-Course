
const formLogin = document.getElementById("formLogin")

formLogin.addEventListener('submit', processarLogin)

function processarLogin(event) {    
    event.preventDefault();
    console.log('processarLogin')
    console.log(event)
}
















// document.getElementById('meuForm').addEventListener('submit', (e) => {
//     console.log('login')
//     e.preventDefault()
//     console.log(e)
// })


// let teclas = 0

// function verificarTecla(e) {
//     console.log(e.target.value)
//     teclas += 1;
// }

// function fazerAlgo() {
//     alert('Enviado')
// }

// function funcaoQualquer(e) {
//     console.log(e.target.value)
// }

// function enviarFormulario(event) {
//     event.preventDefault(); // Evita o comportamento padrão de envio do formulário

//     // Capturando os dados digitados
//     var nome = document.getElementById("nome").value;
//     var email = document.getElementById("email").value;
//     var mensagem = document.getElementById("mensagem").value;

//     // Realize as ações desejadas com os dados capturados
//     console.log("Nome:", nome);
//     console.log("E-mail:", email);
//     console.log("Mensagem:", mensagem);

//     const usuario = {
//         nome,
//         email,
//         mensagem
//     }

//     // Limpe o formulário, se necessário
//     // document.getElementById("meuForm").reset();
// }

