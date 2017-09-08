// word bank
var words =["ACADIA","BADLANDS","DENALI","EVERGLADES","GLACIER","OLYMPIC","PINNACLES","REDWOOD","YELLOWSTONE","YOSEMITE","ZION"]

// set variables
var wins = 0;
var guessRemain = 15;

// pick a word from the word bank
var gameWord = words[Math.floor(Math.random() * words.length)];
// Set Array from gameWord
var wordArray = new Array(gameWord.length);
// Set _ for letter in wordArray
for (var i = 0; i < gameWord.length; i++){
	wordArray[i] = "_ ";
}

var tryCount = 0;
var charsTyped = [];
var correctGuess = [];
// check keypress against gameWord
document.onkeypress = function(evt) {
    evt = evt || window.event;
    var charCode = evt.keyCode || evt.which;
    var charStr = String.fromCharCode(charCode);
    charStr = charStr.toUpperCase();
    charsTyped.push(charStr);
   // document.getElementById("letterGuessed").innerHTML=charsTyped; 
    
  if (gameWord.includes(charStr) == true) {
  	correctGuess.push(charStr);
  	document.getElementById("correctLetter").innerHTML=correctGuess;
  };
}
 

 
  



 



