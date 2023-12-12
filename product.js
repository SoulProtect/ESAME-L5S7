const url = "https://striveschool-api.herokuapp.com/api/product/"
const token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4Mjg4MmMwNTgzNTAwMTg1MjJkMDgiLCJpYXQiOjE3MDIzNzM1MDcsImV4cCI6MTcwMzU4MzEwN30.owMoPnlQwmPOQXpsJO25zKhbTyJMT0qN5I-XWf05DSY"
const headers = {
    "Authorization": token,
    "accept": "application/json",
    "Content-Type": "application/json"
}


// product.js
// Aggiungi questo al tuo codice product.js

    document.addEventListener('DOMContentLoaded', () => {
        const productDetailsContainer = document.getElementById('productDetailsContainer');
    
        // Ottieni l'ID del prodotto dalla query string nell'URL
        const urlParams = new URLSearchParams(location.search);
        const productId = urlParams.get('id');
    
        // Esegui una richiesta per ottenere i dettagli del prodotto dal tuo server/API
        fetch(`${url}/${productId}`, {
            method: 'GET',
            headers: headers
        })
        .then(response => response.json())
        .then(productData => {
            // Costruisci e visualizza le informazioni dettagliate del prodotto
            const productDetails = document.createElement('div');
            productDetails.innerHTML = `
            <h2>${productData.name}</h2>
            <img src="${productData.imageUrl}" alt="${productData.name}" style="max-width: 100%;">
            <p>${productData.description}</p>
            <p>Prezzo: ${productData.price} €</p>
                <!-- Aggiungi qui ulteriori dettagli del prodotto, se necessario -->
            `;
            productDetailsContainer.appendChild(productDetails);
        })
        .catch(error => console.error('Si è verificato un errore:', error));
    });
    

    