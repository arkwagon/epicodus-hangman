describe("WordBank", function() {
  it("creates an array to store words for game", function() {
    var testWordBank = new WordBank();
    expect(testWordBank.wordArray).to.eql(["candy"]);
  });

  it("returns a word from WordBank's wordArray", function() {
    var testWordBank = new WordBank();
    expect(testWordBank.wordSelector()).to.equal("candy");
  });
  it("will encrypt words for game", function() {
    var testWordBank = new WordBank();
    expect(testWordBank.encryptWord()).to.equal("_ _ _ _ _ ");
  });
  it("will compare userInputLetter to puzzleWord and replace matches with the appropriate letter", function() {
    var testWordBank = new WordBank();
    testWordBank.wordSelector();
    expect(testWordBank.compareLetter("y")).to.equal("_ _ _ _ y ");
  });

});

describe("Game", function() {
  it("creates a new game with a starting score of 6", function() {
    var testGame = new Game();
    expect(testGame.tries).to.equal(6);
  });
  it("subtract from starting score by 1", function() {
    var testGame = new Game();
    expect(testGame.subtractTries()).to.equal(5);
  });
  it("will end the game when game.tries equals 0", function() {
    var testGame = new Game();
    expect(testGame.gameOver()).to.equal("you lose");
  });
  it("will create an array with the alphabet in it", function() {
    var testGame = new Game();
    expect(testGame.letters).to.eql( ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"] );
  });
  it("will create an array for tried letters to be pushed in to", function() {
    var testGame = new Game();
    expect(testGame.triedLetters).to.eql([]);
  });
  it("will push letters into triedLetters", function() {
    var testGame = new Game();
    testGame.usedLetter("a");
    expect(testGame.triedLetters).to.eql(["a"]);
  });
  it("will push tried letters into the triedLetters array", function() {
    var testGame = new Game();
    testGame.usedLetter("y");
    expect(testGame.triedLetters).to.include("y");
  });
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
//     expect(testWordBank.wordArray).to.eql(["_ _ _ _ _"]);
//   });
// });
