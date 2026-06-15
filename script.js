const apiKey = "YOUR_ACTIVE_API_KEY";

document.getElementById("btn").onclick = async function () {

    const city = document.getElementById("city").value.trim();

    if (!city) {
        alert("Enter city name");
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        console.log(data);

        if (data.cod != 200) {
            alert("Error: " + data.message);
            return;
        }

        document.getElementById("cityName").innerText = data.name;
        document.getElementById("temp").innerText = data.main.temp + " °C";
        document.getElementById("humidity").innerText = "Humidity: " + data.main.humidity + "%";
        document.getElementById("wind").innerText = "Wind Speed: " + data.wind.speed + " m/s";

    } catch (error) {
        console.log(error);
        alert("Network error");
    }
};