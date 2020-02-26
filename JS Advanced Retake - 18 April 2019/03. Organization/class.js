class Organization {
    //test 1
    constructor(name, budget) {
        this.name = String(name);
        this.budget = Number(budget);
        this.employees = [];
        this.departments = {
            marketing: 0.40 * this.budget,
            finance: 0.25 * this.budget,
            production: 0.35 * this.budget,
        }
    }

    get departmentsBudget() {
        return this.departments;
    }
    //test 2, 3, 4, 5
    add(employeeName, department, salary) {
        if (salary > this.departmentsBudget[department]) {
            return `The salary that ${department} department can offer to you Mr./Mrs. ${employeeName} is $${this.departmentsBudget[department]}.`;
        }
        let employer = {
            employeeName,
            department,
            salary
        }
        this.employees.push(employer);
        this.departmentsBudget[department] -= +salary;
        return `Welcome to the ${department} team Mr./Mrs. ${employeeName}.`
    }
    //test 6, 7, 8
    employeeExists(employeeName) {
        let employer = this.employees.find(empl => empl.employeeName === employeeName);

        if (employer) {
            return `Mr./Mrs. ${employeeName} is part of the ${employer.department} department.`;
        } else {
            return `Mr./Mrs. ${employeeName} is not working in ${this.name}.`;
        }
    }
    //test 9, 10
    leaveOrganization(employeeName) {
        let employer = this.employees.find(empl => empl.employeeName === employeeName);

        if (employer) {
            this.departmentsBudget[employer.department] += employer.salary;
            let res = this.employees.splice(this.employees.findIndex(emploer => emploer.employeeName === employeeName), 1);
            return `It was pleasure for ${this.name} to work with Mr./Mrs. ${employeeName}.`;
        } else {
            return `Mr./Mrs. ${employeeName} is not working in ${this.name}.`;
        }
    }
    //test 11, 12
    status() {
        const departments = Object.keys(this.departmentsBudget).map(el => `${el[0].toUpperCase()}${el.slice(1)}`);
        let output = `${this.name.toUpperCase()} DEPARTMENTS:`;
        output += departments.map(departm => {
            let currentDep = this.employees.filter(el => el.department === departm.toLowerCase());
            let employersinDep = currentDep.sort((a, b) => b.salary - a.salary).map(el => el.employeeName)
            return `\n${departm} | Employees: ${currentDep.length}: ${employersinDep.join(', ')} | Remaining Budget: ${this.departmentsBudget[departm.toLowerCase()]}`;
        }).join('');
        return output;
    }
}

let organization = new Organization('SoftUni', 20000);
console.log(organization.add('Peter', 'marketing', 1200));
console.log(organization.add('Robert', 'marketing', 2000));
// console.log(organization.leaveOrganization('Peter'));
console.log(organization.employeeExists('Robert'));
console.log(organization.status())

// let organization = new Organization('SBTech', 1000);
// console.log(organization.add('Peter', 'marketing', 800));
// console.log(organization.add('Robert', 'production', 2000));
// console.log(organization.add('Peter', 'production', 2000));

