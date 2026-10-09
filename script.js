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

// ===== Уровень A — Условные операторы =====

// Задание 27. Проверка положительного числа
console.log("--- Задание 27 ---");
{
  function checkNumber(number) {
    if (number > 0) {
      return "Число положительное";
    } else if (number < 0) {
      return "Число отрицательное";
    } else {
      return "Ноль";
    }
  }
  let number = -8;
  console.log(number + ": " + checkNumber(number)); // Число отрицательное
  console.log(0 + ": " + checkNumber(0));           // Ноль
  console.log(15 + ": " + checkNumber(15));         // Число положительное
}

// Задание 28. Проверка делимости на 3 и 5
console.log("--- Задание 28 ---");
{
  function divisible(number) {
    if (number % 3 === 0 && number % 5 === 0) {
      return "Делится";
    } else {
      return "Не делится";
    }
  }
  let number = 30;
  console.log(number + ": " + divisible(number)); // Делится
  console.log(9 + ": " + divisible(9));           // Не делится
  console.log(10 + ": " + divisible(10));         // Не делится
  console.log(45 + ": " + divisible(45));         // Делится
}

// Задание 29. Определение времени суток
console.log("--- Задание 29 ---");
{
  function timeOfDay(hour) {
    if (hour < 0 || hour > 23 || !Number.isInteger(hour)) {
      return "Ошибка: час должен быть от 0 до 23";
    } else if (hour >= 6 && hour <= 11) {
      return "Утро";
    } else if (hour >= 12 && hour <= 17) {
      return "День";
    } else if (hour >= 18 && hour <= 21) {
      return "Вечер";
    } else {
      return "Ночь"; // 22–23 и 0–5
    }
  }
  let hour = 14;
  console.log(hour + ":00 -> " + timeOfDay(hour)); // День
  [3, 8, 19, 23, 25, -1].forEach(function (h) {
    console.log(h + ":00 -> " + timeOfDay(h));
  });
}

// Задание 30. Проверка результатов экзамена
console.log("--- Задание 30 ---");
{
  function exam(math, programming) {
    if (math >= 50 && programming >= 50) {
      return "Экзамены сданы";
    } else {
      return "Необходимо пересдать";
    }
  }
  let math = 75;
  let programming = 48;
  console.log(math + " и " + programming + ": " + exam(math, programming)); // Необходимо пересдать
  console.log("80 и 90: " + exam(80, 90));                                   // Экзамены сданы
}

// Задание 31. Определение високосного года
console.log("--- Задание 31 ---");
{
  function isLeap(year) {
    return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
  }
  let year = 2028;
  console.log(year + (isLeap(year) ? " — високосный год" : " — не високосный год")); // високосный
  [1900, 2000, 2023, 2024].forEach(function (y) {
    console.log(y + (isLeap(y) ? " — високосный год" : " — не високосный год"));
  });
}

// ===== Уровень B — Циклы, строки и массивы =====

// Задание 32. Сумма нечётных чисел от 1 до 50
console.log("--- Задание 32 ---");
{
  let sum = 0;
  for (let i = 1; i <= 50; i++) {
    if (i % 2 !== 0) {
      sum += i;
    }
  }
  console.log("Сумма нечётных чисел от 1 до 50: " + sum); // 625
}

// Задание 33. Подсчёт цифр числа
console.log("--- Задание 33 ---");
{
  let number = 45678;
  console.log("Количество цифр в " + number + ": " + String(number).length); // 5
}

// Задание 34. Переворот строки
console.log("--- Задание 34 ---");
{
  let word = "JavaScript";
  let reversed = "";
  for (let i = word.length - 1; i >= 0; i--) {
    reversed += word[i];
  }
  console.log(word + " -> " + reversed); // tpircSavaJ
}

// Задание 35. Количество положительных чисел
console.log("--- Задание 35 ---");
{
  let numbers = [-5, 10, 0, 23, -8, 15, -2];
  let count = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
      count++;
    }
  }
  console.log("Положительных чисел: " + count); // 3
}

// Задание 36. Удаление повторяющихся элементов
console.log("--- Задание 36 ---");
{
  let numbers = [2, 3, 2, 5, 3, 7, 5, 9];
  let unique = [];
  for (let i = 0; i < numbers.length; i++) {
    if (!unique.includes(numbers[i])) {
      unique.push(numbers[i]);
    }
  }
  console.log("Без повторов: " + unique.join(", ")); // 2, 3, 5, 7, 9
}

// ===== Уровень C — Функции =====

// Задание 37. Конвертер температуры
console.log("--- Задание 37 ---");
{
  function convertTemperature(celsius) {
    return celsius * 1.8 + 32;
  }
  [0, 20, 100].forEach(function (c) {
    console.log(c + "°C = " + convertTemperature(c) + "°F"); // 32, 68, 212
  });
}

// Задание 38. Проверка простого числа
console.log("--- Задание 38 ---");
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
  [7, 12, 17, 21].forEach(function (n) {
    console.log(n + ": " + isPrime(n)); // true, false, true, false
  });
}

// Задание 39. Подсчёт гласных букв
console.log("--- Задание 39 ---");
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
  console.log('"education": ' + countVowels("education")); // 5
  console.log('"Programming": ' + countVowels("Programming")); // 3
}

