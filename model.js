
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

  clear: function() {
    for(i=0;i<this.height;i++) {
      for (j=0;j<this.width;j++) {
        this.cells[i][j].color="";
      }
    }
  },


  indexOf: function(id) {
    return [Math.floor(id/this.width),id%this.width];
  },

  switchPlayerColor: function () {
    if(this.currentColor == "red") {this.currentColor = "black"; }
    else {this.currentColor = "red"; }
  },

  smartComputerPlay: function(added_chip) {
    coords = this.indexOf(added_chip);
    row_num = coords[0];
    col_num = coords[1];

    //Check Row Right

    //Check Row Left

    //Check Row Sides

    //Check Column Up

    //Check Column Down

    //Check Up Down

    //Check Diagonal Right

    //Check Diagoal Left

  },

  sameColor: function(row, col, chip) {
    return this.cells[row][col].color === chip.color;
  },

  checkColumn: function(row,col,chip) {
    var currentSpace = this.cells[row][col];
    var counter = 1;

    for (var r = row+1; r < this.height; r++){
      console.log(this)
      if(this.sameColor(r,col,chip))
        counter ++
      else
        break
      // this.sameColor(r, col) ? counter++ : break;

      if (counter >= 4)
        return true;
    }

    return false;
  },

  checkRow: function(row,col,chip){
    var counter = 0;
    console.log(this.cells[row])
    for (var c=0; c < this.width; c++){
      this.sameColor(row, c, chip) ? counter++ : counter = 0;

      if (counter >= 4)
        return true;
    }

    return false;
  },

  checkDiagFromLeft: function(row,col,chip){
    // function to check for a diagonal win from left to right, i.e. /
    var nextRow = row - 1;
    var nextCol = col + 1;
    var previousRow = row + 1;
    var previousCol = col - 1;

    // "next" refers to board movement from L to R, D to U
    for(nextRow, nextCol; nextRow >= 0; nextRow--, nextCol++)
      if(nextCol > 6 || !this.sameColor(nextRow, nextCol, chip))
        break;

    // "previous" refers to board movement from R to L, U to D
    for(previousRow, previousCol; previousRow < 6; previousRow++, previousCol--)
      if(previousCol < 0 || !this.sameColor(previousRow, previousCol, chip))
        break;

    return previousRow - nextRow > 4;
  },

  checkDiagFromRight: function(row,col,chip){
    // function to check for a diagonal win from right to left, i.e. \
    var nextRow = row + 1;
    var nextCol = col + 1;
    var previousRow = row - 1;
    var previousCol = col - 1;

    // "next" refers to board movement from L to R, U to D
    for(nextRow, nextCol; nextRow < 6; nextRow++, nextCol++)
      if(nextCol > 6 || !this.sameColor(nextRow, nextCol,chip))
        break;

    // "previous" refers to board movement from R to L, D to U
    for(previousRow, previousCol; previousRow >= 0; previousRow--, previousCol--)
      if(previousCol < 0 || !this.sameColor(previousRow, previousCol,chip))
        break;

    return nextRow - previousRow > 4;
  },

  checkWin: function(chip) {
    var coords = this.indexOf(chip.id);
    var row = coords[0];
    var col = coords[1];
    if( this.checkRow(row,col,chip) || this.checkColumn(row,col,chip) || this.checkDiagFromLeft(row,col,chip) || this.checkDiagFromRight(row,col,chip) )
      return true;
    else
      return false;
  } //Ends Check Win Function

} //Ends Board Prototype
