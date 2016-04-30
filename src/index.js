var uniqueRandomArray = require("unique-random-array");
var allThoughts = require("./thoughts.json");
module.exports = {
    random:uniqueRandomArray(allThoughts),
    all:allThoughts
};