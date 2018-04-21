require("dotenv").config();
var Twitter = require("twitter")
var Spotify = require("node-spotify-api");
var keys = require("./keys.js")
var inquirer = require("inquirer")
var spotify = new Spotify(keys.spotify);

var client = new Twitter(keys.twitter);

var request = require("request");


// var songName = process.argv.slice(3);
// var movieName = process.argv[2]
var pickFunc = { //had to remember to wrap these below in a object to call using module.export on questions page
    omdb: function () {
        var questions = [

            {
                type: "input",
                name: "movie",
                message: "What movie are you looking for?",

            }

        ];
        inquirer.prompt(questions).then(function (answers) {
            // console.log(JSON.stringify(answers, null, ' '));
            console.log(answers.movie);
            requestMovie(answers.movie);

        });
        // var movieName=answers.movie;

        function requestMovie(movieName) {
            request(`http://www.omdbapi.com/?t=${movieName}&y=&plot=short&apikey=trilogy`, function (error, response, body) {
                if (!error && response.statusCode === 200) {
                    console.log(`the movie info is:
        ${JSON.parse(body).Title} was made in ${JSON.parse(body).Year}
        Rating: ${JSON.parse(body).imdbRating} Country:${JSON.parse(body).Country}
        Language: ${JSON.parse(body).Language} Plot:${JSON.parse(body).Plot} 
        Actors: ${JSON.parse(body).Actors} Rotten Tomatoes  `)
                    console.log(movieName, "!!!");
                }
            });
        }
    },
    twitter: function () {
        client.get('statuses/user_timeline', {
            count: 20
        }, function (error, tweets, response) {
            if (error) throw error;
            tweets.forEach(function (tweet) {
                console.log(tweet.text);
            })
        });
    }
}

module.exports = pickFunc;
// module.exports= {pickFunc};

//tomatoes ${JSON.parse(body).Ratings[1].Value}