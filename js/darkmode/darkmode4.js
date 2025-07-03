let timern = document.getElementById("currentTime");
let volumern = document.getElementById("btnvolume");

document.getElementById("toggle-theme4").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode4");

    if (document.body.classList.contains("dark-mode4")) {
        this.textContent = "Light Mode";
        timern.style.color = '#ffffff'
        volumern.style.color = '#ffffff'
    } else {
        this.textContent = "Dark Mode";
        timern.style.color = '#111111'
        volumern.style.color = '#111111'
    }
});