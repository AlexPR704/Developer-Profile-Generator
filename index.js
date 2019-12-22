const inquirer = require("inquirer");
const axios = require("axios");
const generateHtml = require("./generateHTML");
const fs = require("fs");


inquirer.prompt([
  {
    type: "input",
    name: "github",
    message: "What is your Github?"
  },
  {
    type: "list",
    message: "What is your favorite color",
    name: "colors",
    choices: [
      "black",
      "purple",
      "blue",
      "yellow"

    ]
  }
]).then(function (data) {
    
  });
