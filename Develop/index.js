// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input

const questions = [{
        type: 'input',
        name: "title",
        message: "What is your project title?"
    }, {
        type: 'input',
        name: "description",
        message: "Please provide a description of your application."
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
        type: 'checkbox',
        name: "license",
        message: "What license are you using?",
        choices: [
            "Option 1",
            "Option 2",
            "Option 3",
        ]
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
