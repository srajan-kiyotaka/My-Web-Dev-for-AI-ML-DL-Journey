function subscribe() {
    const buttonElement = document.querySelector('.js-btn');
    if(buttonElement.innerText === 'Subscribe') {
        buttonElement.innerHTML = 'Subscribed';
        buttonElement.classList.add('is-sub-btn');
    }
    else{
        buttonElement.innerHTML = 'Subscribe';
        buttonElement.classList.remove('is-sub-btn');
    }
}