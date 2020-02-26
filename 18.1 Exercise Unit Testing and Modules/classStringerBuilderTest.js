const { expect } = require('chai');
const StringBuilder = require('./classStringerBuilder.js');

describe("StringBuilder", () => {
    it("Can be instantiated without anything", function () {
        let expected = new StringBuilder();
        expect(expected).to.be.a('object', "Function work with an empty input")
    });

    it("Can be instantiated with a passed in string argument", function () {
        let expected = new StringBuilder('Test');
        expect(expected._stringArray).to.have.lengthOf(4)
    });

    it("append(string) - length", function () {
        let expected = new StringBuilder('Pesho');
        expected.append('Ivo');
        expect(expected._stringArray).to.have.lengthOf(8)
    });

    it("prepend(string) - prepend string in begging", function () {
        let expected = new StringBuilder('11111');
        expected.prepend('2');
        expect(expected._stringArray[0]).equals('2')
    });

    it("insertAt(string, index) - inserted string, like Array to the given index", function () {
        let expected = new StringBuilder('Ivan Petrov');
        expected.insertAt('Ivanov', '5');
        expect(expected._stringArray[6]).equals('v')
    });

    it("insertAt(string, index) - first argument must be a string", function () {
        let expected = new StringBuilder('Ivan Petrov');
        expect(() => {
            expect.insertAt('jhgh', '6').to.Throw('Argument must be a string')
        })
    });

    it("remove(startIndex, length) - removes counts elements = length, starting from given index", function () {
        let expected = new StringBuilder('Ivan Petrov');
        expected.remove(5, 5);
        expect(expected._stringArray[5]).equals('v')
    });

    it("toString() method returns string with all elements joined by empty string", function () {
        let expected = new StringBuilder('Ivan Ivanov');
        expected.append(' Petrov');
        expected.prepend('Mr. ');
        expected.insertAt('Hello Mr. ', 0);
        expected.remove(5, 4);
        expect(expected.toString()).equals('Hello Mr. Ivan Ivanov Petrov')

    })

    it("argument should be a string", () => {
        expect(() => StringBuilder._vrfyParam(true)).to.throw(TypeError, "Argument must be string")
    });

})