var thoughts = require("../src/index");
var chai = require("chai");
var expect = chai.expect;

describe("thoughts",function(){
    describe("random",function(){
        it("should return an object with random quote and corresponding author",function(){
            var randomQuote = thoughts.random();
            expect(thoughts.all.startup).to.include(randomQuote);
        })
    })
});


