# Основы JavaScript — примеры к каждой теме

## Введение
```js
// JavaScript — язык, который выполняется в браузере или в Node.js
console.log("Привет, JavaScript!");
```

## Запуск JavaScript
```js
// Код можно выполнить в консоли браузера (F12 → Console)
alert("Скрипт запущен");
```

## Первая программа на JavaScript
```js
alert("Hello, world!");
```

## Разбор кода программы
```js
alert("Hello, world!");
// alert(...)   — вызов функции
// "Hello, world!" — строка, аргумент функции
// ;            — конец инструкции
```

## Дальнейшие примеры
```js
alert("Первое сообщение");
alert("Второе сообщение");
alert(2 + 2);
```

## Файлы со скриптами
```html
<script src="script.js"></script>
```

## Несколько файлов
```html
<script src="utils.js"></script>
<script src="main.js"></script>
```

## Замечание
```html
<!-- Если подключить один и тот же файл дважды — код выполнится дважды -->
<script src="script.js"></script>
<script src="script.js"></script>
```

## Кеширование файлов
```html
<!-- Чтобы браузер точно подгрузил новую версию файла -->
<script src="script.js?v=2"></script>
```

## Строгий режим
```js
"use strict";
x = 5; // ReferenceError: x is not defined
```

## Комментарии
```js
// Это однострочный комментарий
/* А это
   многострочный комментарий */
alert("Код"); // комментарий в конце строки
```

## Переменные
```js
let name;
name = "Иван";
```

## Использование переменных
```js
let message = "Привет";
alert(message);
```

## Объявление нескольких переменных
```js
let user = "Иван", age = 25, isAdmin = true;
```

## Изменения значений переменных
```js
let message = "Привет";
message = "Пока";
alert(message); // Пока
```

## Несколько let для одной переменной
```js
let message = "Привет";
// let message = "Пока"; // SyntaxError: повторное объявление недопустимо
```

## Математические операции с числами
```js
alert(2 + 3); // 5
alert(10 - 4); // 6
alert(3 * 4); // 12
alert(10 / 2); // 5
```

## Математические операции с переменными
```js
let a = 10;
let b = 3;
alert(a + b); // 13
alert(a * b); // 30
```

## Приоритет математических операций
```js
alert(2 + 3 * 4); // 14, сначала умножение
```

## Равный приоритет
```js
alert(10 - 2 + 3); // 11, слева направо
```

## Группирующие скобки
```js
alert((2 + 3) * 4); // 20
```

## Дроби
```js
alert(1 / 3); // 0.3333333333333333
```

## Отрицательные числа
```js
let temperature = -15;
alert(temperature);
```

## Плюс перед переменными
```js
let x = 5;
alert(+x); // 5, унарный плюс не меняет число
```

## Остаток от деления
```js
alert(5 % 2); // 1
alert(8 % 4); // 0
```

## Возведение в степень
```js
alert(2 ** 3); // 8
```

## Приоритет возведения в степень
```js
alert(2 + 3 ** 2); // 11, сначала возведение в степень
```

## Строки
```js
let str = "Привет";
let str2 = 'Мир';
```

## Сложение строк
```js
let name = "Иван";
let greeting = "Привет, " + name;
alert(greeting); // Привет, Иван
```

## Длина строки
```js
let str = "Привет";
alert(str.length); // 6
```

## Шаблонные строки
```js
let name = "Иван";
let message = `Привет, ${name}!`;
alert(message); // Привет, Иван!
```

## Многострочность
```js
let text = `Строка первая
Строка вторая`;
alert(text);
```

## Специальные значения
```js
let a; // undefined
let b = null; // null
```

## Значение undefined
```js
let user;
alert(user); // undefined
```

## Значение null
```js
let age = null; // означает "значение неизвестно"
```

## Значения true и false
```js
let isDone = true;
let isError = false;
```

## Значение NaN
```js
alert("текст" / 2); // NaN
```

## Infinity и -Infinity
```js
alert(1 / 0); // Infinity
alert(-1 / 0); // -Infinity
```

## Консоль
```js
console.log("Сообщение в консоли");
```

## Тип данных в консоли
```js
console.log(typeof 5); // "number"
console.log(typeof "текст"); // "string"
```

## Ошибки в консоли
```js
console.error("Что-то пошло не так");
```

## Константы
```js
const birthYear = 1990;
// birthYear = 1991; // TypeError: нельзя изменить константу
```

## Автоматическое преобразование типов
```js
alert("5" + 2); // "52", число превращается в строку
```

## Преобразование к числу
```js
let str = "123";
let num = Number(str);
alert(num); // 123
```

## Короткое преобразование к числу
```js
let str = "123";
alert(+str); // 123
```

## Преобразование некорректных чисел
```js
alert(Number("текст")); // NaN
```

## Выделение чисел
```js
alert(Number("  123  ")); // 123, пробелы игнорируются
```

## Преобразование к строке
```js
let num = 123;
let str = String(num);
alert(str); // "123"
```

## Применение преобразования к строке
```js
let value = true;
alert(String(value) + "!"); // "true!"
```

## Преобразование логического типа
```js
alert(Boolean(1)); // true
alert(Boolean(0)); // false
```

## Преобразование к логическому типу
```js
alert(Boolean("")); // false
alert(Boolean("текст")); // true
alert(Boolean(null)); // false
```

## Символы строки
```js
let str = "Привет";
alert(str[0]); // "П"
```

## Неизменяемость строк
```js
let str = "Привет";
str[0] = "Ж"; // не сработает
alert(str); // Привет
```

## Последний символ строки
```js
let str = "Привет";
alert(str[str.length - 1]); // "т"
```

## Строки с цифрами
```js
let code = "12345";
alert(code[0]); // "1"
```

## Обращение к цифрам числа
```js
let num = 12345;
let str = String(num);
alert(str[0]); // "1"
```

## Операции для изменения переменной
```js
let counter = 5;
counter = counter + 1;
alert(counter); // 6
```

## Сокращенные операции в JavaScript
```js
let counter = 5;
counter += 1; // то же самое, что counter = counter + 1
alert(counter); // 6
```

## Инкрементация
```js
let counter = 5;
counter++;
alert(counter); // 6
```

## Префиксный и постфиксный тип
```js
let a = 5;
alert(a++); // 5 (сначала вернёт, потом увеличит)
let b = 5;
alert(++b); // 6 (сначала увеличит, потом вернёт)
```

## Неточные вычисления
```js
alert(0.1 + 0.2); // 0.30000000000000004
```

## Функция prompt
```js
let name = prompt("Как вас зовут?", "");
alert("Привет, " + name);
```

## Проблема с типами в prompt
```js
let age = prompt("Сколько вам лет?", "");
alert(typeof age); // "string", даже если ввели число
```

## Вывод в документ
```js
document.write("Привет, мир!");
```

## Практика на поиск ошибок
```js
// Найдите ошибку:
let x = 10
let y = "5"
alert(x + y) // "105", а не 15 — строка "склеивается"
```

## Практика на операции
```js
let a = 7;
let b = 2;
alert(a % b); // 1
alert(a ** b); // 49
```

## Практика на формулы
```js
// Площадь круга по радиусу
let radius = 5;
let area = Math.PI * radius ** 2;
alert(area.toFixed(2)); // 78.54
```
# Массивы — примеры к каждой теме

## Введение в массивы
```js
let fruits = ["Яблоко", "Груша", "Слива"];
alert(fruits); // Яблоко,Груша,Слива
```

## Получение элементов
```js
let fruits = ["Яблоко", "Груша", "Слива"];
alert(fruits[0]); // Яблоко
alert(fruits[1]); // Груша
```

## Длина массива
```js
let fruits = ["Яблоко", "Груша", "Слива"];
alert(fruits.length); // 3
```

## Изменение элементов
```js
let fruits = ["Яблоко", "Груша", "Слива"];
fruits[1] = "Апельсин";
alert(fruits); // Яблоко,Апельсин,Слива
```

## Перезапись элементов массива
```js
let arr = [1, 2, 3];
arr[0] = 10;
arr[2] = 30;
alert(arr); // 10,2,30
```

## Инкрементация элементов
```js
let counters = [0, 0, 0];
counters[1]++;
alert(counters); // 0,1,0
```

## Добавление элементов по ключам
```js
let arr = [1, 2, 3];
arr[3] = 4;
alert(arr); // 1,2,3,4
```

## Разреженные массивы
```js
let arr = [1, 2, 3];
arr[10] = 100; // получится "дырявый" массив
alert(arr.length); // 11
alert(arr[5]); // undefined
```

## Добавление элементов через push
```js
let fruits = ["Яблоко"];
fruits.push("Груша");
fruits.push("Слива");
alert(fruits); // Яблоко,Груша,Слива
```

## Ключи из переменных
```js
let fruits = ["Яблоко", "Груша", "Слива"];
let index = 1;
alert(fruits[index]); // Груша
```

