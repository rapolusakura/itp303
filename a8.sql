/*
Song Database SELECT statements (1/4)
*/ 
SELECT * FROM albums
where lower(title) like '%on%'
order by title asc; 

/*
Song Database SELECT statements (2/4)
*/ 
SELECT albums.title, artists.name FROM albums  
join artists on albums.artist_id = artists.artist_id 
where lower(title) like '%on%'
ORDER by title asc; 

/*
Song Database SELECT statements (3/4)
*/ 
select tracks.name as track_name, tracks.composer, media_types.name as media_type, tracks.unit_price
from tracks 
join media_types on tracks.media_type_id = media_types.media_type_id
where tracks.media_type_id = 5;  

/*
Song Database SELECT statements (4/4)
*/ 
select tracks.track_id, tracks.name as track_name, tracks.composer, tracks.milliseconds, genres.name as genre_name
from tracks 
join genres on tracks.genre_id = genres.genre_id
where tracks.composer is not null and (tracks.genre_id = 14 or tracks.genre_id = 2) 
order by tracks.name desc; 


/*
DVD Database SELECT statements (1/3)
*/ 
select dvd_titles.title, dvd_titles.award, genres.genre, labels.label, ratings.rating 
from dvd_titles
join genres on dvd_titles.genre_id = genres.genre_id
join labels on dvd_titles.label_id = labels.label_id
join ratings on dvd_titles.rating_id = ratings.rating_id
where dvd_titles.award is not null and (dvd_titles.genre_id = 9)
order by dvd_titles.award asc;  

/*
DVD Database SELECT statements (2/3)
*/ 
select dvd_titles.title, sounds.sound, labels.label, genres.genre,ratings.rating 
from dvd_titles
join sounds on dvd_titles.sound_id = sounds.sound_id
join genres on dvd_titles.genre_id = genres.genre_id
join labels on dvd_titles.label_id = labels.label_id
join ratings on dvd_titles.rating_id = ratings.rating_id
where (dvd_titles.label_id = 127) and (dvd_titles.sound_id = 4)
order by dvd_titles.title asc;  

/*
DVD Database SELECT statements (3/3)
*/  
select dvd_titles.title, dvd_titles.release_date, ratings.rating, genres.genre, sounds.sound, labels.label
from dvd_titles
join sounds on dvd_titles.sound_id = sounds.sound_id
join genres on dvd_titles.genre_id = genres.genre_id
join labels on dvd_titles.label_id = labels.label_id
join ratings on dvd_titles.rating_id = ratings.rating_id
where (dvd_titles.release_date is not null) and (dvd_titles.genre_id = 19) and (dvd_titles.rating_id = 7)
order by dvd_titles.release_date desc;  