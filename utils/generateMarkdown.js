// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(license){
    case 'MIT':
      return 'https://opensource.org/licenses/MIT';
      break;
    case 'APACHE 2.0':
      return 'https://www.apache.org/licenses/LICENSE-2.0';
      break;
    case 'GPL 3.0':
      return 'https://choosealicense.com/licenses/gpl-3.0/';
      break;
    case 'BSD 3':
      return 'https://opensource.org/licenses/BSD-3-Clause';
    default:
      return '';
  }
}

// Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None'){
    return `## License

    ${renderLicenseLink(license)}`;
  }
  else {
    return '';
  }
}

// Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.project}


  ## Description

  ${data.description}

  ## Table of Contents

  * [Installation](#installation)

  * [Usage](#usage)

  * [Contributing](#contributing)

  * [Tests](#tests)

  * [Questions](#questions)

  * [License](#license)

  ## Installation

  To install necessary dependencies, run the following command:

  ${data.installCommand}

  ## Usage

  ${data.using}

  ## Contributing

  ${data.contributing}

  ## Tests

  To run tests, use the following command:

  ${data.testCommand}

  ## Questions

  My GitHub profile can be found at https://github.com/${data.username}.
  You can contact me via email at ${data.email}.

  ${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;
