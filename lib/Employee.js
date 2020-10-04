function Employee(name, id, email) {
  this.name = name;
  this.id = id;
  this.email = email;
}
Employee.prototype.getName = function () {
  // console.log(`Name: + ${this.name}`);
  return this.name;
};
// console.log("=======");

Employee.prototype.getId = function () {
  // console.log(`ID: + ${this.id}`);
  return this.id;
};
// console.log("=======");

Employee.prototype.getEmail = function () {
  // console.log(`Email: + ${this.email}`);
  return this.email;
};

Employee.prototype.getRole = function () {
  // console.log();
  return "Employee";
};

// console.log("=======");
module.exports = Employee;
