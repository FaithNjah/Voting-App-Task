
//  Variables declaration
let voteCountone = document.querySelector('.num-one').innerHTML * 1
let voteCounttwo = document.querySelector('.num-two').innerHTML * 1;
const maxVote = 1;


// Edward's

// Access the button responsible for Edward's vote
var buttonOne = document.querySelector('.button-one').addEventListener('click', incrementOne );

// Function for Edward's vote
function incrementOne(e){
  e.preventDefault()

 // Access the element for Edward's number of vote
  let num = document.querySelector('.num-one');

 // condition to check if voting power has been exceeded before increasing number of voting 
 if (voteCounttwo > voteCountone || voteCountone == maxVote) {

  alert('You have exhausted your voting power')
      }else  if(voteCounttwo == 0 ){
         voteCountone++
        num.innerHTML = voteCountone;
      }
    }


// Elon's

// Access the button responsible for Elon's vote
var buttonTwo = document.querySelector('.button-two').addEventListener('click', incrementTwo );

// "Function for Elon's vote
function incrementTwo(e){
  e.preventDefault()

  // Access the element for Elon's number of vote
    let num = document.querySelector('.num-two');
   
  // condition to check if voting power has been exceeded before increasing number of voting
  if (voteCountone > voteCounttwo || voteCounttwo == maxVote) {
    alert('You have exhausted your voting power')

        }else  if(voteCountone == 0 ){
           voteCountone++
          num.innerHTML = voteCountone;
        }
      }
  

// voteResult 

// Access the result button
let voteResult = document.querySelector('#voteResult').addEventListener('click', result);

// check result
 function result(e){
  e.preventDefault();

let voteCountone = document.querySelector('.num-one').innerHTML * 1;
let voteCounttwo = document.querySelector('.num-two').innerHTML * 1;
const maxVote = 1;

  // If else condtions to check who is winning
  if (voteCounttwo == maxVote){
   alert("Elon has one vote and Edward has zero vote");

  }else  if (voteCountone == maxVote){
    alert("Edward has one vote and Elon has zero vote");

   }else{
     alert('You have not voted')
   }
}




  
