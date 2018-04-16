var inquirer = require("inquirer");
// var liri = require("./liri")


    inquirer
        .prompt([{
                type: "list",
                message: "enter my-tweets, spotify-this-song, movie-this, or do-what-it-says",
                choices:["my-tweets","spotify-this-song","movie-this", "do-what-it-says"],
                name: "selection",

            },

            // {
            //     type: "confirm",
            //     message: "Ok, thank you for your selection",
            //     name: "confirm",



            // }





        ])

        .then(function (inquirerResponse) {
            //     // If the inquirerResponse confirms, we displays the inquirerResponse's username and pokemon from the answers.
            // if (inquirerResponse.confirm) {
            //     console.log("\nWelcome " + inquirerResponse.username);
            //     console.log("Your " + inquirerResponse.selection + " is ready for battle!\n");
            // } else {
            //     console.log("\nThat's okay " + inquirerResponse.username + ", come again when you are more sure.\n");
            
            console.log(inquirerResponse);

            if(inquirerResponse="my-tweets"){
                return twitter()
                }else if(inquirerResponse.selection="spotify-this-song"){
                    spotify()
                }else if(inquirerResponse.selection="movie-this"){
                    movie()
                }else if(inquirerResponse.selection="do-what-it-says"){
                    text()
                }else{
                    return("sorry try again")
                }
            
        });


    // inquirer.prompt(questions).then(function(answers) {
    //     console.log(JSON.stringify(answers, null, '  '))

    // if(inquirerResponse.choices="my-tweets"){
    //     return twitter()
    //     }else if(inquirerResponse.choices="spotify-this-song"){
    //         spotify()
    //     }else if(inquirerResponse.choices="movie-this"){
    //         movie()
    //     }else if(inquirerResponse.choices="do-what-it-says"){
    //         text()
    //     }else{
    //         return("sorry try again")
    //     }
    

    // function checkSel(pickList, errors) {
    // var pickList = inquirerResponse.choices;
    //     switch (pickList) {
    //         case "my-tweets":
    //             twitter();
    //             break;
    //         case "spotify-this-song":
    //             spotify();
    //             break;
    //         case "movie-this":
    //             movie();
    //             break;
    //         case "do-what-it-says":
    //             text();
    //             return "sorry try again"
    //     }
    // }

    function twitter() {
        client.get('statuses/user_timeline', {count: 20}, function (error, tweets, response) {
            if (error) throw error;
            // for(var i=0; i<tweets.length; i++);
            tweets.forEach(function (tweet) {
                console.log(tweet.text);
            })
        });
    }


// function movie(omdb)
// inquirer.prompt(questions[1].message).then(function(answers){
// console.log(name);
//});