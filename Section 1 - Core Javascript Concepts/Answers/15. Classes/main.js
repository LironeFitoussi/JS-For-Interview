// Design a class for employee which takes id and name in during construction of object and has a salary property
class Employee {
  constructor(id, name) {
    if (!id || !name) throw new Error("Employ id and name are mandatory");
    this.id = id;
    this.name = name;
  }

  setSalary(val) {
    this.salary = val;
  }

  getId() {
    return this.id;
  }

  getName() {
    return this.name;
  }

  getSalary() {
    return this.salary;
  }
}

class Manager extends Employee {
  setDepartment(department) {
    this.department = department;
  }

  getDepartment() {
    return this.department;
  }
}

const employee = new Employee(1, "Jack");
employee.setSalary(1000);

const manager = new Manager(1001, "John");
manager.setSalary(20000);
manager.setDepartment("HR");

console.log(manager);
// Design a class for manager which is employee and can have department property
