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

var addItem = (task) => {
	var newItem = $('<li>' + task + '</li>'); 
	var i = $('<i class="fa fa-square-o" aria-hidden="true"></i>'); 
	$(i).on('click', function(event) {
		event.stopPropagation();
		$(this).parent().fadeOut(500, () => {
			$(this).parent().remove(); 
		}); 
	}); 
	newItem.append(i); 
	newItem.addClass("task"); 
	newItem.addClass("active"); 
	$(newItem).on('click', function(event) {
		if($(this).hasClass('active')) {
			newItem.removeClass('active'); 
			newItem.addClass("faded"); 
		}
	}); 
	$('#itemList').find('ul').append(newItem); 
}

$('.active').on('click', function(event) {
	if($(this).hasClass('active')) {
		$(this).removeClass('active'); 
		$(this).addClass("faded"); 
	}
}); 

$('ul i').on('click', function(event) {
	event.stopPropagation();
	$(this).parent().fadeOut(500, () => {
		$(this).parent().remove(); 
	}); 
}); 

$('#plus').on('click', function(event) {
	$('#name').slideToggle(300); 
})

$('#name').keypress(function(event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13' && $('#name').val() !== ""){
    	addItem($('#name').val()); 
    }
        event.prevetDefault(); 
});