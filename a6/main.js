var form = document.getElementById("search-form"); 

function displayMovie(item, index) {
	var movies = document.getElementById("movies"); 
	var div = document.createElement("div"); 
	var poster_path = item.poster_path == null ? "NO IMAGE AVAILABLE" : "<img src=\'https://image.tmdb.org/t/p/w500" 
		+ item.poster_path + "\'>"; 
	var overview = item.overview.length > 200 ? item.overview.substring(0, 200) + "..." : item.overview; 

	div.className = "col-md-3 col-md-4 col-md-6 movie darken"

	div.innerHTML = poster_path + item.title + " " + item.release_date
		+ " " + overview + " " + item.vote_count + " "
		+ item.vote_average; 
	movies.appendChild(div); 
}

var ajax = function(endpoint, callback) {
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function() {
	    if (xhr.readyState == XMLHttpRequest.DONE) {
	        callback(JSON.parse(xhr.response));  
	    }
	}
	xhr.open('GET', endpoint, true);
	xhr.send(null);
}

function nowPlaying(event) {
	ajax("https://api.themoviedb.org/3/movie/now_playing?api_key=c4f2023ec81f7fa2b3508c0379329db0&language=en-US", function(res) {
		document.getElementById("movies").innerHTML = ""; 
		//show the number of results??
		res.results.forEach(displayMovie);
	}); 
}

var searchMovie = () => {
	var query = document.getElementById("search").value; 
	ajax("https://api.themoviedb.org/3/search/movie?api_key=c4f2023ec81f7fa2b3508c0379329db0&language=en-US&query=" + query + "&page=1&include_adult=false", function(data) {
		console.log(data); 
		if(data.total_results == 0) {
			console.log("empty"); 
			document.getElementById("movies").innerHTML = "no movies"; 
		} else {
			document.getElementById("movies").innerHTML = ""; 
			data.results.forEach(displayMovie);
		}
	}); 
	event.preventDefault();
}


form.addEventListener("submit", searchMovie, true);


document.onload = nowPlaying(); 
