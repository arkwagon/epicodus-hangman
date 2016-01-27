
function WordBank() {
  this.wordArray = ["candy"];
}

WordBank.prototype.wordSelector = function() {
  var randomNumber = Math.floor(Math.random() * (this.wordArray.length));
  return this.wordArray[randomNumber];
}

WordBank.prototype.encryptWord = function() {
  return ("_ ").repeat(this.wordSelector().length);
}

function Game() {
  this.tries = 6;

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
