var DateTime = luxon.DateTime;
function updateValues() {
    setInterval( () => {
        let now = DateTime.now()
        let timesBefore = now.minus({year: 2024 ,months: 4, days: 10, hour:13 , minutes: 18, seconds : 30})
        let hour = timesBefore.hour
        let seconds = timesBefore.second
        let minutes = timesBefore.minute
        let days = timesBefore.day
    document.getElementById('seconds').innerText = seconds;
    document.getElementById('minutes').innerText = minutes;
    document.getElementById('hours').innerText = hour;
    document.getElementById('days').innerText = days;

    }, 1000)
}
updateValues()