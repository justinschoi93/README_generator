const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .prompt([
        {
            question: 'What would you like the title of your project to be?',
            name: 'title',
        },
        {
            question:'Describe your project...',
            name: 'description'
        },
        {
            question: 'How does one install your application?',
            name: 'installation-steps'
        },
        {
            question: 'How does one use your application?',
            name: 'directions'
        },
        {
            question: 'Who contributed to the development of this application?',
            name: 'contributors'
        },
        {
            question: 'How does one test the functionality of your application?',
            name: 'tests'
        },
        {
            question: 'What is your gitHub username?',
            name: 'gitHubUserName'
        },
        {
            question: 'What is your email address?',
            name: 'email'
        }
    ])
    .select({
        message: 'Choose a license for your application...',
        choices: [
            {
                name: '',
                value: '',
                description: ''
            },
            {
                name: '',
                value: '',
                description: ''
            },
            {
                name: '',
                value: '',
                description: ''
            },
            {
                name: '',
                value: '',
                description: ''
            },
            {
                name: '',
                value: '',
                description: ''
            }
        ]
    })

//README gets generated after a series of prompts and questions.

// Ask user if they would like to create a README
    // - if yes...
// Ask for title,
//     - add title to title section
// - autogenerate following sections
//     - description
//     - installation instructions
//     - usage information
    // - Contributions list
    // - Questions
    // - Tests?
// - provide user with option to choose a license from a list
//     - badge gets added near top of README
//     - notice gets added to License section
// - Ask for github username
//     - add to Questions section, with link to github profile
// - Ask for email address
//     - add to Questions section
//     - also include instructions on how to reach me with additional Questions
// - Turn table of Contents into links

