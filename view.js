View = {

  updateBoard: function(square_id, color){
  // var top_move_array = [120px,  220px, 320px, 440px, 540px, 650px, 750px]
  // var top_move_pixels = top_move_array[square_row]
  // if (color == "red") {
  // $("#chip_"+square_col).attr("src", "http://files.softicons.com/download/game-icons/bob-omb-icons-by-brian-burns/png/512/bobombred.png");
  // }
  // $("#chip_"+square_col).
  // $("#chip_"+square_col).animate({"top": top_move_array})
  if( color == "red") {
    $('#'+square_id).html("<img src='http://files.softicons.com/download/game-icons/bob-omb-icons-by-brian-burns/png/512/bobombred.png' >");  }
  else {
    $('#'+square_id).html("<img src='http://t2.rbxcdn.com/a15e4c68e977e18630aea21ee7494ec7' >"); }
  },

  displayChangeColor: function(color){
    $("#message").html("It's " + color + "'s turn!");
  },

  displayWin: function(color){
    $("#message").html(color + " wins!");
    $("#game_over").animate({"width": "800px", "height": "500px", "top": "10px", "right": "200px"},1000);
  },

  disablePlay: function() {
    $("[id*='col']").attr("disabled", "disabled");
  },

  enablePlay: function() {
    $("[id*='col']").removeAttr("disabled");
  },

  clear: function() {
    $("td").html("");
    $("#game_over").css({"position": "absolute" , "top": "600px", "left": "300px", "width": "2px","height": "2px"});
  },

  newGameButton: $("#new_game"),
  columnButtons: $("nav button"),

  displayColumnFull: function(){
    $("#message").html("Illegal move: that column is already full!");
  }
}
