import {cart, updateCart, showMsgMap, cartQuantity} from '../data/cart.js';
import {products} from '../data/products.js';
import { formatPrice } from './utils/money.js';

function getStarsUrl(stars) {
    if(stars >= 0 && stars < 0.5){
        return 'images/ratings/rating-0.png';
    }
    else if(stars >= 0.5 && stars < 1){
        return 'images/ratings/rating-05.png'
    }
    else if(stars >= 1 && stars < 1.5){
        return 'images/ratings/rating-10.png';
    }
    else if(stars >= 1.5 && stars < 2){
        return 'images/ratings/rating-15.png'
    }
    else if(stars >= 2 && stars < 2.5){
        return 'images/ratings/rating-20.png';
    }
    else if(stars >= 2.5 && stars < 3){
        return 'images/ratings/rating-25.png'
    }
    else if(stars >= 3 && stars < 3.5){
        return 'images/ratings/rating-30.png';
    }
    else if(stars >= 3.5 && stars < 4){
        return 'images/ratings/rating-35.png'
    }
    else if(stars >= 4 && stars < 4.5){
        return 'images/ratings/rating-40.png';
    }
    else if(stars >= 4.5 && stars < 5){
        return 'images/ratings/rating-45.png'
    }
    else if(stars === 5){
        return 'images/ratings/rating-50.png';
    }
}

function renderProducts() {
    document.querySelector('.js-cart-quantity').innerHTML = cartQuantity;
    const productsGridElm = document.querySelector('.js-product-grid');

    let productsInnerHtml = '';

    products.forEach((productObj) => {
        productsInnerHtml += `
            <div class="product-container">
            <div class="product-image-container">
                <img class="product-image" src="${productObj.image}">
            </div>

            <div class="product-name limit-text-to-2-lines">
                ${productObj.name}
            </div>

            <div class="product-rating-container">
                <img class="product-rating-stars"
                    src="${getStarsUrl(productObj.rating.stars)}">
                <div class="product-rating-count link-primary">
                    ${productObj.rating.count}
                </div>
            </div>

            <div class="product-price">
                $${formatPrice(productObj.priceCents)}
            </div>

            <div class="product-quantity-container">
                <select class="js-product-quantity-${productObj.id}">
                    <option selected value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                </select>
            </div>

            <div class="product-spacer"></div>

            <div class="added-to-cart js-added-to-cart-${productObj.id}">
                <img src="images/icons/checkmark.png">
                Added
            </div>

            <button class="add-to-cart-button button-primary js-add-to-cart" data-product-Id="${productObj.id}">
                Add to Cart
            </button>
        </div>
        `
    });

    productsGridElm.innerHTML = productsInnerHtml;

    document.querySelectorAll('.js-add-to-cart').forEach((button) => {
        button.addEventListener('click', () => {
            const { productId } = button.dataset;
            let quantity = Number(document.querySelector(`.js-product-quantity-${productId}`).value);
            
            updateCart(productId, quantity);

            renderUpdatedCart(productId);
        });
    });
}

function renderUpdatedCart(productId) {
    const cartQuantityElm = document.querySelector('.js-cart-quantity');
    cartQuantityElm.innerHTML = cartQuantity;

    const addedBtnElm = document.querySelector(`.js-added-to-cart-${productId}`);

    addedBtnElm.classList.add('show-added-to-cart');

    let showId = showMsgMap.get(productId);
    clearTimeout(showId);
    showId = setTimeout(() => {
        addedBtnElm.classList.remove('show-added-to-cart');
    }, 2000);
    showMsgMap.set(productId, showId);
}

renderProducts();
