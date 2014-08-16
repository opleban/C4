
var board = new Board(6,7);
var dumbComputerPlaying = false;


function computerMoveLogic () {
  do {
    var random_col_num = Math.floor(Math.random() * board.width)
    var computer_added_chip = board.addChip(random_col_num);
  } while (!computer_added_chip)

  View.updateBoard(computer_added_chip.id,computer_added_chip.color);

  if(board.checkWin(computer_added_chip)) {
    View.displayWin("computer");
  }
  else {
    board.switchPlayerColor();
    View.displayChangePlayer("your");
    Timer.countdown(5);
  }
}

View.startGameButton.on("click", function(){
  View.disableStart();
  View.displayChangePlayer(board.currentColor);
  Timer.countdown(5);

  View.columnButtons.on("click",function () {
    Timer.breakCountdown();
    var col_id = $(this).attr("id").match(/\d+/);
    var added_chip = board.addChip(col_id);
    if(!added_chip) {
      View.displayColumnFull();
    }
    else {
      View.updateBoard(added_chip.id,added_chip.color);
      if(board.checkWin(added_chip)) {
        if (dumbComputerPlaying) {
          View.displayWin("you");}
        else {
          View.displayWin(board.currentColor);}
      }
      else {
        board.switchPlayerColor();
        if(dumbComputerPlaying) {
          View.displayChangePlayer("computer");
           setTimeout(function(){computerMoveLogic()},1000);
        }
        else {
          View.displayChangePlayer(board.currentColor);
          Timer.countdown(5);
        }
      }
    }
  });
});

View.computerButton.on("click",function() {
  View.displayChangePlayer("your");
  dumbComputerPlaying = true;
});

View.newGameButton.on("click",function() {
  Timer.breakCountdown();
  board.clear();
  View.clear();
  dumbComputerPlaying = false;
  View.enablePlay();
  Timer.countdown(5);
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

//Controller

// function Controller(){
//   this.board = new Board(6,7);
//   this.smartComputerPlaying = false;
//   this.dumbComputerPlaying = false;
//   this.addListeners = function {
//     View.columnButtons.on("click",function ())
//   }
//   this.addChipModelViewActions = function {

//   }

//   this.dumbComputerActions = function {

//   }

// }



