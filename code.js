


let seconds = 0;
let miliseconds = 0;
const displaySeconds = document.getElementById('seconds')
const displayMiliseconds = document.getElementById('miliseconds')
let interval




const timer = () => {
    miliseconds++

    if (Number(miliseconds) <= 9) {
        displayMiliseconds.innerHTML = `0${miliseconds}`
    }

    if (Number(miliseconds) > 9) {
        displayMiliseconds.innerHTML = miliseconds
    }

    if (Number(miliseconds) > 99) {
        console.log('seconds')
        seconds++
        displaySeconds.innerHTML = `0${seconds}`
        miliseconds = 0
        displayMiliseconds.innerHTML = `0${miliseconds}`
    }

    if (Number(seconds) > 9) {
        displaySeconds.innerHTML = seconds
    }
}


document.querySelector('#start-btn').addEventListener('click', Start);
document.querySelector('#stop-btn').addEventListener('click', Stop);
document.querySelector('#reset-btn').addEventListener('click', Reset);



function Start() {
    clearInterval(interval)
    interval = setInterval(timer, 10)
}

function Stop() {
    clearInterval(interval)
}

function Reset() {
    clearInterval(interval);
    miliseconds = 0
    seconds = 0
    displayMiliseconds.innerHTML = `0${miliseconds}`
    displaySeconds.innerHTML = `0${seconds}`
}


