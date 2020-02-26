const { expect } = require('chai');
const rgbToHexColor = require('./rgbToHexColor.js');

describe("rgbToHexColor", () => {
    it("rgbToHexColor must can take three integers 0,0,0 and return #000000", () => {
        let expected = rgbToHexColor(0, 0, 0);
        expect(expected).equal('#000000')
    });

    it("rgbToHexColor must can take three integers 255,255,255 and return #FFFFFF", () => {
        let expected = rgbToHexColor(255, 255, 255);
        expect(expected).equal('#FFFFFF')
    });

    it("rgbToHexColor must can not take any integer bigger then 255: 256,255,255 -> have to return undefined", () => {
        let expected = rgbToHexColor(256, 255, 255);
        expect(expected).equal(undefined)
    });

    it("rgbToHexColor must can not take any integer smaller then 0: -1,255,255 -> have to return undefined", () => {
        let expected = rgbToHexColor(-1, 255, 255);
        expect(expected).equal(undefined)
    });

    it("rgbToHexColor must can not take non Integers numbers: 255,255,230.50 -> have to return undefined", () => {
        let r = -15;
        let expected = rgbToHexColor(255, 255, r);
        expect(expected).equal(undefined)
    });
})