const body = document.querySelector("body"),
  jarumJam = document.querySelector(".hour"),
  jarumMenit = document.querySelector(".menit"),
  jarumDetik = document.querySelector(".detik"),
  mode = document.querySelector(".mode");

if (localStorage.getItem("mode") === "Dark Mode") {
  body.classList.add("dark");
  mode.textContent = "Light Mode";
}

mode.addEventListener("click", () => {
  body.classList.toggle("dark");
  const darkMode = body.classList.contains("dark");
  mode.textContent = darkMode ? "Light Mode" : "Dark Mode";
  localStorage.setItem("mode", darkMode ? "Dark Mode" : "Light Mode");
});

const updateTime = () => {
  let date = new Date();
  secKeDeg = (date.getSeconds() / 60) * 360;
  minKeDeg = (date.getMinutes() / 60) * 360;
  jamKeDeg = (date.getHours() / 12) * 360;
  jarumDetik.style.transform = `rotate(${secKeDeg}deg)`;
  jarumMenit.style.transform = `rotate(${minKeDeg}deg)`;
  jarumJam.style.transform = `rotate(${jamKeDeg}deg)`;
};
setInterval(updateTime, 1000);
updateTime();
