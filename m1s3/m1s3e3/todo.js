/* Faça uma lista de tarefas diárias (strings), e crie 4 funções diferentes.
01. Função que busca se a tarefa existe na lista.
02. Função que altera um item da lista.
03. Função que deleta um item da lista
04. Função que adiciona um item na lista */

let myTasks = ["Brew Coffee", "Check email", "To study", "Work"];
let task;

01
function lookForTasks(task) {
    // task = myTasks.find(function (e) {
    //     return e === task;
    // });
    task = myTasks.find((e)=>{
        return e === task;
    })
    if (task) {
        return "The task " + task + " exist.";
    } else {
        return "This task does not exist.";
    }
}
lookForTasks("Coffee");
console.log(lookForTasks());

//02
function changeTask(task) {
    myTasks.splice(3,1, "Play");
}
changeTask();
console.log(myTasks);

//03
function removeTasks(task) {
    myTasks.splice(2,1);
}
removeTasks();
console.log(myTasks);

//04
function addTasks(task) {
    myTasks.push(task);
}
addTasks("Sleep all day");
console.log(myTasks);