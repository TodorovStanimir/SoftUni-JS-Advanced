const myArray = (function () {
    return ['g','e', 13,  3, 'b', 2, 22, 345, 'a', 12, 'c', 654, 'd', 454, 54, 456]
}());

console.log(myArray.sort((a, b) => {
    if (typeof a === 'string' && typeof b === 'string') {
        return a.localeCompare(b);
    } else if (typeof a === 'number' && typeof b === 'number') {
        return a - b
    }
    if (typeof a === 'string') {
        return -1
    } else {
        return 1
    }
}))



