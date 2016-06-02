var uniqueRandomArray = require("unique-random-array");
var allThoughts = require("./thoughts.json");
module.exports = {
    random:random(),
    all:allThoughts,
    particular:particular
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