## Оператор delete
```js
let fruits = ["Яблоко", "Груша", "Слива"];
delete fruits[1];
alert(fruits); // Яблоко,,Слива (элемент стал undefined)
alert(fruits.length); // 3, длина не изменилась
```

## Практика на поиск ошибок
```js
// Найдите ошибку:
let arr = [1, 2, 3];
arr.length = 5; // увеличивает длину, добавляя пустые ячейки
alert(arr[4]); // undefined, а не 3
```
# Объекты — примеры к каждой теме

## Введение в объекты
```js
let user = {
  name: "Иван",
  age: 25
};
```

## Вывод всего объекта
```js
let user = { name: "Иван", age: 25 };
console.log(user); // {name: "Иван", age: 25}
```

## Строковые ключи объектов
```js
let user = {
  "полное имя": "Иван Иванов"
};
alert(user["полное имя"]); // Иван Иванов
```

## Свойства объектов
```js
let user = { name: "Иван", age: 25 };
alert(user.name); // Иван
alert(user.age); // 25
```

## Ограничения на ключи объектов
```js
let obj = {
  for: 1,     // "for" — зарезервированное слово, но как ключ можно
  "my key": 2
};
alert(obj.for); // 1
```

## Изменение элементов
```js
let user = { name: "Иван" };
user.name = "Пётр";
alert(user.name); // Пётр
```

## Добавление элементов
```js
let user = { name: "Иван" };
user.age = 25;
alert(user.age); // 25
```

## Неупорядоченность объектов
```js
let codes = { "49": "Германия", "1": "США", "44": "Британия" };
for (let code in codes) alert(code); // числовые ключи выводятся по возрастанию
```

## Массив ключей объекта
```js
let user = { name: "Иван", age: 25 };
alert(Object.keys(user)); // name,age
```

## Длина объекта
```js
let user = { name: "Иван", age: 25 };
alert(Object.keys(user).length); // 2
```

## Ключи из переменных
```js
let key = "name";
let user = { [key]: "Иван" };
alert(user.name); // Иван
```

## Ошибка обращения к элементу
```js
let arr = [1, 2, 3];
alert(arr[10]); // undefined, ошибки нет
```

## Ошибка обращения к свойству
```js
let user = { name: "Иван" };
alert(user.age); // undefined, ошибки нет
```

## Вычисляемые свойства
```js
let fruit = "apple";
let bag = {
  [fruit]: 5
};
alert(bag.apple); // 5
```

## Оператор in
```js
let user = { name: "Иван" };
alert("name" in user); // true
alert("age" in user); // false
```

## Оператор delete
```js
let user = { name: "Иван", age: 25 };
delete user.age;
alert(user); // {name: "Иван"}
```

## Типизация объектов
```js
let user = {};
alert(typeof user); // "object"
```

## Массивы как объекты
```js
let arr = [1, 2, 3];
alert(typeof arr); // "object", массив — тоже объект
```

## Отличаем массивы от объектов
```js
let arr = [1, 2, 3];
alert(Array.isArray(arr)); // true
alert(Array.isArray({})); // false
```

## Объекты и примитивы
```js
let a = 5;
let b = a; // копия значения
let obj1 = { x: 5 };
let obj2 = obj1; // ссылка на тот же объект
```

## Передача объектов по ссылке
```js
let user = { name: "Иван" };
let admin = user;
admin.name = "Пётр";
alert(user.name); // Пётр, изменился и user
```

## Константы
```js
const user = { name: "Иван" };
user.name = "Пётр"; // разрешено, меняем содержимое, а не саму константу
alert(user.name); // Пётр
```

## Подход программирования через константы
```js
const user = { name: "Иван" };
// user = {}; // TypeError: нельзя переприсвоить константу
user.age = 25; // а содержимое менять можно
```

## Практика на поиск ошибок
```js
// Найдите ошибку:
let user = { name: "Иван" };
alert(user.Name); // undefined — регистр важен, надо user.name
```

# Условия — примеры к каждой теме

## Конструкция if-else
js
let age = 20;
if (age >= 18) {
  alert("Взрослый");
} else {
  alert("Ребёнок");
}
```

## Операторы больше и меньше
```js
alert(5 > 3); // true
alert(5 < 3); // false
```

## Проверка на равенство
```js
alert(5 == 5); // true
alert("5" == 5); // true
```

## Проверка на неравенство
```js
alert(5 != 3); // true
```

## Сравнение переменных
```js
let a = 5, b = 10;
alert(a < b); // true
```

## Равенство строк
```js
alert("яблоко" == "яблоко"); // true
```

## Равенство строк и чисел
```js
alert("5" == 5); // true, приводится к числу
```

## Равенство по значению и типу
```js
alert(5 === "5"); // false, типы разные
alert(5 === 5); // true
```

## Неравенство по значению и типу
```js
alert(5 !== "5"); // true
```

## Логическое И
```js
alert(true && true); // true
alert(true && false); // false
```

## Логическое ИЛИ
```js
alert(true || false); // true
alert(false || false); // false
```

## Приоритет логических операторов
```js
alert(true || false && false); // true, && выполнится раньше ||
```

## Группировка условий
```js
let age = 20, hasLicense = true;
if ((age >= 18) && hasLicense) alert("Можно водить");
```

## Инвертирование логических выражений
```js
let isLoggedIn = false;
if (!isLoggedIn) alert("Нужно войти");
```

## Условия с булевыми значениями
```js
let isDone = true;
if (isDone) alert("Готово");
```

## Сравнение значений с булевым типом
```js
alert(1 == true); // true
alert(0 == false); // true
```

## Сокращенная форма проверки на истину
```js
let name = "Иван";
if (name) alert("Имя задано");
```

## Сокращенная форма проверки на ложь
```js
let name = "";
if (!name) alert("Имя не задано");
```

## Общая сокращенная форма проверки
```js
let value = 0;
if (value) {
  alert("Есть значение");
} else {
  alert("Значения нет"); // сработает, 0 — ложно
}
```

## Сложные условия в сокращенной форме
```js
let user = "Иван", age = 20;
if (user && age >= 18) alert("Доступ разрешён");
```

## Необязательность конструкции else
```js
let age = 20;
if (age >= 18) alert("Взрослый");
```

## Необязательность фигурных скобок
```js
let age = 20;
if (age >= 18) alert("Взрослый");
```

## Проблема необязательности скобок
```js
let age = 20;
if (age >= 18)
  alert("Взрослый");
  alert("Это выполнится всегда!"); // не относится к if
```

## Конструкция else if
```js
let age = 15;
if (age >= 18) {
  alert("Взрослый");
} else if (age >= 13) {
  alert("Подросток");
} else {
  alert("Ребёнок");
}
```

## Вложенные конструкции if-else
```js
let age = 20, hasLicense = true;
if (age >= 18) {
  if (hasLicense) {
    alert("Можно водить");
  } else {
    alert("Нужны права");
  }
}
```

## Конструкция switch-case
```js
let day = 3;
switch (day) {
  case 1: alert("Понедельник"); break;
  case 2: alert("Вторник"); break;
  case 3: alert("Среда"); break;
  default: alert("Другой день");
}
```

## Необязательность break
```js
let day = 1;
switch (day) {
  case 1:
  case 2:
    alert("Начало недели");
    break;
  default:
    alert("Другое");
}
```

## Тернарный оператор
```js
let age = 20;
let status = age >= 18 ? "Взрослый" : "Ребёнок";
alert(status);
```

## Логические операции
```js
let result = (5 > 3) && (2 < 4);
alert(result); // true
```

## Функция confirm
```js
let result = confirm("Вы уверены?");
alert(result); // true или false
```

## Область видимости
```js
if (true) {
  let message = "Привет";
  alert(message); // доступна внутри блока
}
// alert(message); // ReferenceError за пределами блока
```

## Нюансы области видимости
```js
let x = 1;
if (true) {
  let x = 2;
  alert(x); // 2
}
alert(x); // 1
```

## Проверка частей часа
```js
let hour = 14;
if (hour >= 6 && hour < 12) alert("Утро");
else if (hour >= 12 && hour < 18) alert("День");
else alert("Вечер/ночь");
```

## Проверка длины строк и массивов
```js
let arr = [1, 2, 3];
if (arr.length > 0) alert("Массив не пуст");
```

## Проверка символов строки
```js
let str = "abc";
if (str[0] === "a") alert("Начинается с a");
```

## Проверка цифр числа
```js
let num = 25;
if (num % 10 === 5) alert("Оканчивается на 5");
```

## Проверка остатка от деления
```js
let num = 10;
if (num % 2 === 0) alert("Чётное число");
```

## Практика на поиск ошибок
```js
// Найдите ошибку:
let age = 17;
if (age = 18) { // должно быть ==, присваивание вместо сравнения
  alert("Совершеннолетний");
}
```

## Практика
```js
let a = 7, b = 12;
let max = a > b ? a : b;
alert(max); // 12
```

# Циклы — примеры к каждой теме

## Введение
```js
for (let i = 0; i < 3; i++) {
  alert(i);
}
```

## Цикл for-of
```js
let fruits = ["Яблоко", "Груша"];
for (let fruit of fruits) {
  alert(fruit);
}
```

## Цикл for-in
```js
let user = { name: "Иван", age: 25 };
for (let key in user) {
  alert(key + ": " + user[key]);
}
```

## Цикл while
```js
let i = 0;
while (i < 3) {
  alert(i);
  i++;
}
```

## Цикл for
```js
for (let i = 0; i < 5; i++) {
  alert(i);
}
```

## Цикл for для массивов
```js
let arr = [10, 20, 30];
for (let i = 0; i < arr.length; i++) {
  alert(arr[i]);
}
```

## Условия в циклах
```js
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) alert(i); // только чётные
}
```

## Накопление суммы чисел
```js
let sum = 0;
for (let i = 1; i <= 5; i++) {
  sum += i;
}
alert(sum); // 15
```

## Накопление суммы элементов
```js
let arr = [1, 2, 3, 4];
let sum = 0;
for (let num of arr) {
  sum += num;
}
alert(sum); // 10
```

## Формирование строк
```js
let result = "";
for (let i = 1; i <= 3; i++) {
  result += i + " ";
}
alert(result); // "1 2 3 "
```

## Цифры числа
```js
let num = 12345;
let str = String(num);
for (let digit of str) {
  alert(digit);
}
```

## Необязательность фигурных скобок
```js
for (let i = 0; i < 3; i++) alert(i);
```

## Проблема необязательности скобок
```js
for (let i = 0; i < 3; i++)
  alert(i);
  alert("Это выполнится один раз после цикла");
