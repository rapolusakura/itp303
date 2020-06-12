$( document ).ready(function() {
    $.get("https://api.weatherbit.io/v2.0/current?units=I&postal_code=90089&key=416aebd47080425c9d1a819678eac603", function(data, status){
	  let temp =  data.data[0].temp; 
	  let desc = data.data[0].weather.description; 
	  let feels_like = data.data[0].app_temp; 
	  $("#weather-location").before("Today's weather in "); 
	  $('#weather-info').text(" " + temp + " " + desc + ". Feels like " + feels_like); 
	});
});

$('#weather-location').on('change', function() {
    $.get("https://api.weatherbit.io/v2.0/current?units=I&postal_code=" + this.value + "&key=416aebd47080425c9d1a819678eac603", function(data, status){
	  let temp =  data.data[0].temp; 
	  let desc = data.data[0].weather.description; 
	  let feels_like = data.data[0].app_temp; 
	  $('#weather-info').text(" "  + temp + " " + desc + ". Feels like " + feels_like); 
	});
});

$('#list-form').on('submit', function(event) {
	event.preventDefault(); 
	var taskInput = $('#name').val(); 
	if(newItem !== "") {
		var newItem = $('<li>' + taskInput + '</li>'); 
		newItem.addClass("task"); 
		newItem.addClass("active"); 
		$(newItem).on('click', function(event) {
			if($(this).hasClass('active')) {
				newItem.removeClass('active'); 
				newItem.addClass("faded"); 
			} else if($(this).hasClass('faded')) {
				$(this).remove(); 
			}
		}); 
		$('#itemList').find('ul').prepend(newItem); 
	}
}); 

//class active

//class faded

/*

if(class List contains active){ 
	remove active, add faded
} if (class List contains faded) {
	delete element
}

*/ 