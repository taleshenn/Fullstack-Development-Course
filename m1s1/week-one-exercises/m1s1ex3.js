//Início [M1S01] Ex 3 - [App SaveCollege] Alunos aprovados

// Imprima o nome do aluno e o valor aprovado ou reprovado em seguida utilizando operadores condicionais. 


let students = [
    {
        name: "Tales",
        heigth: 1.75,
        age: 47,
        gender: "male",
        classroom: "Trindade",
        mathGrade: 8
    },
    {
        name: "João",
        heigth: 1.65,
        age: 45,
        gender: "male",
        classroom: "Trindade",
        mathGrade: 7
    },
    {
        name: "Ana",
        heigth: 1.55,
        age: 30,
        gender: "female",
        classroom: "Trindade",
        mathGrade: 9
    },
    {
        name: "Carlos",
        heigth: 1.85,
        age: 47,
        gender: "male",
        classroom: "Trindade",
        mathGrade: 6
    },
    {
        name: "Paolo",
        heigth: 1.55,
        age: 40,
        gender: "male",
        classroom: "Trindade",
        mathGrade: 7
    },
];

let numberOfStudents = students.length
// essa linha abaixo quero aprender como simplificar
let totalGrades = students[0].mathGrade + students[1].mathGrade +students[2].mathGrade +students[3].mathGrade + students[4].mathGrade          
let gradeAverage = totalGrades / numberOfStudents
console.log(gradeAverage)