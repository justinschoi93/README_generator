// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input

const questions = [{
    type: 'input',
    message: 'What is the title of your project?',
    name: 'title',
},
{
    type: 'input',
    message: 'What is the description of your project?',
    name: 'description',
},
{
    type: 'input',
    message: 'What are the installation instructions?',
    name: 'installation',
},
{
    type: 'input',
    message: 'How does one use the app?',
    name: 'usage',
},
{
    type: 'input',
    message: 'Who deserves what credit?',
    name: 'contribution',
},
{
    type: 'input',
    message: 'How does one test the app?',
    name: 'test',
},
{
    type: 'list',
    message: 'Which license would you like to use?',
    name: 'license',
    choices: ['MIT', 'GNU', 'Apache', 'ISC', 'None'],
},
{
    type: 'input',
    message: 'What is your GitHub username?',
    name: 'github',
},
{
    type: 'input',
    message: 'What is your email address?',
    name: 'email',
},
{
    type: 'input',
    message: 'What is your LinkedIn username?',
    name: 'linkedin',
}
];

// TODO: Create a function to write README file

function writeToFile(fileName, data) {
    fs.writeFile(`fin/${fileName}`, data, (err) => {
        if (err) {
            console.error(err)
        };
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then( (response) => {
        let markdown = generateMarkdown(response);
        writeToFile('README.md', markdown);
    })
};

// Function call to initialize app
init();
//$$$$$$$$$$$$$