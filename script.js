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
