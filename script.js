var timerEl = document.getElementById("timer");

var startTime = 60;
function timer() {
    
  
    var timerInterval = setInterval(function() {
      timerEl.textContent = startTime
      startTime--;
      if (startTime === 0) {
        timerEl.textContent = 0;
        clearInterval(timerInterval);
      }
 
    }, 1000);
  }
  
  
  timer(event)
