const { expect } = require('chai');
const lookupChar = require('./lookupChar.js');

describe("lookupChar", () => {
    it("should return undefined with a non string first parameter", () => {
        expect(lookupChar(13, 4)).to.equal(undefined, "Function did not work with non string first parameter")
    });

    it("should return undefined with a non number second parameter", () => {
        expect(lookupChar('Stanimir', 'ivan')).to.equal(undefined, "Function did not work with non number first parameter")
    });

    it("should return undefined with a floating number second parameter", () => {
        expect(lookupChar('Stanimir', 3.3)).to.equal(undefined, "Function did not work with a floating number second parameter")
    });

    it("should return Incorrect index with index which is less the 0", () => {
        expect(lookupChar('Stanimir', -1)).to.equal('Incorrect index', "Function did not work with index less then zerro")
    });

    it("should return Incorrect index with index which is bigger then string length", () => {
        expect(lookupChar('Stan', 15)).to.equal('Incorrect index', "Function did not work with index bigger then string length")
    });

    it("should return 'n' with a first parameter 'Stanimir, and second parameter '3'", () => {
        expect(lookupChar('Stanimir', 3)).to.equal('n', "Function work correct")
    });
})