let cart_list2 = document.querySelector('.cart-items-list')
let cart_total2 = document.querySelector('.cart-total')
let orderBtn2 = document.querySelector("#orderBtn")
let orderSection2 = document.querySelector(".order")


function get_item2(item) {
    return `<div class = "cart-item">
        <h4 class="cart-item-title">${item.title}</h4>
        
        <div class="cart-item-quantity">Numer: 
        <input data-item="${item.title}" class="form-control quantity-input" type="number" name="quantity" min="1" value="${item.quantity}">
        </div>
        <div class="cart-item-price" data-price="${item.price}">${item.price * item.quantity} złotych</div>
        </div>`
}

function showCartList2() {
    cart_list2.innerHTML = ''
    for (let key in cart.items) { // проходимося по всіх ключах об'єкта cart.items
        cart_list2.innerHTML += get_item2(cart.items[key])
    }
    cart_total2.innerHTML = cart.calculateTotal()


}

showCartList2()

cart_list2.addEventListener('change', (event) => {
        let target = event.target 
        const itemTitle = target.getAttribute('data-item')
        const newQuantity = +target.value
        if (newQuantity > 0) {
            cart.updateQuantity(itemTitle, newQuantity)
            showCartList2() // Оновити список товарів у кошику
        }
    });

    //анімація появи кошика поступова поява кошика
    anime({
        targets: '.cart',
        opacity: 1, // Кінцева прозорість (1 - повністю видимий)
        duration: 500, // Тривалість анімації в мілісекундах
        easing: 'easeInOutQuad'
    })

orderBtn2.addEventListener("click", function (event) {
        orderBtn2.style.display = "none"
        orderSection2.style.display = "block"
        anime({
            targets: '.order',
            opacity: 1, // Кінцева прозорість (1 - повністю видимий)
            duration: 1000, // Тривалість анімації в мілісекундах
            easing: 'easeInOutQuad'
        })
})

