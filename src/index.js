var uniqueRandomArray = require("unique-random-array");
var allThoughts = require("./thoughts.json");
var request = require('request');
var Promise = require("promise");
module.exports = {
    random:console.log(uniqueRandomArray(allThoughts.startup)),
    all:allThoughts,
    particular:particular,
    tod_thought:tod_thought,
    tod_author:tod_author
};

function random(){
    return uniqueRandomArray(allThoughts.startup);
}
function particular(n){
    if(n<0 || n>=allThoughts.startup.length)
        return "Wrong index";
    else if(n == null)
        return "Index required";
    else{
        return allThoughts.startup[n];
    }

}

function tod_author(){
    request('http://quotes.rest/qod.json', function (error, response, body) {
        //Check for error
        if(error){
            return console.log('Error:', error);
        }

        //Check for right status code
        if(response.statusCode !== 200){
            return console.log('Invalid Status Code Returned:', response.statusCode);
        }

        //All is good. Print the quote
        var data = JSON.parse(body);

        console.log(data.contents.quotes[0].author);


    });
}
function tod_thought(){
    var myPromise = new Promise(function(resolve,reject){
        request('http://quotesondesign.com/api/3.0/api-3.0.json', function (error, response, body) {
            //Check for error
            if(error){
                reject('Error:', error);
            }

            //Check for right status code
            if(response.statusCode !== 200){
                reject('Invalid Status Code Returned:', response.statusCode);
            }

            //All is good. Print the quote
            resolve(body);
        });
    });

    myPromise.then(function(body){
        return JSON.parse(body);  //success
            }).then(function(parsedJSON){
        console.log(parsedJSON.quote)
        }, function(err){
        console.log(err); //error
    });

}

// var lib = require("./src/index.js"); lib.random()
