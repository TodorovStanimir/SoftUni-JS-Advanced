function aggregates(input) {
    console.log(`Sum = ${input.reduce((a, b) => a + b, 0)}`);
    console.log(`Min = ${input.reduce((a, b) => Math.min(a, b))}`);
    console.log(`Max = ${input.reduce((a, b) => Math.max(a, b))}`);
    console.log(`Product = ${input.reduce((a, b) => a * b)}`);
    console.log(`Join = ${input.reduce((a, b) => ''+a+b)}`);
}
aggregates([2, 3, 10, 5]);
aggregates([5, -3, 20, 7, 0.5])