const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const students = [
    { id: 1, name: "rajesh" },
    { id: 2, name: "rahul" },
    { id: 3, name: "sruthi" }
];

rl.question("Enter student id: ", function(id) {

    let student = students.find(s => s.id == id);

    if (student) {
        console.log("Student Name: " + student.name);
    } else {
        console.log("Student not found");
    }

    rl.close();
});