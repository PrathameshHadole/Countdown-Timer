
function startCountdown() {
    const countdownElement = document.getElementById('countdown');
    const datetimeInput = document.getElementById('datetime');
    const startButton = document.querySelector('button');

    // Disable the start button after it's clicked to prevent multiple intervals
    startButton.disabled = true;

    const targetDate = new Date(datetimeInput.value).getTime();

    if (isNaN(targetDate)) {
        alert('Invalid date/time. Please enter a valid future date and time.');
        startButton.disabled = false;
        return;
    }

    const countdownFunction = setInterval(() => {
        const now = new Date().getTime();
        const distance = targetDate - now;

        if (distance < 0) {
            clearInterval(countdownFunction);
            countdownElement.innerHTML = '<div class="expired">Time is up!</div>';
            startButton.disabled = false;
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById('days').textContent = days;
        document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
        document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
    }, 1000);
}
