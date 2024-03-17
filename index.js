//make a function getComputerChoice that return rock,paper or scissor
function getComputerChoice(){

    const randomNum = Math.floor(Math.random()* 3 +1);

    let computer;

    switch(randomNum){
        case 1:
        computer = 'rock';
        break;
        case 2:
        computer = 'paper';
        break;
        case 3:
        computer = 'scissor';
        break;
    }
    
    return computer;
}

//get rock,paper and scissor button
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissor = document.getElementById("scissor");

//get all the Display
const roundDisplay = document.getElementById("roundDisplay");
const scoreDisplay = document.getElementById("scoreDisplay");
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const statusDisplay = document.getElementById("statusDisplay");
const resetDisplay = document.getElementById("resetDisplay");

//make a variable for score and round
let score = 0;
let round = 0;

//make a function that play the game taking 2 parameter the player and the computer
function playGame(playerSelection, computerSelection){

    if((playerSelection=='rock'&&computerSelection=='scissor')||
        (playerSelection=='paper'&&computerSelection=='rock')||
        (playerSelection=='scissor'&&computerSelection=='paper')){
            score++;
            round++;
            roundDisplay.innerHTML = `Round: ${round}`;
            scoreDisplay.innerHTML = `Score: ${score}`;
            statusDisplay.innerText = 'You win';
        }
        else if(playerSelection==computerSelection){
            round++;
            roundDisplay.innerHTML = `Round: ${round}`;
            scoreDisplay.innerHTML = `Score: ${score}`;
            statusDisplay.innerText = 'It\'s a draw';
        }
        else{
            round++;
            roundDisplay.innerHTML = `Round: ${round}`;
            scoreDisplay.innerHTML = `Score: ${score}`;
            statusDisplay.innerText = 'You lose';
        }
}

//add event listener to the rock,paper and scissor button
rock.addEventListener("click", ()=>{
    let player = 'rock';
    const computer = getComputerChoice();
    playGame(player, computer);
    displayPlayerComputer(player, computer);
})

paper.addEventListener("click", ()=>{
    let player = 'paper';
    const computer = getComputerChoice();
    playGame(player, computer);
    displayPlayerComputer(player, computer);
})

scissor.addEventListener("click", ()=>{
    let player = 'scissor';
    const computer = getComputerChoice();
    playGame(player, computer);
    displayPlayerComputer(player, computer);
})

//display the player choice and the computer choice
function displayPlayerComputer(playerSelectionDisplay, computerSelectionDisplay){
    playerDisplay.innerText = `Player: ${playerSelectionDisplay}`;
    computerDisplay.innerText = `Computer: ${computerSelectionDisplay}`;
}

//add event listener to the reset button resetting the display and the game
resetDisplay.addEventListener("click", ()=>{
    
    roundDisplay.innerText = "Round:";
    scoreDisplay.innerText = "Score:";
    playerDisplay.innerText = "Player:";
    computerDisplay.innerText = "Computer:";
    statusDisplay.innerText = "Default";

    score = 0;
    round = 0;
<<<<<<< HEAD
})
=======
})
>>>>>>> 5dd2fac316f87c284594e1e9f50acb4da92598ac
