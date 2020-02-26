function countWordsWithMaps(input) {
    let string = input[0];
    let pattern = /[\w]+/gi;
    let output = new Map();
    while ((word = pattern.exec(string)) !== null) {
        if (!output.has(word[0].toLowerCase())) {
            output.set(word[0].toLowerCase(), 1);
        } else {
            counter = output.get(word[0].toLowerCase());
            counter++;
            output.set(word[0].toLowerCase(), counter);
        }
    }
    [...output].sort((a, b) => a[0].localeCompare(b[0])).forEach(word => console.log(`'${word[0]}' -> ${word[1]} times`));
}
countWordsWithMaps(['Far too slow, you\'re far too slow.']);
countWordsWithMaps(['JS devs use Node.js for server-side JS. JS devs use JS. -- JS for devs --']);
countWordsWithMaps(['The man was walking the dog down the road when it suddenly started barking against the other dog. Surprised he pulled him away from it.']);