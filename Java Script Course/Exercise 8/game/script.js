let computerMove = "";
let userMove = "";
let randNum = 0;
console.log("Welcome to Rock, Paper, Scissor!");
let score = JSON.parse(localStorage.getItem("score")) || {
    wins: 0,
    losses: 0,
    ties: 0
};

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
            alert(`Your move was ${userMove} and Computer move was ${computerMove}!\nYou tied!\nWins: ${score.wins}, Losses: ${score.losses}, ties: ${score.ties}.`);
        }
        else if(userMove === "Paper"){
            score.wins++;
            alert(`Your move was ${userMove} and Computer move was ${computerMove}!\nYou won!\nWins: ${score.wins}, Losses: ${score.losses}, ties: ${score.ties}.`);
        }
        else if(userMove === "Scissor"){
            score.losses++;
            alert(`Your move was ${userMove} and Computer move was ${computerMove}!\nYou lose!\nWins: ${score.wins}, Losses: ${score.losses}, ties: ${score.ties}.`);
        }
        else{
            console.error("Invalid User Move!");
        }
    }
    else if(computerMove === "Paper"){
        if(userMove === "Rock"){
            score.losses++;
            alert(`Your move was ${userMove} and Computer move was ${computerMove}!\nYou lose!\nWins: ${score.wins}, Losses: ${score.losses}, ties: ${score.ties}.`);
        }
        else if(userMove === "Paper"){
            score.ties++;
            alert(`Your move was ${userMove} and Computer move was ${computerMove}!\nYou tied!\nWins: ${score.wins}, Losses: ${score.losses}, ties: ${score.ties}.`);
        }
        else if(userMove === "Scissor"){
            score.wins++;
            alert(`Your move was ${userMove} and Computer move was ${computerMove}!\nYou won!\nWins: ${score.wins}, Losses: ${score.losses}, ties: ${score.ties}.`);
        }
        else{
            console.error("Invalid User Move!");
        }
    }
    else if(computerMove === "Scissor"){
        if(userMove === "Rock"){
            score.wins++;
            alert(`Your move was ${userMove} and Computer move was ${computerMove}!\nYou won!\nWins: ${score.wins}, Losses: ${score.losses}, ties: ${score.ties}.`);
        }
        else if(userMove === "Paper"){
            score.losses++;
            alert(`Your move was ${userMove} and Computer move was ${computerMove}!\nYou lose!\nWins: ${score.wins}, Losses: ${score.losses}, ties: ${score.ties}.`);
        }
        else if(userMove === "Scissor"){
            score.ties++;
            alert(`Your move was ${userMove} and Computer move was ${computerMove}!\nYou tied!\nWins: ${score.wins}, Losses: ${score.losses}, ties: ${score.ties}.`);
        }
        else{
            console.error("Invalid User Move!");
        }
    }
    else{
        console.error("Invalid Computer Move!");
    }
    localStorage.setItem("score", JSON.stringify(score));
}