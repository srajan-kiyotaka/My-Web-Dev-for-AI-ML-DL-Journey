let computerMove = "";
let userMove = "";
let randNum = 0;

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
            alert(`Your move was ${userMove} and Computer move was ${computerMove}!\nYou tied!`);
        }
        else if(userMove === "Paper"){
            alert(`Your move was ${userMove} and Computer move was ${computerMove}!\nYou won!`);
        }
        else if(userMove === "Scissor"){
            alert(`Your move was ${userMove} and Computer move was ${computerMove}!\nYou lose!`);
        }
        else{
            console.error("Invalid User Move!");
        }
    }
    else if(computerMove === "Paper"){
        if(userMove === "Rock"){
            alert(`Your move was ${userMove} and Computer move was ${computerMove}!\nYou lose!`);
        }
        else if(userMove === "Paper"){
            alert(`Your move was ${userMove} and Computer move was ${computerMove}!\nYou tied!`);
        }
        else if(userMove === "Scissor"){
            alert(`Your move was ${userMove} and Computer move was ${computerMove}!\nYou won!`);
        }
        else{
            console.error("Invalid User Move!");
        }
    }
    else if(computerMove === "Scissor"){
        if(userMove === "Rock"){
            alert(`Your move was ${userMove} and Computer move was ${computerMove}!\nYou won!`);
        }
        else if(userMove === "Paper"){
            alert(`Your move was ${userMove} and Computer move was ${computerMove}!\nYou lose!`);
        }
        else if(userMove === "Scissor"){
            alert(`Your move was ${userMove} and Computer move was ${computerMove}!\nYou tied!`);
        }
        else{
            console.error("Invalid User Move!");
        }
    }
    else{
        console.error("Invalid Computer Move!");
    }
}