console.log("Задание 1");
let a = 15;
let b = 5;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);

console.log("Задание 2");
let age = 17;
if (age >= 18) {
    console.log("Доступ разрешён");
} else {
    console.log("Доступ запрещён");
}

console.log("Задание 3");
let number = 24;
if (number % 2 === 0) {
    console.log("Число чётное");
} else {
    console.log("Число нечётное");
}

console.log("Задание 4");
let score = 85;
if (score < 0 || score > 100) {
    console.log("Некорректные баллы");
} else if (score >= 90) {
    console.log("Отлично");
} else if (score >= 70) {
    console.log("Хорошо");
} else if (score >= 50) {
    console.log("Удовлетворительно");
} else {
    console.log("Не сдал");
}

console.log("Задание 5");
let color = "green";
if (color === "red") {
    console.log("Стой");
} else if (color === "yellow") {
    console.log("Подожди");
} else if (color === "green") {
    console.log("Можно идти");
} else {
    console.log("Неизвестный сигнал");
}

console.log("Задание 6");
let userAge = 16;
if (userAge >= 18) {
    console.log("Совершеннолетний");
} else {
    console.log("Несовершеннолетний");
}

console.log("Задание 7");
let balance = 50000;
let withdraw = 20000;
if (withdraw <= 0) {
    console.log("Некорректная сумма");
} else if (withdraw > balance) {
    console.log("Недостаточно средств");
} else {
    balance = balance - withdraw;
    console.log("Новый баланс: " + balance + " ₸");
}

console.log("Задание 8");
let total = 35000;
let discount = 0;
if (total >= 50000) {
    discount = 15;
} else if (total >= 30000) {
    discount = 10;
} else if (total >= 10000) {
    discount = 5;
}
let discountSum = total * discount / 100;
let finalSum = total - discountSum;
console.log("Скидка: " + discount + "%");
console.log("Размер скидки: " + discountSum + " ₸");
console.log("Итого: " + finalSum + " ₸");

console.log("Задание 9");
for (let i = 1; i <= 10; i++) {
    console.log("7 x " + i + " = " + 7 * i);
}

console.log("Задание 10");
function checkPassword(password) {
    if (password.length < 8) {
        console.log("Слишком короткий пароль");
    } else if (/\d/.test(password) === false) {
        console.log("Добавьте цифру");
    } else {
        console.log("Пароль принят");
    }
}
checkPassword("abc123");
checkPassword("abcdefgh");
checkPassword("abcdefg1");


// ==================== УРОВЕНЬ A — Простые задания ====================

// ---------- Задание 11. Определение температуры ----------
console.log("=== Задание 11 ===");
{
  let temperature = 18;

  if (temperature < 0) {
    console.log("Очень холодно");
  } else if (temperature <= 15) {
    console.log("Прохладно");
  } else if (temperature <= 25) {
    console.log("Тепло");
  } else {
    console.log("Жарко");
  }

  // Проверка значений −10, 5, 20 и 35
  for (let t of [-10, 5, 20, 35]) {
    let message;
    if (t < 0) {
      message = "Очень холодно";
    } else if (t <= 15) {
      message = "Прохладно";
    } else if (t <= 25) {
      message = "Тепло";
    } else {
      message = "Жарко";
    }
    console.log(t + "°C: " + message);
  }
}

// ---------- Задание 12. Проверка логина ----------
console.log("=== Задание 12 ===");
{
  let login = "student";

  if (login === "admin") {
    console.log("Добро пожаловать!");
  } else {
    console.log("Неверный логин");
  }
}

// ---------- Задание 13. Максимальное число ----------
console.log("=== Задание 13 ===");
{
  function findMax(a, b, c) {
    let max;
    if (a >= b && a >= c) {
      max = a;
    } else if (b >= a && b >= c) {
      max = b;
    } else {
      max = c;
    }
    return max;
  }

  let a = 12, b = 25, c = 18;
  console.log("Максимальное число из " + a + ", " + b + ", " + c + ": " + findMax(a, b, c));

  // Случай, когда два числа равны
  console.log("Максимальное число из 25, 25, 18: " + findMax(25, 25, 18));
}

// ---------- Задание 14. Стоимость билета ----------
console.log("=== Задание 14 ===");
{
  function ticketPrice(age) {
    if (age < 7) {
      return "Бесплатно";
    } else if (age <= 17) {
      return "500 ₸";
    } else if (age <= 59) {
      return "1 000 ₸";
    } else {
      return "600 ₸";
    }
  }

  let age = 25;
  console.log("Возраст " + age + ": " + ticketPrice(age));

  // Дополнительная проверка границ
  for (let x of [5, 7, 17, 18, 59, 60]) {
    console.log("Возраст " + x + ": " + ticketPrice(x));
  }
}

