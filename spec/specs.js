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
});

describe("Player", function() {
  it("creates a player to fuck off", function() {
    var testGame = new Game();
    expect(testGame.tries).to.equal(6);
  });
});

// describe("WordEncrypt", function() {
//   it("will encrypt words for game", function() {
//     var testWordEncrypt = new WordEncrypt();
//     expect(testWordBank.wordArray).to.eql(["_ _ _ _ _"]);
//   });
// });
