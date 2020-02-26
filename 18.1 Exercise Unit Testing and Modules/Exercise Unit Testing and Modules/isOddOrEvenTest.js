const { expect } = require('chai');
const isOddOrEven = require('./isOddOrEven.js');

describe("isOddOrEven", () => {
    it("should return undefined with a number parameter", () => {
        expect(isOddOrEven(13)).to.equal(undefined, "Function did not return the correct result")
    });
    it("should return undefined with an object parameter", () => {
        expect(isOddOrEven({ name: 'Stanimir' })).to.equal(undefined, "Function did not return the correct result")
    });
    it("should return even with a four", () => {
        expect(isOddOrEven('four')).to.equal('even', "Function return a correct result")
    });
    it("should return odd with a one", () => {
        expect(isOddOrEven('one')).to.equal('odd', "Function return a correct result")
    });
})