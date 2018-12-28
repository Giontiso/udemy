'use strict';

let startBtn = document.getElementById('start'),
    budgetValue = document.getElementsByClassName('budget-value')[0],
    dayBudgetValue = document.getElementsByClassName('budget-value')[0],
    levelValue = document.getElementsByClassName('level-value')[0],
    expensesValue = document.getElementsByClassName('expenses-value')[0],
    optionaLexpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
    incomeValue = document.getElementsByClassName('income-value')[0],
    monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0],

    expensesItem = document.getElementsByClassName('expenses-item'),
	expensesBtn = document.getElementsByTagName('button')[0],
	optionalExpensesBtn = document.getElementsByTagName('button')[1],
    countBtn = document.getElementsByTagName('button')[2],
    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
	incomeItem = document.querySelector('.choose-income'),
	checkSavings = document.querySelector('#savings'),
	sumValue = document.querySelector('.choose-sum'),
    percentValue = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');

let money, time;

startBtn.addEventListener('click', function(){
    time = prompt('Введите дату в формате YYYY-MM-DD', '');
    money = +prompt('Ваш бюджет на месяц?', '');

    while(isNaN(money) || money == '' || money == null) {
        money = +prompt('Ваш бюджет на месяц?', '');
    }

    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
})


let appData = {
    budget: money,
    timeDate: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    detectDayBudget: function() {
        if(appData.money != '') {
            appData.moneyPerDay = appData.budget / 30;
            alert('Дневной бюджет: ' + appData.moneyPerDay);
        }
    },
    chooseExpenses: function() {
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
    },
    detectLevel: function() {
        if(appData.moneyPerDay < 100 ) {
            console.log('Мин доход');
        } else if(appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log('Ср доход');
        } else if(appData.moneyPerDay > 2000) {
            console.log('Высокий доход')
        } else {
            console.log('Ошибка')
        }
    },
    checkSaving: function() {
        if(appData.savings == true) {
            let save = +prompt('Сумма накоплений?', ''),
                percent = +prompt('Под какой процент?', '');
    
                appData.monthIncome = save/100/12*percent;
                alert('Доход в месяц с депозита: '+ appData.monthIncome);
        }
        
    },
    chooseOptExpenses: function() {
        for(let i = 0; i < 3; i++) {
            let binExpenses = prompt('Статья необязательных расходов?', '');
    
            if ((typeof(binExpenses)) === "string" && (typeof(binExpenses) != null && binExpenses != '' && binExpenses.length < 50)) {
                console.log('Done');
                appData.optionalExpenses[i] = binExpenses;
            } else {
                console.log('Что-то не работает');
            }
        }
    },
    chooseIncome: function() {
        let items = prompt('Что приносит доп доход', ''),
            dopItems = prompt('Что-то еще?', '');
                
            if(typeof(items) != 'string' || items == '' || (typeof(items) == null) || typeof(dopItems) != 'string' || dopItems == '' || (typeof(dopItems) == null)) {
                console.log('Не правильно введены данные', '')
            } else {
                appData.income = items.split(', ');
                appData.income.push(dopItems);
                appData.income.sort();
            }
            
            appData.income.forEach(function(item, i, mass) {
                console.log(item)
            });
    }
};


//  let arr = appData.income;

 for(let key in appData) {
     console.log(appData[key]);
 }



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