```

## Инструкция break
```js
for (let i = 0; i < 10; i++) {
  if (i === 5) break;
  alert(i);
}
```

## Инструкция continue
```js
for (let i = 0; i < 5; i++) {
  if (i === 2) continue;
  alert(i); // 0,1,3,4
}
```

## Вложенные циклы
```js
for (let i = 1; i <= 2; i++) {
  for (let j = 1; j <= 2; j++) {
    alert(`${i}-${j}`);
  }
}
```

## Область видимости задача
```js
for (let i = 0; i < 3; i++) {
  let square = i * i;
  alert(square);
}
```

## Вложенные циклы и область видимости задачи
```js
for (let i = 0; i < 2; i++) {
  for (let j = 0; j < 2; j++) {
    let pair = [i, j];
    alert(pair);
  }
}
```

## Заполнение массивов
```js
let arr = [];
for (let i = 1; i <= 5; i++) {
  arr.push(i * i);
}
alert(arr); // 1,4,9,16,25
```

## Изменение массивов
```js
let arr = [1, 2, 3];
for (let i = 0; i < arr.length; i++) {
  arr[i] *= 10;
}
alert(arr); // 10,20,30
```

## Заполнение объектов
```js
let user = {};
let fields = ["name", "age"];
let values = ["Иван", 25];
for (let i = 0; i < fields.length; i++) {
  user[fields[i]] = values[i];
}
alert(JSON.stringify(user));
```

## Изменение объектов
```js
let prices = { apple: 10, pear: 20 };
for (let key in prices) {
  prices[key] *= 2;
}
alert(JSON.stringify(prices));
```

## Работа с флагами
```js
let found = false;
let arr = [1, 2, 3];
for (let num of arr) {
  if (num === 2) {
    found = true;
    break;
  }
}
alert(found); // true
```

## Советы по написанию кода
```js
// Используйте понятные имена переменных цикла
for (let index = 0; index < arr.length; index++) { }
```

## Советы по отладке кода
```js
for (let i = 0; i < 3; i++) {
  console.log("i =", i); // выводим значение на каждой итерации для отладки
}
```

## Практика на поиск ошибок
```js
// Найдите ошибку:
for (let i = 0; i <= 5; i++) {} // <= выполнит на одну итерацию больше, чем <
```

## Практика
```js
// Вывести все чётные числа от 1 до 10
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) alert(i);
}
```

# Многомерность — примеры к каждой теме

## Многомерные массивы
```js
let matrix = [[1, 2], [3, 4]];
alert(matrix[0][1]); // 2
```

## Трехмерный массив
```js
let cube = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
alert(cube[1][0][1]); // 6
```

## Произвольные массивы
```js
let arr = [1, "текст", [2, 3], { name: "Иван" }];
alert(arr[2][1]); // 3
```

## Перебор многомерных массивов
```js
let matrix = [[1, 2], [3, 4]];
for (let row of matrix) {
  for (let num of row) {
    alert(num);
  }
}
```

## Перебор через обычный for
```js
let matrix = [[1, 2], [3, 4]];
for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    alert(matrix[i][j]);
  }
}
```

## Заполнение многомерных массивов
```js
let matrix = [];
for (let i = 0; i < 2; i++) {
  matrix.push([]);
  for (let j = 0; j < 2; j++) {
    matrix[i].push(i + j);
  }
}
alert(JSON.stringify(matrix)); // [[0,1],[1,2]]
```

## Проблемы при заполнении многомерных массивов
```js
// Ошибка: одна и та же вложенная ссылка для всех строк
let row = [0, 0];
let matrix = [row, row, row];
matrix[0][0] = 5;
alert(matrix[1][0]); // 5 — изменились все строки!
```

## Заполнение многомерных массивов по порядку
```js
let matrix = [];
for (let i = 0; i < 3; i++) {
  matrix[i] = [];
  for (let j = 0; j < 3; j++) {
    matrix[i][j] = i * 3 + j;
  }
}
```

## Многомерные объекты
```js
let company = {
  name: "ООО Ромашка",
  address: { city: "Москва", street: "Ленина" }
};
alert(company.address.city); // Москва
```

## Перебор многомерных объектов
```js
let user = { name: "Иван", address: { city: "Москва" } };
for (let key in user.address) {
  alert(key + ": " + user.address[key]);
}
```

## Многомерные структуры
```js
let data = {
  users: [
    { name: "Иван", age: 25 },
    { name: "Пётр", age: 30 }
  ]
};
alert(data.users[0].name); // Иван
```

## Перебор многомерных структур
```js
let data = { users: [{ name: "Иван" }, { name: "Пётр" }] };
for (let user of data.users) {
  alert(user.name);
}
```

## Массив объектов
```js
let users = [
  { name: "Иван", age: 25 },
  { name: "Пётр", age: 30 }
];
for (let user of users) {
  alert(`${user.name}, ${user.age}`);
}
```

## Ключи из переменных
```js
let data = { users: [{ name: "Иван" }] };
let key = "users";
alert(data[key][0].name); // Иван
```

## Добавление элементов в массивы
```js
let matrix = [[1, 2]];
matrix.push([3, 4]);
alert(JSON.stringify(matrix)); // [[1,2],[3,4]]
```

## Добавление элементов в объекты
```js
let company = { name: "Ромашка" };
company.employees = [{ name: "Иван" }];
alert(company.employees[0].name); // Иван
```

# Стандартные методы — примеры к каждой теме

## Степени
```js
alert(Math.pow(2, 3)); // 8
```

## Функции округления
```js
alert(Math.round(4.5)); // 5
alert(Math.floor(4.9)); // 4
alert(Math.ceil(4.1)); // 5
```

## Экстремумы
```js
alert(Math.max(1, 5, 3)); // 5
alert(Math.min(1, 5, 3)); // 1
```

## Рандом
```js
alert(Math.random()); // случайное число от 0 до 1
alert(Math.floor(Math.random() * 10)); // случайное целое 0-9
```

## Модули
```js
alert(Math.abs(-5)); // 5
```

## Регистр символов
```js
let str = "Привет";
alert(str.toUpperCase()); // ПРИВЕТ
alert(str.toLowerCase()); // привет
```

## Вырезание строк
```js
let str = "Привет мир";
alert(str.slice(0, 6)); // "Привет"
```

## Поиск по строкам
```js
let str = "Привет мир";
alert(str.indexOf("мир")); // 7
alert(str.includes("мир")); // true
```

## Замена в строках
```js
let str = "Привет мир";
alert(str.replace("мир", "Земля")); // Привет Земля
```

## Разбиение строк
```js
let str = "яблоко,груша,слива";
let arr = str.split(",");
alert(arr); // яблоко,груша,слива (массив)
```

## Концевые элементы
```js
let arr = [1, 2, 3, 4];
alert(arr.at(-1)); // 4, последний элемент
```

## Части массивов
```js
let arr = [1, 2, 3, 4, 5];
alert(arr.slice(1, 3)); // 2,3
```

## Вырезание массивов
```js
let arr = [1, 2, 3, 4, 5];
arr.splice(1, 2); // удаляет 2 элемента начиная с индекса 1
alert(arr); // 1,4,5
```

## Поиск по массивам
```js
let arr = [1, 2, 3];
alert(arr.indexOf(2)); // 1
alert(arr.includes(5)); // false
```

## Ключи объектов
```js
let user = { name: "Иван", age: 25 };
alert(Object.keys(user)); // name,age
alert(Object.values(user)); // Иван,25
```

## Практика на поиск ошибок
```js
// Найдите ошибку:
let str = "Привет";
str.toUpperCase(); // строки неизменяемы, нужно: str = str.toUpperCase();
alert(str); // всё ещё "Привет"
```

# Пользовательские функции — примеры к каждой теме

## Введение
```js
function sayHi() {
  alert("Привет!");
}
sayHi();
```

## Параметры функции
```js
function sayHi(name) {
  alert("Привет, " + name);
}
sayHi("Иван");
```

## Несколько параметров
```js
function sum(a, b) {
  alert(a + b);
}
sum(2, 3); // 5
```

## Параметры-переменные
```js
let x = 5, y = 10;
function sum(a, b) {
  alert(a + b);
}
sum(x, y); // 15
```

## Необязательные параметры
```js
function greet(name = "Гость") {
  alert("Привет, " + name);
}
greet(); // Привет, Гость
```

## Инструкция return
```js
function sum(a, b) {
  return a + b;
}
alert(sum(2, 3)); // 5
```

## Последовательный вызов функций
```js
function double(x) { return x * 2; }
function triple(x) { return x * 3; }
alert(triple(double(2))); // 12
```

## Toнкое место return
```js
function getValue() {
  return
    5; // undefined! перенос строки после return завершает инструкцию
}
alert(getValue()); // undefined
```

## Цикл и return
```js
function findFirstEven(arr) {
  for (let num of arr) {
    if (num % 2 === 0) return num;
  }
}
alert(findFirstEven([1, 3, 4, 5])); // 4
```

## Применение return в циклах
```js
function hasNegative(arr) {
  for (let num of arr) {
    if (num < 0) return true;
  }
  return false;
}
alert(hasNegative([1, -2, 3])); // true
```

## Прием работы с return
```js
function isAdult(age) {
  if (age < 18) return false;
  return true;
}
alert(isAdult(20)); // true
```

## Флаги в функциях
```js
function checkNumbers(arr) {
  let allPositive = true;
  for (let num of arr) {
    if (num < 0) allPositive = false;
  }
  return allPositive;
}
alert(checkNumbers([1, 2, 3])); // true
```

## Логические операторы в функциях
```js
function canVote(age, isCitizen) {
  return age >= 18 && isCitizen;
}
alert(canVote(20, true)); // true
```

## Советы по функциям поработать еще
```js
// Функция должна делать одну вещь и иметь понятное имя
function calculateTotalPrice(price, quantity) {
  return price * quantity;
}
```

## Практика на поиск ошибок
```js
// Найдите ошибку:
function sum(a, b) {
  a + b; // забыли return
}
alert(sum(2, 3)); // undefined
```

## Практика на функции
```js
function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}
alert(isPrime(7)); // true
```

# Переменные функций — примеры к каждой теме

## Глобальные переменные
```js
let message = "Привет";
function showMessage() {
  alert(message); // доступна внутри функции
}
showMessage();
```

## Локальные переменные
```js
function showMessage() {
  let message = "Привет";
  alert(message);
}
showMessage();
// alert(message); // ReferenceError, вне функции недоступна
```

## Совпадение имен переменных
```js
let name = "Глобальный";
function show() {
  let name = "Локальный";
  alert(name); // Локальный
}
show();
alert(name); // Глобальный
```

## Изменение глобальных переменных
```js
let counter = 0;
function increment() {
  counter++;
}
increment();
alert(counter); // 1
```

## Глобальные переменные и параметры функций
```js
let step = 5;
function move(x) {
  return x + step;
}
alert(move(10)); // 15
```

## Совпадение имен с параметрами
```js
let value = 100;
function show(value) {
  alert(value); // берётся параметр, а не глобальная переменная
}
show(5); // 5
```

## Параметры-объекты
```js
function updateUser(user) {
  user.age++; // объекты передаются по ссылке
}
let user = { name: "Иван", age: 25 };
updateUser(user);
alert(user.age); // 26
```

# Типы функций — примеры к каждой теме

## Исходный код функции и результат
```js
function sum(a, b) { return a + b; }
alert(sum); // выводит исходный код функции
alert(sum(2, 3)); // 5, результат вызова
```

## Функция как переменная
```js
function sayHi() { alert("Привет"); }
let func = sayHi;
func(); // Привет
```

## Запись функции в другую переменную
```js
function greet() { alert("Привет"); }
let hello = greet;
hello();
```

## Присваивание функций в переменные
```js
let sayHi = function () {
  alert("Привет");
};
sayHi();
```

## Совпадение имени функции и переменной
```js
let sayHi = function sayHi() {
  alert("Привет");
};
sayHi();
```

## Типы объявлений
```js
function a() {} // Function Declaration
let b = function () {}; // Function Expression
```

## Разница объявлений функции
```js
sayHi(); // работает, Declaration поднимается наверх
function sayHi() { alert("Привет"); }

