function solution() {
    let output = '';
    return {
        append: (string) => { return output += string; },
        removeStart: (n) => { return output = output.substr(n) },
        removeEnd: (n) => { return output = output.substr(0, output.length - n) },
        print: () => console.log(output)
    }
}

let firstZeroTest = solution();
firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();

let secondZeroTest = solution();
secondZeroTest.append('Moi');
secondZeroTest.append(' si');
secondZeroTest.removeStart(0);
secondZeroTest.removeEnd(0);
secondZeroTest.print();


