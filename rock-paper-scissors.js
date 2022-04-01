


function computerPlay(){
    var choices = ["Rock","Paper","Scissors"];
    var choice = choices[Math.floor(Math.random() * choices.length)];
    return choice.toLowerCase()
}

function playRound(playerSelection, computerSelection) {
    //console.log(computerSelection)
    if(computerSelection=="paper" && playerSelection=="rock"){
      alert("You lose this round! "+computerSelection+" beats "+playerSelection)
      computer++
      return computer    
    }

    else if(computerSelection=="rock" && playerSelection=="rock"){
      alert("Tied this round! "+computerSelection+"  tied with "+playerSelection)
      tie++
      return tie
      //return "Tie! "+computerSelection+" tie with "+playerSelection
    }
    else if(computerSelection=="scissors" && playerSelection=="rock"){
      alert("You won this round! "+playerSelection+"  beats "+computerSelection)
      human++
      return human
    }
    else if(computerSelection=="rock" && playerSelection=="scissors"){
      alert("You lose this round! "+computerSelection+" beats "+playerSelection)
      computer++
      return computer    
    }

    else if(computerSelection=="scissors" && playerSelection=="scissors"){
      alert("Tied this round! "+computerSelection+"  tied with "+playerSelection)
      tie++
      return tie
      //return "Tie! "+computerSelection+" tie with "+playerSelection
    }
    else if(computerSelection=="paper" && playerSelection=="scissors"){
      alert("You won this round! "+playerSelection+"  beats "+computerSelection)
      human++
      return human
    }
    else if(computerSelection=="scissors" && playerSelection=="paper"){
      alert("You lose this round! "+computerSelection+" beats "+playerSelection)
      computer++
      return computer    
    }

    else if(computerSelection=="paper" && playerSelection=="paper"){
      alert("Tied this round! "+computerSelection+"  tied with "+playerSelection)
      tie++
      return tie
      //return "Tie! "+computerSelection+" tie with "+playerSelection
    }
    else if(computerSelection=="rock" && playerSelection=="paper"){
      alert("You won this round! "+playerSelection+"  beats "+computerSelection)
      human++
      return human
    }
      //return "You win! "+computerSelection+" doesn't beat "+playerSelection
  }

function game(){
  for(var i=0; i<5; i++){
    var playerSelection=''
    var inputValid=false
    while(inputValid===false){
       playerSelection = prompt("Enter selection").toLocaleLowerCase();
       if((playerSelection=="paper") ||(playerSelection=="rock") || (playerSelection=="scissors")){
          inputValid=true
          alert(playerSelection+" "+inputValid)
       }
        else{
           inputValid=false
           alert(playerSelection+" "+inputValid)
       }
    }
    const computerSelection = computerPlay();
    playRound(playerSelection, computerSelection)
  }
  console.log("\n"+"\n")
  console.log(human)
  var str='';
  if(human>computer){
    str="<h3>YOU ARE THE WINNER!</h3>"+"<br>"+
           "You won "+human+ " out of "+(parseInt(human)+parseInt(computer)+parseInt(tie))+" rounds!"+"<br>"+
           "Computer won "+computer+ " out of "+(parseInt(human)+parseInt(computer)+parseInt(tie))+" rounds!"+"<br>"+
           "There were "+tie+" tied"
    return str;
  }
  else if(computer>human){
    str= "<h3>YOU ARE THE LOSER!</h3>"+"<br>"+
           "Computer won "+computer+ " out of "+(parseInt(human)+parseInt(computer)+parseInt(tie))+" rounds!"+"<br>"+
           "You won "+human+ " out of "+(parseInt(human)+parseInt(computer)+parseInt(tie))+" rounds!"+"<br>"+
           "There were "+tie+" tied"
    return str;
  }
  else if(computer==human)
    str= "There were "+tie+" tied out of "+(parseInt(human)+parseInt(computer)+parseInt(tie))+" rounds!"
    return str;
}
  
  
