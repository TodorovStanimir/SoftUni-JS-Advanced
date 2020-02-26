function solve() {
    const inputElement = document.getElementById('arr');
    const arrUserData = JSON.parse(inputElement.value);
    const outputElement = document.getElementById('result');
    const pattern = /^(?<name>[A-Z][a-z]* [A-Z][a-z]*) (?<phone>\+359([ ]|[-])\d\3\d{3}\3\d{3}) (?<email>[a-z\d]+@[a-z]+.[a-z]{2,3})$/g;
    const userDataIsInvalid = (userData) => !userData.match(pattern);
    const userInfo = { name: 'Name: ', phone: 'Phone Number: ', email: 'Email: ' };

    arrUserData.forEach((user) => {
        if (userDataIsInvalid(user)) {
            print('Invalid data', '', outputElement);
            print('- - -', '', outputElement);
        } else {
            let correctUserData = pattern.exec(user);
            for (let group in correctUserData.groups) {
                print(userInfo[group], correctUserData.groups[group], outputElement)
            }
            print('- - -', '', outputElement);
        }
    });

    function print(param1, param2, param3) {
        let p = document.createElement('p');
        p.innerHTML = `${param1}${param2}`;
        param3.appendChild(p);
    }
}