class Employee {
// this is the base for all the roles it will be extended in that roles JS file
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName() {
        return this.name
    };
    getId() {
        return this.id
    };
    getEmail() {
        return this.email
    };
    getRole() {
        return "Employee"
    };
}

module.exports = Employee;

