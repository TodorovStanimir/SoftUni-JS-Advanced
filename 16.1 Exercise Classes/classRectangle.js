class Rectangle {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }
}

functionsForMyRectangleClass = [
    { print() { return `${'-'.repeat(50)}` } },
    { calcArea() { return this.width * this.height; } },
    { calcPerimeter() { return 2 * (this.width + this.height) } },
    {
        info() {
            return `${this.print()}
|Your Rectangle with width: ${this.width} and height: ${this.height}, has:|
|    Area:${this.calcArea()}.${' '.repeat(36)}|
|    Perimeter${this.calcPerimeter()}.${' '.repeat(32)}|
${this.print()}`;
        }
    }
];

function addPropertiesToClass(functionsForMyRectangleClass, className) {
    functionsForMyRectangleClass.forEach(prop => {
        className.prototype[Object.keys(prop)[0]] = Object.values(prop)[0];
    })
}

addPropertiesToClass(functionsForMyRectangleClass, Rectangle)

let rect = new Rectangle(4, 5, 'red');
console.log(rect.info())
console.log(rect.width); // 4
console.log(rect.height); // 5
console.log(rect.color); // Red
console.log(rect.calcArea());
console.log(rect.calcPerimeter())
console.log(rect)
