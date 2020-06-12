$( document ).ready(function() {
    $.get("https://api.weatherbit.io/v2.0/current?units=I&postal_code=90089&key=416aebd47080425c9d1a819678eac603", function(data, status){
	  let temp =  data.data[0].temp; 
	  let desc = data.data[0].weather.description; 
	  let feels_like = data.data[0].app_temp; 
	  $("#weather-location").before("Today's weather in "); 
	  $('#weather-info').text(": "  + temp + " " + desc + ". Feels like " + feels_like); 
	});
});

$('#weather-location').on('change', function() {
    $.get("https://api.weatherbit.io/v2.0/current?units=I&postal_code=" + this.value + "&key=416aebd47080425c9d1a819678eac603", function(data, status){
	  let temp =  data.data[0].temp; 
	  let desc = data.data[0].weather.description; 
	  let feels_like = data.data[0].app_temp; 
	  $('#weather-info').text(": "  + temp + " " + desc + ". Feels like " + feels_like); 
	});
});