const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const textbox = document.getElementById("textarea");
const KeyDisplay = document.getElementById("KeyDisplay");
const contactForm = document.getElementById("contact-form");

// feature 1- Highlight the Input When Clicked
nameInput.addEventListener("focus", function () {
    nameInput.classList.add("focused");
})
emailInput.addEventListener("focus", function () {
    emailInput.style.border = "3px solid aqua";
})
textbox.addEventListener("focus", function () {
    textbox.style.border = "3px solid aqua";
})

// Feature 2- Blur effect
nameInput.addEventListener("blur", function () {
    nameInput.classList.remove("focused");
})
emailInput.addEventListener("blur", function () {
    emailInput.style.border = "1px solid black";
})
textbox.addEventListener("blur", function () {
    textbox.style.border = "1px solid black";
})

// Feature 3 — Detect Keyboard Presses (keydown)
nameInput.addEventListener("keydown", function (event) {
    KeyDisplay.textContent = "You Pressed" + event.key;
})

// Feature 4 — keyup
nameInput.addEventListener("keyup", function () {
    console.log("Key released");
});

// Feature 5 — submit
contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    alert("Message Sent Successfully!");

});