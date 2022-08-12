// TODO: Include packages needed for this application
const inquire = require("inquirer");

const generate = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user inpnode ut
inquire
	.prompt([
		{
			type: "input",
			name: "github name",
			message: "what is your gitHub profile?",
		},
		{
			type: "input",
			name: "email",
			message: "what is your email?",
		},
		{
			type: "input",
			name: "name",
			message: "What is the project name?",
		},
		{
			type: "input",
			name: "project info",
			message: "describe your project?",
		},
		{
			type: "list",
			name: "license",
			message: "What license is being used?",
			choices: ["MIT", "ISC", "GNUPLv3"],
			filter(val) {
				return val;
			},
		},
		{
			type: "input",
			name: "command",
			message: "What command should be ran to install dependencies?",
		},
		{
			type: "input",
			name: "test",
			message: "What command should be ran to run tests?",
		},
		{
			type: "input",
			name: "need to know",
			message: "What does the user need to know abut using the repo?",
		},
		{
			type: "input",
			name: "contributing",
			message: "What does the user need to know about contributing?",
		},
	])
	.then((answers) => {
		const mark = generate(answers);

		console.log(mark); //Use FS lirbrary to create readmeFile
	});

// function init() {
//     return inquire
//         .prompt(questions)
//         .then((answers) => {
//             const mark = generate(answers);

//             //use file

//             return answers;
//         })
//         .catch((error) => {
//             console.log(error);
//         });
// }

// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
//function init() {}

// Function call to initialize app
//init();
