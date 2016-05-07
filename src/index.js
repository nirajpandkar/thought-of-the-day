var uniqueRandomArray = require("unique-random-array");
var request = require('request');
var allThoughts = require("./thoughts.json");
module.exports = {
    random:uniqueRandomArray(allThoughts),
    all:allThoughts,
    particular:particular,
    tod:tod
};
function particular(n){
    if(n<0 || n>=allThoughts.length)
        return "Wrong index";
    else if(n == null)
        return "Index required";
    else
        return allThoughts[n];
}

function tod(){
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
        console.log(data.contents.quotes[0].quote);

    });

}