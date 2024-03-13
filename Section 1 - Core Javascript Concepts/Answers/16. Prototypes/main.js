// Design the same classes by using only Javascript prototypes
var Employee = function (id, name) {
  if (!id || !name) throw new Error("Employ id and name are mandatory");
  this.id = id;
  this.name = name;
};

Employee.prototype.setSalary = function (val) {
  this.salary = val;
};

Employee.prototype.getId = function () {
  return this.id;
};

Employee.prototype.getName = function () {
  return this.name;
};

Employee.prototype.getSalary = function () {
  return this.salary;
};

var Manager = function (params) {
  Employee.apply(this, arguments);
};

Manager.prototype = Object.create(Employee.prototype);
Manager.prototype.constructor = Manager;

Manager.prototype.setDepartment = function (department) {
  this.department = department;
};

Manager.prototype.getDepartment = function () {
  return this.department;
};

const employee = new Employee(1, "Jack");
employee.setSalary(1000);
console.log(employee);
