function renderLicenseBadge(license) {
	const badges = {
		MIT: `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`,
		ISC: `![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)`,
		GNUPLv3: `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`,
	};
	return badges[license];
}
function generateMarkdown(answers) {
	console.log(renderLicenseBadge(answers.license));
	return `# ${answers.title}






## Table of Content
- [description](#description)
- [installation](#installation)
- [usage](#usage)
- [licenses](#licenses)
- [contribution](#contribution)
- [test](#test)
- [username](#username)
- [profile](#profile)


## username:
${answers.username}
## description:
${answers.description}
## installation:
${answers.installation}
## usage:
${answers.usage}
## licenses:
${renderLicenseBadge(answers.license)}

## contribution:
${answers.contribution}
## test:
${answers.test}
## email:
${answers.email}
## profile:
https://github.com/${answers.username}
`;
}

module.exports = generateMarkdown;
