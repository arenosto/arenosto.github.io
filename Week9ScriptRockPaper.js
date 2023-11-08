//Using if statements, create a rock, paper, scissors game.
function game(){
    var game = true;
    var attempt = 0;

        for(i=0; i<3 && game == true; i++){
        var userChoice = parseInt(prompt("Choose 1 for Rock, 2 for Paper and 3 for Scissors. Attempt "+(i+1)));
        var compChoice = Math.floor(Math.random() * 3) + 1;
        attempt += i;
        console.log(compChoice);

    

            if(userChoice == 1 && compChoice == 2){
                alert("You chose "+ userChoice + " (Rock) Computer chose " + compChoice + " (Paper). You lose!");
            }
            else if(userChoice == 1 && compChoice == 3){
                alert("You chose "+ userChoice + " (Rock) Computer chose " + compChoice +" (Scissors). You win!");
                game = false;
            }
            else if(userChoice == 2 && compChoice == 1){
                alert("You chose "+ userChoice + " (Paper) Computer chose " + compChoice + " (Rock). You win!");
                game = false;
            }
            else if(userChoice == 2 && compChoice == 3){
                alert("You chose "+ userChoice + " (Paper) Computer chose " + compChoice + " (Scissors). You Lose!");
            }
            else if(userChoice == 3 && compChoice == 1){
                alert("You chose "+ userChoice + " (Scissors) Computer chose " + compChoice + " (Rock). You Lose!");
            }
            else if(userChoice == 3 && compChoice == 2){
                alert("You chose "+ userChoice + " (Scissors) Computer chose " + compChoice + " (Paper). You Win!");
                game = false;
            }
            else if(userChoice == compChoice){
                alert("DRAW! You both chose " + compChoice + ".")
            }
            else{
                alert("Inser a valid number.");
            }

        if(attempt == 3 && game == true){
                alert("Game Over!")
            }
    }
    }