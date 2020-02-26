function lastKNumbersSequence(n, k) {
    let result = [1]; let index = 0;
    for (let i = 1; i < n; i++) {
        if (result.length >= k) index = result.length - k;
        result.push(result.slice(index).reduce((a, b) => a + b, 0));
    }
    console.log(result.join(' '));
}
lastKNumbersSequence(6, 3);
lastKNumbersSequence(8, 2)