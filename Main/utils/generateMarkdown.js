// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  } else {
    return `![${license}](https://img.shields.io/badge/License-${license}-blue.svg)`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return '';
  } else {
    let licenseKey = license.toLowerCase().replace(/ /g, "-");
    return `[${license}](https:choosealicense.com/licenses/${licenseKey})`
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let badge = renderLicenseBadge(license);
  let link = renderLicenseLink(license);
  if (!license) {
    return '';
  } else {
    return `${badge}
${link}
    `;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(response) {
  let licenseSection = renderLicenseSection(response.license)
  
  return `# ${response.title}
        
## Description
${response.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Contribution](#contribution)
* [Test](#test)
* [License](#license)
* [Contact](#contact)

## Installation
${response.installation}

## Usage
${response.usage}

## Contribution
${response.contribution}

## Test
${response.test}

## License
${licenseSection}

## Contact
[github](https:github.com/${response.github})
[email](${response.email})
[linkedIn](https:linkedin.com/in/${response.linkedin})
`;
}

module.exports = generateMarkdown;
