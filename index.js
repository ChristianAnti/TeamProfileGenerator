// the requires for the different roles
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const Employee = require("./lib/Employee");

const teamArr = []

// various npm requires etc.
const inquirer = require("inquirer");
const jest = require("jest");
const render = require("./lib/htmlRenderer")
const path = require('path');
const fs = require('fs');

// path requires 
const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html")


function employeeQs() {
    inquirer.prompt([
        {
            type: "input",
            message: "Please enter the teammate's name.",
            name: "answerName"
        },
        {
            type: "input",
            message: "Please enter the teammate's ID number.",
            name: "answerID"
        },
        {
            type: "input",
            message: "Please enter the teammate's e-mail.",
            name: "answerEmail"
        },
        {
            type: "list",
            message: "Please enter the teammate's role.",
            name: "answerRole",
            choices: ["Engineer", "Intern", "Manager"]
        },
    ]).then(function(answers){
        if (answers.answerRole === "Engineer") {
            engineerQs(answers);
        } else if (answers.answerRole === "Intern") {
            internQs(answers);
        } else {
            managerQs(answers);
        }
    })
};


function managerQs(baseAnswers) {
    inquirer.prompt ([
        {
            type: "input",
            message: "Please enter the manager's office number.",
            name: "answerOfficeNumber",
        },
        {
            type: "confirm",
            message: "Please enter any more info, if aplicable.",
            name: "answerAddAnother",
        },
    ]).then(function (answers) {
        const newManager = new Manager(baseAnswers.answerName, baseAnswers.answerID, baseAnswers.answerEmail, answers.answerGitub)
        teamArr.push(newManager);
        if (answers.answerAddAnother === true) {
            employeeQs()
        } else {
            buildTeam();
            console.log("Manager rendered !!!")
        }
    })
};

function engineerQs(baseAnswers) {
    inquirer.prompt ([
        {
            type: "input",
            message: "Please enter the engineer's GitHub username.",
            name: "answerGithub",
        },
        {
            type: "confirm",
            message: "Please enter the engineer's GitHub username if they have another.",
            name: "answerAddAnother",
        },
    ]).then(function (answers) {
        const newEngineer = new Engineer(baseAnswers.answerName, baseAnswers.answerID, baseAnswers.answerEmail, answers.answerGitub)
        teamArr.push(newEngineer);
        if (answers.answerAddAnother === true) {
            employeeQs()
        } else {
            buildTeam();
            console.log("Engineer rendered !!!")
        }
    })
};

function internQs(baseAnswers) {
    inquirer.prompt ([
        {
            type: "input",
            message: "Please enter the intern's School.",
            name: "answerSchool",
        },
        {
            type: "confirm",
            message: "Please enter any more info, if aplicable.",
            name: "answerAddAnother",
        },
    ]).then(function (answers) {
        const newIntern = new Intern(baseAnswers.answerName, baseAnswers.answerID, baseAnswers.answerEmail, answers.answerSchool)
        teamArr.push(newIntern);
        if (answers.answerAddAnother === true) {
            employeeQs()
        } else {
            buildTeam();
            console.log("Intern rendered !!!")
        }
    })
};


function buildTeam() {
    if(!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR)
    }
    fs.writeFileSync(outputPath, render(teamArr), "utf-8")

};

employeeQs();