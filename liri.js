//== In this very first part I am going to require the following modules in order for Lirir but to
//be fully functional ==//
let axios = require("axios");
let Spotify = require("node-spotify-api");
let dotenv = require("dotenv").config();
let moment = require("moment");
let fs = require("fs");

let keys = require("./keys");
let spotify = new Spotify(keys.spotify);

moment().format();

//==remember to install the npm packages in order for bot to work properly==//

let command = process.argv[2];
let input = process.argv[3];

//==Four different commands this can take==//
//31) concert-this
//2) spotify=this-song
//3) movie-this
//4) do-what-it-says

switch (command) {
  case "concert-this":
    let concertURL =
      "https://rest.bandsintown.com/artists/" +
      input +
      "/events?app_id=codingbootcamp";
    axios
      .get(concertURL)
      .then(function(response) {
        let data = response.data[0];
        let concertData = [
          "------------------------",
          "Artist: " + input,
          "\nVenue: " + data.venue.name,
          "\nLocation: " + data.venue.city + ", " + data.venue.region,
          "\nDate: " + moment(data.datetime).format("MM/DD/YYYY"),
          "------------------------"
        ].join("\n");
        console.log(concertData);
      })
      .catch(function(error) {
        console.log(error);
      });

    console.log("concert command test");
    break;

  case "spotify-this-song":
    console.log("spotify command test");
    break;

  case "movie-this":
    console.log("/////// Movie Info Below ///////");
    axios
      .get(
        "http://www.omdbapi.com/?t=" + input + "&y=&plot=short&apikey=trilogy"
      )
      .then(function(response) {
        console.log(response.data.Title);
        console.log(response.data.Year);
        console.log(response.data.Rated);
        console.log(response.data.Country);
        console.log(response.data.Language);
        console.log(response.data.Plot);
        console.log(response.data.Actors);
      });

    console.log("movie command test");
    break;

  case "do-what-it-says":
    console.log("filesystem command test");
    break;
}
