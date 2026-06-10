const actionBtn = document.getElementById("actionBtn");
const popup = document.getElementById("birthdayPopup");
const themeBtn = document.getElementById("themeBtn");

actionBtn.addEventListener("click", () => {
    popup.style.display = "flex";
});

function closePopup() {
    popup.style.display = "none";
}

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeBtn.textContent = "☀️ Light Mode";
    } else {
        themeBtn.textContent = "🌙 Dark Mode";
    }
});