const timeDiv = document.querySelector('.time')
const play = document.querySelector('.start')
const reset = document.querySelector('.reset')

let displayHour = '00';
let displatMinutes = '00';
let displaySecond = '00'
let status = 'stopped'
let interval = null;

let second = 0;
let minute = 0;
let hour = 0;
timeDiv.innerHTML = displayHour + ": " + displatMinutes + ': ' + displaySecond;

play.addEventListener('click', function() {
    if (status === 'stopped') {
        interval = window.setInterval(stopWatch, 1000)
        status = 'start';
        play.innerText = 'STOP';
        interval();
    }
    if(status = 'start') {
        window.clearInterval(interval)
        status = 'stopped';
        play.innerText = 'START'
    }
})

reset.addEventListener('click', function() {
    play.innerText = 'START';
    status = 'stopped'
    window.clearInterval(interval);
    displayHour = '00';
    displatMinutes = '00';
    displaySecond = '00';
    timeDiv.innerHTML = displayHour + ": " + displatMinutes + ': ' + displaySecond;
})

function stopWatch() {
    second++;
    if(second/60 === 1) {
        second = 0;
        minute++;
    }
    if(minute/60 === 1) {
        minute = 0;
        hour++;
    }

    if(second < 10) {
        displaySecond = '0' + second.toString();
    } else {
        displaySecond = second
    }
    if(minute < 10) {
        displatMinutes = '0' + minute.toString();
    } else {
        displatMinutes = minute
    }
    if(hour< 10) {
        displayHour = '0' + hour.toString()
    } else {
        displayHour = hour
    }
    timeDiv.innerHTML = displayHour + ": " + displatMinutes + ': ' + displaySecond;
}





