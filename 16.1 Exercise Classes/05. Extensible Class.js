const Extensible = (function () {
    let id = 0;

    return class Extensible {
        constructor() {
            this.id = id++;
        }
        extend(template) {
            Object.keys(template).forEach(key => {
                if (typeof template[key] === 'function') {
                    Extensible.prototype[key] = template[key];
                } else {
                    this[key] = template[key];
                }
            })
        }
    }
}());


let obj1 = new Extensible();
let obj2 = new Extensible();
let obj3 = new Extensible();
console.log(obj1.id);
console.log(obj2.id);
console.log(obj3.id);
obj1.extend({
    extensionMethod: function () { },
    extensionProperty1: 'someString1',
    extensionProperty2: 'someString2'
})
console.log(obj1)
console.log(Object.getPrototypeOf(obj1))

