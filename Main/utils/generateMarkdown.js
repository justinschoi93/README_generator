// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'GNU General Public License (GPU)':
        return `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`;        
    case 'The Apache License':
        return `![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`;
    case 'Mozilla Public License (MPL)':
        return `![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)`;
    case 'Berkeley Software Distribution (BSD)':
        return `![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)`;
    case 'Eclipse Public License (EPL)':
        return `![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)`;
   }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'GNU General Public License (GPU)':
        return `https://www.gnu.org/licenses/gpl-3.0`;        
    case 'The Apache License':
        return `https://opensource.org/licenses/Apache-2.0`;
    case 'Mozilla Public License (MPL)':
        return `https://opensource.org/licenses/MPL-2.0`;
    case 'Berkeley Software Distribution (BSD)':
        return `https://opensource.org/licenses/BSD-3-Clause`;
    case 'Eclipse Public License (EPL)':
        return `https://opensource.org/licenses/EPL-1.0`;
   }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return '';
  }
  return license
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  var README = 
`# ${data.title} ${data.badge}

## Description
${data.description}

## Table of Contents
-[Title](#Title)
-[Description](#Description)
-[Installation_Steps](#Installation_Steps)
-[Directions](#Directions) 
-[License](#License)
-[Contributors](#Contributors)
-[How_to_Test](#How_to_Test)
-[Questions](#Questions)

## Installation Steps
${data['installation-steps']}

## Directions on how to use
${data.directions}
![screenshot](./assets/screenshot1.jpg)
![walkthrough](./assets/walkthrough.webm)

## License
${data.license}

## Contributors
${data.contributors}

## How to Test
${data.tests}

## Questions
If you have any questions, feel free to contact me via email or gitHub.

gitHub: https://github.com/${data.gitHub}
email: ${data.email}`;

    return JSON.stringify(README);
}

module.exports = {generateMarkdown, renderLicenseBadge, renderLicenseLink};

