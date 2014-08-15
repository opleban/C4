
function Square(id) {
  this.id = id;
  this.color = "";
}

function Board (height,width) {
  this.height = height;
  this.width = width;
  this.currentColor = "";

  //Creates 2D Array of Blanks called cells
  var this.cells = new Array(height);
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
  addChip: function (column) {
    for (i=(this.height-1);i>0;i--) {
      if (this.cells[i][column].color == "") {
        this.cells[i][column].color = this.currentColor;
        return this.cells[i][column]; }
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
    if board.currentColor == "red" { board.currentColor = "black"; }
    else {board.currentColor = "red"; }
  },
}
