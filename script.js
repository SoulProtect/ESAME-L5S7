

const url = "https://striveschool-api.herokuapp.com/api/product/";
const token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4Mjg4MmMwNTgzNTAwMTg1MjJkMDgiLCJpYXQiOjE3MDIzNzM1MDcsImV4cCI6MTcwMzU4MzEwN30.owMoPnlQwmPOQXpsJO25zKhbTyJMT0qN5I-XWf05DSY";
const headers = {
    "Authorization": token,
    "accept": "application/json",
    "Content-Type": "application/json"
};

document.addEventListener('DOMContentLoaded', () => {
    const cardsContainer = document.querySelector('.cards-container');

    fetch(url, {
        method: 'GET',
        headers: headers
    })
    .then(response => response.json())
    .then(productsData => {
        productsData.forEach(product => {
            const card = document.createElement('div');
            card.classList.add('card', 'm-3', 'p-3');
            card.innerHTML = `
                <img src="${product.imageUrl}" class="card-img-top" width="50px" alt="${product.name}">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">${product.description}</p>
                    <p class="card-text">${product.price} €</p>
                    <button class="btn btn-primary" onclick="redirectToProductPage('${product._id}')">Dettagli</button>
                </div>
            `;
            cardsContainer.appendChild(card);
        });
    })
    .catch(error => console.error('Si è verificato un errore:', error));
});

function redirectToProductPage(productId) {
    console.log('Clicked on product with ID:', productId);

    // Modifica 'dettagli.html' con l'URL della tua pagina di dettaglio del prodotto
    window.location.href = `dettagli.html?id=${productId}`;
}