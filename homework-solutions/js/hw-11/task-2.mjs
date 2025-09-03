// ===== TASK 2 =====

// Класс Employee
class Employee {
  #salary; // приватное поле

  constructor(firstName, lastName, profession, salary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.profession = profession;
    this.salary = salary;
  }

  // --- геттеры и сеттеры с валидацией ---
  get firstName() {
    return this._firstName;
  }
  set firstName(value) {
    if (/^[A-Za-z]{2,50}$/.test(value)) {
      this._firstName = value;
    } else {
      throw new Error("First name must be 2–50 latin letters");
    }
  }

  get lastName() {
    return this._lastName;
  }
  set lastName(value) {
    if (/^[A-Za-z]{2,50}$/.test(value)) {
      this._lastName = value;
    } else {
      throw new Error("Last name must be 2–50 latin letters");
    }
  }

  get profession() {
    return this._profession;
  }
  set profession(value) {
    if (/^[A-Za-z ]+$/.test(value) && value.trim().length > 0) {
      this._profession = value;
    } else {
      throw new Error("Profession must contain only latin letters and spaces, and not be empty");
    }
  }

  get salary() {
    return this.#salary;
  }
  set salary(value) {
    if (typeof value === "number" && value > 0 && value < 10000) {
      this.#salary = value;
    } else {
      throw new Error("Salary must be a number > 0 and < 10000");
    }
  }

  // метод для полного имени
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

// Класс Company
class Company {
  #employees; // приватное поле

  constructor(title, phone, address) {
    this.title = title;
    this.phone = phone;
    this.address = address;
    this.#employees = [];
  }

  // --- геттеры ---
  get title() {
    return this._title;
  }
  set title(value) {
    this._title = value;
  }

  get phone() {
    return this._phone;
  }
  set phone(value) {
    this._phone = value;
  }

  get address() {
    return this._address;
  }
  set address(value) {
    this._address = value;
  }

  // --- методы ---
  addEmployee(employee) {
    if (employee instanceof Employee) {
      this.#employees.push(employee);
    } else {
      throw new Error("Only instances of Employee can be added");
    }
  }

  getEmployees() {
    return this.#employees;
  }

  getInfo() {
    return `Компания: ${this.title}\nАдрес: ${this.address}\nКоличество сотрудников: ${this.#employees.length}`;
  }

  // 🔹 поиск сотрудника
  findEmployeeByName(firstName) {
    const emp = this.#employees.find(e => e.firstName === firstName);
    if (!emp) {
      throw new Error(`Employee with name "${firstName}" not found`);
    }
    return emp;
  }

  // 🔹 приватный метод для поиска индекса
  #getEmployeeIndex(firstName) {
    return this.#employees.findIndex(e => e.firstName === firstName);
  }

  // 🔹 удаление сотрудника
  removeEmployee(firstName) {
    const index = this.#getEmployeeIndex(firstName);
    if (index === -1) {
      throw new Error(`Employee with name "${firstName}" not found`);
    }
    this.#employees.splice(index, 1);
  }

  // 🔹 сумма зарплат
  getTotalSalary() {
    return this.#employees.reduce((sum, e) => sum + e.salary, 0);
  }
}

// ===== Тестирование =====
const emp1 = new Employee('John', 'Doe', 'Developer', 3000);
const emp2 = new Employee('Jane', 'Smith', 'Manager', 5000);
const emp3 = new Employee('Mark', 'Brown', 'Designer', 4000);

const company = new Company('Tech Corp', '123-456', 'Main Street');
company.addEmployee(emp1);
company.addEmployee(emp2);
company.addEmployee(emp3);

console.log(company.getTotalSalary()); // 12000
console.log(company.findEmployeeByName('Jane')); // Employee { ... }
company.removeEmployee('John');
console.log(company.getEmployees()); // [Employee, Employee]


export { Employee, Company };
