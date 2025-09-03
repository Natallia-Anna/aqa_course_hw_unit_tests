class Employee {
  #salary;

  constructor(firstName, lastName, salary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.salary = salary;
  }

  get firstName() {
    return this._firstName;
  }

  set firstName(value) {
    if (this.#isValidFirstNameLastName(value)) throw new Error('This value must be string.');
    this._firstName = value;
  }

  get lastName() {
    return this._lastName;
  }

  set lastName(value) {
    if (this.#isValidFirstNameLastName(value)) throw new Error('This value must be string.');
    this._lastName = value;
  }

  get salary() {
    return this.#salary;
  }

  set salary(value) {
    if (typeof value !== 'number' || value <= 0 || value >= 100000 || isNaN(value))
      throw new Error('This value must be positive number.');
    this.#salary = value;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  #isValidFirstNameLastName(value) {
    return typeof value !== 'string' || value.length < 2 || value.length > 50 || !/^[A-Za-z]+$/.test(value);
  }

  getProfession() {
    return this.constructor.name;
  }
}

class Developer extends Employee {
  constructor(firstName, lastName, salary, programmingLanguages = []) {
    super(firstName, lastName, salary);
    this.programmingLanguages = [...programmingLanguages];
  }

  get programmingLanguages() {
    return this._programmingLanguages;
  }

  set programmingLanguages(value) {
    this._programmingLanguages = value;
  }

  addProgrammingLanguage(language) {
    if (typeof language !== 'string' || language.length < 1 || language.length > 50 || !/^[A-Za-z+#]+$/.test(language))
      throw new Error('This value must be string.');
    this.programmingLanguages.push(language);
  }
}

class Manager extends Employee {
  constructor(firstName, lastName, salary, teamSize) {
    super(firstName, lastName, salary);
    this.teamSize = teamSize;
  }

  get teamSize() {
    return this._teamSize;
  }

  set teamSize(value) {
    this._teamSize = value;
  }

  increaseTeamSize() {
    return ++this.teamSize;
  }
}

class Designer extends Employee {
  constructor(firstName, lastName, salary, designTools = []) {
    super(firstName, lastName, salary);
    this.designTools = [...designTools];
  }

  get designTools() {
    return this._designTools;
  }

  set designTools(value) {
    this._designTools = value;
  }

  addDesignTool(tool) {
    if (typeof tool !== 'string' || tool.length < 2 || tool.length > 50 || !/^[A-Za-z]+$/.test(tool))
      throw new Error('This value must be string.');
    return this.designTools.push(tool);
  }
}

class Company {
  #employees = [];

  constructor(title, phone, address, employees) {
    this.title = title;
    this.phone = phone;
    this.address = address;
  }

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

  addEmployee(employee) {
    if (!(employee instanceof Employee)) {
      throw new Error('Wrong employee data');
    } else if(this.getEmployees().find(emp => emp.firstName === employee.firstName && emp.lastName === employee.lastName)) {
      throw new Error('Already exists');
    }
    this.#employees.push(employee);
  }

  getEmployees() {
    return [...this.#employees];
  }

  getInfo() {
    return `Компания: ${this.title}\nАдрес: ${this.address}\nКоличество сотрудников: ${this.#employees.length}`;
  }

  findEmployeeByName(firstName) {
    let employee = this.#employees.find((emp) => emp.firstName === firstName);
    if (!employee) {
      throw new Error(`Сотрудник с именем "${firstName}" не найден.`);
    }
    return employee;
  }

  #getEmployeeIndex(firstName) {
    return this.#employees.findIndex((emp) => emp.firstName === firstName);
  }

  removeEmployee(firstName) {
    const index = this.#getEmployeeIndex(firstName);
    if (index === -1) {
      throw new Error(`Сотрудник с именем "${firstName}" не найден.`);
    }
    this.#employees.splice(index, 1);
  }

  getTotalSalary() {
    return this.#employees.reduce((sum, employee) => sum + employee.salary, 0);
  }

  getEmployeesByProfession(value) {
    return this.getEmployees().filter((emp) => emp.getProfession() === value);
  }
}

export { Employee, Company, Designer, Developer, Manager };