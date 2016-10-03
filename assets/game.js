var GravityFallsWords=[
["D","I","P","P","E","R"],
["M","A","B","E","L"],
["w","I","E","R","D","M","A","G","E","D","O","N"],
["R","O","B","B","Y"],
["G","N","O","M","E","S"],
["U","N","I","C","O","R","N"],
["J","O","U","R","N","A","L"],
["W","E","N","D","Y"]
]

var random = Math.floor((Math.random()*(GravityFallsWords.length-1)));
/*var random = whole #(randon math)(get from word bank)(-1? Taking away not sure)*/

var newWord = GravityFallsWords[random];
var gravityWords = new Array (newWord.lenght);
var hangmanWord = 0;
/*The words to be guessed are from the word list above*/


for( var i =0; i< gravityWords.length; i++){
	gravityWords[i] = "_ ";
}
/*This will underline the word that we need to guess and with a space*/



/*this will play music file when win*/
var win = new Audio('srcfile.wav');
if(playerWon === true){
    win.play();
}