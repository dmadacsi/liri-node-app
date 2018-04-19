require("dotenv").config();
var inquirer =require("inquirer");
var Spotify = require("node-spotify-api");
var keys = require("./keys.js")
var request = require( "request");

var spotify = new Spotify(keys.spotify);

// var songName = process.argv.slice(2).join(' ');


 
  var spotObj={
  spotify:function() {
//put query name in name()
 var questions=[
      
      {
        type:"input",
        name:"song",
        message:"What song are you looking for?",
        
      },
      
    ];
    
  inquirer.prompt(questions).then(function (answers){
    console.log(JSON.stringify(answers, null, ' '));
    console.log(answers.song);
    var searchMe = answers.song;
  });
  
  function spotSearch(){
  spotify.search({ type: 'track', query: `${searchMe}`, limit:[1] }, function(err, data,) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
  
    console.log(data.tracks.items) 
  
  });
  }

}} 
module.exports = spotObj;