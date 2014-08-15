//Controller
var board = new Board(6,7);

View.columnButtons.on("click",function () {

  var col_id = $(this).attr("id").match(/\d+/);
  var added_chip = board.addChip(col_id);
  if(!added_chip) {
    View.displayColumnFull(); }
  else {
    View.updateBoard(added_chip.id,added_chip.color);
    if(board.checkWin(added_chip)) {
      View.displayWin(added_chip.color);
      View.disablePlay();
    }
    else {
      board.switchPlayerColor();
      View.displayChangeColor(board.currentColor); }
  }
});

View.newGameButton.on("click",function() {
  board.clear();
  View.clear();
  View.enablePlay();
})


// $(document).ready(){ initialize }

// function initialize(){
//   var board = new Board
//   var view = new View
//   var controller = new Controller( board, view )
// }

// function Controller( board, view ){
//   this.board = board
//   this.view = view
// }




