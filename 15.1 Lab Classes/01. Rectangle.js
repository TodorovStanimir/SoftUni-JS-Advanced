class Rectangle {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }
    calcArea() { return this.width * this.height }
}
let rect = new Rectangle(4, 5, 'red');
let rect1 = new Rectangle(8, 5, 'green');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea())
Rectangle.prototype.calcPerim = function () { return 2 * (this.width + this.height) };
console.log(rect.calcPerim());
console.log(rect1.calcPerim());
