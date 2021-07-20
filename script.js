// Work Day Scheduler
// Moment.js to show current date
// var timeDisplayEl = document.querySelector("#currentDay");
// console.log(timeDisplayEl);


// glocal var for each textarea and button
var event8 = document.getElementById("time1");
var event9 = document.getElementById("time2");
var event10 = document.getElementById("time3");
var event11 = document.getElementById("time4");
var event12 = document.getElementById("time5");
var event1 = document.getElementById("time6");
var event2 = document.getElementById("time7");
var event3 = document.getElementById("time8");
var event4 = document.getElementById("time9");
var event5 = document.getElementById("time10");
var btn8 = document.getElementById("btn-8");
var btn9 = document.getElementById("btn-9");
var btn10 = document.getElementById("btn-10");
var btn11 = document.getElementById("btn-11");
var btn12 = document.getElementById("btn-12");
var btn1 = document.getElementById("btn-1");
var btn2 = document.getElementById("btn-2");
var btn3 = document.getElementById("btn-3");
var btn4 = document.getElementById("btn-4");
var btn5 = document.getElementById("btn-5");



// timeDisplayEl.text(moment().format("MMMM Do YYYY, h:mm:ss a"));
var currentTime = $('#currentDay');

// display current time by second
function displayTime() {
    currentTime.text(moment().format(" MMMM Do YYYY, h:mm:ss a"));
};
setInterval(displayTime, 1000);

// set time range to an array to interate later
var timeRange = ["8:00", "9:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00"];

// retrieve current time in hour and minute format for comparing with time slots on scheduler
var now = moment().format(" H:mm");
console.log(typeof now);


// For future reference
// function displayColor() {
//     for (var i = 0; i < timeRange.length; i++) {
//         // if (timeRange[i] === now) {
//         //     event8.classList.add("present")
//         // }
//         console.log(moment(timeRange[i]).isBefore(now))
//         console.log(moment(timeRange[i], "H:mm"))
//         if (moment(timeRange[i]).isBefore(now)) {
//             document.querySelector("#time" + (i + 1)).classList.add("past");
//         } else if (moment(timeRange[i]).isAfter(now)){
//             document.querySelector("#time" + (i + 1)).classList.add("future");
//         } else {
//             document.querySelector("#time" + (i + 1)).classList.add("present");
//         }
//     }
// }

// function displayColor() {
//     let currentTime = moment(now, "H").format("H");
//     let givenTime;
//     for (var i = 0; i < timeRange.length; i++) {
//         givenTime = moment(timeRange[i], "H").format("H");
//         console.log(moment(givenTime, "H").isBefore(currentTime, "H"));
//         console.log("givenTime: ", givenTime);
//         console.log("currentTime: ", currentTime);
//         if (moment(givenTime).isBefore(currentTime)) {
//             document.querySelector("#time" + (i + 1)).classList.add("past");
//         } else if (moment(givenTime).isAfter(currentTime)){
//             document.querySelector("#time" + (i + 1)).classList.add("future");
//         } else {
//             document.querySelector("#time" + (i + 1)).classList.add("present");
//         }
//     }
// }





// COndition method to color code past, present, future
function displayColor() {
    // current time is retrieved in hour only format
    let currentTime = parseInt(moment(now, "H").format("H"));
    let givenTime;
    // loop through timeRange to compare each time slot to currenTime 
    for (var i = 0; i < timeRange.length; i++) {
        // parse each string in timeRange and return only the integer to compare with currentTime
        givenTime = parseInt(moment(timeRange[i], "H").format("H"));
       
        console.log("givenTime: ", givenTime);
        console.log("currentTime: ", currentTime);
        if (givenTime < currentTime) {
            console.log("past");
            document.querySelector("#time" + (i + 1)).classList.add("past");
        } else if (givenTime > currentTime){
            console.log("future");
            document.querySelector("#time" + (i + 1)).classList.add("future");
        } else {
            console.log("present");
            document.querySelector("#time" + (i + 1)).classList.add("present");
        }
    }
}
displayColor();


// For future reference
// function showEvents() {
//     for (let i = 0; i < allEvents.length; i++) {
//       document.querySelector('#time' + (i + 1)).value = allEvents[i]['time' + (i + 1)];
//     }
//   } 



function saveEvent() {
    // Save event data as an object
    var allEvent = {
        event8: event8.value.trim(),
        event9: event9.value.trim(),
        event10: event10.value.trim(),
        event11: event11.value.trim(),
        event12: event12.value.trim(),
        event1: event1.value.trim(),
        event2: event2.value.trim(),
        event3: event3.value.trim(),
        event4: event4.value.trim(),
        event5: event5.value.trim(),
    };
    // Use .setItem() to store object in storage and JSON.stringify to convert it as a string
    localStorage.setItem("allEvent", JSON.stringify(allEvent));
}

function renderEvent() {
    // Use JSON.parse() to convert text to JavaScript object
    var lastEvent = JSON.parse(localStorage.getItem("allEvent"));
    // Check if data is returned, if not exit out of the function
    if (lastEvent !== null) {
        // set textContent to the text coming back from localStorage
        event8.textContent = lastEvent.event8;
        event9.textContent = lastEvent.event9;
        event10.textContent = lastEvent.event10;
        event11.textContent = lastEvent.event11;
        event12.textContent = lastEvent.event12;
        event1.textContent = lastEvent.event1;
        event2.textContent = lastEvent.event2;
        event3.textContent = lastEvent.event3;
        event4.textContent = lastEvent.event4;
        event5.textContent = lastEvent.event5;
    } else {
        return;
    }
}

// listen to click on each save button to execute saveEvent and renderEvent
btn8.addEventListener("click", function(event) {
    event.preventDefault();
    saveEvent();
    renderEvent();
    
});
btn9.addEventListener("click", function(event) {
    event.preventDefault();
    saveEvent();
    renderEvent();
});
btn10.addEventListener("click", function(event) {
    event.preventDefault();
    saveEvent();
    renderEvent();
});
btn11.addEventListener("click", function(event) {
    event.preventDefault();
    saveEvent();
    renderEvent();
});
btn12.addEventListener("click", function(event) {
    event.preventDefault();
    saveEvent();
    renderEvent();
});
btn1.addEventListener("click", function(event) {
    event.preventDefault();
    saveEvent();
    renderEvent();
});
btn2.addEventListener("click", function(event) {
    event.preventDefault();
    saveEvent();
    renderEvent();
});
btn3.addEventListener("click", function(event) {
    event.preventDefault();
    saveEvent();
    renderEvent();
});
btn4.addEventListener("click", function(event) {
    event.preventDefault();
    saveEvent();
    renderEvent();
});
btn5.addEventListener("click", function(event) {
    event.preventDefault();
    saveEvent();
    renderEvent();
});

// The init() function fires when the page is loaded 
function init () {
    // When the init function is executed, the code inside renderEvent function will also execute
    renderEvent();
}
init();

