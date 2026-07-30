const menu = document.getElementById("menu");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

let current = menu.firstElementChild;

console.log(menu.firstElementChild);


nextBtn.addEventListener("click", function () {
    if (current.nextElementSibling) {
    current.classList.remove("active");
    current = current.nextElementSibling;
    current.classList.add("active");
}
})

prevBtn.addEventListener("click", function () {
if (current.previousElementSibling) {
    current.classList.remove("active");
    current = current.previousElementSibling;
    current.classList.add("active");
}
})