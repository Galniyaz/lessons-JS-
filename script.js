'use strict';


let money;

let start = function () {
  do {
    money = prompt('Ваш месячный доход?', 50000);
  }
    while (isNaN(money) || money === '' || money === null);

};

start();

let appData = {
    budget: money,
    budgetDay: 0,
    budgetMonth: 0,
    income: {},
    addIncome: [],
    expenses: {},
    addExpenses: [],
    expensesMonth: 0,
    deposit: false,
    parcentDeposit: 0,
    moneyDeposit: 0,
    mission: 500000,
    period: 12,
  asking: function () {

    let addExpenses = prompt('Перечислите всевозможные расходы через запятую?');
    appData.addExpenses = addExpenses.toLocaleLowerCase().split(',');
    appData.deposit = confirm('Есть ли у вас депозит в банке?');
    for (let i = 0; i < 2; i++) {
        
      let ItemExpenses = prompt('Введите обязательную статью расходов', 'Ботинки к лыжам');
      let sum;
      do {
        sum = prompt('Во сколько это обойдётся?', 5000);
      }
      while (isNaN(sum) || sum === '' || sum === null);
      
    
            appData.expenses[ItemExpenses] = sum;

        }   
    },
    getExpensesMonth: function () {
        for (let key in appData.expenses) {
            appData.expensesMonth += +appData.expenses[key];
        }
    },
    getBudget: function () {
        appData.budgetMonth = appData.budget - appData.expensesMonth;
        appData.budgetDay = Math.floor(appData.budgetMonth / 30);
    },
    
    getTargetMonth: function () {
        return  appData.mission / appData.budgetMonth; 
    },
    getStatusIncome: function () {
    if (appData.budgetDay <= 300) {
        return('К сожалению у вас уровень дохода ниже среднего!');
    } else if (appData.budgetDay <= 800) {
        return('У вас средний уровень дохода!');
    } else if(appData.budgetDay >= 1200) {
        return('У вас высокий уровень дохода!');
    } else {
      return ('Что то пошло не так');
        }
    }, 
  
};    

appData.asking();
appData.getExpensesMonth();
appData.getBudget();

console.log('Расходы за месяц: ' + appData.expensesMonth); 

if (appData.getTargetMonth() > 0) {
    console.log('Цель  будет достигнута за ' + Math.ceil(appData.getTargetMonth()) + ' месяцев ');
} else {
    console.log('Цель не будет достигнута');
}

console.log(appData.getStatusIncome());




for (let key in appData){
    console.log('Наша программа включает в себя данные: ' + key + ' - ' + appData[key]);
}