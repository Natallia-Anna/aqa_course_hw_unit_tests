/*1. Создайте интерфейс IEmployee {name: string, salary: number, isManager: boolean } и объект QA: IEmployee
2. Создайте тип EmployeeKeys, который будет юнионом названий ключей IEmployee (использовать keyof)
3. Создайте тип QaKeys, который будет содержать лишь ключи объекта QA(использовать keyof и typeof)
4. Создайте тип UserType из объекта QA (используйте typeof)
5. Создайте тип, в котором все поля интерфейса IEmployee будут необязательными
6. Создайте тип, который будет содержать поля name и salary из интерфейса IEmployee
7. Создайте тип, который будет держать все поля из интерфейса IEmployee, кроме isManager
8. Создайте тип, который будет содержать все поля из интерфейса IEmployee и сделает их неизменяемыми (readonly)
9. Создайте объект с помощью Record, в ключах которого будут строки, а в значениях - ключи объекта QA (Используйте Record, keyof, typeof)*/

// 1. Создайте интерфейс IEmployee и объект QA
interface IEmployee {
    name: string;
    salary: number;
    isManager: boolean;
}

const QA: IEmployee = {
    name: "Иван Петров",
    salary: 100000,
    isManager: false
};

// 2. Создайте тип EmployeeKeys, который будет юнионом названий ключей IEmployee
type EmployeeKeys = keyof IEmployee;
// Результат: "name" | "salary" | "isManager"

// 3. Создайте тип QaKeys, который будет содержать лишь ключи объекта QA
type QaKeys = keyof typeof QA;
// Результат: "name" | "salary" | "isManager"

// 4. Создайте тип UserType из объекта QA
type UserType = typeof QA;
// Результат: { name: string; salary: number; isManager: boolean; }

// 5. Создайте тип, в котором все поля интерфейса IEmployee будут необязательными
type PartialEmployee = Partial<IEmployee>;
// Результат: { name?: string; salary?: number; isManager?: boolean; }

// 6. Создайте тип, который будет содержать поля name и salary из интерфейса IEmployee
type NameAndSalary = Pick<IEmployee, "name" | "salary">;
// Результат: { name: string; salary: number; }

// 7. Создайте тип, который будет держать все поля из интерфейса IEmployee, кроме isManager
type WithoutManager = Omit<IEmployee, "isManager">;
// Результат: { name: string; salary: number; }

// 8. Создайте тип, который будет содержать все поля из интерфейса IEmployee и сделает их неизменяемыми
type ReadonlyEmployee = Readonly<IEmployee>;
// Результат: { readonly name: string; readonly salary: number; readonly isManager: boolean; }

// 9. Создайте объект с помощью Record, в ключах которого будут строки, а в значениях - ключи объекта QA
type QaKeysRecord = Record<string, keyof typeof QA>;
// Результат: { [key: string]: "name" | "salary" | "isManager"; }

// Пример использования Record:
const qaKeysMapping: QaKeysRecord = {
    field1: "name",
    field2: "salary",
    field3: "isManager"
};

// Проверка типов
const employeeKey: EmployeeKeys = "name"; 
const qaKey: QaKeys = "salary"; 

const partialEmployee: PartialEmployee = {
    name: "Анна" // salary и isManager не обязательны
};

const nameSalary: NameAndSalary = {
    name: "Петр",
    salary: 50000
};

const withoutManager: WithoutManager = {
    name: "Мария",
    salary: 75000
};

const readonlyEmployee: ReadonlyEmployee = {
    name: "Алексей",
    salary: 120000,
    isManager: true
};
// readonlyEmployee.name = "Новое имя"; //  Ошибка - поле readonly

// Дополнительная проверка
console.log("QA объект:", QA);
console.log("EmployeeKeys:", employeeKey);
console.log("QaKeys:", qaKey);
console.log("Record объект:", qaKeysMapping);
