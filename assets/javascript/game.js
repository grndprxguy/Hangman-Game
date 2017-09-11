// set variables
var wins = 0;
var guessRemain = 15;
var tryCount = 0;
var charsTyped = [];
var correctGuess = [];

// word bank
var words =["ACADIA","BADLANDS","DENALI","EVERGLADES","GLACIER","OLYMPIC","PINNACLES","REDWOOD","YELLOWSTONE","YOSEMITE","ZION"]
// pick a word from the word bank
var gameWord = words[Math.floor(Math.random() * words.length)];
// Set Array from gameWord
var wordArray = new Array(gameWord.length);
// Set _ for letter in wordArray
for (var i = 0; i < gameWord.length; i++){
	wordArray[i] = "_ ";
  };

// reset game stats
function reset(){
  wordArray = [];
  gameWord = words[Math.floor(Math.random() * words.length)];
  wordArray = new Array(gameWord.length);
  guessRemain=15;
  tryCount=0;
  charsTyped=[];
  correctGuess=[];
  for (var i = 0; i < gameWord.length; i++){
  wordArray[i] = "_ ";
  };

  // show reset counters
  document.getElementById("correctLetter").innerHTML=correctGuess;
  document.getElementById("numTry").innerHTML=tryCount;
  document.getElementById("tryLeft").innerHTML=guessRemain;
  document.getElementById("letterGuess").innerHTML=charsTyped;
  document.getElementById("wordArray").innerHTML=wordArray;
  document.getElementById("winCount").innerHTML=wins;
}

// check keypress against gameWord
document.onkeypress = function(evt) {
    evt = evt || window.event;
    var charCode = evt.keyCode || evt.which;
    var charStr = String.fromCharCode(charCode);
    charStr = charStr.toUpperCase();
      // if letter already has been guessed, skip
     if (charsTyped.includes(charStr)){
    return
      }
    // add charStr to CharsTyped array
    charsTyped.push(charStr);
    // add correct letters to correctGuess array
    if (gameWord.includes(charStr) == true) {
    	correctGuess.push(charStr);
    }
    for (var i = 0; i < gameWord.length; i++){
       if (gameWord[i] == charStr){
    wordArray[i] = (charStr);
    }
  }

// increment try count, show current counters
if (!gameWord.includes(charStr)){
  tryCount++;
  guessRemain--;}
  document.getElementById("correctLetter").innerHTML=correctGuess;
  document.getElementById("numTry").innerHTML=tryCount;
  document.getElementById("tryLeft").innerHTML=guessRemain;
  document.getElementById("letterGuess").innerHTML=charsTyped;
  document.getElementById("wordArray").innerHTML=wordArray;
  document.getElementById("winCount").innerHTML=wins;
  

// game over condition
setTimeout (function gameOver() {
  if (wins==10) {
  document.getElementById("anyKey").innerHTML="You Win! Game Over!"
  reload();
  }
}, 1800);

// losing condition
setTimeout (function noWin() {
    if (tryCount == 15) {
    lose.play();
    document.getElementById("anyKey").innerHTML="Try Again!"
    reset();
  }
}, 1800);

// winning conditions
    setTimeout (function youWin() {
    if (!wordArray.includes("_ ")) {
    win.play();
    document.getElementById("anyKey").innerHTML="You Win!"
    reset();
    wins++;
    }
  },1500);
}



  

 

 
  



 



