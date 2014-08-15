View = {

  updateBoard: function(square_id, color){
    $('#'+square_id).addClass(color);
  },

  displayChangeColor: function(color){
    $("#message").html("It's " + color + "'s turn!");
  },

  displayWin: function(color){
    $("#message").html(color + " wins!");
  },

  clear: function() {
    $("td").removeClass("red").removeClass("black");
  },

  newGameButton: $("#new_game"),
  columnButtons: $("nav button"),

  displayColumnFull: function(){
    $("#message").html("Illegal move: that column is already full!");
  }
}
