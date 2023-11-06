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

//loop that prints all of the lyrics to '99 bottles of beer' 
function lyrics(){
    hide();

    for(i = 99; i >= 0; i--){
        if(i >= 1){
            document.getElementById("main").innerHTML += "<br />" + i + " bottles of beer on the wall, " + i + " bottles of beer <br />" +
            "Take one down and pass it around, " + (i-1) + " bottles of beer on the wall"
        }
        else{
            document.getElementById("main").innerHTML += "<br /> No more bottles of beer on the wall, no more bottles of beer <br />" +
            "Go to the store and buy some more, 99 bottles of beer on the wall";
        }
    }
}

function hide(){
    document.getElementById('button').style.visibility = 'hidden';
}


