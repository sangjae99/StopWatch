const appendTens = document.getElementById('tens');
const appendSeconds = document.getElementById('seconds');
const buttonStart = document.getElementById('button-start');
const buttonStop = document.getElementById('button-stop');
const buttonReset = document.getElementById('button-reset');

let seconds = 0;
let tens = 0;
let Interval;

buttonStart.onclick = function() {
    interval = setInterval(startTimer, 10); 
    var buttonStartStyle = buttonStart.style;
    buttonStart.style.backgroundColor = 'rgb(0, 255, 0)';
    buttonStartStyle.width = '100px';
    buttonStartStyle.height = '100px';
    
}

buttonStop.onclick = function() {
    clearInterval(interval);
    buttonStop.style.backgroundColor = 'rgb(255, 0, 0)';
}

buttonReset.onclick = function() {
    clearInterval(interval);
    buttonReset.style.backgroundColor = 'rgb(0, 0, 255)';
    seconds = 0;
    tens = 0;
    appendTens.innerText = 0;
    appendSeconds.innerText = 0;
}
function startTimer() {
    tens++;

    if(tens > 99) {
        // seconds 1 올리기
        seconds++;
        // appendSeconds 에도 반영하기
        appendSeconds.innerText = seconds;
        // tens , appendsTens ==> 0
        tens = 0;
        appendTens.innerText = 0;

    } else {
        appendTens.innerText = tens
    }

}