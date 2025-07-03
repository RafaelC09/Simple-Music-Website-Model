const audio = document.getElementById("overthehorizon");
const button = document.getElementById("playPauseBtn");
const seekbar = document.getElementById("seekbar");
const currentTime = document.getElementById("currentTime");
const volumeControl = document.getElementById("volume");
let error001 = document.getElementById("error001")

button.addEventListener("click", () => {
    if (audio.paused) {
        audio.play();
        button.textContent = "⏸";
    } else {
        audio.pause();
        button.textContent = "▶";
    }
});

audio.addEventListener("timeupdate", () => {
    const progress = (audio.currentTime / audio.duration) * 100;
    seekbar.value = progress;

    const minutes = Math.floor(audio.currentTime / 60);
    const seconds = Math.floor(audio.currentTime % 60);
    currentTime.textContent = `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
});

seekbar.addEventListener("input", () => {
    const seekTime = (seekbar.value / 100) * audio.duration;
    audio.currentTime = seekTime;
});

volumeControl.addEventListener("input", () => {
    audio.volume = volumeControl.value / 100;
});

document.getElementById('create-account-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    console.log("Request sent!")

    if (username && email && password) {
        document.getElementById('message').textContent = `Account created with success for ${username}!`;
        document.getElementById('message').style.color = 'green';

        document.getElementById('create-account-form').reset();
    } else {
        document.getElementById('message').textContent = 'Please, fill all the spaces!';
        document.getElementById('message').style.color = 'red';
    }
});

function showText() {
    error001.style.visibility = 'visible'
}


