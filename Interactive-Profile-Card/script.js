const profileImg = document.getElementById("profile-img");
const name = document.getElementById("name");
const name1 = document.getElementById("name1");

profileImg.addEventListener("click", function () {
    
    if (profileImg.src.includes("profile.jpg")) {
        profileImg.src = "images/add.jpg";
    } else {
        profileImg.src = "images/profile.jpg";
    }
})

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