// function getPlayerChoice() {
//     return String((String(prompt("Write your choice: "))).toLowerCase());
// }
// const listOfChoices = ["rock", "paper", "scissor"];

// function getComputerChoice() {
//     let numberCompChoice = Math.floor(Math.random() * 3);
//     return String(listOfChoices[numberCompChoice]);
// }

// // Lose - 0
// // Win - 1
// // Row - 2

// function playRound() {
//     let playerChoice = getPlayerChoice();
//     let compChoice = getComputerChoice();

//     if(playerChoice == compChoice ){
//         return "You draw!";
//     } else if (playerChoice == 'rock' && compChoice == 'paper') {
//         return "You lose! Paper beats rock";
//     } else if (playerChoice == 'rock' && compChoice == 'scissor') {
//         return "You win! Rock beats scissor";
//     } else if (playerChoice == 'paper' && compChoice == 'rock') {
//         return "You win! Paper beats rock";
//     } else if (playerChoice == 'paper' && compChoice == 'scissor') {
//         return "You lose! Scissor beats paper";
//     } else if (playerChoice == 'scissor' && compChoice == 'rock') {
//         return "You lose! Rock beats scissor";
//     } else if (playerChoice == 'scissor' && compChoice == 'paper') {
//         return "You win! Scissor beats paper";
//     } else return error;
// }

// function game() {
//     for (let i = 0; i < 1; i++) {
//         console.log(playRound());
//     }
// }

// game();