// ---------- Задание 15. День недели ----------
console.log("=== Задание 15 ===");
{
  let day = 3;

  switch (day) {
    case 1:
      console.log("Понедельник");
      break;
    case 2:
      console.log("Вторник");
      break;
    case 3:
      console.log("Среда");
      break;
    case 4:
      console.log("Четверг");
      break;
    case 5:
      console.log("Пятница");
      break;
    case 6:
      console.log("Суббота");
      break;
    case 7:
      console.log("Воскресенье");
      break;
    default:
      console.log("Неверный номер дня");
  }
}

// ==================== УРОВЕНЬ B — Циклы и массивы ====================

// ---------- Задание 16. Сумма чисел от 1 до 100 ----------
console.log("=== Задание 16 ===");
{
  let sum = 0;
  for (let i = 1; i <= 100; i++) {
    sum += i;
  }
  console.log("Сумма чисел от 1 до 100: " + sum); // 5050
}

// ---------- Задание 17. Чётные числа ----------
console.log("=== Задание 17 ===");
{
  let count = 0;
  for (let i = 1; i <= 30; i++) {
    if (i % 2 === 0) {
      console.log(i);
      count++;
    }
  }
  console.log("Количество чётных чисел: " + count); // 15
}

// ---------- Задание 18. Средний балл студента ----------
console.log("=== Задание 18 ===");
{
  let grades = [85, 90, 78, 92, 88];
  let total = 0;

  for (let i = 0; i < grades.length; i++) {
    total += grades[i];
  }

  let average = total / grades.length;
  console.log("Средний балл: " + average); // 86.6

  if (average > 80) {
    console.log("Средний балл превышает 80");
  } else {
    console.log("Средний балл не превышает 80");
  }
}

// ---------- Задание 19. Поиск самого дорогого товара ----------
console.log("=== Задание 19 ===");
{
  let prices = [1500, 3500, 2200, 7000, 4100];
  let maxPrice = prices[0];

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > maxPrice) {
      maxPrice = prices[i];
    }
  }
  console.log("Самая высокая цена: " + maxPrice); // 7000
}

// ---------- Задание 20. Обратный отсчёт ----------
console.log("=== Задание 20 ===");
{
  let n = 10;
  while (n >= 1) {
    console.log(n);
    n--;
  }
  console.log("Старт!");
}

// ==================== УРОВЕНЬ C — Практические мини-проекты ====================

// ---------- Задание 21. Электронная очередь ----------
console.log("=== Задание 21 ===");
{
  let queue = [101, 102, 103, 104, 105];

  for (let i = 0; i < queue.length; i++) {
    console.log("Приглашается студент №" + queue[i]);
  }
  console.log("Очередь завершена");
}

// ---------- Задание 22. Проверка доступа в компьютерный кабинет ----------
console.log("=== Задание 22 ===");
{
  function checkAccess(role, hasPass) {
    if (role === "преподаватель") {
      return "Доступ разрешён";
    } else if (role === "студент" && hasPass) {
      return "Доступ разрешён";
    } else if (role === "студент" && !hasPass) {
      return "Доступ запрещён";
    } else {
      return "Обратитесь к администратору";
    }
  }

  let role = "студент";
  let hasPass = true;
  console.log(role + ", пропуск: " + hasPass + " → " + checkAccess(role, hasPass));

  // Проверка всех вариантов
  console.log("преподаватель → " + checkAccess("преподаватель", false));
  console.log("студент с пропуском → " + checkAccess("студент", true));
  console.log("студент без пропуска → " + checkAccess("студент", false));
  console.log("гость → " + checkAccess("гость", false));
}

// ---------- Задание 23. Расчёт заработной платы ----------
console.log("=== Задание 23 ===");
{
  let salary = 200000;
  let bonusPercent;

  if (salary < 150000) {
    bonusPercent = 20;
  } else if (salary <= 299999) {
    bonusPercent = 15;
  } else {
    bonusPercent = 10;
  }

  let bonus = salary * bonusPercent / 100;
  let totalSalary = salary + bonus;

  console.log("Базовая зарплата: " + salary + " ₸");
  console.log("Премия (" + bonusPercent + "%): " + bonus + " ₸");
  console.log("Итого: " + totalSalary + " ₸");
}

