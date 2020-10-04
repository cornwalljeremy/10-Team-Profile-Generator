const fs = require("fs");
const inquirer = require("inquirer");
// const Employee = require("./lib/Employee");
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const render = require("./src/page-template");
const employeeArray = [];

// let testEmployee;

function managerQuestions() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Please enter managers name. ",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please Enter a name of the manager");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "Enter the employee ID",
        validate: (idInput) => {
          if (idInput) {
            return true;
          } else {
            console.log("enter an ID");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "Enter the employee email",
        validate: (emailInput) => {
          if (emailInput) {
            return true;
          } else {
            console.log("enter an email.");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "office",
        message: "Enter your office number",
        validate: (officeInput) => {
          if (officeInput) {
            return true;
          } else {
            console.log("Please enter an office number");
            return false;
          }
        },
      },
    ])
    .then((information) => {
      const manager = new Manager(
        information.name,
        information.id,
        information.email,
        information.office
      );
      employeeArray.push(manager);
      // console.log(employeeArray);
      employeeQuestions();
    });
}
function employeeQuestions() {
  inquirer.prompt([
    {
      type: "list",
      name: "getRole",
      message: "Add which type of team member?",
      choices: ["Engineer", "Intern", "No one else"],
    },
  ]).then(choices => {
  switch (choices.getRole) {
    case "Engineer":
     engineerQuestions();
      break;
    case "Intern":
      internQuestions();
      break;
    case "No one else":
      console.log(employeeArray);
      return true;
  }
})
}
function engineerQuestions() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Please enter engineers name? ",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please Enter a name of the manager");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "Enter the employee ID",
        validate: (idInput) => {
          if (idInput) {
            return true;
          } else {
            console.log("enter an ID");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "Enter the employee email",
        validate: (emailInput) => {
          if (emailInput) {
            return true;
          } else {
            console.log("enter an email.");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "github",
        message: "enter the github username",
      },
    ])
    .then((information) => {
      const engineer = new Engineer(
        information.name,
        information.id,
        information.email,
        information.github
      );
      employeeArray.push(engineer);
      employeeQuestions();
    });
};
function internQuestions() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Please enter interns name. ",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please Enter a name of the intern");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "Enter the intern ID",
        validate: (idInput) => {
          if (idInput) {
            return true;
          } else {
            console.log("enter an ID");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "Enter the intern email",
        validate: (emailInput) => {
          if (emailInput) {
            return true;
          } else {
            console.log("enter an email.");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "school",
        message: "Please enter which school they attend.",
      },
    ])
    .then((information) => {
      const intern = new Intern(
        information.name,
        information.id,
        information.email,
        information.school
      );
      employeeArray.push(intern);
      employeeQuestions();
    });
    
}

// console.log(employeeArray);
// let name = new Employee();
// let id = new Employee(`${id}`);
// let email = new Employee(`${email}`);

// name.getName()
// id.getId()
// email.getEmail();
managerQuestions(employeeQuestions);
// employeeQuestions()
// .then(function (data) {
//   // console.log(data);
//   // testEmployee = new Employee(data.name, data.id, data.email);
//   // console.log(testEmployee);
// });
