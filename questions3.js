var inquirer = require("inquirer");
var pickFunc = require("./liri");
// var func = require("pickFunc"); 
var spotObj = require("./justSpotify")

var questions =[
            {   
                type: "input",
                name: "selection",
                message: "enter my-tweets, spotify-this-song, movie-this, or do-what-it-says",
                // choices:["my-tweets","spotify-this-song","movie-this", "do-what-it-says"],
                

            }
        ];


        
// var input= inquirer.prompt;
inquirer.prompt(questions).then(function (answers){
    console.log(JSON.stringify(answers, null, ' '));
    console.log(answers);


// var pickList =function() {
//     var text;
    
// }
    switch(answers.selection) {
      case "my-tweets":
        pickFunc.twitter();
        break;
      case "movie-this":
        pickFunc.omdb();
        break;
      case "spotify-this-song":
        spotObj.spotify();
        break;
      default:
        console.log("dunno what that is!");
        
    }
    
});


// module.exports=(pickFunc);