document.addEventListener('DOMContentLoaded', (event) => {   

    const seconds = document.getElementById('secondsDisplay');
    const minutes = document.getElementById('minutesDisplay');
    const hours = document.getElementById('hoursDisplay');

    const hoursInput = document.getElementById('hours');
    const minutesInput = document.getElementById('minutes');
    const secondsInput = document.getElementById('seconds');

    const run = document.getElementById('run');
    const pause = document.getElementById("pause");

    
    run.addEventListener(('click') , (event) => {
        let totalHours = hoursInput.value;
        let totalMinutes = minutesInput.value;
        let totalSeconds = secondsInput.value;

        let intervalID = setInterval(function () {

            if (totalSeconds < 0 ) {
                totalMinutes --;
                totalSeconds = 59;
            }
            if (totalMinutes < 0) { 
                totalHours --;
                totalMinutes = 59;
            }
            
            hours.innerHTML = `${totalHours}`;
            minutes.innerHTML = `:${totalMinutes}`;
            seconds.innerHTML = `:${totalSeconds}`;
            
            if (totalSeconds < 10) {
                seconds.innerHTML = `:0${totalSeconds}`;
            }
            if (totalMinutes < 10) {
                minutes.innerHTML = `:0${totalMinutes}`;
            }
            if (totalHours < 10) {
                hours.innerHTML = `0${totalHours}`;
            }
            if (totalHours == 0 && totalMinutes == 0 && totalSeconds == 0) {
                window.alert('Temps écoulé !');
            }
            
            totalSeconds --;
            
            pause.addEventListener(('click'), (event) => {
                clearInterval(intervalID);
            });
            
        }, 1000);
    });

       
});

