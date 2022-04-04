var computer=0
var human=0
var tie=0

const container = document.querySelector('#container');
const content = document.createElement('div');
content.classList.add('content');
content.textContent="hajime!!"
container.appendChild(content);

const score= document.createElement('div');
score.classList.add('score');
score.innerHTML="Computer:"+computer+"<br/>"+"Human: "+human;
container.appendChild(score);


const buttons = document.querySelectorAll('button');
// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
  // and for each one we add a 'click' listener

    button.addEventListener('click', () => { 
      if(computer==5 || human==5){
        alert('game over!!!')
      }    
      content.textContent=playRound(button.id,computerPlay())
      score.innerHTML="Computer: "+computer+"<br/>"+"Human: "+human;
      score.appendChild(score)
      container.appendChild(content);
    });
  }
);




/* buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  //button.addEventListener('click', playRound(button.id,computerSelection));
button.addEventListener('click', () => {
   computer++
   runningScore.textContent="Computer: "+computer+" "+"Player: "+human
   container.appendChild(runningScore)
  });
});
 */
function computerPlay(){
    var choices = ["Rock","Paper","Scissors"];
    var choice = choices[Math.floor(Math.random() * choices.length)];
    return choice.toLowerCase()
}

function playRound(playerSelection, computerSelection) {
    if(computerSelection=="paper" && playerSelection=="rock"){
    computer++
     return "You lose this round! "+computerSelection+" beats "+playerSelection
     //return 'computer'
    }

    else if(computerSelection=="rock" && playerSelection=="rock"){
      return "Tied this round! "+computerSelection+"  tied with "+playerSelection
    }
    else if(computerSelection=="scissors" && playerSelection=="rock"){
     human++
     return "You won this round! "+playerSelection+"  beats "+computerSelection
    
     //return 'human'
     
    }
    else if(computerSelection=="rock" && playerSelection=="scissors"){
      computer++
      return "You lose this round! "+computerSelection+" beats "+playerSelection
      
      //return "computer"    
    }

    else if(computerSelection=="scissors" && playerSelection=="scissors"){
      return "Tied this round! "+computerSelection+"  tied with "+playerSelection

    }
    else if(computerSelection=="paper" && playerSelection=="scissors"){
      human++
      return "You won this round! "+playerSelection+"  beats "+computerSelection
      
      //return "human"
    }
    else if(computerSelection=="scissors" && playerSelection=="paper"){
      computer++
      return "You lose this round! "+computerSelection+" beats "+playerSelection
      
      //return "computer"    
    }

    else if(computerSelection=="paper" && playerSelection=="paper"){
      return "Tied this round! "+computerSelection+"  tied with "+playerSelection
    }
    else if(computerSelection=="rock" && playerSelection=="paper"){
      human++
      return "You won this round! "+playerSelection+"  beats "+computerSelection
      
      //return "human"
    }
  }


  /* function updateCount(playerSelection, computerSelection) {
   
    if(computerSelection=="paper" && playerSelection=="rock"){
      computer++
      return computer    
    }

    else if(computerSelection=="rock" && playerSelection=="rock"){
      tie++

    }
    else if(computerSelection=="scissors" && playerSelection=="rock"){
      human++
      return human
    }
    else if(computerSelection=="rock" && playerSelection=="scissors"){
      computer++
      return computer    
    }

    else if(computerSelection=="scissors" && playerSelection=="scissors"){
      tie++
    }
    else if(computerSelection=="paper" && playerSelection=="scissors"){
      human++
      return human
    }
    else if(computerSelection=="scissors" && playerSelection=="paper"){
      computer++
      return computer    
    }

    else if(computerSelection=="paper" && playerSelection=="paper"){
      tie++
 
    }
    else if(computerSelection=="rock" && playerSelection=="paper"){
      human++
      return human
    }
  } */

function game(){
  
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
  
  
