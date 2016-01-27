function Game(player1,player2) {

}

function Board() {
  this.boardArray = [];

  for (var index=0; index < 9; index++) {
    this.boardArray.push(Math.pow(2,index));
  }
}

function Player(mark) {
  this.mark = mark;
}
