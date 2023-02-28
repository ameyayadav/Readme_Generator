console.log(process.argv);
// const fs = require("fs");
import fs from "fs";
// const inquirer = require("inquirer");
import inquirer from "inquirer";
// const generateMarkdown = require("./utils/generateMarkdown");
import generateMarkdown from "./utils/generateMarkdown"
// array of questions for user
const questions = [
    "What is your project's title?", 
    "Please provide a short description of your project:",
    "Please provide installation instructions for your project:",
    "Please provide usage information for your project:",
    "Please choose a license for your project:",
    "Please provide contribution guidelines for your project:",
    "Please provide test instructions for your project:",
    "What is your name?",
    "What is your email address?",
    "What is your GitHub username?",
];

// function to write README file
function writeToFile(fileName, data) {
        fs.writeFile(fileName, data, (err) => {
          err ? console.error(err) : console.log("Success");
        })
      }

// function to initialize program
// this function holds the package inquirer prompt is within the package and gnearting a readme file as well
function init() {
    inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: "What is your project's title?",
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please provide a short description of your project:',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Please provide installation instructions for your project:',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Please provide usage information for your project:',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Please choose a license for your project:',
      choices: ['MIT', 'GNU GPL v3', 'Apache License 2.0', 'ISC', 'BSD 2-Clause License'],
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Please provide contribution guidelines for your project:',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Please provide test instructions for your project:',
    },
    {
      type: 'input',
      name: 'name',
      message: "What is your name?",
    },
    {
      type: 'input',
      name: 'email',
      message: "What is your email address?",
    },
    {
      type: 'input',
      name: 'username',
      message: "What is your GitHub username?",
    },
  ])
  .then((answers) => {
    const readme = generateMarkdown(answers);
    fs.writeFile('README.md', readme, (err) =>
      err ? console.log(err) : console.log('Successfully generated README!')
    );
  })
  .catch((error) => {
    console.log(error);
  });
}



// function call to initialize program
init();

