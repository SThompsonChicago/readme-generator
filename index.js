// Include packages needed for this application
const { info } = require('console');
const fs = require('fs');
const inquirer = require('inquirer');
//const generateMarkdown = require('utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        message: "What is your GitHub username?",
        name: 'username',
    },
    {
        message: "what is your email address?",
        name: 'email',
    },
    {
        message: "What is your project's name?",
        name: 'project',
    },
    {
        message: "Please write a short description of your project.",
        name: 'description',
    },
    {
        type: 'list',
        message: "What kind of license should your project have?",
        name: 'license',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
    },
    {
        message: 'What command should be run to install dependencies?', 
        name: 'installCommand',
        default: 'npm i',
    },
    {
        message: 'What command should be used to run tests?', 
        name: 'testCommand',
        default: 'npm test',
    },
    {
        message: 'What does the user need to know about using the repo?',
        name: 'using',
    },
    {
        message: 'What does the user need to know about contributing to the repo?',
        name: 'contributing',
    }
];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        console.log(answers);
    });
}

// Function call to initialize app
init();
