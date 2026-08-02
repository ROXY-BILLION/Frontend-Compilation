const container = document.getElementById("products");

const products = [
    {
        name: "Laptop",
        price: "$900"
    },
    {
        name: "Phone",
        price: "$600"
    },
    {
        name: "Mouse",
        price: "$30"
    },
    {
        name: "Mouse",
        price: "$30"
    },
];

products.forEach(function (product) {
    const card = document.createElement("div");
    card.classList.add("card");

    const title = document.createElement("h2");
    title.textContent = product.name;

    const price = document.createElement("p");
    price.textContent = product.price;

    card.appendChild(title);
    card.appendChild(price);

    container.appendChild(card);    
})