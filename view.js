View = {

  updateBoard: function(square_id, color){
    $('#'+square_id).addClass(color);
  },

  displayChangeColor: function(color){
    alert("It's " + color + "'s turn!");
  },

  displayWin: function(color){
    alert(color + "wins!")
  },

  buttons: $("button"),

  displayColumnFull: function(){
    alert("Illegal move: that column is already full!")

  }
}
