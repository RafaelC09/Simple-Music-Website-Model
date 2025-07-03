document.getElementById("toggle-theme6").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode6");

    if (document.body.classList.contains("dark-mode6")) {
        this.textContent = "Light Mode";
    } else {
        this.textContent = "Dark Mode";
    }
});