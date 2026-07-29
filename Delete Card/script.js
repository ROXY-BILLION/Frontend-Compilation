const addBtn = document.getElementById("btn");
const deleteBtn = document.getElementById("btn1");
const studentList = document.getElementById("student-list");

// This variable will hold our student element
let student;

addBtn.addEventListener("click", function () {

    // Create the student
    student = document.createElement("li");

    // Give it text
    student.textContent = "Divine Gift";

    // Add it to the page
    studentList.appendChild(student);

});

deleteBtn.addEventListener("click", function () {

    // Remove the student
    student.remove();

});