const Employee = require("./Employee")

// extending Employee adding getOfficeNumber and getRole
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    getOfficeNumber() {
        return this.officeNumber
    };
    getRole() {
        return "Manager"
    };
}

module.exports = Manager