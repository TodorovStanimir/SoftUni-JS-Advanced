let SkiResort = require('./solution.js');

describe("class SkiResort", () => {
    let res;
    beforeEach(function () {
        res = new SkiResort('skiResort');
    });

    describe("check constructor of class", function () {
        it("shoud corectly inisialize ane instance with three properties", function () {
            // test 1
            expect(res.name).to.equal('skiResort');
            expect(res.voters).to.equal(0);
            expect(res.hotels).to.deep.equal([]);
            expect(res.hotels).to.be.a('array');
            expect(res.hotels.length).to.equal(0);
        });
    });

    //test 3, 4
    describe("check function buld(name, beds)", function () {

        it("shoud reqister all books in books property", function () {
            let result = () => res.build('', 2);
            let result1 = () => res.build('Sun', 0);
            expect(result).to.throw("Invalid input");
            expect(result1).to.throw("Invalid input");
        });

        it("shoud reqister all books in books property", function () {
            let result = res.build('Sun', 10);
            expect(result).to.equal(`Successfully built new hotel - Sun`);
            expect(res.hotels).to.deep.equal([{ name: 'Sun', beds: 10, points: 0 }]);
            expect(res.hotels.length).to.equal(1);
        });
    });

    describe("check function book(name, beds)", function () {

        it("shoud reqister all books in books property", function () {
            let result = () => res.build('', 2);
            let result1 = () => res.build('Sun', 0);
            expect(result).to.throw("Invalid input");
            expect(result1).to.throw("Invalid input");
        });

        it("shoud reqister all books in books property", function () {
            res.build('Sun', 10);
            let result = () => res.book('Sunny', 1)
            expect(result).to.throw("There is no such hotel");
        });

        it("shoud reqister all books in books property", function () {
            res.build('Sun', 5);
            let result = () => res.book('Sun', 6)
            expect(result).to.throw("There is no free space");
        });

        it("shoud reqister all books in books property", function () {
            res.build('Sun', 10);
            let result = res.book('Sun', 6)
            expect(result).to.equal("Successfully booked");
            expect(res.hotels).to.deep.equal([{ name: 'Sun', beds: 4, points: 0 }]);
        });

    });

    describe("check function leave(name, beds, points)", function () {

        it("shoud reqister all books in books property", function () {
            let result = () => res.build('', 2);
            let result1 = () => res.build('Sun', 0);
            expect(result).to.throw("Invalid input");
            expect(result1).to.throw("Invalid input");
        });

        it("shoud reqister all books in books property", function () {
            res.build('Sun', 10);
            let result = () => res.leave('Sunny', 1)
            expect(result).to.throw("There is no such hotel");
        });

        it("shoud reqister all books in books property", function () {
            res.build('Sun', 10);
            res.book('Sun', 6)
            let result = res.leave('Sun', 6, 5)
            expect(result).to.equal("6 people left Sun hotel");
            expect(res.hotels).to.deep.equal([{ name: 'Sun', beds: 10, points: 30 }]);
            expect(res.voters).to.equal(6)
        });
    });

    describe("check function averageGrade()", function () {

        it("shoud reqister all books in books property", function () {
            res.build('Sun', 10);
            // res.book('Sun', 6)
            let result = res.averageGrade('Sun', 6, 5)
            expect(result).to.equal("No votes yet");
        });

        it("shoud reqister all books in books property", function () {
            res.build('Sun', 10);
            res.build('Sun1', 5)
            res.book('Sun', 2)
            res.book('Sun1', 2)
            res.leave('Sun', 2, 1)
            res.leave('Sun', 2, 1)
            let result = res.averageGrade('Sun', 6, 5)

            // expect(res.hotels).to.deep.equal([{ name: 'Sun', beds: 10, points: 30 }]);
            expect(result).to.equal(`Average grade: 1.00`)
        });
    });

    describe("check function averageGrade()", function () {

        it("shoud reqister all books in books property", function () {
            res.build('Sun', 10);
            // res.book('Sun', 6)
            let result = res.averageGrade('Sun', 6, 5)
            expect(result).to.equal("No votes yet");
        });

        it("shoud reqister all books in books property", function () {
            res.build('Sun', 10);
            res.build('Sun1', 5)
            // res.book('Sun', 2)
            // res.book('Sun1', 2)
            // res.leave('Sun', 2, 1)
            // res.leave('Sun', 2, 1)
            let result = res.bestHotel;

            // expect(res.hotels).to.deep.equal([{ name: 'Sun', beds: 10, points: 30 }]);
            expect(result).to.equal("No votes yet")
        });

        it("shoud reqister all books in books property", function () {
            res.build('Sun', 10);
            res.build('Sun1', 5)
            res.book('Sun', 2)
            res.book('Sun1', 2)
            res.leave('Sun', 2, 1)
            res.leave('Sun', 2, 1)
            let result = res.bestHotel;
            expect(result).to.equal('Best hotel is Sun with grade 4. Available beds: 12')
        });
    });
});
