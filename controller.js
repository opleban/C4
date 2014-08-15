//Controller
var board = new Board(6,7);

View.buttons.on("click",function () {

  var col_id = $(this).attr("id").match(/\d+/);
  console.log(col_id)
  var added_chip = board.addChip(col_id);
  if(!added_chip) {
    View.displayColumnFull(); }
  else {
    View.updateBoard(added_chip.id,added_chip.color);
    if(board.won_status(added_chip)) {
      View.displayWin(added_chip.color); }
    else {
      board.switchPlayerColor();
      View.displayChangeColor(board.currentColor); }
  }
});


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