// sayBye(); // ошибка, Expression не поднимается
let sayBye = function () { alert("Пока"); };
```

## Toчка с запятой при объявлении функций
```js
let sayHi = function () {
  alert("Привет");
}; // точка с запятой нужна после Function Expression
```

## Нюансы функциональных выражений
```js
let func = function () {
  alert("Аноним");
};
func();
```

## Функция с именем, но Function Expression
```js
let func = function myName() {
  alert("Есть имя, но это Expression");
};
func();
```

## Именованные функциональные выражения
```js
let sayHi = function func(who) {
  if (who) {
    alert(`Привет, ${who}`);
  } else {
    func("Гость"); // можно вызвать себя по внутреннему имени
  }
};
sayHi();
```

## Как проверить тип функции
```js
function a() {} // Declaration: доступна до объявления
console.log(typeof a); // "function"
```

## Выражение слева
```js
let func = function () {
  alert("Function Expression, т.к. справа от =");
};
```

## Выражение справа
```js
(function () {
  alert("IIFE, тоже Expression");
})();
```

## Массив с функциями
```js
let actions = [
  function () { alert("Первое"); },
  function () { alert("Второе"); }
];
actions[0]();
```

## Объект с функциями
```js
let calculator = {
  sum: function (a, b) { return a + b; },
  mul: function (a, b) { return a * b; }
};
alert(calculator.sum(2, 3)); // 5
```

## Применение объекта с функциями
```js
let user = {
  name: "Иван",
  sayHi: function () {
    alert("Привет, я " + this.name);
  }
};
user.sayHi();
```

# Вложенные функции — примеры к каждой теме

## Передача функций параметрами
```js
function greet(name) { alert("Привет, " + name); }
function run(func, value) { func(value); }
run(greet, "Иван");
```

## Именованные функции
```js
function double(x) { return x * 2; }
function apply(func, value) { return func(value); }
alert(apply(double, 5)); // 10
```

## Параметры передаваемых функций
```js
function sum(a, b) { return a + b; }
function calc(func, a, b) { return func(a, b); }
alert(calc(sum, 2, 3)); // 5
```

## Передача числа параметром
```js
function multiplyBy(func, num) { return func(num); }
alert(multiplyBy(x => x * 10, 5)); // 50
```

## Применение
```js
let arr = [1, 2, 3];
let doubled = arr.map(function (x) { return x * 2; });
alert(doubled); // 2,4,6
```

## Внутренние функции
```js
function outer() {
  function inner() {
    alert("Внутренняя функция");
  }
  inner();
}
outer();
```

## Область видимости вложенных функций
```js
function outer() {
  let value = 10;
  function inner() {
    alert(value); // видит переменную внешней функции
  }
  inner();
}
outer();
```

## Параметры внешней функции
```js
function outer(x) {
  function inner() {
    alert(x); // доступен параметр внешней функции
  }
  inner();
}
outer(5);
```

## Параметры внешней и внутренней функций
```js
function outer(x) {
  function inner(y) {
    alert(x + y);
  }
  inner(10);
}
outer(5); // 15
```

## Одноименные параметры
```js
function outer(value) {
  function inner(value) {
    alert(value); // берётся параметр inner
  }
  inner(100);
}
outer(1); // 100
```

## Функция, возвращающая функцию
```js
function makeGreeter() {
  return function () {
    alert("Привет!");
  };
}
let greet = makeGreeter();
greet();
```

## Любой уровень вложенности
```js
function a() {
  function b() {
    function c() {
      alert("Три уровня вложенности");
    }
    c();
  }
  b();
}
a();
```

## Параметры возвращаемой функции
```js
function makeMultiplier(factor) {
  return function (x) {
    return x * factor;
  };
}
let double = makeMultiplier(2);
alert(double(5)); // 10
```

## Функции-коллбэки
```js
function process(arr, callback) {
  for (let item of arr) {
    callback(item);
  }
}
process([1, 2, 3], num => alert(num));
```

## Нюансы коллбэков
```js
setTimeout(function () {
  alert("Выполнится через секунду");
}, 1000);
```

## Стрелочные функции
```js
let sum = (a, b) => a + b;
alert(sum(2, 3)); // 5
```

## Применение стрелочных функций синх. с переводом
```js
let arr = [1, 2, 3];
let doubled = arr.map(x => x * 2);
alert(doubled); // 2,4,6
```

# Замыкания — примеры к каждой теме

## Доступ к внешним переменным
```js
let outerVar = "снаружи";
function show() {
  alert(outerVar);
}
show();
```

## Лексическое окружение функций
```js
function outer() {
  let x = 10;
  function inner() {
    alert(x); // "помнит" лексическое окружение
  }
  return inner;
}
outer()();
```

## Применение лексического окружения
```js
function makeCounter() {
  let count = 0;
  return function () {
    return ++count;
  };
}
let counter = makeCounter();
alert(counter()); // 1
alert(counter()); // 2
```

## Введение в замыкания
```js
function makeAdder(x) {
  return function (y) {
    return x + y;
  };
}
let add5 = makeAdder(5);
alert(add5(3)); // 8
```

## Счетчик на замыканиях
```js
function makeCounter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}
let counter = makeCounter();
alert(counter()); // 1
alert(counter()); // 2
```

## Нюанс локальная переменная
```js
function makeCounter() {
  let count = 0; // приватная переменная, недоступна снаружи
  return () => ++count;
}
let counter = makeCounter();
alert(counter()); // 1
```

## Нюанс глобальная переменная
```js
let count = 0;
function increment() {
  count++; // все вызовы делят одну и ту же глобальную переменную
}
increment();
increment();
alert(count); // 2
```

# IIFE — примеры к каждой теме

## Вызов функции на месте
```js
(function () {
  alert("Выполнилось сразу");
})();
```

## Присваивание функции в переменную
```js
let result = (function () {
  return 42;
})();
alert(result); // 42
```

## Применение вызова функции на месте
```js
(function () {
  let secret = "скрыто";
  alert(secret);
})();
// secret недоступна снаружи
```

## Круглые скобки
```js
(function () {
  alert("Обёрнуто скобками, чтобы стать выражением");
})();
```

## Параметры
```js
(function (name) {
  alert("Привет, " + name);
})("Иван");
```

## Множественные вызовы
```js
(function () { alert("Первый"); })();
(function () { alert("Второй"); })();
```

## Подводные камни
```js
// Без точки с запятой перед IIFE возможна ошибка склейки строк
let x = 5
;(function () { alert("Безопасно"); })();
```

## Toчка с запятой для безопасности
```js
let a = 1;
(function () {
  alert("IIFE после точки с запятой");
})();
```

## Замыкания и IIFE
```js
let counter = (function () {
  let count = 0;
  return function () {
    return ++count;
  };
})();
alert(counter()); // 1
alert(counter()); // 2
```

# Рекурсия — примеры к каждой теме

## Введение
```js
function countdown(n) {
  if (n <= 0) {
    alert("Старт!");
    return;
  }
  alert(n);
  countdown(n - 1);
}
countdown(3);
```

## Пример с параметром
```js
function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}
alert(factorial(5)); // 120
```

## Сумма элементов массива при рекурсии
```js
function sumArray(arr, i = 0) {
  if (i >= arr.length) return 0;
  return arr[i] + sumArray(arr, i + 1);
}
alert(sumArray([1, 2, 3, 4])); // 10
```

## Многомерные структуры
```js
function sumDeep(arr) {
  let sum = 0;
  for (let item of arr) {
    if (Array.isArray(item)) {
      sum += sumDeep(item);
    } else {
      sum += item;
    }
  }
  return sum;
}
alert(sumDeep([1, [2, 3], [4, [5, 6]]])); // 21
```

## Сумма элементов массива
```js
function sum(arr) {
  if (arr.length === 0) return 0;
  return arr[0] + sum(arr.slice(1));
}
alert(sum([1, 2, 3])); // 6
```

## Манипуляции со структурами
```js
function flatten(arr) {
  let result = [];
  for (let item of arr) {
    if (Array.isArray(item)) {
      result = result.concat(flatten(item));
    } else {
      result.push(item);
    }
  }
  return result;
}
alert(flatten([1, [2, [3, 4]], 5])); // 1,2,3,4,5
```

# Перебирающие методы — примеры к каждой теме

## Метод map
```js
let arr = [1, 2, 3];
let doubled = arr.map(x => x * 2);
alert(doubled); // 2,4,6
```

## Метод forEach
```js
let arr = [1, 2, 3];
arr.forEach(x => alert(x));
```

## Метод filter
```js
let arr = [1, 2, 3, 4, 5];
let even = arr.filter(x => x % 2 === 0);
alert(even); // 2,4
```

## Метод every
```js
let arr = [2, 4, 6];
alert(arr.every(x => x % 2 === 0)); // true
```

## Метод some
```js
let arr = [1, 3, 4];
alert(arr.some(x => x % 2 === 0)); // true
```

## Метод find
```js
let arr = [1, 2, 3, 4];
let found = arr.find(x => x > 2);
alert(found); // 3
```

## Метод reduce
```js
let arr = [1, 2, 3, 4];
let sum = arr.reduce((acc, x) => acc + x, 0);
alert(sum); // 10
```

# Оператор spread — примеры к каждой теме

## Введение
```js
let arr = [1, 2, 3];
alert(Math.max(...arr)); // 3
```

## Более сложные примеры
```js
function sum(a, b, c) { return a + b + c; }
let nums = [1, 2, 3];
alert(sum(...nums)); // 6
```

## Экстремальные значения массива
```js
let arr = [5, 1, 8, 3];
alert(Math.max(...arr)); // 8
alert(Math.min(...arr)); // 1
```

## Слияние массивов
```js
let arr1 = [1, 2];
let arr2 = [3, 4];
let merged = [...arr1, ...arr2];
alert(merged); // 1,2,3,4
```

## Разбиение строк
```js
let str = "Привет";
let letters = [...str];
alert(letters); // П,р,и,в,е,т
```

## Разбиение чисел
```js
let num = 12345;
let digits = [...String(num)].map(Number);
alert(digits); // 1,2,3,4,5
```

# Оператор rest — примеры к каждой теме

## Оператор rest задачи
```js
function sum(...nums) {
  return nums.reduce((a, b) => a + b, 0);
}
alert(sum(1, 2, 3, 4)); // 10
```

## Сумма цифр
```js
function sumDigits(...digits) {
  return digits.reduce((a, b) => a + b, 0);
}
alert(sumDigits(1, 2, 3)); // 6
```

## Массивы в двухмерный
```js
function group(...items) {
  return items.map(x => [x]);
}
alert(JSON.stringify(group(1, 2, 3))); // [[1],[2],[3]]
```

## Массивы в один
```js
function toArray(...args) {
  return args;
}
alert(toArray(1, 2, 3)); // 1,2,3
```

# Деструктуризация — примеры к каждой теме

## Деструктуризация массивов
```js
let [a, b] = [1, 2];
alert(a); // 1
alert(b); // 2
```

## Массив из функции
```js
function getCoords() { return [10, 20]; }
let [x, y] = getCoords();
alert(x + ", " + y); // 10, 20
```

## Пропуск элементов массива
```js
let [first, , third] = [1, 2, 3];
alert(first + ", " + third); // 1, 3
```

## Лишние значения массива
```js
let [a, b] = [1, 2, 3, 4];
alert(a + ", " + b); // 1, 2
```

## Остаток массива
```js
let [first, ...rest] = [1, 2, 3, 4];
alert(first); // 1
alert(rest); // 2,3,4
```

## Значения по умолчанию для массивов
```js
let [a = 10, b = 20] = [1];
alert(a + ", " + b); // 1, 20
```

## Функции по умолчанию для массивов
```js
let [a = prompt("a?"), b = 5] = [1];
alert(a + ", " + b);
```

## Объявление переменных для массивов
```js
let x, y;
[x, y] = [5, 10];
alert(x + ", " + y); // 5, 10
```

## Деструктуризация объектов
```js
let user = { name: "Иван", age: 25 };
let { name, age } = user;
alert(name + ", " + age); // Иван, 25
```

## Имена переменных для объектов
```js
let user = { name: "Иван" };
let { name: userName } = user;
alert(userName); // Иван
```

## Значения по умолчанию для объектов
```js
let user = { name: "Иван" };
let { name, age = 18 } = user;
alert(age); // 18
```

## Переменные и значения по умолчанию для объектов
```js
let user = { name: "Иван" };
let { name: userName = "Гость", age: userAge = 18 } = user;
alert(userName + ", " + userAge);
```

## Объявление переменных для объектов
```js
let name, age;
({ name, age } = { name: "Иван", age: 25 });
alert(name + ", " + age);
```

## Параметры функций
```js
function showUser({ name, age }) {
  alert(name + ", " + age);
}
showUser({ name: "Иван", age: 25 });
```

## Деструктуризация oбъектов параметров функций
```js
function showUser({ name = "Гость", age = 0 } = {}) {
  alert(name + ", " + age);
}
showUser(); // Гость, 0
```

# Время — примеры к каждой теме

## Работа с объектом Date
```js
let now = new Date();
alert(now);
```

## Форматирование
```js
let date = new Date(2024, 0, 15);
alert(date.toLocaleDateString()); // формат даты в локали
```

## Смена формата даты
```js
let date = new Date(2024, 0, 15);
alert(`${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`);
```

## Получение дня недели
```js
let date = new Date(2024, 0, 15);
alert(date.getDay()); // 0-6, где 0 - воскресенье
```

## Вывод даты словом
```js
let days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
let date = new Date(2024, 0, 15);
alert(days[date.getDay()]);
```

## Установка времени
```js
let date = new Date();
date.setHours(10, 30, 0);
alert(date);
```

## Формат timestamp
```js
let date = new Date();
alert(date.getTime()); // число миллисекунд с 1970 года
```

## Разность между timestamp
```js
let start = Date.now();
let end = Date.now();
alert(end - start); // разница в миллисекундах
```

## Разность объектов с датами
```js
let date1 = new Date(2024, 0, 1);
let date2 = new Date(2024, 0, 15);
alert((date2 - date1) / (1000 * 60 * 60 * 24)); // 14 дней
```

## Автоматическая корректировка дат
```js
let date = new Date(2024, 0, 32); // 32 января = 1 февраля
alert(date);
```

## Нахождение последнего дня месяца
```js
let lastDay = new Date(2024, 2, 0); // 0-й день марта = последний день февраля
alert(lastDay.getDate()); // 29 (2024 - високосный)
```

## Определение високосного года
```js
function isLeapYear(year) {
  return new Date(year, 1, 29).getMonth() === 1;
}
alert(isLeapYear(2024)); // true
```

## Проверка корректности
```js
let date = new Date("некорректная строка");
alert(isNaN(date)); // true
```

## Получение дня текущего года
```js
let date = new Date(2024, 5, 1);
let start = new Date(2024, 0, 1);
let dayOfYear = Math.round((date - start) / (1000 * 60 * 60 * 24));
alert(dayOfYear);
```

## День следующего или предыдущего месяца
```js
let date = new Date(2024, 0, 15);
date.setMonth(date.getMonth() + 1);
alert(date);
```

## День следующего или предыдущего года
```js
let date = new Date(2024, 0, 15);
date.setFullYear(date.getFullYear() + 1);
alert(date);
```

## Разность моментов
```js
let date1 = new Date(2024, 0, 1, 10, 0);
let date2 = new Date(2024, 0, 1, 15, 30);
alert((date2 - date1) / (1000 * 60 * 60)); // 5.5 часа
```

## Момент времени дня
```js
let date = new Date();
alert(`${date.getHours()}:${date.getMinutes()}`);
```

## Начало дня
```js
let date = new Date();
date.setHours(0, 0, 0, 0);
alert(date);
```

## Конец дня
```js
let date = new Date();
date.setHours(23, 59, 59, 999);
alert(date);
```

## Циклическая проверка моментов времени
```js
let hour = new Date().getHours();
if (hour >= 9 && hour < 18) alert("Рабочее время");
```

## Практика на получение моментов времени
```js
let birth = new Date(1990, 4, 20);
let now = new Date();
let age = now.getFullYear() - birth.getFullYear();
alert(age);
```

## Строковое сравнение
```js
alert("2024-01-15" > "2024-01-01"); // true, строки в формате YYYY-MM-DD сравнимы
```

## Сравнение даты без года
```js
let date1 = new Date(2024, 5, 1);
let date2 = new Date(2020, 5, 1);
alert(date1.getMonth() === date2.getMonth() && date1.getDate() === date2.getDate()); // true
```

## Попадание даты в промежуток
```js
let date = new Date(2024, 5, 15);
let start = new Date(2024, 5, 1);
let end = new Date(2024, 5, 30);
alert(date >= start && date <= end); // true
```

## Сравнение объектов с датой
```js
let date1 = new Date(2024, 0, 1);
let date2 = new Date(2024, 0, 1);
alert(date1.getTime() === date2.getTime()); // true, сами объекты не равны напрямую
```

# Введение в DOM — примеры к каждой теме

## Введение
```js
// DOM — объектное представление HTML-документа
console.log(document);
```

## DOM элементы
```html
<div id="box">Текст</div>
<script>
  let box = document.getElementById("box");
