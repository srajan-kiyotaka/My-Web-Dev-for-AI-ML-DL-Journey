let computerMove = "";
let userMove = "";
let randNum = 0;

console.log("Welcome to Rock, Paper, Scissor!");

let score = JSON.parse(localStorage.getItem("score")) || {
    wins: 0,
    losses: 0,
    ties: 0
};

let isOnAutoPlay = false;
let autoPLayID;

const textWinsElement = document.querySelector(".js-text-wins");
textWinsElement.innerText = score.wins;
const textTiesElement = document.querySelector(".js-text-ties");
textTiesElement.innerText = score.ties;
const textLossesElement = document.querySelector(".js-text-losses");
textLossesElement.innerText = score.losses;

const textResultElem = document.querySelector(".js-text-result");
textResultElem.innerHTML = localStorage.getItem('result') || '';
const textMoveElem = document.querySelector(".js-text-moves");
textMoveElem.innerHTML = localStorage.getItem('moves') || '';

const textAutoPlayElm = document.querySelector(".js-auto-play-btn");

function autoPlay(){
    if(isOnAutoPlay){
        textAutoPlayElm.innerText = "Auto Play";
        clearInterval(autoPLayID);
        isOnAutoPlay = false;
        console.log("Auto Play stopped!");
    }
    else{
        console.log("Auto Play Started!");
        isOnAutoPlay = true;
        textAutoPlayElm.innerText = "On Auto Play";
        const autoPlayFunc = function () {
            userMove = getMove(Math.random());
            startGame(userMove);
        };
        autoPLayID = setInterval(autoPlayFunc, 1000);
    }
}

function getMove(num){
    if(num < 1/3){
        return "Rock";
    }
    else if(num < 2/3){
        return "Paper";
    }
    else{
        return "Scissor";
    }
}

function startGame(userMove){
    randNum = Math.random();
    computerMove = getMove(randNum);
    calculate(computerMove, userMove);
}

function calculate(computerMove, userMove){
    if(computerMove === "Rock"){
        if(userMove === "Rock"){
            score.ties++;
            textTiesElement.innerText = score.ties;
            textResultElem.innerText = 'Tie!';
            // alert(`Your move was ${userMove} and Computer move was ${computerMove}!\nYou tied!\nWins: ${score.wins}, Losses: ${score.losses}, ties: ${score.ties}.`);
        }
        else if(userMove === "Paper"){
            score.wins++;
            textWinsElement.innerText = score.wins;
            textResultElem.innerText = 'You Won!'
            // alert(`Your move was ${userMove} and Computer move was ${computerMove}!\nYou won!\nWins: ${score.wins}, Losses: ${score.losses}, ties: ${score.ties}.`);
        }
        else if(userMove === "Scissor"){
            score.losses++;
            textLossesElement.innerText = score.losses;
            textResultElem.innerText = 'You Loss!'
            // alert(`Your move was ${userMove} and Computer move was ${computerMove}!\nYou lose!\nWins: ${score.wins}, Losses: ${score.losses}, ties: ${score.ties}.`);
        }
        else{
            console.error("Invalid User Move!");
        }
    }
    else if(computerMove === "Paper"){
        if(userMove === "Rock"){
            score.losses++;
            textLossesElement.innerText = score.losses;
            textResultElem.innerText = 'You Loss!'
            // alert(`Your move was ${userMove} and Computer move was ${computerMove}!\nYou lose!\nWins: ${score.wins}, Losses: ${score.losses}, ties: ${score.ties}.`);
        }
        else if(userMove === "Paper"){
            score.ties++;
            textTiesElement.innerText = score.ties;
            textResultElem.innerText = 'Tie!';
            // alert(`Your move was ${userMove} and Computer move was ${computerMove}!\nYou tied!\nWins: ${score.wins}, Losses: ${score.losses}, ties: ${score.ties}.`);
        }
        else if(userMove === "Scissor"){
            score.wins++;
            textWinsElement.innerText = score.wins;
            textResultElem.innerText = 'You Won!'
            // alert(`Your move was ${userMove} and Computer move was ${computerMove}!\nYou won!\nWins: ${score.wins}, Losses: ${score.losses}, ties: ${score.ties}.`);
        }
        else{
            console.error("Invalid User Move!");
        }
    }
    else if(computerMove === "Scissor"){
        if(userMove === "Rock"){
            score.wins++;
            textWinsElement.innerText = score.wins;
            textResultElem.innerText = 'You Won!'
            // alert(`Your move was ${userMove} and Computer move was ${computerMove}!\nYou won!\nWins: ${score.wins}, Losses: ${score.losses}, ties: ${score.ties}.`);
        }
        else if(userMove === "Paper"){
            score.losses++;
            textLossesElement.innerText = score.losses;
            textResultElem.innerText = 'You Loss!';
            // alert(`Your move was ${userMove} and Computer move was ${computerMove}!\nYou lose!\nWins: ${score.wins}, Losses: ${score.losses}, ties: ${score.ties}.`);
        }
        else if(userMove === "Scissor"){
            score.ties++;
            textTiesElement.innerText = score.ties;
            textResultElem.innerText = 'Tie!';
            // alert(`Your move was ${userMove} and Computer move was ${computerMove}!\nYou tied!\nWins: ${score.wins}, Losses: ${score.losses}, ties: ${score.ties}.`);
        }
        else{
            console.error("Invalid User Move!");
        }
    }
    else{
        console.error("Invalid Computer Move!");
    }
    textMoveElem.innerHTML = `Your move was <img src="icons/${userMove.toLowerCase()}-emoji.png" alt="User Move" class="${userMove.toLowerCase()}-img"> and Computer move was <img src="icons/${computerMove.toLowerCase()}-emoji.png" alt="Computer Move" class="${computerMove.toLowerCase()}-img">!`;
    localStorage.setItem("score", JSON.stringify(score));
    localStorage.setItem("result", textResultElem.innerText);
    localStorage.setItem("moves", textMoveElem.innerHTML);
}

