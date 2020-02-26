function avg(arrayOfScores) {
    var sumOfScores = arrayOfScores.reduce((prev, cur) => {
        return prev + cur;
    }, 0);

    this.avgScore = sumOfScores / arrayOfScores.length;
}

var gameController = {
    scores: [20, 34, 55, 46, 77],
    avgScore: null
}

var gradesStudent = {
    grades: [5, 5, 5, 5, 5, 4, 6],
    avgScore: null
}

console.log(avg(gameController.scores)); //undefined
console.log(gameController.avgScore); // null

avg.call(gameController, gameController.scores);
console.log(gameController.avgScore); // 46.4

console.log(avg(gradesStudent.grades)); //undefined
console.log(gradesStudent.avgScore); //null

avg.call(gradesStudent, gradesStudent.grades);
console.log(gradesStudent.avgScore); //5

let a = (function () {
    return `Hello Mr.`;
}());

function hello(par) {
return `${a} ${par}`
}

console.log(hello('Todorov'))
console.log(hello('Petrov'))