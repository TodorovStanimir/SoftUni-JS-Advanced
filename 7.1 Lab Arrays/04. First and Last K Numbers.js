function firstAndLastKNumbers(input) {
    let kElements = Number(input[0]);
    return [input.slice(1, kElements + 1).join(' '), input.slice(-kElements).join(' ')].join('\n');
}
console.log(firstAndLastKNumbers([2, 7, 8, 9]));
console.log(firstAndLastKNumbers([3, 6, 7, 8, 9]));