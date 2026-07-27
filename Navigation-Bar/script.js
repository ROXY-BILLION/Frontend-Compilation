const menu = document.getElementById("menu");
const menuBtn = document.getElementById("menu-btn");


// Beginner version
// menuBtn.addEventListener("click", function ()
// {
//     console.log("Menu btn clicked");
//     menu.classList.toggle("show");
//     if (menu.classList.contains("show")) {
//         menuBtn.classList.remove("fa-bars");
//         menuBtn.classList.add("fa-xmark");
//     } else {
//         menuBtn.classList.remove("fa-xmark");
//         menuBtn.classList.add("fa-bars");
//     }
// })

menuBtn.addEventListener("click", function () {
    menu.classList.toggle("show");
    menuBtn.classList.toggle("fa-bars");
    menuBtn.classList.toggle("fa-xmark");
})

