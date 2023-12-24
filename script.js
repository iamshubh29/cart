


// let cartIcon = document.querySelector('#cart-icon');
// let cart = document.querySelector('.cart');
// let closeCart = document.querySelector('#close-cart');

// // open cart
// cartIcon.onclick = () => {
//     cart.classList.add("active");
// };

// // close cart
// closeCart.onclick = () => {
//     cart.classList.remove("active");
// };

// // cart working js
// if (document.readyState == 'loading') {
//     document.addEventListener("DOMContentLoaded", ready);
// } else {
//     ready();
// }


// function removeCartItem(event) {
//     var buttonClicked = event.target;
//     var cartItem = buttonClicked.closest('.cart-box');

//     if (cartItem) {
//         cartItem.remove();
//         updateTotal(); // Update total after removing an item
//     } else {
//         console.error("Parent cart item not found or not within cart-content.");
//     }
//     updateTotal();
// }
// function quantityChanged(){
//     var input = event.target;
//     if (isNaN(input.value )|| input.value<=0) {
//         input.value=1 ;
//     }
    
//    updateTotal();
// }

// // Call the ready function when the DOM is loaded
// function ready() {
//     var removeCartButtons = document.getElementsByClassName('cart-remove');
//     for (var i = 0; i < removeCartButtons.length; i++) {
//         var button = removeCartButtons[i];
//         button.addEventListener('click', removeCartItem);
//     }
//     var quantityInputs = document.getElementsByClassName('cart-quantity');
//     for (var i=0; i<  quantityInputs.length; i++){
//         var input = quantityInputs[i];
//         input.addEventListener("change", quantityChanged);
//     }
//     //add to cart
//     var addCart = document.getElementsByClassName('add-cart');
//     for( var i=o; i< addCart.length ; i++){
//         var button = addCart[i];
//         button.addEventListener('click' ,addCartClicked);
//     }
//     //buy button 
//     document.getElementsByClassName('btn-buy')[0].addEventListener('click', buyButtonClicked)
// }
// function buyButtonClicked(){
//     alert('your order is placed');
//     var cartContent = document.getElementsByClassName('cart-content')[0]
//     while(cartContent.hasChildNodes){
//         cartContent.removeChild(cartContent.firstChild);
//     }
//     updateTotal();
// }

// // }
// function updateTotal() {
//     var cartContent = document.querySelector('.cart-content');
//     var cartBoxes = cartContent.getElementsByClassName('cart-box');
//     var total = 0;

//     for (var i = 0; i < cartBoxes.length; i++) {
//         var cartBox = cartBoxes[i];
//         var quantityElement = cartBox.querySelector('.cart-quantity');
//         var priceElement = cartBox.querySelector('.cart-price');
//         var price = parseFloat(priceElement.innerText.replace("$", ""));
//         var quantity = quantityElement.value;
//         total = total + (price * quantity);}
//         //if price contain some cents value
//         total= Math.round(total*100) / 100;
    

//     document.querySelector('.total-price').innerText = '$' + total.toFixed(2);
// }
// // Add to cart
// function addCartClicked(event){
//     var button = event.target;
//     var shopProducts = button.parentElement;
//     var title = shopProducts.getElementsByClassName('product-title')[0].innerText;
//     var price = shopProducts.getElementsByClassName('price')[0].innerText;
//     var productImg = shopProducts.getElementsByClassName('product-img')[0].src;
//     // console.log(title , price , productImg);
//     addProductToCart(title , price , productImg);
//     updateTotal();

// }
// function  addProductToCart(title , price , productImg){
//     var cartShopBox = document.createElement('div');
//     // cartShopBox.classList.add('cart-box')
//     var cartItems = document.getElementsByClassName('cart-content')[0];
//     var cartItemsNames = document.getElementsByClassName('cart-prroduct-title') ;  
//     for (var i=0; i<addCart.length ; i++){
//         alert('you are already add this item to cart');
//         return;
//     }
     
// }


// // Assuming you have an element with class 'cart-content', you might want to call updateTotal when the quantity changes
// document.querySelector('.cart-content').addEventListener('change', updateTotal);
// var cartBoxContent = 
//                     <div>
//                     <img src="${productImg}" alt="" class="cart-img"/>
//                     <div class="detail-box">
//                     <div class="cart-prroduct-title">${title}</div> 
//                     <div class="cart-price">${price}</div>
//                     < input type="number" value="1" class="cart-quantity"/>
//                       </div>
//                     <i class='bx bxs-trash-alt cart-remove'></i> </div> ;
// cartShopBox.innerHtml = cartBoxContent
// cartItems.append(cartShopBox)
// cartShopBox 
//    .getElementsByClassName('cart-remove')[0]
//    .addEventListener('click', removeCart);
// cartShopBox
//    .getElementsByClassName('cart-quantity')[0]
//    .addEventListener('change',quantityChanged);


