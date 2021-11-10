const Employee = require("./Employee")

// extending Employee adding getSchool and getRole
class Intern extends Employee {
    constructor (name, id, email, school) {
        super( name, id, email)
        this.school = school;
    }
    getSchool() {
        return this.school
    };
    getRole() {
        return "Intern"
    };
}

module.exports = Intern