
const apiKey = "YOUR_API_KEY_HERE";

document.getElementById("btn").addEventListener("click", getWeather);

function getWeather() {
    let city = document.getElementById("city").value;

    // basic validation
    if (city === "") {
        alert("Please enter a city name");
        return;
    }

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {

            // if city not found
            if (data.cod !== 200) {
                alert("City not found");
                return;
            }

            // update UI
            document.getElementById("cityName").innerText = "City: " + data.name;
            document.getElementById("temp").innerText = data.main.temp + " °C";
            document.getElementById("desc").innerText = "Weather: " + data.weather[0].description;
            document.getElementById("humidity").innerText = "Humidity: " + data.main.humidity + "%";
            document.getElementById("wind").innerText = "Wind Speed: " + data.wind.speed + " m/s";
        })

        .catch(error => {
            console.log(error);
            alert("Error fetching weather data");
        });
}