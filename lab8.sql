#1 

create view mpeg_tracks as
select tracks.name as track_name, artists.name as artist_name, 
tracks.composer, albums.title as album_title, media_types.name as media_type
from tracks
join albums on tracks.album_id = albums.album_id
join artists on albums.artist_id = artists.artist_id
join media_types on tracks.media_type_id = media_types.media_type_id
where tracks.media_type_id = 1
order by tracks.name asc; 

#2 

insert into artists(name) values ("Led Zeppelin"); 
insert into albums (title, artist_id) values ("The Song Remains The Same (Disc 1)" , 276); 

insert into tracks (name, album_id, media_type_id, genre_id, composer, milliseconds, bytes, unit_price) 
values ("The Ocean", 348, 1, 1, "John Bonham/John Paul Jones/Robert Plant", 248000, 7990000, 0.99); 

#3

update tracks
set bytes = 8998765, unit_price = 1.99
where tracks.track_id = 3504; 

#4

delete from playlist_track
where playlist_track.track_id = 122; 

delete from tracks where tracks.track_id = 122; 

#5 

select albums.album_id, albums.title as album_title, count(tracks.album_id) as track_count
from albums
join tracks on albums.album_id = tracks.album_id
group by albums.album_id; 