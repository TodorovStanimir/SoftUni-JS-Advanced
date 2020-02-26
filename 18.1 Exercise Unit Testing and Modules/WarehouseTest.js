const { expect } = require('chai');
const Warehouse = require('./Warehouse.js');

describe("Warehouse", () => {
    //test number 7
    describe("Test", function () {
        let wareHouse
        beforeEach(function () {
            wareHouse = new Warehouse(5);
        });
    
        it('should give correct message for empty warehouse', function () {
            expect(wareHouse.revision()).to.be.equal('The warehouse is empty')
        })
    });
    describe("cheking functionality addProduct(type, product, quantity)", () => {
        //test number 4
        it("addProduct(type, product, 20), 20===space", () => {
            let wareHouse = new Warehouse(20);
            expect(wareHouse.addProduct('Drink', 'water', 20)).to.deep.equal({ 'water': 20 })
        });
        //test number 5
        it("addProduct(type, product, 21), 21>space===20", () => {
            let wareHouse = new Warehouse(20);
            expect(() => wareHouse.addProduct('Food', 'meat', 21)).to.throw()
        });
        it("addProduct(type, product, 21), 21>space===20", () => {
            expect(() => new Warehouse('skj')).to.throw()
        });
    });

    //test number 6
    describe("cheking functionality orderProducts(type)", () => {
        it("sort all products of a given type in descending order by the quantity", () => {
            let wareHouse = new Warehouse(100);
            wareHouse.addProduct('Drink', 'water', 20);
            wareHouse.addProduct('Food', 'meat', 17);
            wareHouse.addProduct('Drink', 'grape', 16);
            wareHouse.addProduct('Food', 'spageti', 18);
            wareHouse.addProduct('Drink', 'wine', 19);
            wareHouse.orderProducts('Drink');
            expect(JSON.stringify(wareHouse.availableProducts.Drink)).equal('{"water":20,"wine":19,"grape":16}')
        });
    });
    //test numbers 8 and 9
    describe("cheking functionality revision()", () => {
        it("if ocupatedCapacity()>0 => Returns a string in which we print all products of each type", () => {
            let wareHouse = new Warehouse(100);
            wareHouse.addProduct('Food', 'musaka', 20);
            wareHouse.addProduct('Drink', 'wine', 17);
            wareHouse.addProduct('Food', 'potato', 16);
            wareHouse.addProduct('Drink', 'juice', 18);
            wareHouse.addProduct('Food', 'meat-ball', 19);
            expect(wareHouse.revision()).equal("Product type - [Food]\n- musaka 20\n- potato 16\n- meat-ball 19\nProduct type - [Drink]\n- wine 17\n- juice 18")
        });
        it("if ocupatedCapacity()===0 => The warehouse is empty", () => {
            let wareHouse = new Warehouse(100);
            expect(wareHouse.revision()).to.be.equal("The warehouse is empty")
        });
    });
    //test numbers 10 and 11
    describe("cheking functionality scrapeAProduct(product, quantity)", () => {
        it("reduce the quality of the given product if it exist", () => {
            let wareHouse = new Warehouse(100);
            wareHouse.addProduct('Food', 'musaka', 50);
            expect(() => wareHouse.scrapeAProduct('kufteta', 20)).to.throw("kufteta do not exists")
        });
    });
})