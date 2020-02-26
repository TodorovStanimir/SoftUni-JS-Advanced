class Students {
    _firstName;
    constructor(firstName, lastName, email, grades) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.grades = grades;
    }
    get firstName() {
        return this._firstName;
    }

    get gradesCount() {
        return this.grades.length;
    }

    set firstName(value) {
        if (typeof value !== 'string') {
            throw new TypeError('First Name should be a string!');
        }

        this._firstName = value;
    }

    static sortStudents(students) {
        students.sort((a, b) => a.name.localeCompare(b.name))
    }
}

let pesho = new Students('Pesho', 'Kirilow', 'todov@gmail.com', [2, 2, 2, 2, 2])
pesho.grades.push(5)
pesho.grades.push(6)
pesho.grades.push(5)
console.log(pesho.grades)
console.log(Students)
console.log(pesho.gradesCount)

class Teacher extends Students {
    constructor(firstName, lastName, email,  activity) {
        super(firstName, lastName, email, );
        this.activity = activity
    }
}

let firstTeacher = new Teacher ('Stanimir', 'Todorov', 'todorov.stanimir0803@gmail.com',  'English');
console.log(firstTeacher)


