const addBtn = document.getElementById("btn");
const studentList = document.getElementById("student-list");


addBtn.addEventListener("click", function () {
    const student = document.createElement("li");
    student.textContent = "Divine Gift";
    studentList.appendChild(student);
})