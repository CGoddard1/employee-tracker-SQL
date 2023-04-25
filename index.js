//packages
const db = require("./config/connection");
const inquirer = require("inquirer");
const promptFunctions = require("./utils/prompts")
require("console.table");

//function
async function homePrompt() {
    const answers = await inquirer.prompt({
        name: "homePrompt",
        type: "list",
        message: "Please select an option from the list.",
        choices: [
            "View All Departments",
            "View All Roles",
            "View All Employees",
            "Add a Department",
            "Add a Role",
            "Add an Employee",
            "Update an Employee Role",
            "Quit",
        ],
    });
    userResponse = answers.homePrompt;