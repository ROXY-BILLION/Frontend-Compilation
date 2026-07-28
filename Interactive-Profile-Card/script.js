const profileImg = document.getElementById("profile-img");
const name = document.getElementById("name");
const name1 = document.getElementById("name1");
const card = document.querySelector(".card");


// Feature 1- Click the profile picture change the image
profileImg.addEventListener("click", function () {
    
    if (profileImg.src.includes("profile.jpg")) {
        profileImg.src = "images/add.jpg";
    } else {
        profileImg.src = "images/profile.jpg";
    }
})

// Feature 2- Double Click the mouse - Change the text color

// beginner practice
// name.addEventListener("dblclick", function () {
//     if (name.style.color === "blue") {
//         name.style.color = "black";
//     } else {
//         name.style.color = "blue";
//     }
// })
// name1.addEventListener("dblclick", function () {
//     if (name1.style.color === "blue") {
//         name1.style.color = "black";
//     } else {
//         name1.style.color = "blue";
//     }
// })

// PROFESSIONAL PRACTICE
name.addEventListener("dblclick", function () {
    name.classList.toggle("blue-text");
})
name1.addEventListener("dblclick", function () {
    name1.classList.toggle("blue");
})

// Feature 3- When the mouse enters the card, the card should grow slightly
card.addEventListener("mouseenter", function () {
    console.log("Mouse entered the card");
    // Beginner Version
    // card.style.transform = "scale(1.1)";

    // Pro Version
    card.classList.add("card-hover");
})

// Feature 4- When the mouse leaves the card, the card should return to normal
card.addEventListener("mouseleave", function () {
    console.log("Mouse left the card");
    // Beginner Version
    // card.style.transform = "scale(1)";

    // Pro Version
    card.classList.remove("card-hover");
})

// Feature 5- Right Click Card- Display a custom message
card.addEventListener("contextmenu", function (event) {
    console.log("Right click detected");
    event.preventDefault();
    alert("Welcome to X-technologies!");
})