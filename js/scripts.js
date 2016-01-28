
// =======================================
// Hangman Game
// =======================================

function HangmanGame() {
  this.wordArray = ["candy"];
  this.letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  this.triedLetters = [];
  this.tries = 6;
  this.userInputLetter;

}

HangmanGame.prototype.wordSelector = function() {
  var puzzleWord = this.wordArray[Math.floor(Math.random() * (this.wordArray.length))];
  return puzzleWord;
}

HangmanGame.prototype.encryptWord = function() {
  return ("_ ").repeat(this.wordSelector().length);
}

HangmanGame.prototype.compareAndReplaceLetter = function(letter) {
  this.usedLetter(letter);

  for (var index = 0; index < this.wordSelector().length; index++ ) {
    if (this.wordSelector()[index] === letter) {
      var encryptWordNoSpaces = this.encryptWord().split(' ');
      var frontWordSlice = encryptWordNoSpaces.slice(0, index).join(' ');
      var backWordSlice = encryptWordNoSpaces.slice(index + 1).join(' ');
      var updatedEncryptedWord = frontWordSlice + " " + letter + " " + backWordSlice;
      if (updatedEncryptedWord.split(' ').join('') === this.wordSelector) {
        return this.gameWinner();
      } else {
        return updatedEncryptedWord;
      }
    } else {
      this.subtractTries();
    }
  }
}

HangmanGame.prototype.usedLetter = function(letter) {
  return this.triedLetters.push(letter);
}

HangmanGame.prototype.subtractTries = function() {
  return this.tries -= 1;
}

HangmanGame.prototype.gameOver = function() {
  if (this.tries === 0) {
    return "The correct answer is: " + this.wordSelector() + "," + " Loser!";
  }
}

HangmanGame.prototype.gameWinner = function() {
    return "You win you goof!";
}
