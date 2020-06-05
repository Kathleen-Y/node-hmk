const inquirer = require("inquirer");
var fs = require("fs");
var axios = require("axios");
const generateMarkdown = require("./utils/generateMarkdown");

// README.md questions
const questions = [
    {
      type: "input",
      name: "title",
      message: "What is the title of your project?",
    },
    {
      type: "input",
      name: "url",
      message: "What is the URL to the repository?",
    },
    {
      type: "input",
      name: "install",
      message: "How do you install the project?",
    },
    {
      type: "input",
      name: "description",
      message: "Write a description of your project.",
    },
    {
      type: "input",
      name: "github",
      message: "What is your Github username?",
    },
    {
      type: "input",
      name: "usage",
      message: "How do you use this project?",
    },
    {
      type: "input",
      name: "tests",
      message: "How do you test this project?",
      default: "npm test",
    },
    {
      type: "input",
      name: "contribute",
      message: "What are the project contributors?",
    },
    {
      type: "list",
      message: "What kind of license do you want your project to have?",
      name: "license",
      choices: ["MIT", "GNU GPLv3", "Unlicense", "None"],
    },
  ];

  function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
      if (err) {
        throw err;
      }
      console.log("README generated.");
    });
  }
  
  function init() {
    inquirer.prompt(questions).then((answers) => {
      let data = { ...answers };
  
      const queryUrl = `https://api.github.com/users/${answers.github}`;
      console.log(queryUrl);
  
      
      axios
        .get(queryUrl)
        .then(function (response) {
          data.photo = response.data.avatar_url;
          
          console.log(`Combined inputs`, data);
          
          const markdown = generateMarkdown(data);
          writeToFile("README.md", markdown);
        })
  
        .catch((err) => {
          console.log("Github user not found");
        });
    });
  }
  
  init();
