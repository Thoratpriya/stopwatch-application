let timer; // Timer variable
let time = 0; // Time in milliseconds
let running = false; // Running flag

function startStop() {
  if (running) {
    clearInterval(timer); // Stop the timer
    document.getElementById("startStopBtn").textContent = "Start";
    running = false;
  } else {
    timer = setInterval(updateTime, 10); // Start the timer with 10ms interval
    document.getElementById("startStopBtn").textContent = "Stop";
    running = true;
  }
}

function reset() {
  clearInterval(timer); // Stop the timer
  time = 0; // Reset time
  document.getElementById("display").textContent = "00:00:00";
  document.getElementById("startStopBtn").textContent = "Start";
  running = false;
}

function updateTime() {
  time += 10; // Increment time by 10ms
  let hours = Math.floor(time / (1000 * 60 * 60));
  let minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((time % (1000 * 60)) / 1000);
  let milliseconds = Math.floor((time % 1000) / 10);

  // Format time as HH:MM:SS
  let displayTime = 
    (hours < 10 ? "0" + hours : hours) + ":" +
    (minutes < 10 ? "0" + minutes : minutes) + ":" +
    (seconds < 10 ? "0" + seconds : seconds);

  document.getElementById("display").textContent = displayTime;
}
