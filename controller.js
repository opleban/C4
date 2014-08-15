require_relative "model.js"
require_relative "view.js"
//Controller
var board = new Board(6,7);
View.buttons.on("click",function () {
  var id = this.attr("id").match(/\d+/)
  if(board.addChip(id)) {
    var added_chip = board.addChip(id); }
  else {
    View.displayColumnFull(); }

  View.updateBoard(added_chip.id,added_chip.color);
  if(board.won_status(added_chip))
    View.display_win(added_chip.color)
  else {
    board.switchPlayerColor();
    View.switchPlayerColor(board.currentColor); }
}


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




