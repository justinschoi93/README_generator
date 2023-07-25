// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const myFunctions = require('./utils/generateMarkdown.js');
// console.log(myFunctions);


// TODO: Create an array of questions for user input
const questions = [
    {
        message: 'What would you like the title of your project to be?',
        name: 'title',
    },
    {
        message:'Describe your project...',
        name: 'description'
    },
    {
        message: 'How does one install your application?',
        name: 'installation-steps'
    },
    {
        message: 'How does one use your application?',
        name: 'directions'
    },
    {
        message: 'Who contributed to the development of this application?',
        name: 'contributors'
    },
    {
        message: 'How does one test the functionality of your application?',
        name: 'tests'
    },
    {
        message: 'What is your gitHub username?',
        name: 'gitHub'
    },
    {
        message: 'What is your email address?',
        name: 'email'
    },
    {
        message: 'Choose a license for your application',
        name: 'license',
        type: 'list',
        choices: [
                    {
                        name: 'GNU General Public License (GPU)',
                        value: 'GNU General Public License (GPU)',
                        description: 'The most popular open source license.'
                    },
                    {
                        name: 'The Apache License',
                        value: 'The Apache License',
                        description: 'Released by Apache Software Foundation (ASF), it is a popular and widely deployed open source license backed by a strong community.'
                    },
                    {
                        name: 'Mozilla Public License (MPL)',
                        value: 'Mozilla Public License (MPL)',
                        description: 'A free and open source software license released by Microsoft.'
                    },
                    {
                        name: 'Berkeley Software Distribution (BSD)',
                        value: 'Berkeley Software Distribution (BSD)',
                        description: 'A permissive free software license.'
                    },
                    {
                        name: 'Eclipse Public License (EPL)',
                        value: 'Eclipse Public License (EPL)',
                        description: 'An open source license developed by the Eclipse Foundation.'
                    }
                ]

    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        err ? console.log('error') : console.log('success!');
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(function(response){
        response.badge = myFunctions.renderLicenseBadge(response.license);
        response.link = myFunctions.renderLicenseLink(response.license);

        var textStr = myFunctions.generateMarkdown(response);
        writeToFile('README2.md', JSON.parse(textStr))
    })
}

// Function call to initialize app
init();
