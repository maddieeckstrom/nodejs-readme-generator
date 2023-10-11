// packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const path = require('path');

// an array of questions for user input

const questions = [{
        type: 'input',
        name: "title",
        message: "What is your project title?"
    }, {
        type: 'input',
        name: "description",
        message: "Please provide a description of your application."
    }, {
        type: "input",
        name: "screenshot",
        message: "Please provide a screenshot of your application using ![alt text](link to screenshot)"
    }, {
        type: 'input',
        name: "installation",
        message: "What are the installation instructions?"
    }, {
        type: 'input',
        name: "usage",
        message: "What is the usage information?"
    }, {
        type: 'input',
        name: "contributions",
        message: "Please write your contributions here."
    }, {
        type: 'input',
        name: "test",
        message: "What are the test instructions?"
    }, {
        type: 'list',
        name: "license",
        message: "What license are you using?",
        choices: [
            "Apache License 2.0",
            "GNU General Public License v3.0",
            "MIT",
            "BSD 2-Clause License",
            "BSD 3-Clause License",
            "Eclipse Public License 1.0",
            "GNU Affero General Public License v3.0",
            "GNU General Public License v2.0",
            "GNU Lesser General Public License v3",
            "Mozilla Public License 2.0",
            "Unlicense"
        ]
    }, {
        type: 'input',
        name: "github",
        message: "Please enter your GitHub username"
    }, {
        type: 'input',
        name: "email",
        message: "Please enter your email address"
    }
];

// a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        writeToFile('README.md', generateMarkdown({...answers}))
    })
}

// calling the function to initialize the app
init();
