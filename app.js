//Declaring variables

let seconds = 0
let minutes = 0
let hours = 0

//define variables to hold display value
let displaySeconds = 0
let displayMinutes = 0
let displayHours = 0

//define variable to hold setInterval() function

let interval = null

//define variable to hold stopwatch startus

let status = "stopped"
 
//Create function to increase timer (login to determine when to increase next value)

function stopWatch() {

    seconds++

    if(seconds / 60 === 1) {
        seconds = 0
        minutes++

        if(minutes / 60 === 1) {
            minutes = 0
            hours++
        }
    }

    //If seconds/minutes/hours are only one digit then add a leading 0 to value
    if(seconds < 10) {
        displaySeconds = "0" + seconds.toString()
    } else {
        displaySeconds = seconds
    }

    if(minutes < 10) {
        displayMinutes = "0" + minutes.toString()
    } else {
        displayMinutes = minutes
    }

    if(hours < 10) {
        displayHours = "0" + hours.toString()
    } else {
        displayHours = hours
    }

    //display the updated time to the user
    document.getElementById('display').innerHTML = displayHours + ":" + displayMinutes + ":" + displaySeconds

}

function runWatch() {
    stopWatch()
    window.setInterval(stopWatch, 1000)
    document.getElementById('startstop').innerHTML = 'Stop'
}

document.getElementById('startstop').addEventListener('click', runWatch) 

