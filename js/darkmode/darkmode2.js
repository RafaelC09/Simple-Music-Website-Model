let btn3 = document.getElementById("Profile1Btn");

document.getElementById("toggle-theme2").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode2");

    if (document.body.classList.contains("dark-mode2")) {
        this.textContent = "Light Mode";
        btn3.style.backgroundColor = '#ffffff';
        btn3.style.color = '#111111';
    } else {
        this.textContent = "Dark Mode";
        btn3.style.backgroundColor = '#111111';
        btn3.style.color = '#ffffff';
    }
});