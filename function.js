/* let copa2026 = ["brasil","franca","alemanha","italia","espanha"]
copa2026.push("argentina")
console.log(copa2026)
copa2026.unshift("campeche")
console.log(copa2026)
copa2026.splice(3,1,'equador')
console.log(copa2026) */
/* copa2026.pop() */
/* copa2026.splice(3,1) */
/* //! ESTOU CRIANDO UMA LISTA
let copa2026 = ["brasil", "franca", "alemanha", "italia", "espanha"];
//! ESTOU UTILIZANDO DOM PARA SETAR UMA TAG PELO ID
let ul = document.getElementById("list")
//! percorre lista js e add na lista html
//* o nome de cada item é time
copa2026.push("belgica")
copa2026.forEach((time) => {
//!crio um novo elemento chamado li (linha da lista)
  let li = document.createElement("li")
//!nomeio cada elemento html com os nomes dos times
  li.innerText = time.nome
//!adicionei na lista html cada elemento que eu criei
  ul.appendChild(li)
});
copa2026.push("belgica")
console.log(copa2026);
 */

/* const numeros = [1,2,3,4,5,6,7,8,9]
const dobro = numeros.map( (numero) => {
    return numero * 4
} )
console.log(dobro) */
/* const numeros = [1,2,3,4,5,6,7,8,9]

const menorQueCinco =  numeros.filter((numero)=>{
    return numero < 5
})
console.log(menorQueCinco) */
/* let aprovados = ["wallis","tales","william","glauton"]

let verdadeirosAprovados = aprovados.filter((aluno) => {
    return aluno !== 'wallis'
})
console.log(verdadeirosAprovados) */

/* const numeros = [1,2,3,4,5,6,7,8,9]

console.log( numeros.every((num)=>{
    return num < 40
}) ) */

/* num => console.log(num)

function numero (num) {
    console.log(num)
} */