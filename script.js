
function countdown() {
    var countdownElement = document.getElementById("countdown");
    var count = 10;

    function updateCountdown() {
      countdownElement.textContent = count;
      count--;

      if (count < 0) {
        countdownElement.innerText = "Happy Independence Day";
        clearInterval(interval);
      }
    }

    updateCountdown();
    var interval = setInterval(updateCountdown, 1000);
  }

  
  window.onload = countdown;