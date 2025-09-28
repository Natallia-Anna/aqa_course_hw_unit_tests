// Task 3. Перед вами структура компани, и ниже представлены задания, относящиеся к ней.
// В заданиях по максимуму использовать методы массивов, создавать функции-помощники, выполняющие дополнительные действия,
// чтобы ваши функции выполняли строго одну работу. ЭТО ОЧЕНЬ ВАЖНО!

// Задания:
// 1. Вывести все предприятия и их отделы. Рядом указать количество сотрудников. Для предприятия посчитать сумму всех сотрудников во всех отделах.

// **Пример:**

// Предприятие 1 (45 сотрудников)
// - Отдел тестирования (10 сотрудников)
// - Отдел маркетинга (20 сотрудников)
// - Администрация (15 человек)
// Предприятие 2 (75 сотрудников)
// - Отдел разработки (50 сотрудников)
// - Отдел маркетинга (20 сотрудников)
// - Отдел охраны труда (5 сотрудников)
// Предприятие 3 (нет сотрудников)
// - Отдел аналитики (нет сотрудников)

// 2. Написать функцию, которая будет принимать 1 аргумент (id отдела или название отдела и возвращать предприятие, к которому относится).

// Пример:
// getEnterpriseName(4)
// getEnterpriseName("Отдел маркетинга")

// 3. Написать функцию, которая будет добавлять предприятие. В качестве аргумента принимает название предприятия

// Пример:
// addEnterprise("Название нового предприятия")

// 4. Написать функцию, которая будет добавлять отдел в предприятие. В качестве аргумента принимает id предприятия, в которое будет добавлен отдел и название отдела.

// Пример:
// addDepartment(1, "Название нового отдела")

// 5. Написать функцию для редактирования названия предприятия. Принимает в качестве аргумента id предприятия и новое имя предприятия.

// Пример:
// editEnterprise(1, "Новое название предприятия")

// 6. Написать функцию для редактирования названия отдела. Принимает в качестве аргумента id отдела и новое имя отдела.

// Пример:
// editDepartment(7, "Новое название отдела")

// 7. Написать функцию для удаления предприятия. В качестве аргумента принимает id предприятия.

// Пример:
// deleteEnterprise(1)

// 8. Написать функцию для удаления отдела. В качестве аргумента принимает id отдела. Удалить отдел можно только, если в нем нет сотрудников.

// Пример:
// deleteDepartment(3)

// 9. Написать функцию для переноса сотрудников между отделами одного предприятия. В качестве аргумента принимает два значения: id отдела, из которого будут переноситься сотрудники и id отдела, в который будут переноситься сотрудники).

// Пример:
// moveEmployees(2, 3)

// Интерфейсы для типизации
interface Department {
  id: number;
  name: string;
  employees_count: number;
}

interface Enterprise {
  id: number;
  name: string;
  departments: Department[];
}

// Абстрактный базовый класс для работы с ID
abstract class EntityWithId {
  protected abstract getAllEntities(): { id: number }[];
  
  // Приватный метод для генерации нового ID
  protected generateNewId(): number {
    const entities = this.getAllEntities();
    if (entities.length === 0) return 1;
    return Math.max(...entities.map(entity => entity.id)) + 1;
  }
}

// Класс для работы с отделами
class DepartmentManager extends EntityWithId {
  constructor(private enterprises: Enterprise[]) {
    super();
  }

  protected getAllEntities(): { id: number }[] {
    return this.enterprises.flatMap(enterprise => enterprise.departments);
  }

  // Поиск отдела по ID или названию
  findDepartment(searchParam: number | string): { department: Department, enterprise: Enterprise } | null {
    for (const enterprise of this.enterprises) {
      const department = enterprise.departments.find(dept => 
        typeof searchParam === 'number' 
          ? dept.id === searchParam 
          : dept.name === searchParam
      );
      if (department) {
        return { department, enterprise };
      }
    }
    return null;
  }

  // Добавление отдела
  addDepartment(enterpriseId: number, departmentName: string): boolean {
    const enterprise = this.enterprises.find(ent => ent.id === enterpriseId);
    if (!enterprise) return false;

    const newDepartment: Department = {
      id: this.generateNewId(),
      name: departmentName,
      employees_count: 0
    };

    enterprise.departments.push(newDepartment);
    return true;
  }

  // Редактирование отдела
  editDepartment(departmentId: number, newName: string): boolean {
    const result = this.findDepartment(departmentId);
    if (!result) return false;

    result.department.name = newName;
    return true;
  }

  // Удаление отдела
  deleteDepartment(departmentId: number): boolean {
    for (const enterprise of this.enterprises) {
      const departmentIndex = enterprise.departments.findIndex(dept => dept.id === departmentId);
      if (departmentIndex !== -1) {
        if (enterprise.departments[departmentIndex].employees_count > 0) {
          throw new Error('Нельзя удалить отдел с сотрудниками');
        }
        enterprise.departments.splice(departmentIndex, 1);
        return true;
      }
    }
    return false;
  }

