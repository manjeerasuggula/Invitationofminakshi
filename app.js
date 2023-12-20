document.addEventListener("DOMContentLoaded", function () {
  var divs = document.querySelectorAll(".example1");

  function fadeInDivs() {
    divs.forEach(function (div, index) {
      setTimeout(function () {
        div.style.opacity = 1;
        div.style.transform = "translateY(0)";
      }, index * 500); // Adjust the delay as needed
    });
  }

  fadeInDivs();
});

var currentDivIndex = 1;

function showDiv(divNumber) {
  var currentButton = document.getElementById("Button" + currentDivIndex);
  var nextButton = document.getElementById("Button" + (currentDivIndex + 1));
  var currentDiv = document.getElementById("div" + (currentDivIndex + 1));

  // Show the current div
  currentDiv.style.display = "block";

  // Hide the current button
  currentButton.style.display = "none";

  // Show the next button (if available)
  if (nextButton) {
    nextButton.style.display = "inline-block";
    currentDivIndex++;
    scrollToBottom();
  }
}
var chatBox = document.getElementById("chatBox");
function scrollToBottom() {
  setTimeout(() => {
    chatBox.scrollTop = chatBox.scrollHeight;
  }, 1500);
}
function updatedCurrentTime() {
  var currentDate = new Date();
  var hours = currentDate.getHours();
  var minutes = currentDate.getMinutes();
  var ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;
  var formatedTime =
    hours + ":" + (minutes < 10 ? "0" : "") + minutes + " " + ampm;
  var currentTimeDivs = document.querySelectorAll(".time");
  currentTimeDivs.forEach(function (div) {
    div.textContent = formatedTime;
  });
}
updatedCurrentTime();

setInterval(updatedCurrentTime, 1000);
