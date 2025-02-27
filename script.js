// Select the necessary elements
const display = document.getElementById('display');
const startStopButton = document.getElementById('startStop');
const resetButton = document.getElementById('reset');

// Initialize variables for stopwatch logic
let timerInterval;  // Stores the interval ID for the timer
let isRunning = false;  // To check if stopwatch is running
let time = 0;  // Time in milliseconds

// Function to update the display
function updateDisplay() {
  // Convert time (in milliseconds) to minutes:seconds.milliseconds
  const minutes = Math.floor(time / 60000);
  const seconds = Math.floor((time % 60000) / 1000);
  const milliseconds = time % 1000;

  // Format the time display with leading zeros
  display.textContent = `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}.${Math.floor(milliseconds / 100)}`
}

// Function to start or stop the stopwatch
function toggleStartStop() {
  if (isRunning) {
    // Stop the timer if it's running
    clearInterval(timerInterval);
    startStopButton.textContent = 'Start';  // Change button text to 'Start'
  } else {
    // Start the timer if it's stopped
    timerInterval = setInterval(() => {
      time += 100;  // Increase time by 100ms every interval
      updateDisplay();
    }, 100);  // Run the function every 100ms
    startStopButton.textContent = 'Stop';  // Change button text to 'Stop'
  }
  isRunning = !isRunning;  // Toggle the running state
}

// Function to reset the stopwatch
function resetStopwatch() {
  clearInterval(timerInterval);  // Stop the timer if it's running
  isRunning = false;  // Reset running state
  time = 0;  // Reset time to 0
  updateDisplay();  // Update display to show '00:00.0'
  startStopButton.textContent = 'Start';  // Reset button text to 'Start'
}

// Attach event listeners to buttons
startStopButton.addEventListener('click', toggleStartStop);
resetButton.addEventListener('click', resetStopwatch);









// //select needed elements
// const display = document.getElementById("display");
// const startStopButton = document.getElementById("startStop");
// const resetButton = document.getElementById("reset");
// //set variables needed for the logic
// let timerInterval;
// let isRunning = false;
// let time = 0;

// //function to display the updated time
// function updateDisplay() {
//   const hours = Math.floor(time / 3600);
//   const minutes = Math.floor((time % 3600) / 60);
//   const seconds = time % 60;

//   // uffa formatting the diplsy ui
//   display.textContent = `${hours < 10 ? "0" : ""}${hours}:${
//     minutes < 10 ? "0" : ""
//   }${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
// }
// // go with toggling the stopstart button
// function toggleStartStop() {
//   if (isRunning) {
//     clearInterval(timerInterval);
//     startStopButton.textContent = "Start";
//   } else {
//     timerInterval = setInterval(() => {
//       time += 1;
//       updateDisplay();
//     }, 1000);
//     startStopButton.textContent = "Stop";
//   }
//   // here is the toogling trick
//   isRunning = !isRunning;
// }
// // reseting function
// function resetStopwatch(){
//     clearInterval(timerInterval);
//     isRunning=false;
//     time =0;
//     updateDisplay();
//     startStopButton.textContent="start"

// }
// startStopButton.addEventListener('click',toggleStartStop);
// resetButton.addEventListener('click',resetStopwatch);