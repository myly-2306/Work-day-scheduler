// Work Day Scheduler
// Moment.js to show current date
// var timeDisplayEl = document.querySelector("#currentDay");
// console.log(timeDisplayEl);

// timeDisplayEl.text(moment().format("MMMM Do YYYY, h:mm:ss a"));
var currentTime = $('#currentDay');

function displayTime() {
    currentTime.text(moment().format("MMMM Do YYYY, h:mm:ss a"));
};
setInterval(displayTime, 1000);

// set time range to an array to interate later
var timeRange = [8, 9, 10, 11, 12, 1, 2, 3, 4, 5];


// COndition method to color code past, present, future
// if past, grey
// if present, green
//  if future, yellow

// current time in hour format
// function currentHour() {
//     var now = moment().hour();



//     for (i = 0; i < timeRange.length; i++) {
//     if (i == currentTime)
//     }
// }


// var event8 = document.querySelector('#am');
// event8.textContent = eventAt8;
// event listerner to each time slot to save event to local storage
// Identify key and value
// JSON to stringtify aND parse ;


// btn8.addEventListener("click", function() {
//     localStorage.setItem("event8", eventAt8);
// }); 

// localStorage.getItem("event8");

var event8 = document.querySelector("#8-am");
var btn8 = document.querySelector("#btn-8");

function saveEvent() {
    var allEvent = {
        event8: event8.value.trim(),
        
    };
    localStorage.setItem("allEvent", JSON.stringify(allEvent));
}

function renderEvent() {
    // Use JSON.parse() to convert text to JavaScript object
    var lastEvent = JSON.parse(localStorage.getItem("allEvent"))
}

btn8.addEventListener("click", function(event) {
    event.preventDefault();
    saveEvent();
    renderEvent();
    });







// This function is being called below and will run when the page loads.
function init() {
    // Get stored todos from localStorage
    var storedTodos = JSON.parse(localStorage.getItem("todos"));
  
    // If todos were retrieved from localStorage, update the todos array to it
    if (storedTodos !== null) {
      todos = storedTodos;
    }
  
    // This is a helper function that will render todos to the DOM
    renderTodos();
  }
  
  function storeTodos() {
    // Stringify and set key in localStorage to todos array
    localStorage.setItem("todos", JSON.stringify(todos));
  }