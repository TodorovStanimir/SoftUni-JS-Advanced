class CheckingAccount {
    _clientId;
    _email;
    _firstName;
    _lastName;
    constructor(clientId, email, firstName, lastName) {
        this.clientId = clientId;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get clientId() {
        return this._clientId;
    }

    set clientId(newClientId) {
        if (typeof newClientId !== 'string' || !/^[\d]{6}$/g.test(newClientId)) {
            throw new TypeError("Client ID must be a 6-digit number");
        }
        this._clientId = newClientId;
    }

    get email() {
        return this._email;
    }

    set email(newEmail) {
        if (!/^\w+@[a-zA-Z.]+$/g.test(newEmail)) {
            throw new TypeError("Invalid e-mail");
        }
        this._email = newEmail;
    }

    get firstName() {
        return this._firstName;
    }

    set firstName(newFirstName) {
        if (!(newFirstName.length >= 3 && newFirstName.length <= 20)) {
            throw new TypeError("First name must be between 3 and 20 characters long");
        }

        if (!/^[A-Za-z]+$/g.test(newFirstName)) {
            throw new TypeError("First name must contain only Latin characters");
        }

        this._firstName = newFirstName;
    }

    get lastName() {
        return this._lastName;
    }

    set lastName(newLastName) {

        if (!(newLastName.length >= 3 && newLastName.length <= 20)) {
            throw new TypeError("Last name must be between 3 and 20 characters long");
        }

        if (!/^[a-z]+$/gi.test(newLastName)) {
            throw new TypeError("Last name must contain only Latin characters");
        }
        this._lastName = newLastName;
    }
}
// let acc = new CheckingAccount('1314', 'ivan@some.com', 'Ivan', 'Petrov')
// acc = new CheckingAccount('131455', 'ivan@', 'Ivan', 'Petrov');
// acc = new CheckingAccount('131455', 'ivan@some.com', 'I', 'Petrov')
acc = new CheckingAccount('131455', 'ivan@some.com', 'Ivan', 'Petrov')
console.log(acc.firstName)