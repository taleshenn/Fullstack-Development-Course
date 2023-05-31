// Criar um novo elemento
const newElement = document.createElement('span');
{/* <span></span> */}

newElement.textContent = 'AQUI TEM UM TEXTO'
{/* <span>AQUI TEM UM TEXTO</span> */}

// Adicionar atributos ao novo elemento
newElement.setAttribute('id', 'welcome-text');
newElement.setAttribute('class', 'text-primary');
{/* <span id='welcome-text' class='text-primary'>AQUI TEM UM TEXTO</span> */}

// Adicionar o novo elemento ao DOM
const parentElement = document.getElementById('divPrincipal');
parentElement.appendChild(newElement);

// const button = document.getElementById('buy');
// button.textContent = 'Este produto não está disponível'

// const elBemVindo = document.getElementById('bemvindo')
// const nome = 'Yan';
// elBemVindo.textContent = `Bem vindo, ${nome}`