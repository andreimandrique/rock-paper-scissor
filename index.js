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

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissor = document.getElementById("scissor");

const roundDisplay = document.getElementById("roundDisplay");
const scoreDisplay = document.getElementById("scoreDisplay");
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const statusDisplay = document.getElementById("statusDisplay");
const resetDisplay = document.getElementById("resetDisplay");

let score = 0;
let round = 0;

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

function displayPlayerComputer(playerSelectionDisplay, computerSelectionDisplay){
    playerDisplay.innerText = `Player: ${playerSelectionDisplay}`;
    computerDisplay.innerText = `Computer: ${computerSelectionDisplay}`;
}

resetDisplay.addEventListener("click", ()=>{
    
    roundDisplay.innerText = "Round:";
    scoreDisplay.innerText = "Score:";
    playerDisplay.innerText = "Player:";
    computerDisplay.innerText = "Computer:";
    statusDisplay.innerText = "Default";

    score = 0;
    round = 0;

})