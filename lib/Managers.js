const inquirer = require("inquirer");
const jest = require("jest");
const Employee = require("./Employee")

class Managers extends Employee {
    constructor (name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    getOfficeNumber() {
        return this.officeNumber
    }
    getRole() {
        return "Engineer"
    };
}

module.exports = Managers;
