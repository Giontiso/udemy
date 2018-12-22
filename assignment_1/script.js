'use strict';

let money = prompt('Ваш бюджет на месяц?'),
    time = prompt('Введите дату в формате YYYY-MM-DD'),
    expenses = prompt('Введите обязательную статью расходов в этом месяце'),
    price = prompt('Во сколько обойдется?'),
    dayMon = 30;

var appData = {
    budget: money,
    timeDate: time,
    expenses: {
        mandatoryExpenses: expenses,
        price: price
    },
    optionalExpenses: {},
    income: [],
    savings: false

};

// console.log(appData);
console.log14(Math.floor(money/dayMon));