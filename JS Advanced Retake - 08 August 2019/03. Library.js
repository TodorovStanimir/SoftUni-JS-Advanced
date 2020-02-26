class Library {
    //test 1
    constructor(libraryName) {
        this.libraryName = libraryName;
        this.subscribers = [];
        this.subscriptionTypes = {
            normal: this.libraryName.length,
            special: 2 * this.libraryName.length,
            vip: Number.MAX_SAFE_INTEGER,
        }
    }

    subscribe(name, type) {
        //test 2
        if (!this.subscriptionTypes[type]) {
            throw new Error(`The type ${type} is invalid`)
        }

        let foundSubscriber = this.subscribers.find(x => x.name === name);
        //test 3
        if (!foundSubscriber) {
            this.subscribers.push({
                name,
                type,
                books: [],
            })
            return {
                name,
                type,
                books: [],
            }
        } else {
            //test 4
            foundSubscriber.type = type;
        }

        return foundSubscriber;
    }

    unsubscribe(name) {
        let foundSubscriber = this.subscribers.find(x => x.name === name);
        //test 5
        if (!foundSubscriber) {
            throw new Error(`There is no such subscriber as ${name}`)
        }
        //test 6
        this.subscribers.splice(this.subscribers.findIndex(x => x.name === name), 1);

        return this.subscribers;
    }

    receiveBook(subscriberName, bookTitle, bookAuthor) {
        let foundSubscriber = this.subscribers.find(x => x.name === subscriberName);
        //test 7
        if (!foundSubscriber) {
            throw new Error(`There is no such subscriber as ${subscriberName}`)
        }
        //test 8, 9, 10, 11, 12
        if (foundSubscriber.books.length >= this.subscriptionTypes[foundSubscriber.type]) {
            throw new Error(`You have reached your subscription limit ${this.subscriptionTypes[foundSubscriber.type]}!`)
        }

        foundSubscriber.books.push({ title: bookTitle, author: bookAuthor });
        return foundSubscriber;
    }

    showInfo() {
        //test 13
        if (this.subscribers.length === 0) {
            return `${this.libraryName} has no information about any subscribers`
        } else {
            //test 13
            let result = '';
            this.subscribers.forEach(x => {
                result += `Subscriber: ${x.name}, Type: ${x.type}\n`;
                let books = x.books.map(book => `${book.title} by ${book.author}`).join(', ');
                result += `Received books: ${books}\n`
            })
            return result;
        }
    }

}

let lib = new Library('Lib');

lib.subscribe('Peter', 'normal');
lib.subscribe('John', 'special');

lib.receiveBook('John', 'A Song of Ice and Fire', 'George R. R. Martin');
lib.receiveBook('Peter', 'Lord of the rings', 'J. R. R. Tolkien');
lib.receiveBook('John', 'Harry Potter', 'J. K. Rowling');

console.log(lib.showInfo());

