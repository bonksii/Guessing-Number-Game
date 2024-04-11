document.addEventListener('DOMContentLoaded', function() {
    // Add event listener to the start button
    document.getElementById('startBtn').addEventListener('click', function(event) {
        event.preventDefault(); // prevents user from starting before range is selected

        // to check if any radio button is selected
        var radioButtons = document.getElementsByName('range');
        var radioSelected = false;

        for (var i = 0; i < radioButtons.length; i++) {
            if (radioButtons[i].checked) {
                radioSelected = true;
                break;
            }
        }

        // conitue only if a radio button is selected
        if (radioSelected) {
            // showsthe corresponding page based on the selected radio button
            if (document.getElementById('10').checked) {
                document.querySelector('.ten').style.display = 'block';
            } else if (document.getElementById('100').checked) {
                document.querySelector('.hundred').style.display = 'block';
            } else if (document.getElementById('1000').checked) {
                document.querySelector('.thousand').style.display = 'block';
            }

            // hides the wrapper div after selecttion is completted
            document.querySelector('.wrapper').style.display = 'none';
        } else {
            // displays an alert or message indicating that a range must be selected to stgop users from continuing
            alert('Please select a range before starting the game.');
        }
    });
    
})

//used to display message regarding info to the game. this is relative to its selected range
var msg1 = document.getElementById("message1")
var msg2 = document.getElementById("message2")
var msg3 = document.getElementById("message3")

//code for generation of the answer for the range 1-10
var answer1 = Math.floor(Math.random()*10) + 1;
var no_of_guesses1 = 0;
var guesses_num1 = [];
//used to display message regarding info to the game. this is relative to its selected range
var msg1_1 = document.getElementById("message1_1")
var msg2_1 = document.getElementById("message2_1")
var msg3_1 = document.getElementById("message3_1")

//code for generation of the answer for the range 1-100
var answer2 = Math.floor(Math.random()*100) + 1;
var no_of_guesses2 = 0;
var guesses_num2 = [];
//used to display message regarding info to the game. this is relative to its selected range
var msg1_2 = document.getElementById("message1_2")
var msg2_2 = document.getElementById("message2_2")
var msg3_2 = document.getElementById("message3_2")

//code for generation of the answer for the range 1-1000
var answer3 = Math.floor(Math.random()*1000) + 1;
var no_of_guesses3 = 0;
var guesses_num3 = [];

function displayGameOver(message) {
    // this is a function to display game over modal with a message
    var gameOver = document.getElementById('gameOver');
    var gameOverMessage = document.getElementById('gameOverMessage');
    gameOverMessage.textContent = message;
    gameOver.style.display = 'block';
}
function hideGameOver() {
    // hides the game over modal until the game is completed
    var gameOver = document.getElementById('gameOver');
    gameOver.style.display = 'none';
}
// code to restart the game once it has ended by reloading the page
function restartGame() {
    location.reload(); 
}

function play1(){// see function play3() for description of this code
    var user_guess = document.getElementById("guess1").value;
    if (no_of_guesses1 >= 3) {
        displayGameOver("No more guesses left.");
    } else if (user_guess < 1 || user_guess > 10) {
        alert("Enter a number Between 1 to 10");
    }else{
        guesses_num1.push(user_guess);
        no_of_guesses1+= 1;
        var remaining_guesses = 3 - no_of_guesses1;
        if(user_guess < answer1){
  msg1.textContent = "Too low. Try again!"
  msg2.textContent = "No. Of guesses left: " +
  remaining_guesses;
  msg3.textContent = "Guessing Record: " +
  guesses_num1 + ", ";
        }
        else if(user_guess  > answer1){
            msg1.textContent = "Too high. Try again!"
            msg2.textContent = "No. Of guesses left: " +
  remaining_guesses;
            msg3.textContent = "Guessing Record: " +
            guesses_num1 + ", ";
        }
        else if(user_guess == answer1){
            msg1.textContent = "Correct. Well done!"
            displayGameOver("Congratulations!");
           

        }
    }
}
function play2(){// see function play3() for description of thhis code
    var user_guess = document.getElementById("guess2").value;

    if (no_of_guesses2 >= 7) {
        displayGameOver("No more guesses left.");

    }else if(user_guess < 1 || user_guess > 100 ){
        alert("Ente a number Between 1 to 100");
    }
    else{
        guesses_num2.push(user_guess);
        no_of_guesses2+= 1;
        var remaining_guesses = 7 - no_of_guesses2;
        if(user_guess < answer2){
  msg1_1.textContent = "Too low. Try again!"
  msg2_1.textContent = "No. Of guesses left: " +
  remaining_guesses;
  msg3_1.textContent = "Guessing Record: " +
  guesses_num2 + " ";
        }
        else if(user_guess  > answer2){
            msg1_1.textContent = "Too high. Try again!"
            msg2_1.textContent = "No. Of guesses left: " +
            remaining_guesses;
            msg3_1.textContent = "Guessing Record: " +
            guesses_num2 + ", ";;
        }
        else if(user_guess == answer2){
            msg1_1.textContent = "Correct. Well done!"
            displayGameOver("Congratulations!");
        
        }
    }
}
//each play  function contains similar code to each other
function play3(){
    var user_guess = document.getElementById("guess3").value; //gets the players initial guess
    if (no_of_guesses3 >= 10) { // checks if the number
        displayGameOver("No more guesses left.");
//makes sure users guess in in range or selse it trivgers an aler
    }else if(user_guess < 1 || user_guess > 1000 ){
        alert("Enter a number Between 1 to 1000");
    }
    else{ //adds guesses to an array of guesses and incremments these guesses
        guesses_num3.push(user_guess);
        no_of_guesses3+= 1;

        //finds how many guesses the player has left by subtracting the number of guesses from the initialised number
        var remaining_guesses =  10 - no_of_guesses3;
        if(user_guess < answer3){//hints to user if guess is too low and updates array of guesses (unsure on how to add this to an unodrederd lsit after this has been created)
            
  msg1_2.textContent = "Too low. Try again!"
  msg2_2.textContent = "No. Of guesses left: " +
  remaining_guesses;
  msg3_2.textContent = "Guessing Record: " +
  guesses_num3+ ", ";
        }
        else if(user_guess  > answer3){//hints to user if guess is too high and updates array of guesses
            msg1_2.textContent = "Too high. Try again!"
            msg2_2.textContent = "No. Of guesses left: " +
            remaining_guesses;
            msg3_2.textContent = "Guessing Record: " +
            guesses_num3 + ", ";
        }//displays modla to show the player has won and congratulates them on guessing correctly
        else if(user_guess == answer3){
            msg1_2.textContent = "Correct. Well done!"
            displayGameOver("Congratulations!");
        }
    }
}
document.getElementById('playAgain').addEventListener('click', function() {
    hideGameOver(); // hides the modal for play again until thje game is compelted
    restartGame(); // restarts the game
});