let cartIcon = document.querySelector('#cart-icon');
let cart = document.querySelector('.cart');
let closeCart = document.querySelector('#close-cart');

// open cart
cartIcon.onclick = () => {
    cart.classList.add("active");
};

// close cart
closeCart.onclick = () => {
    cart.classList.remove("active");
};

// cart working js
if (document.readyState == 'loading') {
    document.addEventListener("DOMContentLoaded", ready);
} else {
    ready();
}

function removeCartItem(event) {
    var buttonClicked = event.target;
    var cartItem = buttonClicked.closest('.cart-box');

    if (cartItem) {
        cartItem.remove();
        updateTotal(); // Update total after removing an item
    } else {
        console.error("Parent cart item not found or not within cart-content.");
    }
    updateTotal();
}

function quantityChanged(event) {
    var input = event.target;
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1;
    }

    updateTotal();
}

// Call the ready function when the DOM is loaded
function ready() {
    var removeCartButtons = document.getElementsByClassName('cart-remove');
    for (var i = 0; i < removeCartButtons.length; i++) {
        var button = removeCartButtons[i];
        button.addEventListener('click', removeCartItem);
    }
    var quantityInputs = document.getElementsByClassName('cart-quantity');
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i];
        input.addEventListener("change", quantityChanged);
    }
    // add to cart
    var addCart = document.getElementsByClassName('add-cart');
    for (var i = 0; i < addCart.length; i++) {
        var button = addCart[i];
        button.addEventListener('click', addCartClicked);
    }
    // buy button
    document.getElementsByClassName('btn-buy')[0].addEventListener('click', buyButtonClicked);
}

function buyButtonClicked() {
    alert('your order is placed');
    var cartContent = document.getElementsByClassName('cart-content')[0];
    while (cartContent.hasChildNodes()) {
        cartContent.removeChild(cartContent.firstChild);
    }
    updateTotal();
}

function updateTotal() {
    var cartContent = document.querySelector('.cart-content');
    var cartBoxes = cartContent.getElementsByClassName('cart-box');
    var total = 0;

    for (var i = 0; i < cartBoxes.length; i++) {
        var cartBox = cartBoxes[i];
        var quantityElement = cartBox.querySelector('.cart-quantity');
        var priceElement = cartBox.querySelector('.cart-price');
        var price = parseFloat(priceElement.innerText.replace("$", ""));
        var quantity = quantityElement.value;
        total = total + price * quantity;
    }
    // if price contains some cents value
    total = Math.round(total * 100) / 100;

    document.querySelector('.total-price').innerText = '$' + total.toFixed(2);
}

// Add to cart
function addCartClicked(event) {
    var button = event.target;
    var shopProducts = button.parentElement;
    var title = shopProducts.getElementsByClassName('product-title')[0].innerText;
    var price = shopProducts.getElementsByClassName('price')[0].innerText;
    var productImg = shopProducts.getElementsByClassName('product-img')[0].src;

    addProductToCart(title, price, productImg);
    updateTotal();
}

function addProductToCart(title, price, productImg) {
    var cartShopBox = document.createElement('div');
    var cartItems = document.getElementsByClassName('cart-content')[0];
    var cartItemsNames = document.getElementsByClassName('cart-product-title');

    for (var i = 0; i < cartItemsNames.length; i++) {
        if (cartItemsNames[i].innerText === title) {
            alert('You have already added this item to the cart');
            return;
        }
    }

    var cartBoxContent = `
        <div class="cart-box">
            <img src="${productImg}" alt="" class="cart-img"/>
            <div class="detail-box">
                <div class="cart-product-title">${title}</div>
                <div class="cart-price">${price}</div>
                <input type="number" value="1" class="cart-quantity"/>
            </div>
            <i class='bx bxs-trash-alt cart-remove'></i>
        </div>`;

    cartShopBox.innerHTML = cartBoxContent;
    cartItems.append(cartShopBox);

    cartShopBox
        .getElementsByClassName('cart-remove')[0]
        .addEventListener('click', removeCartItem);

    cartShopBox
        .getElementsByClassName('cart-quantity')[0]
        .addEventListener('change', quantityChanged);
}

// Assuming you have an element with class 'cart-content', you might want to call updateTotal when the quantity changes
document.querySelector('.cart-content').addEventListener('change', updateTotal);
