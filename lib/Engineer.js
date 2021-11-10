const Employee = require("./Employee")

// extending Employee adding getGithub and getRole
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email, );
        this.github = github;
    }
    getGithub() {
        return this.github
    };
    getRole() {
        return "Engineer"
    };
}

module.exports = Engineer