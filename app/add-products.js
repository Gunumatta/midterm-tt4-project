import './add-products.scss';

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("add-product-form");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const title = document.getElementById("product-title").value;
        const description = document.getElementById("product-description").value;
        const price = document.getElementById("product-price").value;
        const image = document.getElementById("product-image").value;

        const newProduct = {
            title,
            description,
            price: `$${price}`,
            image
        };

        console.log("New Product Added:", newProduct);
        alert("Product added successfully!");

        // Aqui você pode adicionar a lógica para salvar os dados na API
        form.reset();
    });
});