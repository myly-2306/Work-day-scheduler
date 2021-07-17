// Work Day Scheduler
// Moment.js to show current date
// var timeDisplayEl = document.querySelector("#currentDay");
// console.log(timeDisplayEl);

// timeDisplayEl.text(moment().format("MMMM Do YYYY, h:mm:ss a"));

// 
function displayTime() {
 $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));
};
setInterval(displayTime, 1000);
// function displayTime() {
//     var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
//     now.innerHTML = rightNow;
// };

// function displayTime() {
//     var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
//     timeDisplayEl.text(rightNow);
// }
// setInterval(displayTime, 1000);

// set time range to an array to interate later
var timeRange = [8, 9, 10, 11, 12, 1, 2, 3, 4, 5];


// COndition method to color code past, present, future
// if past, grey
// if present, green
//  if future, yellow
// for (i = 0, i < timeRange.length, i++ ) {

// }




// event listerner to each time slot to save event to local storage
// Identify key and value
// JSON to stringtify aND parse ;