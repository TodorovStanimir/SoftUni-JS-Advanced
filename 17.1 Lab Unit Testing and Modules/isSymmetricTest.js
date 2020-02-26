const { expect } = require('chai');
const isSymmetric = require('./isSymmetric.js');

describe("isSymmetric", () => {

    it("should return true if take a symmetricArray", () => {
        let expected = isSymmetric([1, 1, 1, 1]);
        expect(expected).equal(true)
    });

    it("ishould return false if take a asymmetricArray", () => {
        let expected = isSymmetric([1, 1, 1, 2]);
        expect(expected).equal(false)
    });

    it("should return false if take a string", () => {
        let expected = isSymmetric('jfdhkjhdfjk');
        expect(expected).equal(false)
    });

    it("should return false if take a number", () => {
        let expected = isSymmetric(8);
        expect(expected).equal(false)
    });

    it("should return true if take a symmetric object of any variables", () => {
        let expected=isSymmetric([5,'hi',{a:5},new Date(),{a:5},'hi',5]);
        expect(expected).to.be.equal(true);
        });
})