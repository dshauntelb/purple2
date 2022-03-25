function changeCity() {
  let city = prompt("What city do you live in?");
  let temperature = prompt("What temperature is it?");
  let currentWeather = document.querySelector(".weatherNumber");
  currentWeather.innerHTML = temperature;
  let icon = document.querySelector(".emoji");
  let location = document.querySelector(".place");
  location.innerHTML = city;
  if (temperature >= 0) {
    icon.innerHTML = "😎🔥";
  } else {
    icon.innerHTML = "🥶🧊";
  }
}
let blueButton = document.querySelector("button");
blueButton.addEventListener("click", changeCity);
