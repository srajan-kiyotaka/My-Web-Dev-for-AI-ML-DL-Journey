function subscribe() {
    const buttonElement = document.querySelector('.js-btn');
    if(buttonElement.innerText === 'Subscribe') {
        buttonElement.innerHTML = 'Subscribed';
    }
    else{
        buttonElement.innerHTML = 'Subscribe';
    }
}