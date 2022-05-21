var entrys = document.querySelectorAll(".nav-cities p");
for(var i = 0; i < entrys.length; i++) {
    var element = entrys[i];
    element.onclick = event => { 
        alert("You have switched your city to " + event.currentTarget.innerHTML + " . \nLoading the weather report from 4/14/22..."); 
        document.querySelectorAll(".current-city")[0].innerHTML = event.currentTarget.innerHTML;

        var entrys = document.querySelectorAll(".weather-card");
        for(var i = 0; i < entrys.length; i++) {

            var highTemp = entrys[i].getElementsByClassName("high-temp")[0];
            var lowTemp = entrys[i].getElementsByClassName("low-temp")[0];

            var dayImgSrc = cityForecast[event.currentTarget.innerHTML.toLowerCase()]['day'+ i].imageSrc;
            var dayWeatherDisc = cityForecast[event.currentTarget.innerHTML.toLowerCase()]['day'+ i].weatherDisc;
            var dayHighTemp =cityForecast[event.currentTarget.innerHTML.toLowerCase()]['day'+ i].highTempF;
            var dayLowTemp = cityForecast[event.currentTarget.innerHTML.toLowerCase()]['day'+ i].lowTempF;

            entrys[i].querySelectorAll("img")[0].src = dayImgSrc;
            entrys[i].querySelectorAll("p:nth-child(3)")[0].innerHTML = dayWeatherDisc;

            if(document.getElementById("CF-temp-selection").selectedIndex == 0) {
                highTemp.innerHTML = dayHighTemp + "°";
                lowTemp.innerHTML = dayLowTemp + "°";
            } else {
                highTemp.innerHTML = convertTempFC(parseFloat(dayHighTemp), true) + "°";
                lowTemp.innerHTML = convertTempFC(parseFloat(dayLowTemp), true) + "°";   
            }
    
        }

    };
}

document.getElementById("CF-temp-selection").onchange = e => {
    var entrys = document.querySelectorAll(".weather-card");
    for(var i = 0; i < entrys.length; i++) {
        var highTemp = entrys[i].getElementsByClassName("high-temp")[0];
        var lowTemp = entrys[i].getElementsByClassName("low-temp")[0];

        if(e.currentTarget.selectedIndex == 0) {
            highTemp.innerHTML = convertTempFC(parseFloat(highTemp.innerHTML), false) + "°";
            lowTemp.innerHTML = convertTempFC(parseFloat(lowTemp.innerHTML), false) + "°";
        } else {
            highTemp.innerHTML = convertTempFC(parseFloat(highTemp.innerHTML), true) + "°";
            lowTemp.innerHTML = convertTempFC(parseFloat(lowTemp.innerHTML), true) + "°";   
        }
    }
}

document.getElementById("cookie-notice").querySelectorAll("button")[0].onclick = e => {
    document.getElementById("cookie-notice").remove();
}

function convertTempFC(tempVal, convertFToC) {
    var result;

    if(convertFToC) {
        result = (tempVal - 32) * 5/9;
    } else {
        result = (tempVal * 9/5) + 32;
    }

    return Math.round(result * 10) / 10;
}

class DayWeather {
    imageSrc = '';
    weatherDisc = '';
    highTempF = 0;
    lowTempF = 0;

    skyTypeImg = {
        sun: "./images/assets/some_sun.png",
        rain: "./images/assets/some_rain.png",
        cloud: "./images/assets/some_clouds.png"
    }

    skyTypeDisc = {
        sun: "Some Sun",
        rain: "Some Rain",
        cloud: "Some Clouds"
    }

    constructor(weatherType, highTempF, lowTempF) {
        this.highTempF = highTempF;
        this.lowTempF = lowTempF;

        switch (weatherType) {
            case 'rain':
                this.imageSrc = this.skyTypeImg.rain;
                this.weatherDisc = this.skyTypeDisc.rain;
                break;
            case 'sun':
                this.imageSrc = this.skyTypeImg.sun;
                this.weatherDisc = this.skyTypeDisc.sun;
                break;
            case 'cloud':
                this.imageSrc = this.skyTypeImg.cloud;
                this.weatherDisc = this.skyTypeDisc.cloud;
                break;               
        }

    }
}

var burbankWeather = {
    day0: new DayWeather('sun', 72, 51),
    day1: new DayWeather('sun', 72, 54),
    day2: new DayWeather('cloud', 72, 53),
    day3: new DayWeather('sun', 78, 57)
}

var chicagoWeather = {
    day0: new DayWeather('cloud', 51, 40),
    day1: new DayWeather('cloud', 55, 35),
    day2: new DayWeather('cloud', 46, 34),
    day3: new DayWeather('cloud', 42, 37)
}

var dallasWeather = {
    day0: new DayWeather('sun', 78, 57),
    day1: new DayWeather('cloud', 85, 70),
    day2: new DayWeather('cloud', 83, 65),
    day3: new DayWeather('rain', 81, 59)
}

var cityForecast = {
    burbank: burbankWeather,
    chicago: chicagoWeather,
    dallas: dallasWeather
}
var a = 2;
console.log(cityForecast['chicago']['day'+ a].highTempF)
