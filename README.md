# Number Guesser Game(CodeCademy)
## Description
    This game puts the user against a computer in a competition to guess a randomly generated integer.
## Features/Files&Functions
    Most of this project came provided by Codecademy. I worked in the script.js file to complete the logic for comparing the user input to the computers guess.
### script.js
    This is where I wrote the functions used to handle the inputs recieved through the index.html file and the game.js.
#### Global Variables
    The game tracks the human and computer scores as well as the round number.
#### generateTarget - Function
    The generateTarget function generates a random target integer.
#### compareGuesses - Function
    Compares three inputs, the user's and the computers guesses, and a third target integer. The closer of the first two integers to the target integers determines the winner of the round. In the case of a tie, the user is awarded the point. This function does not increment the score. It returns true or false based on whether the user wins.
#### updateScore - Function
    Takes in a string value 'human' or 'computer' and increments the appropriate score variable.
#### advanceRound - Function
    Increments the round number variable.
### game.js
    Handles the inputs from the forms in index.html and calls the script.js functions to determine a winner.
#### Global Variables
    The target integer for each round is stored as a global variables, as well 4 buttons used to change the human input value, submit a guess for the round, and advance to the next round. The remaining global variables are HTML elements from the index.html file, used to capture the values set there and also to modify texts on the HTML document through event listeners.
#### guessButton - Click Event Listener
    Responds to the clicking of the guessButton button. Generates a target integer using the gernerateTarget function from the script.js file. Takes the human guess from the humanGuessInput element if provided (else it presumes the value to be zero). Generates a random integer between 0 and 9 to represent the computers guess. The computer guess and target number are displayed in the computerGuessDisplay and targetNumberDisplay elements. Variable humanIsWinner calls the compareGuesses function from script.js to determine a winner. This result is taken into the winner function, which returns 'human' or 'computer'. That result is used as argument for the updateScore function from script.js. The humanIsWinner variable is then used to update either the guessButton element or the computerGuessDisplay element to indicate the winner of the round. The score values are updated, the guessButton is disabled, and the nextRoundButton is enabled.
#### nextRoundButton - Click Event Listener
    The advanceRound function is called to increment the round number and the display value is updated. The nextRoundButton is disable and the guessButton is reenabled. The winner indicating elements are reset to neutral values, as are the target and computer guess value displays. The guessButton class 'winning-text' is removed.
#### addButton - Click Event Listener
    Used to increase the humanGuessInput value.
#### subtractButton - Click Event Listener
    Used to decrease the humanGuessInput value.
#### handleValueChange - Function
    Used to enable or disable the add and subtract buttons based on the input value being above 9 or below 0. Note that this function does not prevent the submission of such a value. It only prevents changing the value using the buttons.
#### humanGuessInput - Input Event Listener
    Used to call the handleValueChange function in the case of a value input or change using the buttons.
