
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");


// README.md questions
const questions = ( {
        type: "input",
        name: "username",
        message: "Enter your GitHub username: ",
    },
      {
            type: "input",
            name: "title",
            message: "What is the project title?",

        },
        {
            type: "input",
            name: "description",
            message: "Please describe the project:",
        },
        {
            type: "input",
            name: "install",
            message: "If there is a installation process please write it out in code:",
        },
        {
            type: "input",
            name: "usage",
            message: "What will this project be used for?",
        },
        {
            type: "list",
            name: "licences",
            message: "What licences will go along with this project:",
            choices: [
                "GNU",
                "ISC",
                "MIT",
            ]
        },
        {
            type: "input",
            name: "contributing",
            message: "How should people help contribute to this project?"
        },
        {
            type: "input",
            name: "tests",
            message: "If there are tests needed done for this project please describe them:"
        },
        {
            type: "input",
            name: "email",
            message: "Enter your email please:",
        }
)

     function init() {
      inquirer.prompt(questions).then(generateMarkdown())

      fs.appendFileSync("README.md", ("## Questions" + '\n' + response.questions)+ '\n', function(err) { 
        if (err) { 
        console.log(err)
        }
        else {
        console.log("Success")
        }

    });
  }
    //runs the function to create the file 
    init();
