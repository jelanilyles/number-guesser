let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => Math.floor(Math.random()*10);

const compareGuesses = (user, comp, secret) => Math.abs(user - secret) <= Math.abs(comp - secret) ? true : false;

const updateScore = winner => {
    if (winner === 'human') {
        humanScore++;
    } else if (winner === 'computer') {
        computerScore++;
    }
}

const advanceRound = () => {
    currentRoundNumber++;
}


// Testing

 // console.log(generateTarget());
 // console.log(compareGuesses(3, 3, 7));
 // console.log(updateScore(1));