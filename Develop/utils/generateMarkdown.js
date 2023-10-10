// TODO: Create a function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {

  if (license === 'Apache License 2.0') {
    return '![License: Apache License 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)'
  }

}

// TODO: Create a function that returns the license link
function renderLicenseLink(license) {

  if (license === 'Apache License 2.0') {
    return '(https://opensource.org/licenses/Apache-2.0)'
  }
  if (license === 'GNU General Public License v3.0') {
    return '(https://opensource.org/license/gpl-3-0/)'
  }
  if (license === 'MIT') {
    return '(https://opensource.org/license/mit-0/)'
  }
  if (license === 'BSD 2-Clause Simplified License') {
    return '(https://opensource.org/license/bsdpluspatent/)'
  }
  if (license === 'BSD 3-Clause New or Revised License') {
    return '(https://opensource.org/license/bsd-3-clause-lbnl/)'
  }
  if (license === 'Boost Software License 1.0') {
    return '(https://opensource.org/license/bsl-1-0/)'
  }
  if (license === 'Eclipse Public License 2.0') {
    return '(https://opensource.org/license/epl-2-0/)'
  }
  if (license === 'GNU Affero General Public License v3.0') {
    return '(https://opensource.org/license/agpl-v3/)'
  }
  if (license === 'GNU General Public License v2.0') {
    return '(https://opensource.org/license/gpl-2-0/)'
  }
  if (license === 'GNU Lesser General Public License v2.1') {
    return '(https://opensource.org/license/lgpl-2-1/)'
  }
  if (license === 'Mozilla Public License 2.0') {
    return '(https://opensource.org/license/mpl-2-0/)'
  }
  if (license === 'Unlicense') {
    return ''
  }

}

// TODO: Create a function that returns the license section of README
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description

  ${data.description}

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [Tests](#tests)

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}
  ${data.screenshot}

  ## Credits

  ${data.contributions}

  ## License

  ${data.license}

  ## Tests

  ${data.test}

`;
}

module.exports = generateMarkdown;
