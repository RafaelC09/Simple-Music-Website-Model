function filterItems() {
    let input = document.getElementById("searchBar").value.toLowerCase();
    let list = document.getElementById("listitems");
    let items = list.getElementsByTagName("a");

    for (let i = 0; i < items.length; i++) {
        let item = items[i].innerText.toLowerCase();
        if (item.includes(input)) {
            items[i].classList.remove("hidden");
        } else {
            items[i].classList.add("hidden");
        }
    }
}

const audio = document.getElementById("overthehorizon");
const button = document.getElementById("playPauseBtn");
const seekbar = document.getElementById("seekbar");
const currentTime = document.getElementById("currentTime");
const volumeControl = document.getElementById("volume");

button.addEventListener("click", () => {
    if (audio.paused) {
        audio.play();
        button.textContent = "⏸️";
    } else {
        audio.pause();
        button.textContent = "▶️";
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