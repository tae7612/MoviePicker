// Name: Tiffany Ellis
// Program: data.js
// Date: Sept 24, 2017
// ISTE -340 project 1

//Created array to store options available to user
var data = new Array();
firstchoice = 'Movies';

// States if message has been printed
var load = false;
var load_message = 'Find your Movie!';

// First depth of choices
data['Movies'] = ['Where to watch your movie?','Choose an option','Cinema' , 'Netflix' , 'Rent'];
		
//Second depth of choices
data['Cinema'] = ['Pick a Genre','Choose an option','Comedy' , 'Action', 'Thriller'];
data['Netflix'] = ['Pick a Genre','Choose an option','Original Movie', 'TV Series'];
data['Rent'] = ['Pick a Genre','Choose an option','Classic', 'Recent'];
		
//Third depth for Cinema
data['Comedy'] = ['Choose a Comedy Film','Choose an option','Girls Trip', 'Emoji Movie', 'Spider-Man: Homecoming' ];
data['Action'] = ['Choose an Action Film','Choose an option','Guardian of the Galaxy', 'Pirates of the Caribbean', 'Wonder Woman'];
data['Thriller'] = ['Choose a Thriller Film','Choose an option','The Dark Tower', 'It', ' Annabelle: Creation'];
		
//Third depth for Netflix
data['Original Movie'] = ['Choose a Netflix Original','Choose an option','Burning Sands', 'Coin Heist', 'XOXO', 'BLAME!'];
data['TV Series'] =['Choose a Netflix Series','Choose an option','Dear White People', 'Jessica Jones', 'Stranger Things', 'Voltron: The Legendary Defender'];
		
// Third depth for Rent
data['Classic'] = ['Choose a Classic','Choose an option','Casablanca', 'All about Eve', 'Jaws', 'Psycho', 'Titanic'];
data['Recent'] = ['Choose a Recent Movie','Choose an option','Ratatouille', 'Inception', 'Gladiator', 'Ghost Rider' ];


//Created array to store posters of the movie
var slide = new Array();
// States if slideshow has been created
var load_slide = false;

//Third depth for Cinema
slide['Comedy'] = [ 'quwSSk144kujBi7QRTiDAQ.jpg','p13635399_v_v5_ab.jpg','dce7zfnvoai3pgh-1003229.jpg' ];
slide['Action'] = ['guardiansofthegalaxy_p.jpg','PiratesOfTheCaribbeanDeadMenTellNoTalesPoster.jpg','wonder_woman_ver6_xxlg.jpg'];
slide['Thriller'] = ['The_Dark_Tower_teaser_poster.jpg','largeposter.jpg','DQmaBQ9HNYhKnRgAAAz3rQP7ExHWbvmASjc4WWfU4TJtS99.jpeg'];
		
//Third depth for Netflix
slide['Original Movie'] = ['MV5BMjM4MTgwMDYwOF5BMl5BanBnXkFtZTgwNTIwMTc2MTI@._V1_.jpg','2F1A2746A-DCC1-BC94-C2B0D131D6096E11.jpg','images.jpeg','bc045899073cc69c992f457aecc9a795ebab8f0b.jpg'];
slide['TV Series'] =['dear-white-people-netflix-vain.jpeg','Jessica_Jones_Final_Poster.png','strangerthingsposter_0.jpg','MV5BMjA2MzMzNTg5NV5BMl5BanBnXkFtZTgwMzAzOTc4ODE@._V1_.jpg'];
		
// Third depth for Rent
slide['Classic'] = ['611fx1TeemL._SY445_.jpg','41VK2V8PJ1L._SY445_.jpg','41H5ZQQN4RL._SY445_.jpg','Psycho1960.jpg','MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg'];
slide['Recent'] = ['large_taAPNsf6G4EXBYSG7Jyvd9HHKnH.jpg','Inception-movie-poster-4.jpg','large_hOMc3EXpq8vugWoMYhuDYTrUGKH.jpg','download.jpeg' ];