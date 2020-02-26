function toArray(x) {
    return Array.prototype.slice.call(x);
}
Function.prototype.curry = function () {
    if (arguments.length < 1) {
        return this; //return original function
    }
    let __method = this,
        args = toArray(arguments);

    return function () {
        return __method.apply(this, args.concat(toArray(arguments)));
    };
};

// // function foo(param1, param2) {
// // console.log(param1, param2)
// // }

// // foo(1,2)
// // foo.curry(3)(4)
// function add(a, b) { return a + b; }
// //create function that returns 10 + argument
// let addTo5 = add.curry(5);
// console.log(addTo5(15)); //25

let converter = function (ratio, symbol, input) {
    return [(input * ratio).toFixed(1), symbol].join(" ");
};
let kilosToPounds = converter.curry(2.2, "lbs");
let milesToKilometers = converter.curry(1.62, "km");
console.log(kilosToPounds(4)); //8.8 lbs
console.log(milesToKilometers(34)); //55.1 km