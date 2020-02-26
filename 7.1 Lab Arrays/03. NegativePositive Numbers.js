function negativePositiveElements(input) {
    const actionMap = {
        true: 'unshift',
        false: 'push'
    }
    return input.reduce((result, element) => {
        result[actionMap[element < 0]](element);
        return result
    }, []).join('\n');
};
console.log(negativePositiveElements([7, -2, 8, 9]));
console.log(negativePositiveElements([3, -2, 0, -1]));