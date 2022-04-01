


function computerPlay(){
    var choices = ["Rock","Paper","Scissors"];
    var choice = choices[Math.floor(Math.random() * choices.length)];
    return choice.toLowerCase()
}

function playRound(playerSelection, computerSelection) {
    //console.log(computerSelection)
    if(computerSelection=="paper"){
      alert("You lose this round! "+computerSelection+" beats "+playerSelection)
      computer++
      return computer    
    }

    else if(computerSelection=="rock"){
      alert("Tied this round! "+computerSelection+"  tied with "+playerSelection)
      tie++
      return tie
      //return "Tie! "+computerSelection+" tie with "+playerSelection
    }
    else{
      alert("You won this round! "+playerSelection+"  beats "+computerSelection)
      human++
      return human
    }
      //return "You win! "+computerSelection+" doesn't beat "+playerSelection
  }

function game(){
  for(var i=0; i<5; i++){
    const playerSelection = prompt("Enter selection").toLocaleLowerCase();
    const computerSelection = computerPlay();
    playRound(playerSelection, computerSelection)
  }
  console.log("\n"+"\n")
  console.log(human)
  if(human>computer)
    return "You won "+human+ " out of "+(parseInt(human)+parseInt(computer)+parseInt(tie))+" rounds!"
  else if(computer>human)
    return "You lost. Computer won "+computer+ " out of "+(parseInt(human)+parseInt(computer)+parseInt(tie))+" rounds!"
  else if(computer==human)
    return "Overall Tied"
}
  
  
