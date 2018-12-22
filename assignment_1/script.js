'use strict';

let money = +prompt('Ваш бюджет на месяц?', ''),
    time = prompt('Введите дату в формате YYYY-MM-DD', '');

let appData = {
    budget: money,
    timeDate: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false

};


// appData.expenses.expen = price;
// appData.expenses.expen_2 = price_2;

// console.log(appData);

// for(let i = 0; i < 2; i++) {
//     let expen = prompt('Введите обязательную статью расходов в этом месяце', ''),
//         price = prompt('Во сколько обойдется?', '');

//     if ((typeof(expen)) === "string" && (typeof(expen) != null && (typeof(price) != null) && expen != '' && price != '' && expen.length < 50)) {
//         console.log('Done');
//         appData.expenses[expen] = price;
//     } else {
//         i = 0;
//     }
// }

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


let i = 0;

do {
    i++;

    let expen = prompt('Введите обязательную статью расходов в этом месяце', ''),
        price = prompt('Во сколько обойдется?', '');

    if ((typeof(expen)) === "string" && (typeof(expen) != null && (typeof(price) != null) && expen != '' && price != '' && expen.length < 50)) {
        console.log('Done');
        appData.expenses[expen] = price;
    } else {
        i = 0;
    }
} while (i < 2)

appData.moneyPerDay = appData.budget / 30;
console.log(appData.moneyPerDay);

if(appData.moneyPerDay < 100 ) {
    console.log('Мин доход');
} else if(appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log('Ср доход');
} else if(appData.moneyPerDay > 2000) {
    console.log('Высокий доход')
} else {
    console.log('Ошибка')
}
