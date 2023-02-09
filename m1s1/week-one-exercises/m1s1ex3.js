//Início [M1S01] Ex 3 - [App SaveCollege] Alunos aprovados

// Imprima o nome do aluno e o valor aprovado ou reprovado em seguida utilizando operadores condicionais. 

// This code is over commented. This is for my own educational purpose.

let students = [
    {
        name: "Tales",
        heigth: 1.75,
        age: 47,
        gender: "male",
        classroom: "Trindade",
        mathGrade: 3
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

// getting the number of students on the array.
let numberOfStudents = students.length

// this line below I want to learn how to automate
// let totalGrades = students[0].mathGrade + students[1].mathGrade + students[2].mathGrade + students[3].mathGrade + students[4].mathGrade;
// let gradeAverage = totalGrades / numberOfStudents;
// console.log(`A média da turma foi ${gradeAverage}`)

let totalGrades = 0
students.forEach((studentGrade) =>{
    totalGrades = totalGrades + studentGrade.mathGrade 
    // REMENBERING: As I gave to the Iten a name "studentGrade", 
    // now I need to use this name to access the object and get the desired Item on it "studentGrade.mathGrade "
    console.log(totalGrades) //show each iteraction
 })
console.log(totalGrades) // show the final iteraction

let gradeAverage = totalGrades / numberOfStudents;
// Here I call the result of the forEach iteraction and divide it by the number of students on the array.
console.log(`A média da turma foi ${gradeAverage}`)

// REMINDER TO MY SELF
// if I have an Array called students is common sense to use student as an Iten.
// It will be a "not visible variable" in the code but will be important to make the iterations.
// Looking below in the first line: The forEach get int to the array and set a "Iten name" student, 
// then in the second line I can call an "Object Iten" named mathGrade.
// So, I am in the Array and because oh that I can navegate in the objects just using the "nameOfTheArray.nameOfTheIten"
students.forEach((student) =>{
    if (student.mathGrade > 6)
        console.log("O aluno " + student.name + " teve a média " + student.mathGrade + " e passou.")
        // this was a long way to write the code 
        else
        console.log(`O aluno ${student.name} teve a média ${student.mathGrade} e não passou.`)
        // this was a clean way to write the code
})