</script>
```

## Получение DOM элементов
```js
let box = document.getElementById("box");
alert(box);
```

## Сложные селекторы DOM элемента
```js
let item = document.querySelector(".list .item:first-child");
alert(item);
```

## Привязывание обработчиков
```js
let button = document.querySelector("button");
button.onclick = function () {
  alert("Клик!");
};
```

## Именованные обработчики
```js
function handleClick() {
  alert("Клик!");
}
document.querySelector("button").onclick = handleClick;
```

## Один обработчик к элементам
```js
let buttons = document.querySelectorAll("button");
function handleClick() { alert("Клик"); }
buttons.forEach(btn => btn.onclick = handleClick);
```

## Обработчики одного события
```js
let button = document.querySelector("button");
button.addEventListener("click", () => alert("Первый"));
button.addEventListener("click", () => alert("Второй"));
```

## Обработчики разных событий
```js
let input = document.querySelector("input");
input.addEventListener("focus", () => alert("Фокус"));
input.addEventListener("blur", () => alert("Потерян фокус"));
```

## Текст элемента
```js
let box = document.getElementById("box");
alert(box.textContent);
box.textContent = "Новый текст";
```

## HTML код элемента
```js
let box = document.getElementById("box");
box.innerHTML = "<b>Жирный текст</b>";
```

## Атрибуты тегов как свойства
```js
let link = document.querySelector("a");
alert(link.href);
link.href = "https://example.com";
```

## Работа с текстовыми полями
```js
let input = document.querySelector("input");
alert(input.value);
input.value = "Новое значение";
```

## Фокус текстовых полей
```js
let input = document.querySelector("input");
input.focus();
```

## Атрибуты-исключения
```js
let input = document.querySelector("input");
alert(input.getAttribute("value")); // исходное значение из HTML
```

## Цепочки методов и свойств
```js
document.querySelector("button").style.color = "red";
```

## Преимущества и недостатки цепочек
```js
document
  .querySelector("#box")
  .classList.add("active");
