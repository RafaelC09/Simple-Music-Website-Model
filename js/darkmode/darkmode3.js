document.getElementById("toggle-theme3").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode3");

    if (document.body.classList.contains("dark-mode3")) {
        this.textContent = "Light Mode";
    } else {
        this.textContent = "Dark Mode";
    }
});