var uniqueRandomArray = require("unique-random-array");
var allThoughts = require("./thoughts.json");
module.exports = {
    random:random,
    all:allThoughts,
    particular:particular
};
function random(category){
    if(category == null) {
        var randomCategory = uniqueRandomArray(allThoughts.categories);
        var randomQuote = uniqueRandomArray(allThoughts[randomCategory()]);
        return randomQuote();
    }
    else{
        var quote = uniqueRandomArray(allThoughts[category]);
        return quote();
    }
}

function particular(category,n){
    if(n<0 || n>=allThoughts[category].length)
        return "Index out of bound";
    else if(n == null || category == null)
        return "Either index or category is missing!";
    else{
        return allThoughts[category][n];
    }
}
//var lib = require("./src/index.js");lib.particular();