// ---------- Задание 24. Учёт посещаемости ----------
console.log("=== Задание 24 ===");
{
  let attendance = [
    true, true, false, true,
    false, true, true, true
  ];

  let present = 0;
  let absent = 0;

  for (let i = 0; i < attendance.length; i++) {
    if (attendance[i]) {
      present++;
    } else {
      absent++;
    }
  }

  let percent = present / attendance.length * 100;

  console.log("Присутствуют: " + present);
  console.log("Отсутствуют: " + absent);
  console.log("Посещаемость: " + percent + "%"); // 75%
}

// ---------- Задание 25. Мини-банкомат ----------
console.log("=== Задание 25 ===");
{
  let balance = 100000;
  let pin = 1234;
  let enteredPin = 1234;
  let amount = 25000;

  if (enteredPin !== pin) {
    console.log("Ошибка: неверный PIN-код");
  } else if (amount <= 0) {
    console.log("Ошибка: сумма снятия должна быть больше нуля");
  } else if (amount > balance) {
    console.log("Ошибка: недостаточно средств");
  } else {
    balance = balance - amount;
    console.log("Операция выполнена. Снято: " + amount + " ₸");
    console.log("Новый баланс: " + balance + " ₸"); // 75000
  }
}
// ==================== ЗАДАНИЯ 29–45 ====================

// ---------- Задание 29. Определение времени суток ----------
console.log("=== Задание 29 ===");
{
  function dayPart(hour) {
    if (hour < 0 || hour > 23) {
      return "Ошибка: час должен быть от 0 до 23";
    } else if (hour >= 6 && hour <= 11) {
      return "Утро";
    } else if (hour >= 12 && hour <= 17) {
      return "День";
    } else if (hour >= 18 && hour <= 21) {
      return "Вечер";
    } else {
      return "Ночь";
    }
  }

  let hour = 14;
  console.log("Час " + hour + ": " + dayPart(hour));

  // Дополнительная проверка границ и ошибки
  for (let h of [0, 5, 6, 11, 12, 17, 18, 21, 22, 23, 24, -1]) {
    console.log("Час " + h + ": " + dayPart(h));
  }
}

// ---------- Задание 30. Проверка результатов экзамена ----------
console.log("=== Задание 30 ===");
{
  function checkExam(math, programming) {
    if (math >= 50 && programming >= 50) {
      return "Экзамены сданы";
    } else {
      return "Необходимо пересдать";
    }
  }

  let math = 75;
  let programming = 48;
  console.log("Математика " + math + ", программирование " + programming + ": " + checkExam(math, programming));

  // Проверка значений 80 и 90
  console.log("Математика 80, программирование 90: " + checkExam(80, 90));
}

// ---------- Задание 31. Определение високосного года ----------
console.log("=== Задание 31 ===");
{
  let year = 2028;

  if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
    console.log(year + " — високосный год");
  } else {
    console.log(year + " — не високосный год");
  }
}

// ---------- Задание 32. Сумма нечётных чисел ----------
console.log("=== Задание 32 ===");
{
  let sum = 0;
  for (let i = 1; i <= 50; i++) {
    if (i % 2 !== 0) {
      sum += i;
    }
  }
  console.log("Сумма нечётных чисел от 1 до 50: " + sum); // 625
}

// ---------- Задание 33. Подсчёт цифр числа ----------
console.log("=== Задание 33 ===");
{
  let number = 45678;
  let digits = String(number).length;
  console.log("Количество цифр в числе " + number + ": " + digits); // 5
}

// ---------- Задание 34. Переворот строки ----------
console.log("=== Задание 34 ===");
{
  let word = "JavaScript";
  let reversed = "";

  for (let i = word.length - 1; i >= 0; i--) {
    reversed += word[i];
  }
  console.log(reversed); // tpircSavaJ
}

// ---------- Задание 35. Количество положительных чисел ----------
console.log("=== Задание 35 ===");
{
  let numbers = [-5, 10, 0, 23, -8, 15, -2];
  let count = 0;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
      count++;
    }
  }
  console.log("Количество положительных чисел: " + count); // 3
}

// ---------- Задание 36. Удаление повторяющихся элементов ----------
console.log("=== Задание 36 ===");
{
  let numbers = [2, 3, 2, 5, 3, 7, 5, 9];
  let unique = [];

  for (let i = 0; i < numbers.length; i++) {
    if (!unique.includes(numbers[i])) {
      unique.push(numbers[i]);
    }
  }
  console.log(unique); // [2, 3, 5, 7, 9]
}

