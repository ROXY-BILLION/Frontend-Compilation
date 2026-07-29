const lastKey = document.getElementById("key");
const status = document.getElementById("status");
   
document.addEventListener("keydown", function (event) {
    lastKey.textContent = event.key; 
    if (event.key === "Enter") {
        status.textContent = "Submitted";
    } else if (event.key === "Escape"){
        status.textContent = "Cancelled";
    } else if (event.key === " ") {
        status.textContent = "Jump!";
    } else if (event.key === "ArrowLeft") {
        status.textContent = "Moving Left";
    } else if (event.key === "ArrowRight") {
        status.textContent = "Moving Right";
    } else if(event.key === "ArrowDown") {
        status.textContent = "Moving Down";
    } else if(event.key === "ArrowUp") {
        status.textContent = "Moving Up";
    } else {
        status.textContent = "Waiting";
    }
})

