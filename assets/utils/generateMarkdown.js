// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

## License

[![License: ${data.license}](https://img.shields.io/badge/License-${data.license}-blue.svg)](https://opensource.org/licenses/${data.license})

This project is licensed under the ${data.license} license.

## Contributing

${data.contributing}

## Tests

${data.tests}

## Questions

For any questions, please contact ${data.name} at ${data.email}.

GitHub: [${data.username}](https://github.com/${data.username})`;
}

// module.exports = {generateMarkdown};

export default generateMarkdown

