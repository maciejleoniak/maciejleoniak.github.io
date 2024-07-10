//password joke
document.addEventListener('DOMContentLoaded', () => {
    const passwordForm = document.getElementById('passwordForm');
    const message = document.getElementById('message');
    const submitButton = document.getElementById('submitButton');
    const homeButton = document.getElementById('homeButton');
    let attempts = 0;
    const maxAttempts = 3;

    passwordForm.addEventListener('submit', (event) => {
        event.preventDefault();
        attempts++;
        if (attempts < maxAttempts) {
            message.innerHTML = `Attempt ${attempts} of ${maxAttempts}.<br>Try again.`;
        } else {
            message.innerHTML = 'Last attempt failed.<br>Website will be deleted in 5 seconds.';
            submitButton.disabled = true;  // Disable the submit button
            startCountdown();
        }
    });

    function startCountdown() {
        let countdown = 5;
        message.classList.add('blink');
        const countdownInterval = setInterval(() => {
            if (countdown > 0) {
                message.innerHTML = `Last attempt failed.<br>Website will be deleted in ${countdown--} seconds.`;
            } else {
                clearInterval(countdownInterval);
                message.classList.remove('blink');
                message.innerHTML = "Just kidding! 😊";
                homeButton.classList.remove('hidden');
            }
        }, 1000);
    }
});
