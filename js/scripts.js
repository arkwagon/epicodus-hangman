
function WordBank() {
  this.wordArray = ["candy"];
}

WordBank.prototype.wordSelector = function() {
  var randomNumber = Math.floor(Math.random() * (this.wordArray.length));
  return this.wordArray[randomNumber];
}
