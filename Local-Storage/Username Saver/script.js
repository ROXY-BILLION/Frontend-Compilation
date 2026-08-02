const button = document.getElementById("save-btn");
const input = document.getElementById("username");
const welcome = document.getElementById("welcome");

button.addEventListener("click", function () {

    const username = input.value;

    localStorage.setItem("username", username);

    welcome.textContent = "Welcome " + username;

});

const savedUsername = localStorage.getItem("username");

if (savedUsername) {
    welcome.textContent = "Welcome " + savedUsername;
}
localStorage.clear();