  // Перенос сотрудников между отделами
  moveEmployees(fromDepartmentId: number, toDepartmentId: number): boolean {
    const fromDeptResult = this.findDepartment(fromDepartmentId);
    const toDeptResult = this.findDepartment(toDepartmentId);

    if (!fromDeptResult || !toDeptResult) {
      throw new Error('Один из отделов не найден');
    }

    if (fromDeptResult.enterprise.id !== toDeptResult.enterprise.id) {
      throw new Error('Отделы должны принадлежать одному предприятию');
    }

    toDeptResult.department.employees_count += fromDeptResult.department.employees_count;
    fromDeptResult.department.employees_count = 0;
    return true;
  }
}

// Класс для работы с предприятиями
class EnterpriseManager extends EntityWithId {
  constructor(private enterprises: Enterprise[]) {
    super();
  }

  protected getAllEntities(): { id: number }[] {
    return this.enterprises;
  }

  // Получение общего количества сотрудников предприятия
  private getEnterpriseEmployeesCount(enterprise: Enterprise): number {
    return enterprise.departments.reduce((sum, dept) => sum + dept.employees_count, 0);
  }

  // Вывод информации о предприятиях и отделах
  printEnterprisesInfo(): void {
    this.enterprises.forEach(enterprise => {
      const totalEmployees = this.getEnterpriseEmployeesCount(enterprise);
      const employeesText = totalEmployees === 0 ? 'нет сотрудников' : `${totalEmployees} сотрудников`;
      
      console.log(`${enterprise.name} (${employeesText})`);
      
      enterprise.departments.forEach(department => {
        const deptEmployeesText = department.employees_count === 0 
          ? 'нет сотрудников' 
          : `${department.employees_count} сотрудников`;
        console.log(`- ${department.name} (${deptEmployeesText})`);
      });
    });
  }

  // Поиск предприятия по отделу
  getEnterpriseByDepartment(searchParam: number | string): Enterprise | null {
    const departmentManager = new DepartmentManager(this.enterprises);
    const result = departmentManager.findDepartment(searchParam);
    return result ? result.enterprise : null;
  }

  // Добавление предприятия
  addEnterprise(name: string): void {
    const newEnterprise: Enterprise = {
      id: this.generateNewId(),
      name,
      departments: []
    };
    this.enterprises.push(newEnterprise);
  }

  // Редактирование предприятия
  editEnterprise(enterpriseId: number, newName: string): boolean {
    const enterprise = this.enterprises.find(ent => ent.id === enterpriseId);
    if (!enterprise) return false;

    enterprise.name = newName;
    return true;
  }

  // Удаление предприятия
  deleteEnterprise(enterpriseId: number): boolean {
    const enterpriseIndex = this.enterprises.findIndex(ent => ent.id === enterpriseId);
    if (enterpriseIndex === -1) return false;

    this.enterprises.splice(enterpriseIndex, 1);
    return true;
  }
}

// Главный класс для управления всей структурой
class CompanyStructure {
  private enterprises: Enterprise[];
  private enterpriseManager: EnterpriseManager;
  private departmentManager: DepartmentManager;

  constructor(initialData: Enterprise[] = []) {
    this.enterprises = JSON.parse(JSON.stringify(initialData)); // глубокое копирование
    this.enterpriseManager = new EnterpriseManager(this.enterprises);
    this.departmentManager = new DepartmentManager(this.enterprises);
  }

  // 1. Вывод информации о предприятиях и отделах
  printStructure(): void {
    this.enterpriseManager.printEnterprisesInfo();
  }

  // 2. Получение предприятия по отделу
  getEnterpriseByDepartment(searchParam: number | string): Enterprise | null {
    return this.enterpriseManager.getEnterpriseByDepartment(searchParam);
  }

  // 3. Добавление предприятия
  addEnterprise(name: string): void {
    this.enterpriseManager.addEnterprise(name);
  }

  // 4. Добавление отдела
  addDepartment(enterpriseId: number, departmentName: string): boolean {
    return this.departmentManager.addDepartment(enterpriseId, departmentName);
  }

  // 5. Редактирование предприятия
  editEnterprise(enterpriseId: number, newName: string): boolean {
    return this.enterpriseManager.editEnterprise(enterpriseId, newName);
  }

  // 6. Редактирование отдела
  editDepartment(departmentId: number, newName: string): boolean {
    return this.departmentManager.editDepartment(departmentId, newName);
  }

  // 7. Удаление предприятия
  deleteEnterprise(enterpriseId: number): boolean {
    return this.enterpriseManager.deleteEnterprise(enterpriseId);
  }

