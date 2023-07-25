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

        }
    ]).then(function(response){
        
        var text = generateREADMEText(response);
       
       

        fs.writeFile('README.md', JSON.stringify(text), (error) => {
            error ? console.log(error) : console.log('success!')
        })
    })

function generateREADMEText(data) {
    var README = `
    # ${data.title}

    ## Description
    ${data.description}
    
    ## Installation Steps
    ${data.installation-steps}

    ## Directions on how to use
    ${data.directions}
    
    ## Contributors
    ${data.contributors}
    
    ## How to Test
    ${data.tests}

    ## Questions
    If you have any questions, feel free to contact me via email or gitHub.
    ${data.gitHub}
    ${data.email}

    ## License
    ${data.license}
    
    `;
    return README;
}

//table of contents