
function WordBank() {
  this.wordArray = ["candy"];
}

WordBank.prototype.wordSelector = function() {
  var puzzleWord = this.wordArray[Math.floor(Math.random() * (this.wordArray.length))];
  return puzzleWord;
}

WordBank.prototype.encryptWord = function() {
  return ("_ ").repeat(this.wordSelector().length);
}

function Game() {
  this.letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  this.triedLetters = [];
  this.tries = 6;
  this.userInputLetter;
  var gameWords = new WordBank();

  if (this.tries === 0) {
    return this.gameOver;
  }
}

Game.prototype.subtractTries = function() {
  return this.tries -= 1;
}

Game.prototype.usedLetter = function(letter) {
  return this.triedLetters.push(letter);
}

// Game.prototype.compareLetter = function(letter) {
//   for (var index = 0; index < this.gameWords.wordSelector().length; index++) {
//     if (this.gameWords.wordSelector.includes(letter)) {
//       // remove underscore and add letter to encrypted word
//       // push letter to tried letters
//     } else {
//       // push letter to tried letters
//       // subtract a try
//     }
//   }
// }
Game.prototype.gameOver = function() {
  return "you lose";
}
