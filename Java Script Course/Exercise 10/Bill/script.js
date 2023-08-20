const inputElem = document.querySelector('.input-text');
const resultTextElem = document.querySelector('.result-text');
inputElem.value = '';
resultTextElem.innerText = '';

function generateBill(){
    let total = Number(inputElem.value);
    total = total*100;
    if(total >= 4000){
        resultTextElem.innerText = `$ ${Math.round(total)/100}`;
    }
    else {
        resultTextElem.innerText = `$ ${Math.round(total + 1000)/100}`;
    }
}
