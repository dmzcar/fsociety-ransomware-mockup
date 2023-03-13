// Check if the countdown end time is stored in local storage
var countDownDate = localStorage.getItem("countDownDate");

// If the countdown end time is not stored, set it to 24 hours from now
if (!countDownDate) {
  var startTime = new Date().getTime();
  var countDownDuration = 24 * 60 * 60 * 1000;
  countDownDate = startTime + countDownDuration;
  localStorage.setItem("countDownDate", countDownDate);
}

// Update the countdown every second
var x = setInterval(function() {

  // Get the current time
  var now = new Date().getTime();

  // Calculate the time remaining
  var timeRemaining = countDownDate - now;

  // If the countdown is finished, display a message
  if (timeRemaining < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "<span style='color: red;'>EXPIRED</span>";
    return;
  }

  // Calculate hours, minutes, and seconds
  var hours = Math.floor(timeRemaining / (1000 * 60 * 60));
  var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  // Display the time left
  document.getElementById("countdown").innerHTML = "Time left: " +
    "<span style='color: red;'>" + hours + "</span>H " +
    "<span style='color: red;'>" + minutes + "</span>m " +
    "<span style='color: red;'>" + seconds + "</span>s ";

}, 1000);


// // Set the date and time to countdown to
// var countDownDate = new Date("March 13, 2023 23:30:00").getTime();


// // Update the countdown every second
// var x = setInterval(function() {

//   // Get the current time
//   var now = new Date().getTime();

//   // Calculate the time remaining
//   var timeRemaining = countDownDate - now;

//   // If the countdown is finished, display a message
//   if (timeRemaining < 0) {
//     clearInterval(x);
//     document.getElementById("countdown").innerHTML = "<span style='color: red;'>EXPIRED</span>";
//     return;
//   }

//   // Calculate hours, minutes, and seconds
//   var hours = Math.floor(timeRemaining / (1000 * 60 * 60));
//   var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
//   var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

//   // Display the time left
//   document.getElementById("countdown").innerHTML = "Time left: " +
//     "<span style='color: red;'>" + hours + "</span>H " +
//     "<span style='color: red;'>" + minutes + "</span>m " +
//     "<span style='color: red;'>" + seconds + "</span>s ";

// }, 1000);
