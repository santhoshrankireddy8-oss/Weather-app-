const apiKey = "PASTE_YOUR_OPENWEATHER_API_KEY_HERE";

document.getElementById("btn").addEventListener("click", getWeather);

function getWeather() {
    const city = document.getElementById("city").value.trim();

    if (city === "") {
        alert("Please enter a city name");
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {

            console.log(data); // check errors

            if (data.cod != 200) {
                alert("City not found or API error");
                return;
            }

            document.getElementById("cityName").innerText = data.name;
            document.getElementById("temp").innerText = data.main.temp + " °C";
            document.getElementById("humidity").innerText = "Humidity: " + data.main.humidity + "%";
            document.getElementById("wind").innerText = "Wind Speed: " + data.wind.speed + " m/s";
        })
        .catch(error => {
            console.log(error);
            alert("Network error");
        });
}