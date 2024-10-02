

// Отримуємо дані про товари з JSON файлу
async function getProducts2() {
    let response = await fetch("store_db_pol.json");
    let products = await response.json();
    return products;
};

// Генеруємо HTML-код для карточки товару
function getCardHTML2(product) {
    // Створюємо JSON-строку з даними про товар і зберігаємо її в data-атрибуті
    let productData = JSON.stringify(product)

    return `
        <div class="my-card" style="">
            <img width="150px" height="150px" src="${product.image}">
            <h5 class="text-my-card">${product.title}</h5>
        
            <p class="price-card">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cash-stack" viewBox="0 0 16 16">
  <path d="M1 3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zm7 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4"/>
  <path d="M0 5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V7a2 2 0 0 1-2-2z"/>
</svg>
            ${product.price}
           </p>
            <button type="button" class="cart-btn" data-product='${productData}'>
            <svg class="bell" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-shopping-cart-plus"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 19a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" /><path d="M12.5 17h-6.5v-14h-2" /><path d="M6 5l14 1l-.86 6.017m-2.64 .983h-10.5" /><path d="M16 19h6" /><path d="M19 16v6" /></svg>
            Kupić</button>
        </div>
    `;
}

// Відображаємо товари на сторінці
getProducts2().then(function (products) {
    let productsList2 = document.querySelector('.products-list-2')
    if (productsList2) {
        products.forEach(function (product) {
            productsList2.innerHTML += getCardHTML2(product)
        })
    }

    // Отримуємо всі кнопки "Купити" на сторінці
    let buyButtons2 = document.querySelectorAll('.products-list-2 .cart-btn');
    // Навішуємо обробник подій на кожну кнопку "Купити"
    if (buyButtons2) {
        buyButtons2.forEach(function (button) {
            button.addEventListener('click', addToCart);
        });
    }
})


