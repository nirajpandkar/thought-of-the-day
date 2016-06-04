var thoughts = require("../src/index");
var chai = require("chai");
var expect = chai.expect;

describe("thoughts",function(){
    describe("random",function(){
        it("should return an object with random quote and corresponding author",function(){
            var randomQuote = thoughts.random();
            expect(randomQuote).to.be.an('object');
        });

        it("should return a different object than the previous one every time",function(){
            var prevRandomQuote = thoughts.random();
            var newRandomQuote = thoughts.random();
            expect(prevRandomQuote).to.be.not.equal(newRandomQuote);
        });

        it("should return object from specified category",function(){
            var randomQuote = thoughts.random("anonymous");
            expect(thoughts.all.anonymous).to.include(randomQuote);
        })
    });

    describe("particular",function(){
        it("should return a particular object",function(){
            var particularQuote = thoughts.particular("startup",3);
            expect(thoughts.all.startup[3]).to.be.equal(particularQuote);
        });

        it("should return an appropriate warning if correct parameter not given",function(){
            var wrongIndex = thoughts.particular("startup",-1);
            var noIndex = thoughts.particular("startup");
            expect(wrongIndex).to.be.a('string');
            expect(noIndex).to.be.a('string');
        })
    })
});


