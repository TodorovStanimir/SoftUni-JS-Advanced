let Parser = require("./solution.js");
let expect = require("chai").expect;
describe("MyTests", () => {
    let parser;
    beforeEach(function () {
        parser = new Parser('[{"Nancy":"architect"},{"John":"developer"},{"Kate":"HR"}]');
    });

    describe("check constructor of class", function () {
        it("shoud corectly inisialize an instance with parsed data and two properties", function () {
            expect(parser._data).to.deep.equal([{ Nancy: 'architect' }, { John: 'developer' }, { Kate: 'HR' }]);
            expect(parser._log).to.deep.equal([]);
            expect(typeof parser._addToLog).to.deep.equal(`function`);
            expect(parser._addToLog()).to.equal('Added to log');
            expect(parser.data).to.deep.equal([{ Nancy: 'architect' }, { John: 'developer' }, { Kate: 'HR' }]);
        });
    });

    describe("check function print()", function () {
        it("shoud add to log 'getData'", function () {
            const result = parser.print();
            expect(parser._log).to.deep.equal(['0: print']);
            expect(result).to.equal('id|name|position\n0|Nancy|architect\n1|John|developer\n2|Kate|HR');
        });
    });

    describe("check function addEntries(entries)", function () {
        it("shoud add new entries to '_data' and 'Entries added!' to '_log'", function () {
            const result = parser.addEntries("Steven:tech-support Edd:administrator");
            expect(parser.data).to.deep.equal([
                { Nancy: 'architect' },
                { John: 'developer' },
                { Kate: 'HR' },
                { Steven: 'tech-support' },
                { Edd: 'administrator' }
            ]
            );
            expect(result).to.equal('Entries added!');
            expect(parser._log).to.deep.equal(['0: addEntries', '1: getData']);
        });
    });

    describe("check function removeEntry(key)", function () {
        it("shoud throw an error if we have not entries with given key", function () {
            const result = () => parser.removeEntry('Steven');
            expect(result).to.throw("There is no such entry!");
        });
        it("should return message 'Removed correctly!' if there is a entrie with given key", function () {
            const result = parser.removeEntry('Nancy');
            expect(result).to.equal("Removed correctly!");
        });
        it("should add 'removeEntry' to '_log', if there is a entrie with given key", function () {
            parser.removeEntry('Nancy');
            expect(parser._log).to.deep.equal(['0: removeEntry']);
        });
        it("should add property 'deleted: true' to entrie, if there is a entrie with given key", function () {
            parser.removeEntry('Nancy');;
            expect(parser.data).to.deep.equal([{ John: 'developer' }, { Kate: 'HR' }]);
            expect(parser._data).to.deep.equal([{ "Nancy": "architect", "deleted": true }, { John: 'developer' }, { Kate: 'HR' }]);
        });
    });

    describe("check function addTolog(command)", function () {
        it("shoud add add to the log array the command message and increase the counter.", function () {
            parser.removeEntry("Nancy");
            parser.addEntries("Steven:tech-support Edd:administrator");
            parser.removeEntry("Steven");
            expect(parser._log).to.deep.equal(['0: removeEntry', '1: addEntries', '2: removeEntry']);
        });

    });
});