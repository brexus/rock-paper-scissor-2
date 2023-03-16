let playerScore = 0;
let compScore = 0;

function getPlayerChoice() {
    const rps_buttons = document.querySelectorAll('[data-element-id="1"]');
    let compChoice;

        // document.querySelector("finish-window").classList.remove("active");
        // document.querySelector("main").classList.remove("low-opacity");
    for (let i = 0; i < 3; i++) {
        rps_buttons[i].addEventListener('click', function(e) {
            for (let j = 0; j < 3; j++) {
                rps_buttons[j].classList.remove("marked");
                rps_buttons[j].classList.add("unmarked");
            }
            rps_buttons[i].classList.remove("unmarked");
            rps_buttons[i].classList.add("marked");
            compChoice = getComputerChoice();
            playRound(i, compChoice);
        });
    }

    // document.getElementsByClassName("finish-window").classList.add("active");
    // document.getElementsByClassName("main").classList.add("low-opacity");
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
        } else if (playerChoice == 0 && compChoice == 2) {
            playerScore++;
            console.log("You win! Rock beats scissor");
        } else if (playerChoice == 1 && compChoice == 0) {
            playerScore++;
            console.log("You win! Paper beats rock");
        } else if (playerChoice == 1 && compChoice == 2) {
            compScore++;
            console.log("You lose! Scissor beats paper");
        } else if (playerChoice == 2 && compChoice == 0) {
            compScore++;
            console.log("You lose! Rock beats scissor");
        } else if (playerChoice == 2 && compChoice == 1) {
            playerScore++;
            console.log("You win! Scissor beats paper");
        } else console.log("error");

        updateScore(playerChoice, compChoice);
        updateDuelImg(playerChoice, compChoice);
        updateHistory(playerChoice, compChoice);

    } else {
        showEndWindow();
    }
}

function showEndWindow() {
    document.getElementsByClassName("end-window")[0].classList.add("active");
    document.getElementsByClassName("main")[0].classList.add("low-opacity");
}


function updateScore(playerChoice, compChoice) {
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

