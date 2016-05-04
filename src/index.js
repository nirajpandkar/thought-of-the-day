var uniqueRandomArray = require("unique-random-array");
//var uniqueRandom = require("unique-random");  //for use in future
var allThoughts = require("./thoughts.json");
module.exports = {
    random:uniqueRandomArray(allThoughts),
    all:allThoughts,
    particular:particular
};
function particular(n){
    if(n<0 || n>=allThoughts.length)
        return "Wrong index";
    else if(n == null)
        return "Index required";
    else
        return allThoughts[n];
}
