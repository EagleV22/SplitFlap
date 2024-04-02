document.getElementById('timeInput').addEventListener('keypress', function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        addTime();
    }
});

function addTime() {
    const timeInput = document.getElementById('timeInput');
    const time = timeInput.value;

    if (!/^\d{4}$/.test(time) || parseInt(time.substring(0,2)) > 23 || parseInt(time.substring(2,4)) > 59) {
        alert("Please enter a valid time in HHmm Format.");
    }

    const clockContainer = document.createElement('div');
    clockContainer.className = 'clock-container';

    const timeListContainer = document.getElementById('timeListContainer');
    timeListContainer.appendChild(clockContainer);

    new Clock(clockContainer, time);

    timeInput.value = '';
}

function formatTime(timeStr) {
    return timeStr.substring(0,2) + ':' + timeStr.substring(2);
}

function editTime(item) {
    const newTime = prompt("Edit Time:", item.textContent.replace(':', ''));
    if (newTime !== null && newTime !== '') {
        if (!/^\d{4}$/.test(newTime) || parseInt(newTime.substring(0, 2)) > 23 || parseInt(newTime.substring(2, 4)) > 59) {
            alert("Please enter a valid time in HHmm format.");
        } else {
            item.textContent = formatTime(newTime);
        }
    }
}




























