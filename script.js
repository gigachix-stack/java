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
