class Circle {
    constructor(radius) { this.radius = radius }
    get diameter() { return 2 * this.radius };
    set diameter(diameter) { this.radius = diameter / 2 };
    get area() { return Math.PI * this.radius * this.radius };
}

let a = new Circle(2);
console.log(a.diameter);
console.log(a.radius);
a.diameter = 6;
console.log(a.diameter);
console.log(a.radius);