$.getJSON('http://api.openweathermap.org/data/2.5/weather?q=MenloPark,us&units=imperial&APPID=22bf876e40ff311d46f3a0231747f816', function(weatherResults){
  

  //document.getElementById("placeWeatherSummary").innerHTML = weatherResults.weather.id;
  document.getElementById("placeWeatherCurTemp").innerHTML = "Temperature: " + weatherResults.main.temp + "&#x2109;";
  document.getElementById("placeWeatherHighTemp").innerHTML = "High: " +weatherResults.main.temp_max+ "&#x2109;";
  document.getElementById("placeWeatherLowTemp").innerHTML = "Low: " +weatherResults.main.temp_min + "&#x2109;";

});

