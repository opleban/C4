
function Square(id) {
  this.id = id;
  this.color = "";
}

function Board (height,width) {
  this.height = height;
  this.width = width;
  this.currentColor = "red";

  //Creates 2D Array of Blanks called cells
  this.cells = new Array(height);
  for (var i=0;i<height;i++) {
    this.cells[i] = new Array (width);
  }
  //Fills cells with Square Objects
  for(i=0;i<height;i++) {
    for (j=0;j<width;j++) {
      id = i*this.width+j;
      this.cells[i][j] = new Square(id);
    }
  }

}

Board.prototype = {
  addChip: function (col_num) {
    for (i=(this.height-1);i>=0;i--) {
      var current_cell = this.cells[i][col_num]
      if (current_cell.color == "") {
        current_cell.color = this.currentColor;
        return current_cell; }
    }
    return null;
  },

  won_status: function (added_chip) {
    return false;
  },

  indexOf: function(id) {
    return [id/this.width,id%this.width];
  },

  switchPlayerColor: function () {
    if(board.currentColor == "red") { board.currentColor = "black"; }
    else {board.currentColor = "red"; }
  },
}