// ==================== УРОВЕНЬ C — Функции ====================

// ---------- Задание 37. Конвертер температуры ----------
console.log("=== Задание 37 ===");
{
  function convertTemperature(celsius) {
    return celsius * 1.8 + 32;
  }

  for (let c of [0, 20, 100]) {
    console.log(c + "°C = " + convertTemperature(c) + "°F");
  }
}

// ---------- Задание 38. Проверка простого числа ----------
console.log("=== Задание 38 ===");
{
  function isPrime(number) {
    if (number <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  }

  for (let n of [7, 12, 17, 21]) {
    console.log(n + ": " + isPrime(n));
  }
}

// ---------- Задание 39. Подсчёт гласных букв ----------
console.log("=== Задание 39 ===");
{
  function countVowels(text) {
    let vowels = "aeiou";
    let lower = text.toLowerCase();
    let count = 0;

    for (let i = 0; i < lower.length; i++) {
      if (vowels.includes(lower[i])) {
        count++;
      }
    }
    return count;
  }

  console.log("Гласных в слове \"education\": " + countVowels("education")); // 5
}

// ---------- Задание 40. Расчёт стоимости доставки ----------
console.log("=== Задание 40 ===");
{
  function calculateDelivery(amount) {
    if (amount < 5000) {
      return 1500;
    } else if (amount < 15000) {
      return 800;
    } else {
      return 0;
    }
  }

  for (let amount of [3000, 10000, 20000]) {
    let delivery = calculateDelivery(amount);
    let total = amount + delivery;
    console.log("Заказ: " + amount + " ₸, доставка: " + delivery + " ₸, итого: " + total + " ₸");
  }
}

// ==================== УРОВЕНЬ D — Реальные мини-проекты ====================

// ---------- Задание 41. Электронный журнал колледжа ----------
console.log("=== Задание 41 ===");
{
  let students = [
    {name: "Алия", score: 95},
    {name: "Арман", score: 67},
    {name: "Данияр", score: 82},
    {name: "Мадина", score: 45}
  ];

  // 1. Имя и балл каждого студента
  for (let i = 0; i < students.length; i++) {
    console.log(students[i].name + ": " + students[i].score);
  }

  // 2. Студенты с баллами 50 и выше
  console.log("Студенты с баллом 50 и выше:");
  for (let i = 0; i < students.length; i++) {
    if (students[i].score >= 50) {
      console.log(students[i].name);
    }
  }

  // 3. Студент с наивысшим баллом
  let best = students[0];
  for (let i = 1; i < students.length; i++) {
    if (students[i].score > best.score) {
      best = students[i];
    }
  }
  console.log("Наивысший балл: " + best.name + " (" + best.score + ")");

  // 4. Средний балл группы
  let total = 0;
  for (let i = 0; i < students.length; i++) {
    total += students[i].score;
  }
  console.log("Средний балл группы: " + total / students.length);

  // 5. Количество не сдавших экзамен (балл ниже 50)
  let failed = 0;
  for (let i = 0; i < students.length; i++) {
    if (students[i].score < 50) {
      failed++;
    }
  }
  console.log("Не сдали экзамен: " + failed);
}

// ---------- Задание 42. Система бронирования мест ----------
console.log("=== Задание 42 ===");
{
  let seats = [false, true, false, false, true];
  let selectedSeat = 3;

  // true — место занято, false — свободно; нумерация с 1
  if (!Number.isInteger(selectedSeat) || selectedSeat < 1 || selectedSeat > seats.length) {
    console.log("Ошибка: неверный номер места");
  } else if (seats[selectedSeat - 1] === false) {
    seats[selectedSeat - 1] = true;
    console.log("Место №" + selectedSeat + " успешно забронировано");
  } else {
    console.log("Место №" + selectedSeat + " уже занято");
  }
  console.log(seats);
}

// ---------- Задание 43. Учёт товаров на складе ----------
console.log("=== Задание 43 ===");
{
  let products = [
    {name: "Ноутбук", quantity: 5},
    {name: "Мышь", quantity: 15},
    {name: "Клавиатура", quantity: 3},
    {name: "Монитор", quantity: 8}
  ];

  // 1. Список всех товаров
  console.log("Список товаров:");
  for (let i = 0; i < products.length; i++) {
    console.log(products[i].name + ": " + products[i].quantity + " шт.");
  }

  // 2. Товары, количество которых меньше 5
  console.log("Товары, которых меньше 5:");
  for (let i = 0; i < products.length; i++) {
    if (products[i].quantity < 5) {
      console.log(products[i].name + ": " + products[i].quantity + " шт.");
    }
  }

  // 3. Общее количество единиц
  let totalQuantity = 0;
  for (let i = 0; i < products.length; i++) {
    totalQuantity += products[i].quantity;
  }
  console.log("Всего единиц товаров: " + totalQuantity);

  // 4. Товар с максимальным количеством
  let maxProduct = products[0];
  for (let i = 1; i < products.length; i++) {
    if (products[i].quantity > maxProduct.quantity) {
      maxProduct = products[i];
    }
  }
  console.log("Больше всего: " + maxProduct.name + " (" + maxProduct.quantity + " шт.)");

  // 5. Добавление нового товара
  products.push({name: "Принтер", quantity: 4});
  console.log("Список после добавления товара:");
  for (let i = 0; i < products.length; i++) {
    console.log(products[i].name + ": " + products[i].quantity + " шт.");
  }
}

// ---------- Задание 44. Учёт расходов ----------
console.log("=== Задание 44 ===");
{
  let expenses = [2500, 1800, 4200, 1500, 3100, 2600, 5000];

  let totalExpenses = 0;
  let maxExpense = expenses[0];
  let minExpense = expenses[0];
  let daysOver = 0;

  for (let i = 0; i < expenses.length; i++) {
    totalExpenses += expenses[i];
    if (expenses[i] > maxExpense) {
      maxExpense = expenses[i];
    }
    if (expenses[i] < minExpense) {
      minExpense = expenses[i];
    }
    if (expenses[i] > 3000) {
      daysOver++;
    }
  }

  console.log("Общая сумма расходов: " + totalExpenses + " ₸");
  console.log("Максимальный расход: " + maxExpense + " ₸");
  console.log("Минимальный расход: " + minExpense + " ₸");
  console.log("Средний расход за день: " + (totalExpenses / expenses.length).toFixed(2) + " ₸");
  console.log("Дней с расходами выше 3000 ₸: " + daysOver);
}

// ---------- Задание 45. Система регистрации участников ----------
console.log("=== Задание 45 ===");
{
  let participants = [
    {name: "Али", age: 17, registered: true},
    {name: "Аружан", age: 16, registered: false},
    {name: "Руслан", age: 19, registered: true}
  ];

  // Условие допуска: зарегистрирован и возраст от 16 до 25 включительно
  function showAdmitted(list) {
    let admitted = 0;
    console.log("Допущенные участники:");
    for (let i = 0; i < list.length; i++) {
      let p = list[i];
      if (p.registered && p.age >= 16 && p.age <= 25) {
        console.log(p.name);
        admitted++;
      }
    }
    console.log("Всего допущено: " + admitted);
  }

  // Исходные данные
  showAdmitted(participants);

  // Проверка на других значениях
  console.log("--- Проверка на других значениях ---");
  showAdmitted([
    {name: "Тимур", age: 15, registered: true},    // слишком молод
    {name: "Сабина", age: 16, registered: true},   // нижняя граница
    {name: "Нурлан", age: 25, registered: true},   // верхняя граница
    {name: "Айдос", age: 26, registered: true},    // слишком взрослый
    {name: "Дана", age: 20, registered: false}     // не зарегистрирован
  ]);
}

// ==================== ДОПОЛНИТЕЛЬНОЕ ЗАДАНИЕ ====================
// Запускать в браузере через index.html (используются prompt() и alert())

// ---------- Задание 26. Интерактивный калькулятор ----------
console.log("=== Задание 26 ===");
{
  let a = Number(prompt("Введите первое число:"));
  let b = Number(prompt("Введите второе число:"));
  let operation = prompt("Выберите: +, -, *, /");

  let result;

  switch (operation) {
    case "+":
      result = a + b;
      alert("Результат: " + a + " + " + b + " = " + result);
      break;
    case "-":
      result = a - b;
      alert("Результат: " + a + " - " + b + " = " + result);
      break;
    case "*":
      result = a * b;
      alert("Результат: " + a + " * " + b + " = " + result);
      break;
    case "/":
      if (b === 0) {
        alert("Ошибка: деление на ноль невозможно");
      } else {
        result = a / b;
        alert("Результат: " + a + " / " + b + " = " + result);
      }
      break;
    default:
      alert("Неизвестная операция");
  }
}
