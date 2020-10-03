const fs = require("fs");
const inquirer = require("inquirer");
const Employee = require("./lib/Employee");
let testEmployee;

function startQuestions() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Please enter team members name. ",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please Enter a name of a team member");
            return false;
          }
        },
      },
      // {
      //   type: "input",
      //   name: "id",
      //   message: "Enter the employee ID",
      //   validate: (idInput) => {
      //     if (idInput) {
      //       return true;
      //     } else {
      //       console.log("enter an ID");
      //       return false;
      //     }
      //   },
      // },
      // {
      //   type: "input",
      //   name: "email",
      //   message: "Enter the employee email",
      //   validate: (emailInput) => {
      //     if (emailInput) {
      //       return true;
      //     } else {
      //       console.log("enter an email.");
      //       return false;
      //     }
      //   },
      // },
    ])
    .then(function (data) {
      console.log(data);
      testEmployee = new Employee(data.name, 12345, "jer@jer.com");
      console.log(testEmployee);
    });
}

// let name = new Employee();
// let id = new Employee(`${id}`);
// let email = new Employee(`${email}`);

// name.getName()
// id.getId()
// email.getEmail();
startQuestions();
