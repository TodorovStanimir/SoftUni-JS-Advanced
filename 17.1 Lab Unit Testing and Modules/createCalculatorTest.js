const { expect } = require("chai");
const createCalculator = require('./createCalculator.js')

describe("createCalculator", () => {
    let expected=0;

    beforeEach(function () {
        expected = createCalculator();
    });

    it("createCalculator must return an object", () => {
        expect(expected).to.be.a('object')
    });

    it("should return 6 for add(6)", () => {
        expected.add(6);
        expect(expected.get()).equals(6)
    });

    it("should return -6 for subtract(6)", () => {
        expected.subtract(6);
        expect(expected.get()).equals(-6)
    });

    it("should return 61.2 for add(66.22), substract(5.02)", () => {
        expected.add(66.22);
        expected.subtract('5.02')
        expect(expected.get()).equals(61.2)
    });

    it("should return NaN for add(string)", function () {
        expected.add('hello');
        expect(expected.get()).to.be.NaN;
    });

    it("should return NaN for subtarct(string)", function () {
        expected.subtract('hello');
        expect(expected.get()).to.be.NaN;
    });

    it("should return 2 after add(10); subtract('7'); add('-2'); subtract(-1)", function () {
        expected.add(10);
        expected.subtract('7');
        expected.add('-2');
        expected.subtract(-1);
        let value = expected.get();
        expect(value).to.be.equal(2);
    });

})