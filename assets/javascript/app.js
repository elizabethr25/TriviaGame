$(document).ready(function() {

var timer = 10;
var intervalId;

function run() {
    intervalId = setInterval(decrement, 1000);
}

function decrement () {
    timer--;
    $("#time").html("<p> Time Remaining: " + timer + "</p>");

    if(timer === 0){
        stop ();
        alert("Time's Up!");
    }
}

function stop () {
    clearInterval(intervalId);
}

run();

})