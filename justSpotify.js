require("dotenv").config();
var inquirer =require("inquirer");
var Spotify = require("node-spotify-api");
var keys = require("./keys.js")
var request = require( "request");

var spotify = new Spotify(keys.spotify);

var songName = process.argv.slice(2).join(' ');

spotify.search({ type: 'track', query: 'what i got', limit:[1] }, function(err, data,) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
//    console.log(typeof data);
   console.log(data.tracks.items)
//   var newData = JSON.stringify(data, null, 2); 
//   console.log(newData);
   
  
  });
  spotifyFunctionName();
  function spotifyFunctionName(name) {
//put query name in name()
    inquirer
      .prompt([
      {
        type:"input",
        name:"song",
        message:"What song are you looking for?",
        when:function(answers){
          return answers.music;
        }
      }
    ])
  function music(display){
    return function(answers){
      return answers [display];
    }
  }

inquirer.prompt(answers => {
    console.log(JSON.stringify(answers, null, '  '));
  });
  }
 
  // module.exports = spotifyFunctionName;