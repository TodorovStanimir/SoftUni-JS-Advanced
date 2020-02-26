function solution() {
    let string = '';

    append = (newString) => { return string += newString }
    removeStart = (newString) => { return string = string.substr(Number(newString)) }
    removeEnd = (newString) => { return string = string.substr(0, string.length - Number(newString)) }
    print = () => { console.log(string) }

    return {
        append,
        removeStart,
        removeEnd,
        print
    }
}

let firstZeroTest = solution();
firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();

let secondZeroTest = solution();

secondZeroTest.append('123');
secondZeroTest.append('45');
secondZeroTest.removeStart(2);
secondZeroTest.removeEnd(1);
secondZeroTest.print();

