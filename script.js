//Using if statements, create a rock, paper, scissors game.
function game(){
    var userChoice = parseInt(prompt("Choose 1 for Rock, 2 for Paper and 3 for Scissors"));
    var compChoice = Math.floor(Math.random() * 3) + 1;
    console.log(compChoice);

    if(userChoice == 1 && compChoice == 2){
        alert("You chose "+ userChoice + " (Rock) Computer chose " + compChoice + " (Paper). You lose!");
    }
    else if(userChoice == 1 && compChoice == 3){
        alert("You chose "+ userChoice + " (Rock) Computer chose " + compChoice +" (Scissors). You win!");
    }
    else if(userChoice == 2 && compChoice == 1){
        alert("You chose "+ userChoice + " (Paper) Computer chose " + compChoice + " (Rock). You win!");
    }
    else if(userChoice == 2 && compChoice == 3){
        alert("You chose "+ userChoice + " (Paper) Computer chose " + compChoice + " (Scissors). You Lose!");
    }
    else if(userChoice == 3 && compChoice == 1){
        alert("You chose "+ userChoice + " (Scissors) Computer chose " + compChoice + " (Rock). You Lose!");
    }
    else if(userChoice == 3 && compChoice == 2){
        alert("You chose "+ userChoice + " (Scissors) Computer chose " + compChoice + " (Paper). You Win!");
    }
    else if(userChoice == compChoice){
        alert("DRAW! You both chose " + compChoice + ".")
    }
    else{
        alert("Inser a valid number.");
    }
}