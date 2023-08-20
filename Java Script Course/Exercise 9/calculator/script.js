const outputTextElement = document.querySelector('.output-card');

let calculate = localStorage.getItem('equation') || '';
let result = 0;

function update(str){
    calculate += str;
    console.log('Current Equation: ' + calculate);
    localStorage.setItem('equation', calculate);
    outputTextElement.innerText = calculate;
}