  // 8. Удаление отдела
  deleteDepartment(departmentId: number): boolean {
    return this.departmentManager.deleteDepartment(departmentId);
  }

  // 9. Перенос сотрудников
  moveEmployees(fromDepartmentId: number, toDepartmentId: number): boolean {
    return this.departmentManager.moveEmployees(fromDepartmentId, toDepartmentId);
  }

  // Дополнительный метод для получения всех данных
  getData(): Enterprise[] {
    return JSON.parse(JSON.stringify(this.enterprises)); // возвращаем копию
  }
}

// Инициализация данных
const initialEnterprises: Enterprise[] = [
  {
    id: 1,
    name: "Предприятие 1",
    departments: [
      {
        id: 2,
        name: "Отдел тестирования",
        employees_count: 10,
      },
      {
        id: 3,
        name: "Отдел маркетинга",
        employees_count: 20,
      },
      {
        id: 4,
        name: "Администрация",
        employees_count: 15,
      },
    ],
  },
  {
    id: 5,
    name: "Предприятие 2",
    departments: [
      {
        id: 6,
        name: "Отдел разработки",
        employees_count: 50,
      },
      {
        id: 7,
        name: "Отдел маркетинга",
        employees_count: 20,
      },
      {
        id: 8,
        name: "Отдел охраны труда",
        employees_count: 5,
      },
    ],
  },
  {
    id: 9,
    name: "Предприятие 3",
    departments: [
      {
        id: 10,
        name: "Отдел аналитики",
        employees_count: 0,
      },
    ],
  },
];

// Пример использования
const company = new CompanyStructure(initialEnterprises);

// 1. Вывод структуры
console.log('=== Структура компании ===');
company.printStructure();

// 2. Поиск предприятия по отделу
console.log('\n=== Поиск предприятия по отделу ===');
const enterprise1 = company.getEnterpriseByDepartment(4);
console.log('Предприятие отдела с ID 4:', enterprise1?.name);

const enterprise2 = company.getEnterpriseByDepartment("Отдел маркетинга");
console.log('Предприятие отдела "Отдел маркетинга":', enterprise2?.name);

// 3. Добавление предприятия
console.log('\n=== Добавление предприятия ===');
company.addEnterprise("Предприятие 4");
console.log('После добавления предприятия:');
company.printStructure();

// 4. Добавление отдела
console.log('\n=== Добавление отдела ===');
const addDeptResult = company.addDepartment(1, "Новый отдел");
console.log('Отдел добавлен:', addDeptResult);
console.log('После добавления отдела:');
company.printStructure();

// 5. Редактирование предприятия
console.log('\n=== Редактирование предприятия ===');
const editEntResult = company.editEnterprise(1, "Обновленное Предприятие 1");
console.log('Предприятие обновлено:', editEntResult);
console.log('После редактирования предприятия:');
company.printStructure();

// 6. Редактирование отдела
console.log('\n=== Редактирование отдела ===');
const editDeptResult = company.editDepartment(7, "Обновленный отдел маркетинга");
console.log('Отдел обновлен:', editDeptResult);
console.log('После редактирования отдела:');
company.printStructure();

// 7. Удаление предприятия
console.log('\n=== Удаление предприятия ===');
const deleteEntResult = company.deleteEnterprise(9);
console.log('Предприятие удалено:', deleteEntResult);
console.log('После удаления предприятия:');
company.printStructure();

// 8. Удаление отдела (попытка удалить отдел без сотрудников)
console.log('\n=== Удаление отдела ===');
try {
  const deleteDeptResult = company.deleteDepartment(10); // Отдел аналитики с 0 сотрудников
  console.log('Отдел удален успешно:', deleteDeptResult);
} catch (error) {
  console.log('Ошибка при удалении отдела:', (error as Error).message);
}

// 9. Перенос сотрудников
console.log('\n=== Перенос сотрудников ===');
try {
  const moveResult = company.moveEmployees(2, 3);
  console.log('Сотрудники перенесены:', moveResult);
  console.log('После переноса сотрудников:');
  company.printStructure();
} catch (error) {
  console.log('Ошибка при переносе сотрудников:', (error as Error).message);
}

// Тестирование ошибок
console.log('\n=== Тестирование ошибок ===');
// Попытка удалить отдел с сотрудниками
try {
  company.deleteDepartment(3); // В этом отделе теперь сотрудники после переноса
} catch (error) {
  console.log('Ошибка при удалении отдела с сотрудниками:', (error as Error).message);
}

// Попытка переноса между разными предприятиями
try {
  company.moveEmployees(3, 6); // Отделы из разных предприятий
} catch (error) {
  console.log('Ошибка при переносе между предприятиями:', (error as Error).message);
}