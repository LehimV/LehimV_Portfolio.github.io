const html = document.querySelector("html");
console.log(html.dataset);
const darkBtn = document.querySelector("#btn-darkMode");
const darkBtn2 = document.querySelector("#btn2-darkMode");
darkBtn.addEventListener("click", () => {
  html.dataset.bsTheme = html.dataset.bsTheme == "dark" ? "light" : "dark";
});
darkBtn2.addEventListener("click", () => {
  html.dataset.bsTheme = html.dataset.bsTheme == "dark" ? "light" : "dark";
});
