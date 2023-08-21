// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = ('fs');
const markdown = require('./utils/generateMarkdown')


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else console.log('Please enter a project title');
            return false;
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Description',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else console.log('Please give a description');
            return false;
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please explain the usage of your application',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else console.log('Please give a description');
            return false;
        }
    },

];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
