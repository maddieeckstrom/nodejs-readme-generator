// a function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {

  if (license === 'Apache License 2.0') {
    return '![License: Apache License 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)'
  }
  if (license === 'GNU General Public License v3.0') {
    return '![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)]'
  }
  if (license === 'MIT') {
    return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]'
  }
  if (license === 'BSD 2-Clause License') {
    return '![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)]'
  }
  if (license === 'BSD 3-Clause License') {
    return '![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)]'
  }
  if (license === 'Eclipse Public License 1.0') {
    return '![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)]'
  }
  if (license === 'GNU Affero General Public License v3.0') {
    return '![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)]'
  }
  if (license === 'GNU General Public License v2.0') {
    return '![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)]'
  }
  if (license === 'GNU Lesser General Public License v3') {
    return '![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)]'
  }
  if (license === 'Mozilla Public License 2.0') {
    return '![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)]'
  }
  if (license === 'Unlicense') {
    return ''
  }
  if (license === '') {
    return ''
  }

}

// a function that returns the license link
function renderLicenseLink(license) {

  if (license === 'Apache License 2.0') {
    return '(https://opensource.org/licenses/Apache-2.0)'
  }
  if (license === 'GNU General Public License v3.0') {
    return '(https://www.gnu.org/licenses/gpl-3.0)'
  }
  if (license === 'MIT') {
    return '(https://opensource.org/license/MIT)'
  }
  if (license === 'BSD 2-Clause License') {
    return '(https://opensource.org/licenses/BSD-2-Clause)'
  }
  if (license === 'BSD 3-Clause License') {
    return '(https://opensource.org/licenses/BSD-3-Clause)'
  }
  if (license === 'Eclipse Public License 1.0') {
    return '(https://opensource.org/licenses/EPL-1.0)'
  }
  if (license === 'GNU Affero General Public License v3.0') {
    return '(https://www.gnu.org/licenses/agpl-3.0)'
  }
  if (license === 'GNU General Public License v2.0') {
    return '(https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)'
  }
  if (license === 'GNU Lesser General Public License v3') {
    return '(https://www.gnu.org/licenses/lgpl-3.0)'
  }
  if (license === 'Mozilla Public License 2.0') {
    return '(https://opensource.org/licenses/MPL-2.0)'
  }
  if (license === 'Unlicense') {
    return ''
  }
  if (license === '') {
    return ''
  }
}


// TODO: Create a function that returns the license section of README
function renderLicenseSection(license) {
  renderLicenseBadge(license);
  renderLicenseLink(license);
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return`
  # ${data.title}

  ## Description

  ${data.description}

  ## Table of Contents

  - [Installation](#Installation)
  - [Usage](#Usage)
  - [Credits](#Credits)
  - [License](#License)
  - [Tests](#Tests)
  - [Questions](#Questions)

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}
  ${data.screenshot}

  ## Credits

  ${data.contributions}

  ## License

  ${renderLicenseSection()}

  ## Tests

  ${data.test}

  ## Questions

  'https://github.com/${data.github}'
  If you have any additional questions, please contact me at: ${data.email}

`;
}

module.exports = generateMarkdown;
