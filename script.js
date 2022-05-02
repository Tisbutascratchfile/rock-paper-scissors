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