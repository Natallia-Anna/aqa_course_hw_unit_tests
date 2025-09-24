/*Напишите дженерик-функцию getKeyByValue, которая принимает объект и значение, и возвращает ключ, соответствующий этому значению. 
Если значение не найдено, функция должна возвращать undefined.
Используйте keyof для типизации ключей объекта*/

// Дженерик-функция для поиска ключа по значению
function getKeyByValue<T extends object, V>(
    obj: T, 
    value: V
): keyof T | undefined {
    // Приводим obj к записи с ключами keyof T и значениями любого типа
    const objectEntries = obj as Record<keyof T, any>;
    
    // Ищем ключ, значение которого равно переданному value
    const foundKey = (Object.keys(objectEntries) as Array<keyof T>).find(
        key => objectEntries[key] === value
    );
    
    return foundKey;
}

// Альтернативная, более простая реализация:
function getKeyByValue2<T extends object, V>(
    obj: T, 
    value: V
): keyof T | undefined {
    for (const key in obj) {
        if (obj[key as keyof T] === value) {
            return key as keyof T;
        }
    }
    return undefined;
}

// Примеры использования:

interface IEmployee {
    name: string;
    salary: number;
    isManager: boolean;
}

const employee: IEmployee = {
    name: "Иван Петров",
    salary: 100000,
    isManager: false
};

// Тестирование функции
const key1 = getKeyByValue(employee, "Иван Петров"); // key1: "name" | undefined
console.log(key1); // "name"

const key2 = getKeyByValue(employee, 100000); // key2: "salary" | undefined
console.log(key2); // "salary"

const key3 = getKeyByValue(employee, false); // key3: "isManager" | undefined
console.log(key3); // "isManager"

const key4 = getKeyByValue(employee, "Несуществующее значение"); // key4: undefined
console.log(key4); // undefined

// Пример с другим объектом
const car = {
    brand: "Toyota",
    model: "Camry",
    year: 2022
};

const carKey = getKeyByValue(car, "Camry"); // carKey: "brand" | "model" | "year" | undefined
console.log(carKey); // "model"

// Более строгая версия с проверкой типа значения
function getKeyByValueStrict<T extends object>(
    obj: T, 
    value: T[keyof T]
): keyof T | undefined {
    for (const key in obj) {
        if (obj[key] === value) {
            return key;
        }
    }
    return undefined;
}

// Строгая версия обеспечивает, что значение соответствует одному из типов значений объекта
const strictKey = getKeyByValueStrict(employee, "Иван Петров"); 
// const strictKey2 = getKeyByValueStrict(employee, "Неверный тип"); // Ошибка типизации

// Улучшенная версия с поддержкой глубокого сравнения (по необходимости)
function getKeyByValueDeep<T extends object, V>(
    obj: T, 
    value: V,
    deepCompare: boolean = false
): keyof T | undefined {
    if (deepCompare) {
        // Для объектов и массивов используем JSON.stringify для сравнения
        return (Object.keys(obj) as Array<keyof T>).find(key => {
            const objValue = obj[key];
            if (typeof objValue === 'object' && typeof value === 'object') {
                return JSON.stringify(objValue) === JSON.stringify(value);
            }
            return objValue === value;
        });
    }
    
    // Простое сравнение по ссылке/значению
    return (Object.keys(obj) as Array<keyof T>).find(key => 
        obj[key as keyof T] === value
    );
}

// Пример с объектом в значении
const complexObj = {
    config: { theme: "dark", language: "ru" },
    settings: [1, 2, 3]
};

const complexKey = getKeyByValueDeep(complexObj, { theme: "dark", language: "ru" }, true);
console.log(complexKey); // "config"