// Задание 40. Расчёт стоимости доставки
console.log("--- Задание 40 ---");
{
  function calculateDelivery(amount) {
    if (amount < 5000) {
      return 1500;
    } else if (amount < 15000) {
      return 800;
    } else {
      return 0; // бесплатно
    }
  }
  [3000, 10000, 20000].forEach(function (amount) {
    let delivery = calculateDelivery(amount);
    let total = amount + delivery;
    console.log("Заказ: " + amount + " ₸, доставка: " + (delivery === 0 ? "Бесплатно" : delivery + " ₸") + ", итого: " + total + " ₸");
  });
  // 3000 -> 1500 (итого 4500); 10000 -> 800 (10800); 20000 -> бесплатно (20000)
}

// ===== Уровень D — Реальные мини-проекты =====

// Задание 41. Электронный журнал колледжа
console.log("--- Задание 41 ---");
{
  let students = [
    {name: "Алия", score: 95},
    {name: "Арман", score: 67},
    {name: "Данияр", score: 82},
    {name: "Мадина", score: 45}
  ];

  console.log("Все студенты:");
  for (let i = 0; i < students.length; i++) {
    console.log(students[i].name + ": " + students[i].score);
  }

  console.log("Сдали (50 и выше):");
  let failed = 0;
  for (let i = 0; i < students.length; i++) {
    if (students[i].score >= 50) {
      console.log(students[i].name + " (" + students[i].score + ")");
    } else {
      failed++;
    }
  }

  let best = students[0];
  let total = 0;
  for (let i = 0; i < students.length; i++) {
    if (students[i].score > best.score) {
      best = students[i];
    }
    total += students[i].score;
  }
  console.log("Наивысший балл: " + best.name + " (" + best.score + ")");    // Алия (95)
  console.log("Средний балл группы: " + total / students.length);          // 72.25
  console.log("Не сдали экзамен: " + failed);                              // 1
}

// Задание 42. Система бронирования мест
console.log("--- Задание 42 ---");
{
  let seats = [false, true, false, false, true];
  let selectedSeat = 3;

  if (!Number.isInteger(selectedSeat) || selectedSeat < 1 || selectedSeat > seats.length) {
    console.log("Ошибка: неверный номер места");
  } else if (seats[selectedSeat - 1]) {
    console.log("Место " + selectedSeat + " уже занято");
  } else {
    seats[selectedSeat - 1] = true;
    console.log("Место " + selectedSeat + " успешно забронировано");
  }

  console.log("Обновлённый список мест:");
  for (let i = 0; i < seats.length; i++) {
    console.log("Место " + (i + 1) + ": " + (seats[i] ? "занято" : "свободно"));
  }
}

// Задание 43. Учёт товаров на складе
console.log("--- Задание 43 ---");
{
  let products = [
    {name: "Ноутбук", quantity: 5},
    {name: "Мышь", quantity: 15},
    {name: "Клавиатура", quantity: 3},
    {name: "Монитор", quantity: 8}
  ];

  console.log("Список товаров:");
  for (let i = 0; i < products.length; i++) {
    console.log(products[i].name + ": " + products[i].quantity + " шт.");
  }

  console.log("Товары, которых меньше 5:");
  for (let i = 0; i < products.length; i++) {
    if (products[i].quantity < 5) {
      console.log(products[i].name + " (" + products[i].quantity + ")"); // Клавиатура (3)
    }
  }

  let totalQty = 0;
  let maxProduct = products[0];
  for (let i = 0; i < products.length; i++) {
    totalQty += products[i].quantity;
    if (products[i].quantity > maxProduct.quantity) {
      maxProduct = products[i];
    }
  }
  console.log("Всего единиц товаров: " + totalQty);                                   // 31
  console.log("Больше всего: " + maxProduct.name + " (" + maxProduct.quantity + ")"); // Мышь (15)

  products.push({name: "Принтер", quantity: 4});
  console.log("Добавлен новый товар. Теперь товаров: " + products.length);            // 5
}

// Задание 44. Учёт расходов
console.log("--- Задание 44 ---");
{
  let expenses = [2500, 1800, 4200, 1500, 3100, 2600, 5000];
  let total = 0;
  let max = expenses[0];
  let min = expenses[0];
  let daysOver = 0;
  for (let i = 0; i < expenses.length; i++) {
    total += expenses[i];
    if (expenses[i] > max) max = expenses[i];
    if (expenses[i] < min) min = expenses[i];
    if (expenses[i] > 3000) daysOver++;
  }
  console.log("Общая сумма: " + total + " ₸");                                  // 20700
  console.log("Максимальный расход: " + max + " ₸");                            // 5000
  console.log("Минимальный расход: " + min + " ₸");                             // 1500
  console.log("Средний расход в день: " + (total / expenses.length).toFixed(2) + " ₸"); // 2957.14
  console.log("Дней с расходами свыше 3000 ₸: " + daysOver);                    // 3
}

// Задание 45. Система регистрации участников
console.log("--- Задание 45 ---");
{
  let participants = [
    {name: "Али", age: 17, registered: true},
    {name: "Аружан", age: 16, registered: false},
    {name: "Руслан", age: 19, registered: true}
  ];
  let admitted = 0;
  console.log("Допущенные участники:");
  for (let i = 0; i < participants.length; i++) {
    let p = participants[i];
    if (p.registered && p.age >= 16 && p.age <= 25) {
      console.log(p.name);
      admitted++;
    }
  }
  console.log("Всего допущено: " + admitted); // 2 (Али, Руслан)
}// ==================== ДОПОЛНИТЕЛЬНОЕ ЗАДАНИЕ ====================
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
