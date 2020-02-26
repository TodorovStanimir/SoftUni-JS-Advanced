// function wordsUppercase(inputstring) {
//     let result = inputstring
//         .split(/[\ \!\,\.\:\;\?\!\'\-]/)
//         .filter(el => el)
//         .map(word => word.toUpperCase())
//         .join(', ');
//     console.log(result);
// }
wordsUppercase = (string) => {
    return string.match(/[^, !?.:;'-]+/gi).filter(el => el).map(el => el.toUpperCase()).join(', ')
}
console.log(wordsUppercase('Hi, how are you?'));
console.log(wordsUppercase('Functions in JS can be nested, i.e. hold other functions'));