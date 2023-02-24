// Guessing game
// Guess a number from 1 to 5
// Generate a random number between 1 to 5
// If the guess number matches random nmumber ; then show message won else lost
// Run the game for 5 time
// Show the number of wons and losts

var numOfWon = 0;
var numOfLost = 0;

for (var i = 0; i < 5; i++) {
    var guessNum = parseInt(prompt("Enter a number of 1 to 5 : "));
    var randomNum = Math.floor(Math.random() * 5) + 1;

    if (guessNum == randomNum) {
        console.log("You have won.");
        numOfWon++;
    } else {
        console.log("You have lost. Random number was " + randomNum);
        numOfLost++;
    }
}

document.write("Number of Won = " + numOfWon + "<br/>");
document.write("Number of Lost = " + numOfLost);
