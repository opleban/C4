View = {

  updateBoard: function(square_id, color){
    $('#'+square_id).addClass(color);
  },

  displayChangeColor: function(color){
    alert("It's " + color + "'s turn!");
  },

  dislay_win: function(color){
    alert(color + "wins!")
  },

  buttons: function(){
    return $(button);
  },

  displayColumnFull: function(){
    alert("Illegal move: that column is already full!")

  }
}