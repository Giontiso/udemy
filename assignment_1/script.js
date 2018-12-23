'use strict';

let money, time;

function start() {
    money = +prompt('Ваш бюджет на месяц?', '');
    time = prompt('Введите дату в формате YYYY-MM-DD', '');

    while(isNaN(money) || money == '' || money == null) {
        money = +prompt('Ваш бюджет на месяц?', '');
    }
}

start();



let appData = {
    budget: money,
    timeDate: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true

};

function detectDayBudget() {
    if(appData.money != '') {
        appData.moneyPerDay = appData.budget / 30;
        alert('Дневной бюджет: ' + appData.moneyPerDay);
    }
}

detectDayBudget();



function chooseExpenses() {
    for(let i = 0; i < 2; i++) {
        let expen = prompt('Введите обязательную статью расходов в этом месяце', ''),
            price = prompt('Во сколько обойдется?', '');
    
        if ((typeof(expen)) === "string" && (typeof(expen) != null && (typeof(price) != null) && expen != '' && price != '' && expen.length < 50)) {
            console.log('Done');
            appData.expenses[expen] = price;
        } else {
            i = 0;
        }
    }
}

chooseExpenses();

// appData.moneyPerDay = appData.budget / 30;
// console.log(appData.moneyPerDay);

function detectLevel() {
    if(appData.moneyPerDay < 100 ) {
        console.log('Мин доход');
    } else if(appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log('Ср доход');
    } else if(appData.moneyPerDay > 2000) {
        console.log('Высокий доход')
    } else {
        console.log('Ошибка')
    }
}
detectLevel();


function checkSaving() {
    if(appData.savings == true) {
        let save = +prompt('Сумма накоплений?', ''),
            percent = +prompt('Под какой процент?', '');

            appData.monthIncome = save/100/12*percent;
            alert('Доход в месяц с депозита: '+ appData.monthIncome);
    }
    
}
checkSaving();


function chooseOptExpenses() {
    for(let i = 0; i < 3; i++) {
        let binExpenses = prompt('Статья необязательных расходов?', '');

        if ((typeof(binExpenses)) === "string" && (typeof(binExpenses) != null && binExpenses != '' && binExpenses.length < 50)) {
            console.log('Done');
            appData.optionalExpenses[i] = binExpenses;
        } else {
            console.log('Что-то не работает');
        }
    }
}

chooseOptExpenses();

// let i = 0;

// while(i < 2) {
//     let expen = prompt('Введите обязательную статью расходов в этом месяце', ''),
//         price = prompt('Во сколько обойдется?', '');

//     if ((typeof(expen)) === "string" && (typeof(expen) != null && (typeof(price) != null) && expen != '' && price != '' && expen.length < 50)) {
//         console.log('Done');
//         appData.expenses[expen] = price;
//     } else {
//         i = 0;
//     }
//     i++;
// }


// let i = 0;

// do {
//     i++;

//     let expen = prompt('Введите обязательную статью расходов в этом месяце', ''),
//         price = prompt('Во сколько обойдется?', '');

//     if ((typeof(expen)) === "string" && (typeof(expen) != null && (typeof(price) != null) && expen != '' && price != '' && expen.length < 50)) {
//         console.log('Done');
//         appData.expenses[expen] = price;
//     } else {
//         i = 0;
//     }
// } while (i < 2)

