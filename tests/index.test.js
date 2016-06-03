var thoughts = require("../src/index");
var chai = require("chai");
var expect = chai.expect;

describe("thoughts",function(){
    describe("random",function(){
        it("should return an object with random quote and corresponding author",function(){
            var randomQuote = thoughts.random();
            expect(thoughts.all.startup).to.include(randomQuote);
        });

        it("should return a different object than the previous one every time",function(){
            var prevRandomQuote = thoughts.random();
            var newRandomQuote = thoughts.random();
            expect(prevRandomQuote).to.be.not.equal(newRandomQuote);
        })
    });

    describe("particular",function(){
        it("should return a particular object",function(){
            var particularQuote = thoughts.particular(3);
            expect(thoughts.all.startup[3]).to.be.equal(particularQuote);
        })
    })
});


