const userChoiceList = document.getElementsByName("choice");
const playBtn = document.querySelector("#playBtn");
const compChoiceText = document.querySelector("#comp-choice");
const result = document.querySelector("#resultText");
const playerScoreText = document.querySelector("#player-score");
const compScoreText = document.querySelector("#computer-score");
const resetBtn = document.querySelector("#resetBtn");

let playerScore = 0;
let computerScore = 0;
let userChoice;
let computerChoice;

playBtn.addEventListener("click", playGame);

//run game
function playGame() {
    getUserChoice();
    getComputerChoice();
    compareChoices(userChoice, computerChoice);
}

//get user choice
function getUserChoice() {
    for(i = 0; i < userChoiceList.length; i++) {
        if(userChoiceList[i].checked == true) {
            userChoice = userChoiceList[i].value;
            return userChoice;
        }
    }
}

//get computer choice
function getComputerChoice() {
    const randomNum = Math.floor(Math.random()*3);
    if(randomNum === 0) {
        computerChoice = "rock";
        compChoiceText.innerHTML = "ROCK";
    } else if(randomNum === 1) {
        computerChoice = "paper";
        compChoiceText.innerHTML = "PAPER";
    } else if(randomNum === 2) {
        computerChoice = "scissors";
        compChoiceText.innerHTML = "SCISSORS";
    } else {
        alert("ERROR");
    }
}

//compare, declare winner, update scores
function compareChoices(player, computer) {
    if(player === computer) {
        result.innerText = "TIE!"
    } else if(player === "rock" && computer === "paper") {
        result.innerText = "Computer Wins!";
        computerScore++;
        compScoreText.innerHTML = computerScore;
    } else if(player === "rock" && computer === "scissors") {
        result.innerText = "You Win!";
        playerScore++;
        playerScoreText.innerHTML = playerScore;
    } else if(player === "paper" && computer === "scissors") {
        result.innerText = "Computer Wins!";
        computerScore++;
        compScoreText.innerHTML = computerScore;
    } else if(player === "paper" && computer === "rock") {
        result.innerText = "You Win!";
        playerScore++;
        playerScoreText.innerHTML = playerScore;
    } else if(player === "scissors" && computer === "paper") {
        result.innerText = "You Win!";
        playerScore++;
        playerScoreText.innerHTML = playerScore;
    } else if(player === "scissors" && computer === "rock") {
        result.innerText = "Computer Wins!";
        computerScore++;
        compScoreText.innerHTML = computerScore;
    }
}

