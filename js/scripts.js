
// =======================================
// Word selection/encrytion/comparisons
// =======================================

function WordBank() {
  this.wordArray = ["candy"];
  this.letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  this.triedLetters = [];
}

WordBank.prototype.wordSelector = function() {
  var puzzleWord = this.wordArray[Math.floor(Math.random() * (this.wordArray.length))];
  return puzzleWord;
}

WordBank.prototype.encryptWord = function() {
  return ("_ ").repeat(this.wordSelector().length);
}

WordBank.prototype.compareAndReplaceLetter = function(letter) {
  this.usedLetter(letter);

  for (var index = 0; index < this.wordSelector().length; index++ ) {
    if (this.wordSelector()[index] === letter) {
      var encryptWordNoSpaces = this.encryptWord().split(' ');
      var frontWordSlice = encryptWordNoSpaces.slice(0, index).join(' ');
      var backWordSlice = encryptWordNoSpaces.slice(index + 1).join(' ');
      var updatedWord = frontWordSlice + " " + letter + " " + backWordSlice;
      return updatedWord;
    } else {
      // tries -= 1
    }
  }
}

WordBank.prototype.usedLetter = function(letter) {
  return this.triedLetters.push(letter);
}

// =======================================
// Game class
// =======================================

function Game() {
  this.tries = 6;
  this.userInputLetter;
  // this.wordBank = new WordBank();
  if (this.tries === 0) {
    return this.gameOver;
  }
}

Game.prototype.subtractTries = function() {
  return this.tries -= 1;
}


Game.prototype.gameOver = function() {
  return "you lose";
}
