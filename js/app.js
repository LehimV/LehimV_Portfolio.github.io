const html = document.querySelector("html");
const darkBtn = document.querySelector("#btn-darkMode");
const darkModeIcon = document.querySelector("#darkModeIcon");

darkBtn.addEventListener("click", () => {
  html.dataset.bsTheme = html.dataset.bsTheme == "dark" ? "light" : "dark";
  updateDarkModeIcon();
});

function updateDarkModeIcon() {
  const currentTheme = html.dataset.bsTheme;
  if (currentTheme === "dark") {
    darkModeIcon.textContent = "light_mode";
    darkModeText.textContent = "Light Mode";
  } else {
    darkModeIcon.textContent = "dark_mode";
    darkModeText.textContent = "Dark Mode";
  }
}
updateDarkModeIcon();
