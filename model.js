
function Square() {
  this.color = ""
}

function Board (height,width) {
  this.height = height;
  this.width = width;
  this.currentColor = "";

  var outer_array_of_rows = new Array(height);
  var inner_array_of_blanks = new Array(width);
  // Couldn't get the f***ing map function to work so do it with loops below
  // inner_array_of_blanks.map(function(val,index,array) {array[index] = new Square();});
  // this.cells = outer_array_of_rows.map(function() {return inner_array_of_square_objs});
  var inner_array_of_square_objs = new Array(width);
  for (i=0;i<inner_array_of_blanks.length;i++) {
    inner_array_of_square_objs[i] = new Square();
  }
  for (i=0;i<outer_array_of_rows.length;i++) {
    outer_array_of_rows[i] = inner_array_of_square_objs;
  }
  this.cells = outer_array_of_rows;
}

Board.prototype = {
  addChip: function (column) {
    for (i=(this.height-1);i>0;i--) {
      if this.cells[i][column].color == ""
        this.cells[i][column].color = this.currentColor
    }

  }
  findOpenSpace: function (column){
    for (i=(this.height-1);i>0;i--) {
      this.cells[i][column]
    }
  }
}

// var findOpenSpace =function(column){
//   for (var row = board.length-1; row >= 0; --row ){
//     return board[row][column] if board[row][column].color === null
//   }
//   return false;
// }