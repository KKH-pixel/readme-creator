// function that returns a license badge based on which license is passed in
// If there is no license, returns an empty string
function renderLicenseBadge(license) {
  if(license == 'MIT') {
    console.log('MIT')
    return `![Github License](https://img.shields.io/badge/license-${license}-brightgreen)`
  } else if (license == 'AUR') {
    return `![GPLv3 License](https://img.shields.io/badge/license-${license}-blue)`
  } else if (license == 'GPL') {
    return `![AGPL License](https://img.shields.io/badge/license-${license}-brightgreen)`
  } else {
    return '';
  }
}

// function that returns the license link
// If there is no license, returns an empty string
function renderLicenseLink(license) {
  if(license === 'MIT') {
    return `[GitHub License](https://opensource.org/licenses/MIT)`
  } else if (license === 'AUR') {
    return `![GPLv3 License](http://www.apache.org/licenses/LICENSE-2.0)`
  } else if (license === 'GPL') {
    return `![AGPL License](https://www.gnu.org/licenses/gpl-3.0.html)`
  } else {
    return '';
  }
}

// function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license === 'MIT') {
    return `## MIT License`
  } else if (license === 'AUR') {
    return `## Apache License, Version 2.0`
  } else if (license === 'GPL') {
    return `## GNU GENERAL PUBLIC LICENSE Version 3`
  } else {
    return '';
  }
}

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description
${renderLicenseBadge(data.license)}  
${data.desc}

## Table of Contents (Optional)
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation
${data.install}

## Usage
${data.use}

## Credits
${data.credit}

${renderLicenseSection(data.license)} 
${renderLicenseLink(data.license)}  

## Badges
${data.badge}

## Features
${data.features}

## How to Contribute
${data.contrib}

## Tests
${data.tests}
`};

module.exports = generateMarkdown;