```

## Объект this
```js
let button = document.querySelector("button");
button.onclick = function () {
  alert(this); // ссылается на сам элемент
};
```

## Преимущество this
```js
document.querySelectorAll("button").forEach(btn => {
  btn.onclick = function () {
    alert(this.textContent);
  };
});
```

## Получение группы элементов
```js
let items = document.querySelectorAll(".item");
alert(items.length);
```

## Именованные обработчики в цикле
```js
function handleClick() { alert(this.textContent); }
document.querySelectorAll("li").forEach(li => li.onclick = handleClick);
```

## Анонимные обработчики в цикле
```js
document.querySelectorAll("li").forEach(li => {
  li.onclick = function () { alert(this.textContent); };
});
```

## Отвязывание обработчиков событий
```js
function handleClick() { alert("Клик"); }
let button = document.querySelector("button");
button.addEventListener("click", handleClick);
button.removeEventListener("click", handleClick);
```

## Отвязывание обработчиков в цикле
```js
function handleClick() { alert(this.textContent); }
let items = document.querySelectorAll("li");
items.forEach(li => li.removeEventListener("click", handleClick));
```

## Отвязывание анонимных обработчиков
```js
// Анонимную функцию нельзя удалить — нужна ссылка на неё
let handler = () => alert("Клик");
let button = document.querySelector("button");
button.addEventListener("click", handler);
button.removeEventListener("click", handler);
```

## Советы по написанию кода
```js
// Кешируйте элементы в переменные, а не ищите их повторно
let box = document.getElementById("box");
box.style.color = "red";
box.textContent = "Готово";
```

## Практика на поиск ошибок
```js
// Найдите ошибку:
document.getElementByID("box"); // должно быть getElementById
```

## Практикум
```js
let button = document.querySelector("#toggleBtn");
let box = document.querySelector("#box");
button.onclick = () => box.classList.toggle("hidden");
```

# Атрибуты — примеры к каждой теме

## Метод получения атрибутов
```js
let link = document.querySelector("a");
alert(link.getAttribute("href"));
```

## Метод установки атрибутов
```js
let link = document.querySelector("a");
link.setAttribute("href", "https://example.com");
```

## Метод удаления атрибутов
```js
let input = document.querySelector("input");
input.removeAttribute("disabled");
```

## Метод проверки атрибутов
```js
let input = document.querySelector("input");
alert(input.hasAttribute("disabled"));
```

## Пользовательские атрибуты
```html
<div data-user-id="123"></div>
<script>
  let div = document.querySelector("div");
  alert(div.dataset.userId); // 123
