class Stringer {
    constructor(innerString, innerLength) {
        this.innerString = innerString;
        this.innerLength = innerLength;
    }

    increase(num) {
        this.innerLength += num;
    }

    decrease(num) { this.innerLength = Math.max(0, this.innerLength - num) }

    toString() {
        let result = this.innerString;
        if (this.innerLength === 0) {
            result = '...';
        } else if (this.innerString.length > this.innerLength) {
            result = this.innerString.substr(0, this.innerString.length - this.innerLength) + '...';
        }
        return result;
    }
}

let test = new Stringer('Test', 5);
console.log(test.toString())

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4);
console.log(test.toString()); // Test