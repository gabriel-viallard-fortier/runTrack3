document.addEventListener('DOMContentLoaded', (event) => {
    
    const display = document.getElementById('time');
    let intervalID = setInterval(function () {
        
        let now = new Date();
        let hours = now.getHours();
        let minutes = now.getMinutes();
        let seconds = now.getSeconds();
        
        if (minutes < 10) {
            minutes = `0${minutes}`;
        }
        if (seconds < 10) {
            seconds = `0${seconds}`;
        }
        display.innerHTML = `${hours}:${minutes}:${seconds}`;

    }, 1000);
});