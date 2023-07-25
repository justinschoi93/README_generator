const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .prompt([
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
    ]).then(function(response){
        
       switch (response.license) {
        case 'GNU General Public License (GPU)':
            response.badge = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;        
        case 'The Apache License':
            response.badge = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
        case 'Mozilla Public License (MPL)':
            response.badge = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
        case 'Berkeley Software Distribution (BSD)':
            response.badge = `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
        case 'Eclipse Public License (EPL)':
            response.badge = `[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`;
       }

    //    console.log(response.badge);
       var text = generateREADMEText(response);
      
        fs.writeFile('README2.md', JSON.parse(text), (error) => {
            error ? console.log(error) : console.log('success!')
        })
    })

function generateREADMEText(data) {
    var README = 
    `# ${data.title} ${data.badge}

## Description
${data.description}

## Table of Contents

## Installation Steps
${data['installation-steps']}

## Directions on how to use
${data.directions}

## License
${data.license}

## Contributors
${data.contributors}

## How to Test
${data.tests}

## Questions
If you have any questions, feel free to contact me via email or gitHub.
https://github.com/${data.gitHub}
${data.email}`;

    return JSON.stringify(README);
}

//table of contents