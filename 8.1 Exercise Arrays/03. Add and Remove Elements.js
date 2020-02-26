// function addAndRemoveElements(input) {
//     let initialNumber = 1;
//     let result = [];
//     input.forEach(element => {
//         element === 'add' ? result.push(initialNumber) : result.pop();
//         initialNumber++;
//     });
//     result.length > 0 ? console.log(result.join('\n')) : console.log('Empty');
// }
function addAndRemoveElements(input) {
    let operation = {
        add: 'push',
        remove: 'pop'
    }
    return input.reduce((result, a, ind) => {
        result[operation[a]](ind + 1); 
        return result
    }, []).join('\n') || 'Empty';
}
console.log(addAndRemoveElements(['add', 'add', 'add', 'add']));
console.log(addAndRemoveElements(['add', 'add', 'remove', 'add', 'add']));
console.log(addAndRemoveElements(['remove', 'remove', 'remove']));