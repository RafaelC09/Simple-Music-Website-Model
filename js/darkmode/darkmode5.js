document.getElementById("toggle-theme5").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode5");

    if (document.body.classList.contains("dark-mode5")) {
        this.textContent = "Light Mode";
    } else {
        this.textContent = "Dark Mode";
    }
});