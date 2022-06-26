// store socres
var wins = 0;
var ties = 0;
var losses = 0;

// store options
var playerOptions = [`r`, `p`, `s`];

// play function
var startGame = function () {

    // input box
    var playerInput = window.prompt(`Enter one of the following options: r / p / s`);

    // convert input to lowercase to match the playerOption array
    playerInput = playerInput.toLowerCase(); 
    
    // check if the user input
    if (playerInput != `r` && playerInput != `p` && playerInput != `s`) {
        window.alert(`invalid`)
        return startGame();
    }

    // generate random r/p/s selection on the computer side
    var index = Math.floor(Math.random() * playerOptions.length);
    var computerSelection = playerOptions[index];

    window.alert(`You: ${playerInput} vs Computer: ${computerSelection}`);

    // user vs computer
    if (playerInput == computerSelection) {
        ties++;
        window.alert(`It's a tie.🤝🏼`);
    } else if (
        playerInput == `r` && computerSelection == `s` ||
        playerInput == `s` && computerSelection == `p` ||
        playerInput == `p` && computerSelection == `r`
    ) {
        wins++;
        window.alert(`You score a point!!`);
    } else {
        losses++
        window.alert(`Computer scores a point!`);
    } 

    // show scoreboard
    window.alert(`Scoreboard:\nYou: ` + wins + `\nTies:` + ties + `\nComputer: ` + losses);

    // play again
    var continuePlaying = window.confirm(`Continue?`);

    // if user wants to play again
    if (continuePlaying) {
        startGame();
    }
}

