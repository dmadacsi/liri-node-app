var inquirer = require("inquirer");
// var liri = require("./liri");

function processAnswers(answers){
    console.log("your answers are:", answers);
}
var questions=[
        {
        type: "input",
        message: "enter my-tweets, spotify-this-song, movie-this, or do-what-it-says",
        // choices:["my-tweets","spotify-this-song","movie-this", "do-what-it-says"],
        name: "selection",
        }
        
    ]
    inquirer.prompt(questions, processAnswers)
   