document.addEventListener('DOMContentLoaded', (event) => {   
    const seconds = document.getElementById('secondsDisplay');
    const minutes = document.getElementById('minutesDisplay');
    const hours = document.getElementById('hoursDisplay');

    const hoursInput = document.getElementById('hours');
    const minutesInput = document.getElementById('minutes');
    const secondsInput = document.getElementById('seconds');
    const toursDisplay = document.getElementById('tours');

    const tour = document.getElementById('tour');
    const run = document.getElementById('run');
    
    let totalHours = hoursInput.value;
    let totalMinutes = minutesInput.value;
    let totalSeconds = secondsInput.value;
    let tours = [];
    
    run.addEventListener(('click') , (event) => {
        let intervalID = setInterval(function () {
            
            if (totalSeconds > 59 ) {
                totalSeconds = 0;
                totalMinutes ++;
            }
            if (totalMinutes > 59) {
                totalHours ++;
                totalMinutes = 0;
            }
            seconds.innerHTML = `:${totalSeconds}`;
            minutes.innerHTML = `:${totalMinutes}`;
            hours.innerHTML = `${totalHours}`;
            
            if (totalSeconds < 10) {
                seconds.innerHTML = `:0${totalSeconds}`;
            }
            if (totalMinutes < 10) {
                minutes.innerHTML = `:0${totalMinutes}`;
            }
            if (totalHours < 10) {
                hours.innerHTML = `0${totalHours}`;
            }
            totalSeconds ++;
            
        }, 1000);

    });

    tour.addEventListener(('click'), (event) => {

        tours.push(`${hours.innerHTML}:${minutes.innerHTML}:${seconds.innerHTML}<br/>`);
        toursDisplay.innerHTML = tours;
    })
});
