// Set the end date
const endDate = new Date("2024-12-31T23:59:59").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = endDate - now;
    endDate = endDate - (5 * 1000 * 60 * 60 * 24);
    endDate = endDate - (endDate % (365 * 24 * 60 * 60 * 100));

    const rewarded_days = Math.floor(endDate / (1000 * 60 * 60 * 24));
    const rewarded_months = Math.floor((endDate / (30 * 24 * 60 * 60 * 1000)));
    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));

    // Display the result in the countdown element
    document.getElementById("countdown").innerHTML = `${days} өдөр`;
    document.getElementById("modified-end-date").innerHTML = `${rewarded_months}/${rewarded_days}`
    // If the countdown is finished
    if (timeLeft < 0) {
        document.getElementById("countdown").innerHTML = "Хугацаа дууссан";
    }
}

// Update the countdown every 1 minute
setInterval(updateCountdown, 1000);
