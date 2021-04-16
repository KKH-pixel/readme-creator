// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Provide the title of your project:'
    },
    {
        type: 'input',
        name: 'desc',
        message: 'Provide a short description explaining the what, why, and how of your project.'
    },
    // {
    //     type: 'input',
    //     name: 'install',
    //     message: 'Provide a step-by-step description of how to get the development environment running.'
    // },
    // {
    //     type: 'input',
    //     name: 'use',
    //     message: 'Provide instructions and examples for use. Include screenshots as needed.'
    // },
    // {
    //     type: 'input',
    //     name: 'credit',
    //     message: 'List your collaborators, if any, with links to their GitHub profiles. If you used any third-party assets that require attribution, list the creators with links to their primary web presence. If you followed tutorials, include links to those here.'
    // },
    {
        type: 'list',
        message: 'Provide the correct licenses for your program (if any).',
        choices: ['MIT', 'AUR', 'GPL'],
        name: 'license',
    },
    {
        type: 'input',
        name: 'features',
        message: 'If your project has a lot of features, list them here.'
    },
    {
        type: 'input',
        name: 'contrib',
        message: 'If you created an application or package and would like other developers to contribute it, include guidelines for how to do so.'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'If you have written any tests for your application, provide examples on how to run them.'
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log('Success!')
  );
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((data) => {
       writeToFile('README.md', generateMarkdown(data)) //tells function to create this thing
      });
}

// Function call to initialize app
init();