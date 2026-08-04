const input = document.getElementById("note-input");
const addBtn = document.getElementById("add-btn");
const noteList = document.getElementById("note-list");



let notes = JSON.parse(localStorage.getItem("notes")) || [];

notes.forEach(function (note) {
    const list = document.createElement("li");

    list.textContent = note;

    const button = document.createElement("button");

    button.textContent = "Delete";

    button.addEventListener("click", function () {
      notes = notes.filter(function(item){

      return item !== note;

      });
      localStorage.setItem("notes", JSON.stringify(notes));

      list.remove();
    })

    list.appendChild(button);

    noteList.appendChild(list);
})

addBtn.addEventListener("click", function () {

    const note = input.value;

    notes.push(note);

    localStorage.setItem("notes", JSON.stringify(notes));

    const list = document.createElement("li");

    const button = document.createElement("button");

    list.textContent = note;

    button.textContent = "Delete";

    button.addEventListener("click", function () {
        notes = notes.filter(function(item){

        return item !== note;

        });
        localStorage.setItem("notes", JSON.stringify(notes));

        list.remove();
    });

    list.appendChild(button);

    noteList.appendChild(list);

    input.value = "";

});




    
