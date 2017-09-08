// Set Variables
var words =["ACADIA","BADLANDS","DENALI","EVERGLADES","GLACIER","OLYMPIC","PINNACLES","REDWOOD","YELLOWSTONE","YOSEMITE","ZION"]
var wins = 0;
var guessRemain = 15;
var trycount = 0;
var charsTyped = [];
var correctGuess = [];
var gameWord = words[Math.floor(Math.random() * words.length)];
var wordArray = new Array(gameWord.length);

// blank out wordArray
var blankWord = function () {
	for (var i = 0; i < gameWord.length; i++){
	wordArray[i] = "_ ";
}

// add correct letter to correctGuess array
var addLetter = function() {
	if (gameWord.includes(charStr) == true) {
  	correctGuess.push(charStr);
  	document.getElementById("correctLetter").innerHTML=correctGuess;
	}
}

var score = function() {
	 tryCount++;
  	guessRemain--;
}

document.onkeypress = function(evt) {
    evt = evt || window.event;
    charCode = evt.keyCode || evt.which;
    charStr = String.fromCharCode(charCode);
    charStr = charStr.toUpperCase();
    // add charStr to CharsTyped array
    charsTyped.push(charStr);
};