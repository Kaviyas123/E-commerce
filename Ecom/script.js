const product = [
    {
        id: 0,
        image: 'images/sandals.jpg',
        title: 'brown sandals',
        price: 399,
    },
    {
        id: 1,
        image: 'images/shoes.jpg',
        title: 'white shoes',
        price: 799,
    },
    {
        id: 2,
        image: 'images/shirts.jpg',
        title: 'white shirt',
        price: 459,
    },
    {
        id: 3,
        image: 'images/tshirt.jpg',
        title: 'white tshirt',
        price: 250,
    }
];

let cart = [];

function addtocart(id) {
    const selectedItem = product.find(item => item.id === id);
    if (selectedItem) {
        cart.push(selectedItem);
        updateCartCount();
        displayCart();
    }
}

function delElement(index) {
    cart.splice(index, 1);
    updateCartCount();
    displayCart();
    const total = cart.reduce((acc, item) => acc + item.price, 0);
    const totalElement = document.getElementById('Total');
    totalElement.textContent = `Rs.${total}.00`;
}

function updateCartCount() {
    const countElement = document.getElementById('count');
    countElement.textContent = cart.length;
}

function displayCart() {
    const cartItemElement = document.getElementById('cartitem');
    if (cart.length === 0) {
        cartItemElement.innerHTML = "Your Cart Is Empty";
    } else {
        let total = 0;
        const cartItems = cart.map((item, index) => {
            total += item.price;
            return `
                <div class='cart-item'>
                    <div class='row-img'>
                        <img class='rowing' src=${item.image}>
                    </div>
                    </div>
                    <div class='item-info'>
                        <p style='font-size:22px;'>${item.title}</p>
                        <h2 style='font-size: 35px;'>${item.price}.00</h2>
                    </div>
                    <i class='fa-solid fa-trash' onclick='delElement(${index})'></i>
                
            `;
        }).join('');
        const totalElement = document.getElementById('Total');
        totalElement.textContent = `Rs.${total}.00`;
        cartItemElement.innerHTML = cartItems;
    }
}

    
document.getElementById('root').innerHTML = product.map((item) => {
    return `
        <div class='box'>
            <div class='img-box'>
                <img class='images' src=${item.image}>
            </div>
            <div class='bottom'>
                <p>${item.title}</p>
                <h2>${item.price}.00</h2>
                <button onclick='addtocart(${item.id})'>Add to cart</button>
            </div>
        </div>
    `;
}).join('');

