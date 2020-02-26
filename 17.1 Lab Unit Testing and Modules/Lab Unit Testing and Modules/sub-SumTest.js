const { expect } = require('chai');
const rgbToHexColor = require('./sub-Sum.js');

describe("Sub sum lab task", () => {
    it("Sub sum lab task", () => {
        expect(typeof sum).to.equal("function")
    });
    it("Sub sum computes [1,1] => 2", () => {
        expect('rgbToHexColor([1, 1])).to.equal(2)
    });
    it("Sub sum computes [1,1,1], 1 => 2", () => {
        expect(sum([1, 1, 1], 1)).to.equal(2)
    });
    it("Sub sum computes [1,1,1,1], 1, 2 => 2", () => {
        expect(sum([1, 1, 1, 1], 1, 2)).to.equal(2)
    });
    it("Sub sum computes [1,1], -1, 1 => 2", () => {
        expect(sum([1, 1], -1, 1)).to.equal(2)
    });
    it("Sub sum computes 1, -1, 1 => NaN", () => {
        expect(isNaN(sum(1, -1, 1))).to.equal(true)
    });


    // test saturation
    it("Sub sum computes [10, 20, 30, 40, 50, 60], 3, 300 => 150", () => {
        expect(sum([10, 20, 30, 40, 50, 60], 3, 300)).to.equal(150)
    });
    it("Sub sum computes [1.1, 2.2, 3.3, 4.4, 5.5], -3, 1 => 3.3", () => {
        expect(sum([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1)).to.equal(3.3)
    });
    it("Sub sum computes [10, 'twenty', 30, 40], 0, 2 => NaN", () => {
        expect(isNaN(sum([10, 'twenty', 30, 40], 0, 2))).to.equal(true)
    });
    it("Sub sum computes [], 1, 2 => 0", () => {
        expect(sum([], 1, 2)).to.equal(0)
    });
    it("Sub sum computes 'text', 0, 2 => NaN", () => {
        expect(isNaN(sum('text', 0, 2))).to.equal(true)
    });
    it("Sub sum computes {}, 0, 2 => NaN", () =>{
        expect(isNaN(sum({}, 0, 2))).to.equal(true)
    })
})