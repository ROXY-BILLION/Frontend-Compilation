const search = document.getElementById("search");
const products = document.querySelectorAll(".product");

search.addEventListener("input", function () {
    const searchText = search.value.toLowerCase();

    products.forEach(function (product) {
        const productName = product.textContent.toLowerCase();

        if (productName.includes(searchText)) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    })

})