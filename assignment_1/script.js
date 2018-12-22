'use strict';

let money = prompt('Ваш бюджет на месяц?', ''),
    time = prompt('Введите дату в формате YYYY-MM-DD', ''),
    expen = prompt('Введите обязательную статью расходов в этом месяце', ''),
    price = prompt('Во сколько обойдется?', ''),
    expen_2 = prompt('Введите обязательную статью расходов в этом месяце', ''),
    price_2 = prompt('Во сколько обойдется?', '');

let appData = {
    budget: money,
    timeDate: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false

};

appData.expenses.expen = price;
appData.expenses.expen_2 = price_2;

// console.log(appData);
console.log(appData.budget / 30);