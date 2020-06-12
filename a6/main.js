var form = document.getElementById("search-form"); 

function displayMovie(item, index) {
	var movies = document.getElementById("movies"); 
	var div = document.createElement("div"); 
	var poster_path = null; 
	if(item.poster_path == null) {
		poster_path = document.createElement("div"); 
		poster_path.innerHTML = "NO IMAGE AVAILABLE"; 
	} else {
		poster_path = document.createElement("img"); 
		poster_path.src = "https://image.tmdb.org/t/p/w500" + item.poster_path; 
	}

	var overview = item.overview.length > 200 ? item.overview.substring(0, 200) + "..." : item.overview; 

	div.className = "col-6 col-md-3 movie darken"; 
	var overlay = document.createElement("div"); 
	overlay.className = "overlay"; 
	overlay.innerHTML = "**Rating: " + item.vote_average + " from " + item.vote_count + " votes**"; 
	overlay.innerHTML += "\n" + overview; 

	var p = document.createElement("p"); 
	p.innerHTML = item.title + " " + item.release_date; 

	div.appendChild(poster_path); 
	div.appendChild(overlay); 
	div.appendChild(p); 

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
			document.getElementById("movies").innerHTML = "No movies with that search query."; 
		} else {
			document.getElementById("movies").innerHTML = ""; 
			document.getElementById("results_length").innerHTML = "Showing 20 of " + data.total_results + " result(s)"; 
			data.results.forEach(displayMovie);
		}
	}); 
	event.preventDefault();
}


form.addEventListener("submit", searchMovie, true);

document.addEventListener('DOMContentLoaded', function() {
    nowPlaying(); 
}, false);
