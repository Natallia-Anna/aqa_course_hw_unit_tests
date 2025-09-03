// ===== TASK 1 =====

// Класс Employee
class Employee {
  #salary; // приватное поле

  constructor(firstName, lastName, profession, salary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.profession = profession;
    this.#salary = salary;
  }

  // --- геттеры и сеттеры ---
  get firstName() {
    return this._firstName;
  }
  set firstName(value) {
    this._firstName = value;
  }

  get lastName() {
    return this._lastName;
  }
  set lastName(value) {
    this._lastName = value;
  }

  get profession() {
    return this._profession;
  }
  set profession(value) {
    this._profession = value;
  }

  get salary() {
    return this.#salary;
  }
  set salary(value) {
    if (typeof value === "number" && value >= 0) {
      this.#salary = value;
    } else {
      throw new Error("Salary must be a positive number");
    }
  }

  // метод для полного имени
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

// Тестирование Employee
const emp1 = new Employee("John", "Doe", "Developer", 3000);
console.log(emp1.firstName); // "John"
emp1.salary = 3100;
console.log(emp1.salary); // 3100
console.log(emp1.getFullName()); // "John Doe"

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
}

// Тестирование Company
const company = new Company("Tech Corp", 123456, "Main Street");
const emp2 = new Employee("Barbara", "Johnson", "QA", 2500);

company.addEmployee(emp1);
company.addEmployee(emp2);

console.log(company.getEmployees()); // [Employee, Employee]
console.log(company.getInfo());


export { Employee, Company };
