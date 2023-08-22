// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const lisenceBadges = {
    MIT: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
    APACHE: "[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://www.apache.org/licenses/LICENSE-2.0)",
    Boost: "[![License: Boost 1.0](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)",
    none: "", // set for empty string incase there are no badges used.
  };

  return lisenceBadges[license] || ""; //this returns the badges or if there arent any, an empty string.
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const licenseLinks = {
    MIT: "https://opensource.org/licenses/MIT",
    APACHE: "https://www.apache.org/licenses/LICENSE-2.0",
    Boost: "https://www.boost.org/LICENSE_1_0.txt",
    none: "",
  };
  return licenseLinks[license] || "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "none") {
    return "";
  } else {
    return `Licensed under the ${renderLicenseBadge(license)} license`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ${renderLicenseSection(data.license)}
  
  ## License 
  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ## Contributors
  ${data.contributors}

  ## Testing
  ${data.test}

  ## Contact
  Github: [${data.contact}](https://github.com/${data.contact})
  Email: ${data.email}
  
  `;
}

module.exports = {generateMarkdown}; 
