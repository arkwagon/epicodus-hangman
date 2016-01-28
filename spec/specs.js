describe("HangmanGame", function() {
  it("creates an array to store words for game", function() {
    var testHangmanGame = new HangmanGame();
    expect(testHangmanGame.wordArray).to.eql(["candy"]);
  });
  it("returns a word from HangmanGame's wordArray", function() {
    var testHangmanGame = new HangmanGame();
    expect(testHangmanGame.wordSelector()).to.equal("candy");
  });
  it("will encrypt words for game", function() {
    var testHangmanGame = new HangmanGame();
    expect(testHangmanGame.encryptWord()).to.equal("_ _ _ _ _ ");
  });
  it("will create an array with the alphabet in it", function() {
    var testHangmanGame = new HangmanGame();
    expect(testHangmanGame.letters).to.eql( ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"] );
  });
  it("will create an array for tried letters to be pushed in to", function() {
    var testHangmanGame = new HangmanGame();
    expect(testHangmanGame.triedLetters).to.eql([]);
  });
  it("will compare userInputLetter to puzzleWord and replace matches with the appropriate letter", function() {
    var testHangmanGame = new HangmanGame();
    testHangmanGame.wordSelector();
    expect(testHangmanGame.compareAndReplaceLetter("y")).to.equal("_ _ _ _ y ");
  });
  it("will push tried letters into the triedLetters array", function() {
    var testHangmanGame = new HangmanGame();
    testHangmanGame.usedLetter("y");
    expect(testHangmanGame.triedLetters).to.include("y");
  });
  it("creates a new game with a starting score of 6", function() {
    var testHangmanGame = new HangmanGame();
    expect(testHangmanGame.tries).to.equal(6);
  });
  it("subtract from starting score by 1", function() {
    var testHangmanGame = new HangmanGame();
    expect(testHangmanGame.subtractTries()).to.equal(5);
  });
  it("will end the game when game.tries equals 0", function() {
    var testHangmanGame = new HangmanGame();
    expect(testHangmanGame.gameOver()).to.equal("you lose");
  });
  it("will determine if puzzleWord has been solved", function() {
    var testHangmanGame = new HangmanGame();
    // testHangmanGame.wordSelector();
    expect(testHangmanGame.gameWinner()).to.equal(true);
  });
});

describe("Game", function() {
});

// describe("Player", function() {
//   it("creates a player to fuck off", function() {
//     var testGame = new Game();
//     expect(testGame.tries).to.equal(6);
//   });
// });

// describe("WordEncrypt", function() {
//   it("will encrypt words for game", function() {
//     var testWordEncrypt = new WordEncrypt();
//     expect(testHangmanGame.wordArray).to.eql(["_ _ _ _ _"]);
//   });
// });

// it("will push letters into triedLetters", function() {
//   var testGame = new Game();
//   testGame.usedLetter("a");
//   expect(testGame.triedLetters).to.eql(["a"]);
// });
