class Library {
    constructor(libraryName) {
        this.libraryName = String(libraryName);
        this.subscribers = [];
    }

    get subscriptionTypes() {
        return {
            'normal': this.libraryName.length,
            'special': 2 * this.libraryName.length,
            'vip': Number.MAX_SAFE_INTEGER,
        }
    }

    subscribe(name, type) {
        if (!this.subscriptionTypes[type]) {
            throw new Error(`The type ${type} is invalid"`)
        }

        const indexSubscr = this.subscribers.findIndex(subscr => subscr.name === name);

        if (indexSubscr === -1) {
            const subscriber = { name, type, books: [] }
            this.subscribers.push(subscriber);
            return subscriber;
        } else {
            this.subscribers[indexSubscr].type = type;
            return this.subscribers[indexSubscr];
        }
    }

    unsubscribe(name) {
        let indexSubscr = this.subscribers.findIndex(subscr => subscr.name === name);

        if (indexSubscr === -1) {
            throw new Error(`There is no such subscriber as ${name}`);
        }

        this.subscribers.splice(indexSubscr, 1);

        return this.subscribers;
    }

    receiveBook(subscriberName, bookTitle, bookAuthor) {
        let indexSubscr = this.subscribers.findIndex(subscr => subscr.name === subscriberName);

        if (indexSubscr === -1) {
            throw new Error(`There is no such subscriber as ${subscriberName}`);
        }

        let typeSubscriber = this.subscribers[indexSubscr].type;

        if (this.subscribers[indexSubscr].books.length >= this.subscriptionTypes[typeSubscriber]) {
            throw new Error(`You have reached your subscription limit ${this.subscriptionTypes[typeSubscriber]}!`);
        }

        let book = {
            title: bookTitle,
            author: bookAuthor,
        };

        this.subscribers[indexSubscr].books.push(book);

        return this.subscribers[indexSubscr];
    }

    showInfo() {
        if (this.subscribers.length === 0) {
            return `${this.libraryName} has no information about any subscribers`
        } else {
            return Object.values(this.subscribers).map(subscr => {
                return `Subscriber: ${subscr.name}, Type: ${subscr.type}\nReceived books: ${subscr.books.map(book => `${book.title} by ${book.author}`).join(', ')}`;
            }).join('\n')
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
