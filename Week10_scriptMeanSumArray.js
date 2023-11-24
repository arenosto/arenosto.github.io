//Return the mean and sum of an array of numbers
function arrayNum(){
    let newArray = [];
    let sum = 0;
    let mean = 0;
    
    for(i = 0; i<5; i++){
        newArray[i] = prompt("Please enter number " + (i+1));
    }
    document.getElementById("newID").innerHTML+=("New Array numbers: ");    
    for(i = 0; i < newArray.length; i++){
        document.getElementById("arrayID").innerHTML+=(newArray[i]+", ");
    }

    newArray.forEach(x =>{ 
        sum+=parseInt(x);
    })
    document.getElementById("sumID").innerHTML+=("Sum: " + sum); 

    mean = sum / newArray.length;
    document.getElementById("meanID").innerHTML+=("Mean: " + mean);
        hide() 

}

function hide(){
    document.getElementById("myButton").style.display = "none";
} 



