let computerMove = "";
let userMove = "";
let randNum = 0;
console.log("Welcome to Rock, Paper, Scissor!");
let score = JSON.parse(localStorage.getItem("score")) || {
    wins: 0,
    losses: 0,
    ties: 0
};

const textWinsElement = document.querySelector(".js-text-wins");
textWinsElement.innerText = score.wins;
const textTiesElement = document.querySelector(".js-text-ties");
textTiesElement.innerText = score.ties;
const textLossesElement = document.querySelector(".js-text-losses");
textLossesElement.innerText = score.losses;

const textResultElem = document.querySelector(".js-text-result");
textResultElem.innerText = localStorage.getItem('result') || '';
const textMoveElem = document.querySelector(".js-text-moves");
textMoveElem.innerText = localStorage.getItem('moves') || '';



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
    textMoveElem.innerText = `Your move was ${userMove} and Computer move was ${computerMove}!`;
    localStorage.setItem("score", JSON.stringify(score));
    localStorage.setItem("result", textResultElem.innerText);
    localStorage.setItem("moves", textMoveElem.innerText);
}