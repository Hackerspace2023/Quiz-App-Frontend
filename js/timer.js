// Timer Code Here
// document.getElementById("centered").innerHTML = "Hilll";


function countdown() {
    var seconds = 15;
    function tick() {
      var counter = document.getElementById("centered");
      seconds--;
      counter.innerHTML =
        + (seconds < 10 ? "0" : "") + String(seconds);
      if (seconds > 0) {
        setTimeout(tick, 1000);
      }
    }
    tick();
  }
  countdown();