require("dotenv").config();
var Twitter =require("twitter")
var Spotify =require("node-spotify-api");
var keys = require("./keys.js")

var spotify = new Spotify(keys.spotify);

var client = new Twitter(keys.twitter);

var request = require( "request");

var movieName = process.argv.slice(2);
var songName = process.argv.slice(3);

// request(`http://www.omdbapi.com/?t=${movieName}&y=&plot=short&apikey=trilogy`, function(error, response, body) {
//     if (!error && response.statusCode === 200) {
//         console.log(`the movie info is:
//         ${JSON.parse(body).Title} was made in ${JSON.parse(body).Year}
//         Rating: ${JSON.parse(body).imdbRating} Country:${JSON.parse(body).Country}
//         Language: ${JSON.parse(body).Language} Plot:${JSON.parse(body).Plot} 
//         Actors: ${JSON.parse(body).Actors} Rotten Tomatoes ${JSON.parse(body).Ratings[1].Value} `)
//       }
//     });


    client.get('statuses/user_timeline',{count:20}, function(error, tweets, response) {
        if(error) throw error;
        // for(var i=0; i<tweets.length; i++);
           tweets.forEach(function(tweet) {
               console.log(tweet.text);
           }) 
        // console.log(JSON.stringify(tweets[0].text));  // my tweets. 
        // console.log(response);  // Raw response object. 
           }); 

      spotify.search({ type: 'track', query: 'dancing in the moonlight' }, function(err, data) {
        if ( err ) {
            console.log('Error occurred: ' + err);
            return;
        }
     
        // Do something with 'data' 
    });