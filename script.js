const apiKey = "YOUR_API_KEY";

const searchBtn = document.getElementById("search-btn");
const cityInput = document.getElementById("city-input");

searchBtn.addEventListener("click", getWeather);

cityInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        getWeather();
    }
});

function getWeather() {
    const city = cityInput.value.trim();

    if (city === "") {
        alert("Please enter a city name");
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod != 200) {
                alert("City not found!");
                return;
            }

            document.getElementById("city-name").innerText = data.name;
            document.getElementById("temperature").innerText =
                `Temperature: ${data.main.temp} °C`;
            document.getElementById("description").innerText =
                `Weather: ${data.weather[0].description}`;
            document.getElementById("humidity").innerText =
                `Humidity: ${data.main.humidity}%`;
            document.getElementById("wind").innerText =
                `Wind Speed: ${data.wind.speed} m/s`;
        })
        .catch(error => {
            console.log(error);
            alert("Something went wrong!");
        });
}
