const apiKey = "NEW_KEY_HERE";

document.getElementById("btn").onclick = async function () {

    const city = document.getElementById("city").value.trim();
    console.log(city);

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    const res = await fetch(url);
    const data = await res.json();

    console.log(data);

    if (data.cod != 200) {
        alert("Error: " + data.message);
        return;
    }

    document.getElementById("cityName").innerText = data.name;
    document.getElementById("temp").innerText = data.main.temp + " °C";
    document.getElementById("humidity").innerText = "Humidity: " + data.main.humidity + "%";
    document.getElementById("wind").innerText = "Wind: " + data.wind.speed + " m/s";
};