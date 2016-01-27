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
// describe("WordEncrypt", function() {
//   it("will encrypt words for game", function() {
//     var testWordEncrypt = new WordEncrypt();
//     expect(testWordBank.wordArray).to.eql(["_ _ _ _ _"]);
//   });
// });
