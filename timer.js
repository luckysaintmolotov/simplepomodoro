let countdown;

function startTimer(minutes, seconds) {
    clearInterval(countdown); // Clear any existing timer
    let totalTime = minutes * 60 + seconds; // Convert to total seconds

    countdown = setInterval(() => {
        if (totalTime <= 0) {
            clearInterval(countdown);
            document.getElementById('fTimer').innerText = "Time's up!";
            return;
        }

        totalTime--;
        const mins = Math.floor(totalTime / 60);
        const secs = totalTime % 60;

        document.getElementById('fTimer').innerText = 
            `Time Remaining: ${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    }, 1000);
}
