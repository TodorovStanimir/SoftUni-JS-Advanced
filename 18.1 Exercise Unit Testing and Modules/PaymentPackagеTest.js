const { expect } = require('chai');
const PaymentPackage = require('./PaymentPackagе.js');

describe("class PaymentPackage", () => {
    it("check if create new instance", () => {
        let expected = new PaymentPackage('HR Services', 1000)
        expect(expected).to.be.an.instanceof(PaymentPackage);
        expect(expected._name).to.equal('HR Services')
        expect(expected._value).to.equal(1000)
        expect(expected._VAT).to.equal(20)
        expect(expected._active).to.be.a('boolean')
    });
    it("check for a input with one param", () => {
        expect(() => (new PaymentPackage('HR Services')).to.throw('Value must be a non-negative number'))
        expect(() => (new PaymentPackage('HR Services', 'HR Services')).to.throw('Value must be a non-negative number'))
        expect(() => (new PaymentPackage('HR Services', -10)).to.throw('Value must be a non-negative number'))
        expect(() => (new PaymentPackage(10)).to.throw('Name must be a non-empty string'))
        expect(() => (new PaymentPackage('', 10)).to.throw('Name must be a non-empty string'))
    });
    it("check all METHODS", () => {
        let expected = new PaymentPackage('HR Services', 1500)
        expect(expected).to.have.property('name');
        expect(expected).to.have.property('value');
        expect(expected).to.have.property('VAT');
        expect(expected).to.have.property('active');
        expect(expected).to.have.property('toString');
    });
    it("check name method", () => {
        expect(() => (new PaymentPackage.name('')).to.throw('Name must be a non-empty string'))
        expect(() => (new PaymentPackage.name(150)).to.throw('Name must be a non-empty string'))
        expect(() => (new PaymentPackage.name(true)).to.throw('Name must be a non-empty string'))
    });
    it("check value method", () => {
        expect(() => (new PaymentPackage.value(-5)).to.throw('Value must be a non-negative number'))
        expect(() => (new PaymentPackage.value('')).to.throw('Value must be a non-negative number'))
        expect(() => (new PaymentPackage.value(true)).to.throw('Value must be a non-negative number'))
    });
    it("check VAT method", () => {
        expect(() => (new PaymentPackage.VAT(-1)).to.throw('VAT must be a non-negative number'))
        expect(() => (new PaymentPackage.VAT(true)).to.throw('VAT must be a non-negative number'))
        expect(() => (new PaymentPackage.VAT('')).to.throw('VAT must be a non-negative number'))
    });
    it("check active method", () => {
        expect(() => (new PaymentPackage.active('')).to.throw('Active status must be a boolean'))
        expect(() => (new PaymentPackage.active(1)).to.throw('Active status must be a boolean'))
    });
    it("check toString with changes", () => {
        let expected = new PaymentPackage('HR Services', 100)
        expected.active = false
        expected.VAT = 30
        expect(expected.toString()).to.equal('Package: HR Services (inactive)\n- Value (excl. VAT): 100\n- Value (VAT 30%): 130');
    });
    it("check toString without changes", () => {
        let expected = new PaymentPackage('HR Services', 1000)
        expect(expected.toString()).to.equal('Package: HR Services\n- Value (excl. VAT): 1000\n- Value (VAT 20%): 1200');
    });

});


// describe("PaymentPackage", function(){
//     it("constructor with 2 params", function() {
//         let actual = new PaymentPackage("str", 5);
 
//         assert.equal("str", actual.name);
//         assert.equal(5, actual.value);
//         assert.equal(20, actual.VAT);
//         assert.equal(true, actual.active)
//     });
 
//     it("constructor with valid params", function() {
//         var actual = new PaymentPackage("str", 5);
//         assert.equal(actual.value, 5);
//         assert.equal(actual.name, "str");
//         assert.equal(actual.VAT, 20);
//         assert.equal(actual.active, true);
//     });
 
//     it("constructor with 1 params", function() {
//         assert.throws(() => new PaymentPackage("str"), Error, 'Value must be a non-negative number');
//     });
 
//     it("constructor with 1 params", function() {
//         assert.throws(() => new PaymentPackage(5), Error, 'Name must be a non-empty string');
//     });
 
//     it("constructor with no params", function() {
//         assert.throws(() => new PaymentPackage(), Error, 'Name must be a non-empty string');
//     });
 
//     it("name get/set", function() {
//         let actual = new PaymentPackage("str", 5);
//         assert.equal("str", actual.name);
 
//         actual.name = "new";
//         assert.equal("new", actual.name);
//     });
 
//     it("non-string name get/set", function() {
//         let actual = new PaymentPackage("str", 5);
//         assert.equal("str", actual.name);
 
//         assert.throws(() => actual.name = true, Error, 'Name must be a non-empty string');
//     });
 
//     it("empty name get/set", function() {
//         let actual = new PaymentPackage("str", 5);
//         assert.equal("str", actual.name);
 
//         assert.throws(() => actual.name = "", Error, 'Name must be a non-empty string');
//     });
 
//     it("value get/set", function() {
//         let actual = new PaymentPackage("str", 5);
//         assert.equal(5, actual.value);
 
//         actual.value = 10;
//         assert.equal(10, actual.value);
//     });
 
//     it("negative value get/set", function() {
//         let actual = new PaymentPackage("str", 5);
//         assert.equal("str", actual.name);
 
//         assert.throws(() => actual.value = -5, Error, 'Value must be a non-negative number');
//     });
 
//     it("non-number value get/set", function() {
//         let actual = new PaymentPackage("str", 5);
//         assert.equal("str", actual.name);
 
//         assert.throws(() => actual.value = "aa", Error, 'Value must be a non-negative number');
//     });
 
//     it("zero value get/set", function() {
//         let actual = new PaymentPackage("str", 5);
//         actual.value = 0;
 
//         assert.equal(actual.value, 0);
//     });
 
//     it("non-number VAL get/set", function() {
//         let actual = new PaymentPackage("str", 5);
 
//         assert.throws(() => actual.VAT = "a", Error, 'VAT must be a non-negative number');
//     });
 
//     it("negative VAL get/set", function() {
//         let actual = new PaymentPackage("str", 5);
 
//         assert.throws(() => actual.VAT = -5, Error, 'VAT must be a non-negative number');
//     });
 
//     it("zero VAL get/set", function() {
//         let actual = new PaymentPackage("str", 5);
//         actual.VAT = 0;
 
//         assert.equal(actual.VAT, 0);
//     });
 
//     it("boolean active get/set", function() {
//         let actual = new PaymentPackage("str", 5);
//         actual.active = false;
//         assert.equal(actual.active, false);
//     });
 
//     it("non-boolean active get/set", function() {
//         let actual = new PaymentPackage("str", 5);
 
//         assert.throws(() => actual.active = 5, Error, 'Active status must be a boolean');
//     });
 
//     it("toString() with active", function() {
//         let actual = new PaymentPackage("str", 5);
 
//         assert.equal(actual.toString(), "Package: str\n- Value (excl. VAT): 5\n- Value (VAT 20%): 6");
//     });
 
//     it("toString() with inactive", function() {
//         let actual = new PaymentPackage("str", 5);
//         actual.active = false;
 
//         assert.equal(actual.toString(), "Package: str (inactive)\n- Value (excl. VAT): 5\n- Value (VAT 20%): 6");
//     });
// });