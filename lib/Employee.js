


function Employee(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }
  Employee.prototype.getName = function () {
    console.log(`Name: + ${this.name}`);
    console.log("=======");
  };
  Employee.prototype.getId = function () {
    console.log(`ID: + ${this.id}`);
    console.log("=======");
  };
  Employee.prototype.getEmail = function () {
    console.log(`Email: + ${this.email}`);
    console.log("=======");
  };

  module.exports = Employee;
