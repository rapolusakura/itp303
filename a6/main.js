		
// Use this array to keep track of contacts
var form = document.getElementById("search-form"); 

function displayMovie(item, index) {
	var movies = document.getElementById("movies"); 
	var div = document.createElement("div"); 
	div.innerHTML = item.title + " " + item.release_date + " https://image.tmdb.org/t/p/w500" + item.poster_path;  
	movies.appendChild(div); 
}

var ajax = function(event) {
	$.get("https://api.themoviedb.org/3/movie/now_playing?api_key=c4f2023ec81f7fa2b3508c0379329db0&language=en-US", function(data, status){
	  console.log(data.results.length); 
	  data.results.forEach(displayMovie);
	//	  $("#weather").html("Today's weather in Los Angeles: " + temp + " " + desc + ". Feels like " + feels_like);
	});
	event.preventDefault();
}

form.addEventListener("submit", ajax, true);



// var showInTheaters = () => {
// 	var xhttp = new XMLHttpRequest();
// 	xhttp.onreadystatechange = function() {
// 	    if (this.readyState == 4 && this.status == 200) {
// 	       // Typical action to be performed when the document is ready:
// 	       document.getElementById("movies").innerHTML = xhttp.responseText;
// 	    }
// 	};
// 	xhttp.open("GET", "./style.css", true);
// 	xhttp.send();	
// }



// window.onload(showInTheaters()); 