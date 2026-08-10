const taskInput = document.getElementById("task-input");
const addBtn = document.getElementById("add-btn");
const taskLists = document.getElementById("task-list");
const clearBtn = document.getElementById("clear-btn");



// LOAD SAVED TASKS//

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];



// ADD TASK// 

addBtn.addEventListener("click", function () {

    const input = taskInput.value.trim();

    if (input === "") {
        return;
    }

    // If this is the first task,
    // remove the empty message
    if (tasks.length === 0) {
        taskLists.textContent = "";
    }

    // Add task to array
    tasks.push(input);

    // Save array
    saveTasks();

    // Display task
    createTask(input);

    // Clear input
    taskInput.value = "";
});



// CLEAR ALL//

clearBtn.addEventListener("click", function () {

    tasks = [];

    localStorage.removeItem("tasks");

    taskLists.textContent = "No tasks yet.";
});


// CREATE TASK//

function createTask(task) {

    const inputValue = document.createElement("li");

    const taskText = document.createElement("span");
    taskText.textContent = task;


    // Complete task
    taskText.addEventListener("click", function () {

        taskText.classList.toggle("completed");

    });


    // Delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";


    deleteBtn.addEventListener("click", function (event) {

        event.stopPropagation();

        // Find task in array
        const taskIndex = tasks.indexOf(task);

        // Remove task from array
        if (taskIndex !== -1) {
            tasks.splice(taskIndex, 1);
        }

        // Update LocalStorage
        saveTasks();

        // Remove task from page
        inputValue.remove();

        // Check for empty state
        if (tasks.length === 0) {
            taskLists.textContent = "No tasks yet.";
        }

    });


    inputValue.appendChild(taskText);
    inputValue.appendChild(deleteBtn);

    taskLists.appendChild(inputValue);
}



// SAVE TASKS//

function saveTasks() {

    localStorage.setItem(
        "tasks",
        JSON.stringify(tasks)
    );

}



// LOAD TASKS//

tasks.forEach(function (task) {

    createTask(task);

});



// EMPTY STATE// 

if (tasks.length === 0) {

    taskLists.textContent = "No tasks yet.";

}