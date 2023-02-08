let addStudent = {
    name: {
        prompt: "Enter student name",
        fallback: "First name",
        type: "string"
    },
    grade: {
        prompt: "Enter the student grade",
        fallback: "type only numbers",
        type: "number"
    },
    prompter: function (obj) {
        return prompt(obj.prompt,obj.fallback);
    }
};
let studentsData = [];
let students;
let addStudentData = function() {
    while (confirm("Do you want add a new student grade?")) {
        students = {};
        for (let x in addStudent) {
            if (typeof addStudent[x] !== 'function') {
                students[x] = addStudent.prompter(addStudent[x]);
            }
        }
        studentsData[studentsData.length] = students;
    }
   //    console.log("Bye.");
};
addStudentData();
console.log(studentsData);

// This solution above isnt mine. I got the idea from this website https://www.codecademy.com/forum_questions/520ac81bf10c6030ad000e07
// I adapted the code to fit the idea I had in my head but I didn't have the basis to create it.

let numberOfStudents = studentsData.length
console.log(numberOfStudents);

//I need to learn how to get the all the grades automatically
let totalGrades = Number (studentsData[0].grade) + Number (studentsData[1].grade)
console.log(totalGrades);

let gradeAverage = totalGrades / numberOfStudents;
console.log(alert("The average students grade is " + gradeAverage))

