checkWin : function(chip) {
	var coords = this.indexOf(chip.id);
	var row = coords[0];
	var col = coords[1];

	sameColor = function(row, col) {
		return this.cells[row][col].color === chip.color;
	}

	checkColumn = function(){
		var currentSpace = this.cells[row][col];
		var counter = 1;

		for (var r = row+1; r < this.cells.length; r++){
			this.sameColor(r, col) ? counter++ : break;

			if (counter >= 4)
				return true;
		}

		return false;
	}

	checkRow = function(){
		var counter = 0;

		for (var c=0; c < this.cells[row].length; c++){
			this.sameColor(row, c) ? counter++ : counter = 0;

			if (counter >= 4)
				return true;
		}

		return false;
	}

	checkDiagFromLeft = function(){
		// function to check for a diagonal win from left to right, i.e. /
		var nextRow = row - 1;
		var nextCol = col + 1;
		var previousRow = row + 1;
		var previousCol = col - 1;

		// "next" refers to board movement from L to R, D to U
		for(nextRow, nextCol; nextRow >= 0; nextRow--, nextCol++)
			if(nextCol > 6 || !sameColor(color, nextRow, nextCol))
				break;

		// "previous" refers to board movement from R to L, U to D
		for(previousRow, previousCol; previousRow < 6; previousRow++, previousCol--)
			if(previousCol < 0 || !sameColor(previousRow, previousCol))
				break;

		return previousRow - nextRow > 4;
	}

	checkDiagFromRight = function(){
		// function to check for a diagonal win from right to left, i.e. \
		var nextRow = row + 1;
		var nextCol = col + 1;
		var previousRow = row - 1;
		var previousCol = col - 1;

		// "next" refers to board movement from L to R, U to D
		for(nextRow, nextCol; nextRow < 6; nextRow++, nextCol++)
			if(nextCol > 6 || !sameColor(nextRow, nextCol))
				break;

		// "previous" refers to board movement from R to L, D to U
		for(previousRow, previousCol; previousRow >= 0; previousRow--, previousCol--)
			if(previousCol < 0 || !sameColor(previousRow, previousCol))
				break;

		return nextRow - previousRow > 4;
	}

	if( checkRow() || checkColumn() || checkDiagFromLeft() || checkDiagFromRight() )
		return true;

	return false;
}
