const { expect } = require("chai");
const mathEnforcer = require('./mathEnforcer.js')

describe("mathEnforcer", () => {

    describe("addFive", function () {
        it("should return undefined if the parameter is not a number", () => {
            let expected = mathEnforcer.addFive(!Number)
            expect(expected).to.be.undefined
        });

        it("should work correct => add 5 and return result, if the parameter is a number", () => {
            let expected = mathEnforcer.addFive(6)
            expect(expected).equal(11)
        });

        it("should work correct => add 5 and return result, if the parameter is a less then zerro", () => {
            let expected = mathEnforcer.addFive(-6)
            expect(expected).equal(-1)
        });

        it("should be considered correct if it is within 0.01 of the correct value => add 5 and return result, if the parameter is a floating point", () => {
            let expected = mathEnforcer.addFive(6.11)
            expect(expected).to.be.closeTo(11.11, 0.01)
        });

    })

    describe("subtractTen", function () {
        it("should return undefined if the parameter of function subtractTen is not a number", () => {
            let expected = mathEnforcer.subtractTen(!Number)
            expect(expected).to.be.undefined
        });

        it("shouldwork correct => subtract 10 and return result, if the parameter is a number", () => {
            let expected = mathEnforcer.subtractTen(11)
            expect(expected).equal(1)
        });

        it("should work correct => subtract 10 and return result, if the parameter is a less then zerro", () => {
            let expected = mathEnforcer.subtractTen(-10)
            expect(expected).equal(-20)
        });

        it("should be considered correct if it is within 0.01 of the correct value => subtract 10 and return result, if the parameter is a floating point", () => {
            let expected = mathEnforcer.subtractTen(6.01)
            expect(expected).to.be.closeTo(-3.99, 0.01)
        });
    })

    describe("sum", function () {
        it("sum(par1, par2) return undefined, if par1 is a not a number", () => {
            let expected = mathEnforcer.sum('11', 11)
            expect(expected).to.be.undefined
        });

        it("sum(par1, par2) return undefined, if par2 is a not a number", () => {
            let expected = mathEnforcer.sum(11, '11')
            expect(expected).to.be.undefined
        });

        it("sum(par1, par2) return correct result, if par1 and par2 are numbers", () => {
            let expected = mathEnforcer.sum(10, 11)
            expect(expected).equal(21)
        });

        it("sum(par1, par2) return correct result, if par1 or par2 are less then zero", () => {
            let expected = mathEnforcer.sum(-10, 11)
            expect(expected).equal(1)
        });

        it("sum(par1, par2) return correct result, if par1 or par2 are floating numbers", () => {
            let expected = mathEnforcer.sum(11.1, -9.98)
            expect(expected).to.be.closeTo(1.12, 0.01)
        });

        it("checking all methods", () => {
            let expected = mathEnforcer.addFive(11.11)
            expected = mathEnforcer.subtractTen(expected)
            expected = mathEnforcer.sum(expected, 5.13)
            expect(expected).to.be.closeTo(11.24, 0.01)
        });
    })


})