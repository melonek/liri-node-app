# liri-node-app

LIRI-Bot
=======================================================================================

LIRI is a Language Interpretation and Recognition Interface.
LIRI takes in node commands and in return it retrives a query and displays its data to back to the user.

=======================================================================================

LIRI uses the following commands:

concert-this 

spotify-this-song

movie-this

do-what-it-says

=======================================================================================

Technologies used:

Node.js
Javascript
npm packages: require, axios, spotify,

=======================================================================================

//=How to Run LIRI-Bot==//

Command node liri will display the programs welcome sentence: "This is loaded"

![Alt text](https://github.com/melonek/liri-node-app/blob/master/screenshots/liri-welcome-page.png?raw=true "Optional title")

1. node liri.js concert-this <name of the band>

This simple command will let the user research whether his band is touring or not. If it is, then the user will be given
the following information in the terminal/bash window:

Artist's name. 
Location.
Venue.
Date of the concert.

![Alt text](https://github.com/melonek/liri-node-app/blob/master/screenshots/liri-concert-this.png?raw=true "Optional title")


2: node liri.js spotify-this-song <song name here> 
  
 

This will show the following information about the song in your terminal/bash window * Artist(s) * 
The song's name * A preview link of the song from Spotify * The album that the song is from.
If no song is provided then the program will default to
"The Sign" by Ace of Base

![Alt text](https://github.com/melonek/liri-node-app/blob/master/screenshots/liri-spotify-this%20song.png?raw=true "Optional title")

3: node liri.js movie-this <movie name here>

This will output the following information to your terminal/bash window:

Title of the movie.
Year the movie came out.
IMDB Rating of the movie.
Country where the movie was produced.
Language of the movie.
Plot of the movie.
Actors in the movie.

Please note: If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'

![Alt text](https://github.com/melonek/liri-node-app/blob/master/screenshots/liri-movie-this.png?raw=true "Optional title")


4: node liri.js do-what-it-says

This will output the command placed in random.txt file

![Alt text](https://github.com/melonek/liri-node-app/blob/master/screenshots/liri-do-what-it-says.png?raw=true "Optional title")

=======================================================================================