</script>
```

## Имена атрибутов с дефисами
```html
<div data-order-id="55"></div>
<script>
  alert(document.querySelector("div").dataset.orderId); // 55
</script>
```

## Обращение к атрибутам через методы
```js
let div = document.querySelector("div");
div.setAttribute("data-role", "admin");
alert(div.getAttribute("data-role"));
```

## Масссив CSS классов
```js
let box = document.querySelector(".box");
alert(box.classList); // список классов
```

## Добавление CSS классов
```js
let box = document.querySelector(".box");
box.classList.add("active");
```

## Удаление CSS классов
```js
let box = document.querySelector(".box");
box.classList.remove("active");
```

## Проверка CSS классов
```js
let box = document.querySelector(".box");
alert(box.classList.contains("active"));
```

## Toгглинг CSS классов
```js
let box = document.querySelector(".box");
box.classList.toggle("active");
```

# Стилизация — примеры к каждой теме

## Стилизация через атрибут style
```js
let box = document.querySelector(".box");
box.style.color = "red";
box.style.backgroundColor = "yellow";
```

## Стилизация свойств с дефисом
```js
let box = document.querySelector(".box");
box.style.marginTop = "10px"; // camelCase вместо margin-top
```

## Исключение при стилизации элементов
```js
let box = document.querySelector(".box");
box.style.cssFloat = "left"; // "float" — зарезервированное слово
```

## Стилизация через CSS классы
```css
.active { color: red; }
```
```js
document.querySelector(".box").classList.add("active");
```

## Преимущество стилизации с помощью CSS классов
```js
// Логика и стили разделены — CSS правила меняются в одном месте
document.querySelector(".box").classList.toggle("highlight");
```

## Применение cтилизации
```js
let items = document.querySelectorAll(".item");
items.forEach(item => item.style.opacity = "0.5");
```

# Поиск — примеры к каждой теме

## Нахождение потомков элементов
```js
let list = document.querySelector("ul");
let items = list.querySelectorAll("li");
alert(items.length);
```

## Нахождение родителей элементов
```js
let item = document.querySelector("li");
alert(item.parentElement);
```

## Поиск всех родителей элементов
```js
let item = document.querySelector("li");
let parent = item.parentElement;
while (parent) {
  console.log(parent.tagName);
  parent = parent.parentElement;
}
```

## Поиск соседей элементов
```js
let item = document.querySelector("li");
alert(item.nextElementSibling);
alert(item.previousElementSibling);
```

## Поиск элемента по id
```js
let box = document.getElementById("box");
alert(box);
```

## Поиск элемента по имени тега
```js
let paragraphs = document.getElementsByTagName("p");
alert(paragraphs.length);
```

## Поиск элемента по имени класса
```js
let items = document.getElementsByClassName("item");
alert(items.length);
```

## Поиск внутри элемента
```js
let container = document.querySelector(".container");
let button = container.querySelector("button");
alert(button);
```

# Узлы — примеры к каждой теме

## Введение
```js
let box = document.getElementById("box");
alert(box.childNodes); // все узлы, включая текстовые
```

## Перебор узлов циклом
```js
let box = document.getElementById("box");
for (let node of box.childNodes) {
  console.log(node);
}
```

## Название узлов
```js
let box = document.getElementById("box");
alert(box.nodeName); // "DIV"
```

## Тип узлов
```js
let box = document.getElementById("box");
alert(box.nodeType); // 1 — элемент
```

## Текст узлов
```html
<div id="box">Привет</div>
<script>
  let box = document.getElementById("box");
  alert(box.firstChild.nodeValue); // "Привет"
</script>
```

# Формы — примеры к каждой теме

## Работа с текстареа
```js
let textarea = document.querySelector("textarea");
alert(textarea.value);
textarea.value = "Новый текст";
```

## Блокировка элементов
```js
let button = document.querySelector("button");
button.disabled = true;
```

## Работа с чекбоксами
```js
let checkbox = document.querySelector("input[type=checkbox]");
alert(checkbox.checked);
```

## Чередование атрибутов без значений
```js
let checkbox = document.querySelector("input[type=checkbox]");
checkbox.checked = !checkbox.checked;
```

## Работа с радиокнопками
```js
let radios = document.querySelectorAll("input[name=gender]");
radios.forEach(r => {
  if (r.checked) alert(r.value);
});
```

## Событие change
```js
let select = document.querySelector("select");
select.addEventListener("change", () => alert(select.value));
```

## Событие input
```js
let input = document.querySelector("input");
input.addEventListener("input", () => alert(input.value));
```

## Методы focus и blur
```js
let input = document.querySelector("input");
input.addEventListener("focus", () => alert("В фокусе"));
input.addEventListener("blur", () => alert("Фокус потерян"));
```

## Практика на поиск ошибок
```js
// Найдите ошибку:
let checkbox = document.querySelector("input[type=checkbox]");
alert(checkbox.value); // не отражает состояние, нужно checkbox.checked
```

# Выпадающие списки — примеры к каждой теме

## Работа с выпадающими списками
```js
let select = document.querySelector("select");
alert(select.value);
```

## Атрибут value в выпадающих списках
```html
<select>
  <option value="ru">Русский</option>
  <option value="en">Английский</option>
