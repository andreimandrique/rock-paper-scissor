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

function playGame(playerSelection, computerSelection){

    let output;

    (playerSelection=='rock' && computerSelection == 'scissor')?
    output='You win':output='You lose';
    (playerSelection=='paper' && computerSelection == 'rock')?
    output='You win':output='You lose';
    (playerSelection=='scissor' && computerSelection == 'paper')?
    output='You win':output='You lose';
    
    if(playerSelection == computerSelection){
        output = 'It\'s a draw';
    }

    return output;
}