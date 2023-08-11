
const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const apikey = "ffbc3300856345b1ce5dfe279ec892a1";
const url = "https://api.openweathermap.org/data/2.5/weather?units=metrics&q=";
const weathericon = document.querySelector(".weather img");
const line = document.querySelector(".Lines .quote");

async function checkweather(city) {
    const response = await fetch(url + city + `&appid=${apikey}`);
    var data = await response.json();
    console.log(data);
    var currentDate = new Date();
    var year = currentDate.getFullYear();
    var month = currentDate.getMonth() + 1; 
    var day = currentDate.getDate();
    var formattedDate = day + "-" + month + "-" + year;
    console.log("Current Date: " + formattedDate);

    document.querySelector(".city").innerHTML = formattedDate;
    document.querySelector(".temp").innerHTML =
        Math.round(data.main.temp - 273.15) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    if (data.weather[0].main == "Clouds") {
        weathericon.src = "images/clouds.png";
       
        line.textContent =
            "Cloudy skies today. A light jacket might be a good idea !";
    } else if (data.weather[0].main == "Clear") {
        weathericon.src = "images/clear.png";
        
        line.textContent = "It's a beautiful day to soak up some Vitamin D !";
    } else if (data.weather[0].main == "Drizzle") {
        weathericon.src = "images/drizzle.png";
        line.textContent = "It's a beautiful day to soak up some Vitamin D !";
    } else if (data.weather[0].main == "Snow") {
        weathericon.src = "images/snow.png";
        
        line.textContent = "Let it snow, let it snow, but dress warmly!";
    } else {
        weathericon.src = "images/rain.png";
        
        line.textContent = "Don't forget to carry an umbrella!";
    }
}
checkweather("Bengaluru");

searchbtn.addEventListener("click", () => {
    checkweather(searchbox.value);
});

document.querySelector(".nav button").addEventListener("click", function () {
    document.querySelector(".search input").focus();
});
