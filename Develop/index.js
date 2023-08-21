// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const markdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
    validate: (titleInput) => {
      if (titleInput) {
        return true;
      } else console.log("Please enter a project title");
      return false;
    },
  },
  {
    type: "list",
    name: "license",
    message: "Please select the license used in your project.",
    choices: ["MIT", "APACHE2.0", "Boost1.0", "none"],
    validate: (lisenceInput) => () => {
      if (lisenceInput) {
        return true;
      } else console.log("Please select one of the options");
      return false;
    },
  },
  {
    type: "input",
    name: "description",
    message: "Description",
    validate: (descriptionInput) => {
      if (descriptionInput) {
        return true;
      } else console.log("Please give a description");
      return false;
    },
  },
  {
    type: "input",
    name: "usage",
    message: "Please explain the usage of your application",
    validate: (usageInput) => {
      if (usageInput) {
        return true;
      } else console.log("Please give a description");
      return false;
    },
  },
  {
    type: "input",
    name: "intallation",
    message: "Please explain how to install your project",
    validate: (installationInput) => {
      if (installationInput) {
        return true;
      } else console.log("Please explain how to install your project.");
      return false;
    },
  },
  {
    type: "input",
    name: "Contributors",
    message: "Please provide guidelines for contributions",
    validate: (contributorInput) => {
      if (contributorInput) {
        return true;
      } else console.log("Please provide guidlines for future contributions.");
      return false;
    },
  },
  {
    type: "input",
    name: "test",
    message: "How can we test this project?",
    validate: (testInput) => {
      if (testInput) {
        return true;
      } else console.log("Please provide testing explaination.");
      return false;
    },
  },
  {
    type: "input",
    name: "contact",
    message:
      "Please provide your Github username so that others may reach you.",
    validate: (contactInput) => {
      if (contactInput) {
        return true;
      } else console.log("Please input your Github username");
      return false;
    },
  },
  {
    type: "input",
    name: "email",
    message: "Please provide an email for an alternate way you can be reached?",
    validate: (emailInput) => {
      if (emailInput) {
        return true;
      } else console.log("Please give a description");
      return false;
    },
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log(`Successfully rendered ${fileName}`);
    }
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    const readmeContent = markdown.generateMarkdown(answers);

    const fileName = "README.md";

    writeToFile(fileName, readmeContent);
  });
}

// Function call to initialize app
init();

//exporting questions array
module.exports = questions;
