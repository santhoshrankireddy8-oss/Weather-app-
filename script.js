const apiKey = "your_actual_openweather_key";

document.getElementById("btn").addEventListener("click", getWeather);

function getWeather() {

    const city= document.getElementById("city").value.trim();

    if (city === "") {
        alert("Enter city name");
        return;
    }

    https://api.openweathermap.org/data/2.5/weather?q=Vijayawada&appid=YOUR_KEY&units=metric

    fetch(url)
        .then(res => res.json())
        .then(data => {

            console.log(data); // 🔥 IMPORTANT: check this in console

            // ❌ if API failed
            if (data.cod !== 200) {
                alert("City not found or API error");
                return;
            }

            // ✅ update UI safely
            document.getElementById("cityName").innerText =
                data.name;

            document.getElementById("temp").innerText =
                data.main?.temp + " °C";

            document.getElementById("humidity").innerText =
                "Humidity: " + data.main?.humidity + "%";

            document.getElementById("wind").innerText =
                "Wind Speed: " + data.wind?.speed + " m/s";

        })
        .catch(err => {
            console.log(err);
            alert("Network error");
        });
}