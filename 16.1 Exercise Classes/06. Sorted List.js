class List {
    _size;
    constructor() {
        this.colection = [];
        this.size = 0
    }
    add(el) {
        this.colection.push(el);
        this.colection.sort((a, b) => a - b);
        this.size++;
    };
    remove(index) {
        if (index >= 0 && index <= this.colection.length - 1) {
            this.colection.splice(index, 1);
            this.colection.sort((a, b) => a - b);
            this.size--;
        }
    }
    get(index) {
        if (index >= 0 && index <= this.colection.length - 1) {
            return this.colection[index];
        }
    }
}

let list = new List();
// console.log(list.prototype.hasOwnProperty('add'))
// console.log(list);
list.add(6);
// console.log(list);
list.add(7);
list.add(5);
// console.log(list)
// console.log(list);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
console.log(list.size);
