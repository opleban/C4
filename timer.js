var Timer = {
  $currTime: $('#time'),
  currInterval: null,
  countdown: function(timeLimit){
    var start = new Date().getTime();
    var timeLeft = timeLimit
    this.currInterval = window.setInterval(function(){
      this.$currTime.html(timeLeft);
      --timeLeft;
      if (timeLeft < 0){
        console.log("OUT OF TIME");
        this.breakCountdown("zero");
      }
    }.bind(this), 1000);
  },

  breakCountdown: function(zero){
    window.clearInterval(this.currInterval);
    if (zero)
      return false;
    else
      return true;
  }
};
j
