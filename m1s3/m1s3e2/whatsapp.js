// captures the visitor's number at the prompt
let phoneNumber = prompt("Type your WhatsApp number.");
// captures the visitor's message at the prompt
let message = prompt("Type your message.");
// calls the whatsApp api and inserts the captured data
let apiCall = `api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;
// print the result to the alert screen
alert(apiCall)
// print the result to the console
console.log(apiCall)