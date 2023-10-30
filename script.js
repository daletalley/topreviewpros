// script.js

// Example of a function to handle a button click event
function handleButtonClick() {
    alert("Button clicked!");
  }
  
  // Example of initializing a function on page load
  window.onload = function() {
    // Get the button element
    var button = document.querySelector(".btn-primary");
    
    // Add a click event listener to the button
    button.addEventListener("click", handleButtonClick);
  }