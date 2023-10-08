export let cart = JSON.parse(localStorage.getItem('cart')) || [{productId
    : 
    "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    quantity
    : 
    2},
    {productId
        : 
        "15b6fc6f-327a-4ec4-896f-486349e85a3d",
        quantity
        : 
        1}];
export const showMsgMap = new Map();
export let cartQuantity = getCartQuantity();
function saveTheCart(){
    localStorage.setItem('cart', JSON.stringify(cart));
}

export function updateCart(productId, quantity) {
    let item;
    cart.forEach((cartObj) => {
        if(cartObj.productId === productId){
            item = cartObj;
        }
    });
    if(item){
        item.quantity += quantity;
    }
    else{
        cart.push({
            productId,
            quantity
        });
    }
    saveTheCart();
    cartQuantity = getCartQuantity();
}

export function removeFromCart(productId) {
    cart = cart.filter((cartItem) => {
        return cartItem.productId !== productId;
    });
    saveTheCart();
    cartQuantity = getCartQuantity();
}

export function getCartQuantity() {
    let cartQuantity = 0;
    cart.forEach((cartObj) => {
        cartQuantity += cartObj.quantity;
    });
    return cartQuantity;
}