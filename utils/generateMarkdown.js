// function to generate markdown for README
const generateMarkdown = (data) => {
  return `
  ## Title
  ### ${ data.title }
  ![badge](https://img.shields.io/badge/JavaScript-100%25-green
  ## Table of Contents
- [Description](#description)
- [Installation](#install)
- [Usage](#usage)
- [Licences](#licences)
- [Contribution](#contribution)
- [Tests](#tests)
- [Questions](#questions)

## Description
### ${ data.description }

## Install
### ${ data.install }

          
## Usage
### ${ data.usage }

## License

[![License](https://img.shields.io/badge/License-${data.license}-green.svg)

## Contribution
### ${ data.contributing }
          
##  Tests 🔨
### ${ data.tests }

## Questions
### [${ data.username } for GitHub](https://github.com/${ data.username })  
### ${ data.email } for ✉️ email
`;
}

module.exports = generateMarkdown;
