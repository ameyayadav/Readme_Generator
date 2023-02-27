console.log(process.argv);
const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

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
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
