document.addEventListener('DOMContentLoaded', (event) => {   
    const alarmHours = document.getElementById('hours');
    const alarmMinutes = document.getElementById('minutes');
    const alarmSeconds = document.getElementById('seconds');

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

        if (hours == alarmHours.value && minutes == alarmMinutes.value && seconds == alarmSeconds.value) {
            window.alert("Il est l'heure !");
        }

    }, 1000);
});