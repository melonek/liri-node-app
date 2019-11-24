//== In this very first part I am going to require the following modules in order for Lirir but to
//be fully functional ==//

let axios = require("axios");
let Spotify = require("node-spotify-api");
let spotify = new Spotify(keys.spotify);
let dotenv = require("dotenv").config();
let moment = require("moment");
let fs = require("fs");
let keys = require("./keys.js");

moment().format();

//==This part will install the npm packages==//