function resetScore(){
    console.log('Resetting the Game!');
    userMove = '';
    computerMove = '';
    localStorage.removeItem('score');
    score = {
        wins: 0,
        losses: 0,
        ties: 0
    }
    textWinsElement.innerText = score.wins;
    textTiesElement.innerText = score.ties;
    textLossesElement.innerText = score.losses;
    textResultElem.innerText = '';
    textMoveElem.innerText = '';
    localStorage.setItem('result', textResultElem.innerText);
    localStorage.setItem('moves', textMoveElem.innerText);
    const responseCardElm = document.querySelector('.js-response-card');
    responseCardElm.innerHTML = '';
}

const rockBtnElm = document.querySelector(".js-rock-btn");
const paperBtnElm = document.querySelector(".js-paper-btn");
const scissorBtnElm = document.querySelector(".js-scissor-btn");
const resetBtnElm = document.querySelector(".js-reset-btn");
const autoPlayBtnElm = document.querySelector(".js-auto-play-btn");

rockBtnElm.addEventListener("click", () => {
    startGame('Rock');
});

paperBtnElm.addEventListener("click", () => {
    startGame('Paper');
});

scissorBtnElm.addEventListener("click", () => {
    startGame('Scissor');
});

resetBtnElm.addEventListener("click", secureReset);

autoPlayBtnElm.addEventListener("click", autoPlay);

const bodyElm = document.querySelector('body');

function secureReset () {
    const responseCardElm = document.querySelector('.js-response-card');
    responseCardElm.innerHTML = `
        Are you sure you want to reset the game?
        <button class="reset-yes-btn js-reset-yes-btn">
        Yes
        </button>
        <button class="reset-no-btn js-reset-no-btn">
        No
        </button>
    `;
    
    const resetYesBtnElm = document.querySelector('.js-reset-yes-btn');
    resetYesBtnElm.addEventListener('click', resetScore);
    const resetNoBtnElm = document.querySelector('.js-reset-no-btn');
    resetNoBtnElm.addEventListener('click', () => {
        responseCardElm.innerHTML = '';
    });
}

bodyElm.addEventListener('keydown', (event) => {
    if(event.key === 'r'){
        startGame('Rock');
    }
    else if(event.key === 'p'){
        startGame('Paper');
    }
    else if(event.key === 's'){
        startGame('Scissor');
    }
    else if(event.key === 'a'){
        autoPlay();
    }
    else if(event.key === 'Backspace'){
        secureReset();
    }
    else{
        console.log(event.key);
    }
});

