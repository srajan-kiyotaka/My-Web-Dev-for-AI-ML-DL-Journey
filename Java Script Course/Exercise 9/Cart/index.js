const outputTextElem = document.querySelector('.js-cart-qty');

let cartQty = 0;

function updateCartQty(cartQty, addQty = 1) {
    if(addQty > 0) {
        if(cartQty < 10){
            cartQty = (cartQty + addQty > 10)?(10):(cartQty + addQty);
            console.log(`Cart Quantity: ${cartQty}`);
        }
    }
    else{
        if(cartQty > 0){
            cartQty = (cartQty + addQty >= 0)?(cartQty + addQty):(0);
            console.log(`Cart Quantity: ${cartQty}`);
        }
    }
    if(cartQty === 0){
        alert(`Cart is Empty!`);
    }
    else if(cartQty === 10){
        alert(`Cart is Full!`);
    }
    outputTextElem.innerText = cartQty;
    return cartQty;
}