////////////////////////////////////////
// First to 5 Rock Paper Scissors game//
////////////////////////////////////////

const r = `rock`
const p = `paper`
const s = `scissors`

function computerPlay() {
    let computerChoice;
    let randGen = Math.floor(Math.random() * 3);
    if(randGen === 0) {
        computerChoice = r
    }
    else if(randGen === 1) {
        computerChoice = p
    }
    else {
        computerChoice = s
    }
    return computerChoice
}

function playerPlay() {
    let playerChoice = prompt(`Enter your choice:`).toLowerCase()
    if(playerChoice !== r && playerChoice !== p && playerChoice !== s) {return playerPlay()}
    else if(playerChoice === `rock`) {
      playerChoice = r
    }
    else if(playerChoice === `paper`) {
      playerChoice = p
    }
    else {
      playerChoice = s
    }
    return playerChoice;
}

function playRound(playerSelection, computerSelection) {
    let result;
    if(playerSelection === computerSelection) {
        result = `It's a Draw!! You both choose ${computerSelection}.`;
    }
    else if(playerSelection === r && computerSelection === s || playerSelection === s && computerSelection === p ||playerSelection === p && computerSelection === r) {
        result = `You Win!! ${playerSelection} beats ${computerSelection}.`;
    }
    else {
        result = `You Lose!! ${computerSelection} beats ${playerSelection}.`;
    }
    return result
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    while(playerScore < 5 && computerScore < 5) {
        const playerSelection = playerPlay()
        const computerSelection = computerPlay()
        rpsRound = playRound(playerSelection, computerSelection)
        if(rpsRound.includes(`Win`)) {
            ++playerScore;
        }
        else if(rpsRound.includes(`Lose`)) {
            ++computerScore;
        }    
        console.log(playRound(playerSelection, computerSelection))
        result = `Score is, Player: ${playerScore}     Computer: ${computerScore}`
        console.log(result)
    }
    let playerWins = (playerScore > computerScore)
    if(playerWins) {
        console.log(`You Won with a Score of ${playerScore} to ${computerScore}`)
    }
    else {
        console.log(`You Lost with a Score of ${playerScore} to ${computerScore}`)
    }
}
console.log(game())