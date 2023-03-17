let playerScore = 0;
let compScore = 0;
let whoLastWon;


function getPlayerChoice() {
    const rps_buttons = document.querySelectorAll('[data-element-id="1"]');
    let compChoice;

    for (let i = 0; i < 3; i++) {
        rps_buttons[i].addEventListener('click', function(e) {
            unMarkButtons(rps_buttons);
            markOneButton(rps_buttons[i]);
            compChoice = getComputerChoice();
            playRound(i, compChoice);
        });
    }
}

function unMarkButtons(rps_buttons) {
    for (let j = 0; j < 3; j++) {
        rps_buttons[j].classList.remove("marked");
        rps_buttons[j].classList.add("unmarked");
    }
}

function markOneButton(button) {
    button.classList.remove("unmarked");
    button.classList.add("marked");
}

function getComputerChoice() {
    let compChoice = Math.floor(Math.random() * 3);
    return compChoice;
}

function playRound(playerChoice, compChoice) {
    if (playerScore < 5 && compScore < 5){
        if(playerChoice == compChoice ){
            console.log("You draw!");
        } else if (playerChoice == 0 && compChoice == 1) {
            compScore++;
            console.log("You lose! Paper beats rock");
            whoLastWon = 'comp';
        } else if (playerChoice == 0 && compChoice == 2) {
            playerScore++;
            console.log("You win! Rock beats scissor");
            whoLastWon = 'player';
        } else if (playerChoice == 1 && compChoice == 0) {
            playerScore++;
            console.log("You win! Paper beats rock");
            whoLastWon = 'player';
        } else if (playerChoice == 1 && compChoice == 2) {
            compScore++;
            console.log("You lose! Scissor beats paper");
            whoLastWon = 'comp';
        } else if (playerChoice == 2 && compChoice == 0) {
            compScore++;
            console.log("You lose! Rock beats scissor");
            whoLastWon = 'comp';
        } else if (playerChoice == 2 && compChoice == 1) {
            playerScore++;
            console.log("You win! Scissor beats paper");
            whoLastWon = 'player';
        } else console.log("error");

        updateScore();
        updateDuelImg(playerChoice, compChoice);
        updateHistory(playerChoice, compChoice);

        if(compScore == 5 || playerScore == 5) {
            showGameOverWindow(whoLastWon);
        }

    } else {
        showGameOverWindow(whoLastWon);
    }
}

function showGameOverWindow(whoLastWon) {
    document.getElementsByClassName("game-over-window")[0].classList.add("active");
    document.getElementsByClassName("main")[0].classList.add("game-over-background");
    let play_again_result = document.querySelector('[data-game-over="1"]');
    let play_again_button = document.querySelector('[data-game-over="2"]');
    console.log(play_again_button);

    if(whoLastWon == 'comp'){
        play_again_result.textContent = "YOU LOST!"
    } else if(whoLastWon == 'player') {
        play_again_result.textContent = "YOU WIN!"
    }

    play_again_button.addEventListener('click', function(e) {
        resetGame();
    });

}

function resetGame() {
    playerScore = 0;
    compScore = 0;
    whoLastWon = null;
    updateScore();
    document.getElementsByClassName("game-over-window")[0].classList.remove("active");
    document.getElementsByClassName("main")[0].classList.remove("game-over-background");

    const rps_buttons = document.querySelectorAll('[data-element-id="1"]');
    unMarkButtons(rps_buttons);
    setDefaultChoiceImg();
    clearHistory();
}

function setDefaultChoiceImg() {
    let imgs = document.getElementsByClassName("rock-paper-scissor-img");
    imgs[0].src = "./img/mark.png";
    imgs[1].src = "./img/mark.png";
}



function updateScore() {
    document.getElementById("h3-result").innerHTML = `${playerScore}:${compScore}`;
}

function updateDuelImg(playerChoice, compChoice) {
    if (playerChoice == 0) {
        document.querySelector('[data-img="1"]').src = "./img/rock.png";
    } else if (playerChoice == 1){
        document.querySelector('[data-img="1"]').src = "./img/paper.png";
    } else if (playerChoice == 2){
        document.querySelector('[data-img="1"]').src = "./img/scissor.png";
    }

    if (compChoice == 0) {
        document.querySelector('[data-img="2"]').src = "./img/rock.png";
    } else if (compChoice == 1){
        document.querySelector('[data-img="2"]').src = "./img/paper.png";
    } else if (compChoice == 2){
        document.querySelector('[data-img="2"]').src = "./img/scissor.png";
    }
}

function updateHistory(playerChoice, compChoice) {

    let history_player_element = document.createElement("p");
    let history_player_text;
    if (playerChoice == 0) {
        history_player_text = document.createTextNode("Rock");

    } else if (playerChoice == 1){
        history_player_text = document.createTextNode("Paper");

    } else if (playerChoice == 2){
        history_player_text = document.createTextNode("Scissor");
    }
    history_player_element.appendChild(history_player_text);
    document.querySelector('[data-history="1"]').appendChild(history_player_element);

    let history_comp_element = document.createElement("p");
    let history_comp_text;
    if (compChoice == 0) {
        history_comp_text = document.createTextNode("Rock");
    } else if (compChoice == 1){
        history_comp_text = document.createTextNode("Paper");
    } else if (compChoice == 2){
        history_comp_text = document.createTextNode("Scissor");
    }
    history_comp_element.appendChild(history_comp_text);
    document.querySelector('[data-history="2"]').appendChild(history_comp_element);
}

function clearHistory() {
    document.getElementsByClassName("history-section-item")[0].removeChild(document.querySelector('[data-history="1"]'));
    document.getElementsByClassName("history-section-item")[1].removeChild(document.querySelector('[data-history="2"]'));

}
