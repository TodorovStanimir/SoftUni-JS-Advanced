const { expect } = require('chai');
const printDecOfCards = require('./printDeckOfCard.js');

describe("print dec lab task", () => {
    it("print dec lab task is a function", () => {
        expect(typeof printDecOfCards).to.equal("function")
    });
    it("print dec lab task ['1S'] => Invalid card: 1S", () => {
        expect(printDecOfCards(['1S'])).to.equal(undefined)
    });
})