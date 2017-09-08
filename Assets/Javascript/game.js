// word bank
var words =["ACADIA","BADLANDS","DENALI","EVERGLADES","GLACIER","OLYMPIC","PINNACLES","REDWOOD","YELLOWSTONE","YOSEMITE","ZION"]

// set variables
var wins = 0;
var guessRemain = 15;
var tryCount = 0;
var charsTyped = [];
var correctGuess = [];

// pick a word from the word bank
var gameWord = words[Math.floor(Math.random() * words.length)];
// Set Array from gameWord
var wordArray = new Array(gameWord.length);
// Set _ for letter in wordArray
for (var i = 0; i < gameWord.length; i++){
	wordArray[i] = "_ ";
}


// check keypress against gameWord
document.onkeypress = function(evt) {
    evt = evt || window.event;
    var charCode = evt.keyCode || evt.which;
    var charStr = String.fromCharCode(charCode);
    charStr = charStr.toUpperCase();
    // add charStr to CharsTyped array
    charsTyped.push(charStr);
    var j = gameWord.indexOf(charStr);
    console.log(gameWord);
    
    // add correct letters to correctGuess array
  if (gameWord.includes(charStr) == true) {
  	correctGuess.push(charStr);
   for (var i = 0; i < gameWord.length; i++){
  wordArray[j] = (charStr);
  }
}
  


  // increment try count, show current status
  tryCount++;
  guessRemain--;
  document.getElementById("correctLetter").innerHTML=correctGuess;
  document.getElementById("numTry").innerHTML=tryCount;
  document.getElementById("tryLeft").innerHTML=guessRemain;
  document.getElementById("letterGuess").innerHTML=charsTyped;
  document.getElementById("wordArray").innerHTML=wordArray;
  // if (guessRemain == 0) {alert("Game Over");
}
 

 
  



 



