// TODO: Include packages needed for this application
const questions= require('questions')
const fs =require('fs')
const generate= require('./utils/generateMarkdown.js.js')
const path=require('path')
// TODO: Create an array of questions for user input
const questions = .prompt([{
    type: 'input',
    name: 'github name',
    message: 'what is your gitHub profile?',
  },{
    type: 'input',
    name: 'email',
    message: 'what is your email?',
  },
  {
    type: 'input',
    name: 'name',
    message: 'What is the project name?',
  },{
    type: 'input',
    name: 'project info',
    message: 'describe your project?',
  },{
    type: 'input',
    name: 'license',
    message: 'What license is being used?',
  },
  {
    type: 'input',
    name: 'command',
    message: 'What command should be ran to install dependencies?',
  },
  {
    type: 'input',
    name: 'test',
    message: 'What command should be ran to run tests?',
  },{
    type: 'input',
    name: 'need to know',
    message: 'What does the user need to know abut using the repo?',
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'What does the user need to know about contributing?',
  },
    
]);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
