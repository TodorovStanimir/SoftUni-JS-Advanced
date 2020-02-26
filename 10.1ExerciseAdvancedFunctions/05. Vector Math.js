solution = {
    add: ([x1, y1], [x2, y2]) => { return [x1 + x2, y1 + y2] },
    multiply: ([x1, y1], s) => { return [x1 * s, y1 * s] },
    length: ([x1, y1]) => { return Math.sqrt(x1 * x1 + y1 * y1) },
    dot: ([x1, y1], [x2, y2]) => { return x1 * x2 + y1 * y2 },
    cross: ([x1, y1], [x2, y2]) => { return x1 * y2 - y1 * x2 }
}
console.log(solution.add([5.43, -1], [1, 31]));
console.log(solution.multiply([3.5, -2], 2));
console.log(solution.length([3, -4]));
console.log(solution.dot([1, 0], [0, -1]));
console.log(solution.cross([3, 7], [1, 0]));

