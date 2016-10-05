"use strict";

var gravityFallsWords, newWord, gravityWords, hangmanWord, win,
playerWon, availableLetters, lives,winMessage,loseMessage,guessedMessage,validLetterMessage, numLettersLeft ;



var hasStarted = false;

document.onkeydown = function(event)
{	
	if (hasStarted === false)
		//this allows the key to start game
	{
		hasStarted = true;
		setup(); 
		chooseWord();
		hiddenWord();
	}
	//this allows the check for second key to count
	else {
		processChoice(event);
		if (lives == 0) {
			document.querySelector("#word").innerHTML = "You Are Dead!";
			hasStarted = false;

		}
		else if(numLettersLeft == 0) {
			document.querySelector("#word").innerHTML = "You Survived!";
			hasStarted = false;
		}
	}



}//keydown



function setup(){
	/*start game configure*/
	lives = 6;
	gravityFallsWords = ["dipper", "mabel", "wierdmageodon", "robby",
	"gnomes", "unicorn", "journal","wendy"];

	winMessage  ="You Win";
	loseMessage  = "Sorry You lost";
	guessedMessage  = "You already guessed that letter, try again";
	validLetterMessage  = "Please enter a letter a-z";
	document.querySelector("#word").innerHTML = "";
	document.querySelector("#guessed").innerHTML = "";
		}//setup end
		
		function chooseWord (){
			var index = Math.floor((Math.random()*(gravityFallsWords.length-1)));
			newWord = gravityFallsWords[index];
			numLettersLeft = newWord.length;
		}


//This function is how it shows the words in HTML
		function hiddenWord(){
			var html = "";
			for (var i = 0; i < newWord.length; i++) {
				html += "<span>*</span>";
			}
			document.querySelector("#word").innerHTML = html;
		}

//This function is how it processes the user key input

		function processChoice(event){
			var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
			if (userGuess>= 'a' && userGuess<= 'z')
			{
				if (newWord.indexOf(userGuess)>= 0)
				{
					var spanTags = document.querySelectorAll("#word span");
					var numLettersReplaced = 0;
					for ( var i = 0; i < newWord.length; i++)
					{
						var letter = newWord[i];
						if (letter == userGuess){

							spanTags[i].innerHTML = letter;
							numLettersReplaced++;	
						}

					}//end the 4 loop
					newWord.replace(userGuess,"0");
					numLettersLeft = numLettersLeft-numLettersReplaced;
				}//if found
				else 
				{
					lives--;
					var guesesSoFar =	document.querySelector("#guessed").innerHTML;
					document.querySelector("#guessed").innerHTML = guesesSoFar+ " "+ userGuess;
				}
			}
		}




	// 	/*end game configure*/

	// var random = Math.floor((Math.random()*(GravityFallsWords.length-1)));
	// /*var random = whole #(randon math)(get from word bank)(-1? Taking away not sure)*/

	// var newWord = GravityFallsWords[random];
	// var gravityWords = new Array (newWord.lenght);
	// var hangmanWord = 0;
	// The words to be guessed are from the word list above


	// for( var i =0; i< gravityWords.length; i++){
	// 	gravityWords[i] = "_ ";
	// }
	// /*This will underline the word that we need to guess and with a space*/



	// /*this will play music file when win*/
	// var win = new Audio('srcfile.wav');
	// if(playerWon === true){
	// 	win.play();
	// }