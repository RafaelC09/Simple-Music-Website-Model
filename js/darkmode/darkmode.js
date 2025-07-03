let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("Profile1Btn");

document.getElementById("toggle-theme").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        this.textContent = "Light Mode";
        btn1.style.backgroundColor = '#111111';
        btn1.style.color = '#ffffff';
        btn2.style.backgroundColor = '#111111';
        btn2.style.color = '#ffffff';
    } else {
        this.textContent = "Dark Mode";
        btn1.style.color = '#111111';
        btn1.style.backgroundColor = '#ffffff';
        btn2.style.color = '#111111';
        btn2.style.backgroundColor = '#ffffff';
    }
});