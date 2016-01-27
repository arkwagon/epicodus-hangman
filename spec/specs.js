describe("Board", function() {
  it("creates 9 spaces when it is initialized", function() {
    var testBoard = new Board();
    expect(testBoard.boardArray).to.eql([1,2,4,8,16,32,64,128,256]);
  });
});

describe("Player", function() {
  it("returns the player's mark", function() {
    var testPlayer = new Player("X");
    expect(testPlayer.mark).to.equal("X");
  });
});

// describe("Space", function() {
//   it("returns the player's mark", function() {
//     var testSpace = new Space();
//     expect(testPlayer.mark).to.equal("X");
//   });
// });

describe("Game", function() {
  it("creates two players", function() {
    var testGame = new Game(player1,player2);
    expect(testGame.player1).to.equal()
  })
})
