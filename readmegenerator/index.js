const inquire = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");

inquire
	.prompt([
		{
			type: "input",
			name: "username",
			message: "what is your gitHub profile?",
		},
		{
			type: "input",
			name: "email",
			message: "what is your email?",
		},
		{
			type: "input",
			name: "title",
			message: "What is the project name?",
		},
		{
			type: "input",
			name: "description",
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
			name: "installation",
			message: "What command should be ran to install dependencies?",
		},
		{
			type: "input",
			name: "test",
			message: "What command should be ran to run tests?",
		},
		{
			type: "input",
			name: "usage",
			message: "What does the user need to know abut using the repo?",
		},
		{
			type: "input",
			name: "contribution",
			message: "What does the user need to know about contributing?",
		},
	])
	.then((answers) => {
		console.log(answers);
		const mark = generateMarkdown(answers);
		fs.writeFile("readme.md", mark, function (err) {
			if (err) {
				console.log("could not save file");
			} else {
				console.log("sucessful new readme");
			}
		});
	});