</select>
```

## Изменение выбранного пункта списка
```js
let select = document.querySelector("select");
select.value = "en";
```

## Номер выбранного пункта списка
```js
let select = document.querySelector("select");
alert(select.selectedIndex);
```

## Получение пунктов выпадающего списка
```js
let select = document.querySelector("select");
alert(select.options.length);
```

## Пункты как массив
```js
let select = document.querySelector("select");
let values = [...select.options].map(opt => opt.value);
alert(values);
```

## Работа с пунктами выпадающего списка
```js
let select = document.querySelector("select");
let newOption = new Option("Французский", "fr");
select.append(newOption);
```

## Выбор пункта списка
```js
let select = document.querySelector("select");
select.options[1].selected = true;
```

## Получение выбранного пункта
```js
let select = document.querySelector("select");
let selectedOption = select.options[select.selectedIndex];
alert(selectedOption.text);
```

# Объект Event — примеры к каждой теме

## Основы работы с объектом Event
```js
document.addEventListener("click", function (event) {
  alert(event.type); // "click"
});
```

## Координаты события
```js
document.addEventListener("click", function (event) {
  alert(`${event.clientX}, ${event.clientY}`);
});
```

## Тип события
```js
document.addEventListener("click", event => alert(event.type));
```

## Элемент события
```js
document.addEventListener("click", event => alert(event.target));
```

## Получение нажатых клавиш
```js
document.addEventListener("keydown", event => alert(event.key));
```

## Отслеживание клавиш-модификаторов
```js
document.addEventListener("keydown", event => {
  if (event.ctrlKey) alert("Ctrl зажат");
});
```

## Отмена действия по умолчанию
```js
let link = document.querySelector("a");
link.addEventListener("click", event => {
  event.preventDefault();
  alert("Переход отменён");
});
```

## Всплытие событий
```js
document.querySelector(".child").addEventListener("click", () => alert("child"));
document.querySelector(".parent").addEventListener("click", () => alert("parent"));
// При клике по child сработают оба обработчика
```

## Целевой элемент при всплытии
```js
document.querySelector(".parent").addEventListener("click", event => {
  alert(event.target); // элемент, по которому кликнули
});
```

## Прекращение всплытия событий
```js
document.querySelector(".child").addEventListener("click", event => {
  event.stopPropagation();
});
```

## Несколько обработчиков на элементе
```js
let button = document.querySelector("button");
button.addEventListener("click", () => alert("Первый"));
button.addEventListener("click", () => alert("Второй"));
```

## Немедленное прекращение всплытия
```js
let button = document.querySelector("button");
button.addEventListener("click", event => {
  event.stopImmediatePropagation();
  alert("Только этот обработчик сработает");
});
button.addEventListener("click", () => alert("Этот не выполнится"));
```

## Применение прекращения всплытия событий
```js
document.querySelector(".menu").addEventListener("click", event => {
  event.stopPropagation();
});
```

## Погружение событий
```js
document.querySelector(".parent").addEventListener("click", () => alert("parent capture"), true);
```

## Обработчики на новые элементы
```js
let newButton = document.createElement("button");
newButton.onclick = () => alert("Клик");
document.body.append(newButton);
```

## Делегирование событий
```js
document.querySelector("ul").addEventListener("click", event => {
  if (event.target.tagName === "LI") {
    alert(event.target.textContent);
  }
});
```

## Универсальное делегирование событий
```js
document.addEventListener("click", event => {
  if (event.target.matches("[data-action]")) {
    alert(event.target.dataset.action);
  }
});
```

# Контекст — примеры к каждой теме

## Основы работы с контекстом
```js
let user = {
  name: "Иван",
  sayHi() { alert(this.name); }
};
user.sayHi(); // Иван
```

## Контекст непривязанной функции
```js
function sayHi() { alert(this); }
sayHi(); // this === undefined (в строгом режиме)
```

## Потеря контекста
```js
let user = { name: "Иван", sayHi() { alert(this.name); } };
let func = user.sayHi;
func(); // this потерян, ошибка или undefined
```

## Решение проблемы с контекстом
```js
let user = { name: "Иван", sayHi() { alert(this.name); } };
let func = user.sayHi.bind(user);
func(); // Иван
```

## Решение через переменную
```js
let user = { name: "Иван" };
function sayHi() { alert(this.name); }
let self = user;
sayHi.call(self);
```

## Решение через параметр
```js
function sayHi(user) { alert(user.name); }
let user = { name: "Иван" };
sayHi(user);
```

## Решение через стрелочную функцию
```js
let user = {
  name: "Иван",
  sayHi: function () {
    setTimeout(() => alert(this.name), 100); // стрелочная функция берёт this снаружи
  }
};
user.sayHi();
```

## Метод call
```js
function sayHi() { alert(this.name); }
let user = { name: "Иван" };
sayHi.call(user);
```

## Метод call с параметрами
```js
function greet(greeting) { alert(greeting + ", " + this.name); }
let user = { name: "Иван" };
greet.call(user, "Привет");
```

## Метод apply
```js
function sum(a, b) { alert(this.label + ": " + (a + b)); }
let obj = { label: "Итог" };
sum.apply(obj, [2, 3]);
```

## Метод bind
```js
let user = { name: "Иван" };
function sayHi() { alert(this.name); }
let boundSayHi = sayHi.bind(user);
boundSayHi(); // Иван
```

# Таймеры — примеры к каждой теме

## Запуск таймера
```js
setTimeout(() => alert("Прошла секунда"), 1000);
```

## Счетчик на таймере
```js
let count = 0;
setInterval(() => {
  count++;
  console.log(count);
}, 1000);
```

## Остановка таймера
```js
let timerId = setInterval(() => console.log("тик"), 1000);
setTimeout(() => clearInterval(timerId), 5000);
```

## Кнопки для запуска
```js
document.querySelector("#start").onclick = () => {
  window.timerId = setInterval(() => console.log("тик"), 1000);
};
```

## Многократный запуск
```js
setInterval(() => alert("Повтор"), 2000);
```

## Кнопки для остановки
```js
document.querySelector("#stop").onclick = () => clearInterval(window.timerId);
```

## Работа с DOM
```js
let counter = 0;
let el = document.querySelector("#counter");
setInterval(() => { el.textContent = ++counter; }, 1000);
```

## Таймеры и потеря контекста
```js
let obj = {
  name: "Иван",
  start() {
    setTimeout(() => alert(this.name), 1000); // стрелочная функция сохраняет this
  }
};
obj.start();
```

## Практика на таймеры и DOM
```js
let seconds = 0;
let display = document.querySelector("#timer");
setInterval(() => {
  seconds++;
  display.textContent = seconds + " сек.";
}, 1000);
```

## Задержка перед выполнением
```js
setTimeout(() => alert("Через 2 секунды"), 2000);
```

## Таймер через задержку
```js
function delayedGreet() {
  setTimeout(() => alert("Привет с задержкой"), 1000);
}
delayedGreet();
```

# Манипулирование элементами — примеры к каждой теме

## Создание и вставка элементов
```js
let div = document.createElement("div");
div.textContent = "Новый блок";
document.body.append(div);
```

## Навешивание событий при вставке
```js
let button = document.createElement("button");
button.textContent = "Нажми";
button.onclick = () => alert("Клик!");
document.body.append(button);
```

## Создание элементов в цикле
```js
for (let i = 1; i <= 3; i++) {
  let li = document.createElement("li");
  li.textContent = "Пункт " + i;
  document.querySelector("ul").append(li);
}
```

## Навешивание обработчиков в цикле
```js
for (let i = 1; i <= 3; i++) {
  let li = document.createElement("li");
  li.textContent = "Пункт " + i;
  li.onclick = () => alert("Пункт " + i);
  document.querySelector("ul").append(li);
}
```

## Удаление элементов
```js
let box = document.querySelector(".box");
box.remove();
```

## Вставка с краю
```js
let list = document.querySelector("ul");
let li = document.createElement("li");
li.textContent = "Новый пункт";
list.prepend(li); // вставка в начало
list.append(li);  // вставка в конец
```

## Вставка перед
```js
let list = document.querySelector("ul");
let li = document.createElement("li");
li.textContent = "Перед вторым";
list.children[1].before(li);
```

## Смежная вставка
```js
let box = document.querySelector(".box");
box.insertAdjacentHTML("afterend", "<div>После</div>");
```

## Смежная вставка тегов
```js
let box = document.querySelector(".box");
box.insertAdjacentHTML("beforeend", "<p>Внутри в конце</p>");
```

## Клонирование элементов
```js
let box = document.querySelector(".box");
let clone = box.cloneNode(true); // true — вместе с содержимым
document.body.append(clone);
```

## Проверка элементов
```js
let el = document.querySelector(".box");
alert(el.matches(".box")); // true
```

# Практика — примеры к каждой теме

## Создание элементов из массива
```js
let fruits = ["Яблоко", "Груша", "Слива"];
let list = document.querySelector("ul");
fruits.forEach(fruit => {
  let li = document.createElement("li");
  li.textContent = fruit;
  list.append(li);
});
```

## Практика на создание списков ul
```js
let items = ["Молоко", "Хлеб", "Яйца"];
let ul = document.createElement("ul");
items.forEach(item => {
  let li = document.createElement("li");
  li.textContent = item;
  ul.append(li);
});
document.body.append(ul);
```

## Создание таблиц
```js
let table = document.createElement("table");
let row = table.insertRow();
row.insertCell().textContent = "Ячейка 1";
row.insertCell().textContent = "Ячейка 2";
document.body.append(table);
```

## Последовательное заполнение таблиц
```js
let table = document.createElement("table");
for (let i = 1; i <= 3; i++) {
  let row = table.insertRow();
  row.insertCell().textContent = "Строка " + i;
}
document.body.append(table);
```

## Создание таблицы из массива
```js
let data = [1, 2, 3];
let table = document.createElement("table");
data.forEach(num => {
  let row = table.insertRow();
  row.insertCell().textContent = num;
});
```

## Создание таблицы из массива объектов
```js
let users = [{ name: "Иван", age: 25 }, { name: "Пётр", age: 30 }];
let table = document.createElement("table");
users.forEach(user => {
  let row = table.insertRow();
  row.insertCell().textContent = user.name;
  row.insertCell().textContent = user.age;
});
```

## Добавление рядов и колонок в таблицу
```js
let table = document.querySelector("table");
let row = table.insertRow();
row.insertCell().textContent = "Новая строка";
```

## Изменение ячеек таблицы
```js
let table = document.querySelector("table");
table.rows[0].cells[0].textContent = "Изменено";
```

## Удаление новых элементов
```js
let row = document.querySelector("table tr");
row.remove();
```

## Ссылка на удаление элемента
```js
let li = document.querySelector("li");
let deleteLink = document.createElement("a");
deleteLink.textContent = "Удалить";
deleteLink.onclick = () => li.remove();
li.append(deleteLink);
```

## Создание ссылок на удаление
```js
document.querySelectorAll("li").forEach(li => {
  let del = document.createElement("a");
  del.textContent = " [удалить]";
  del.onclick = () => li.remove();
  li.append(del);
});
```

## Редактирование отдельного элемента
```js
let li = document.querySelector("li");
li.ondblclick = () => {
  li.contentEditable = true;
  li.focus();
};
```

## Прячем текст при редактировании
```js
let li = document.querySelector("li");
li.onclick = () => {
  let input = document.createElement("input");
  input.value = li.textContent;
  li.textContent = "";
  li.append(input);
  input.focus();
};
```

## Редактирование в наборе элементов
```js
document.querySelectorAll("li").forEach(li => {
  li.ondblclick = () => { li.contentEditable = true; li.focus(); };
});
```

## Удаление и редактирование
```js
document.querySelectorAll("li").forEach(li => {
  li.ondblclick = () => li.remove();
});
```

## Стилизация элементов
```js
document.querySelectorAll("li").forEach((li, i) => {
  li.style.background = i % 2 === 0 ? "#eee" : "#fff";
});
```

## Кнопки для скрытия и показа элемента
```js
let box = document.querySelector(".box");
document.querySelector("#toggle").onclick = () => {
  box.style.display = box.style.display === "no