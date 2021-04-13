'use strict';

let isNumber = function (n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  };

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
      if (confirm("есть ли доп заработок?")) {
            let itemIncome;
          do {
              itemIncome = prompt("Доп.заработок?", "Инвестор");
    
          } while (isNumber(itemIncome));
        
          
            let itemSum;
          do {
              itemSum = prompt("Прибыль?", "1000");
          } while (!isNumber(itemSum));
            
          appData.income[itemIncome] = itemSum;
      }
      let addExpenses = prompt("Перечислите всевозможные расходы через запятую?", "такси, интернет, коммуналка");
      
      appData.addExpenses = addExpenses;
     
     console.log(appData.addExpenses.replace(/(^|\s)\S/g, function(a) {return a.toUpperCase()}));
    appData.deposit = confirm('Есть ли у вас депозит в банке?');
    for (let i = 0; i < 2; i++) {
        let ItemExpenses;
      do {
        ItemExpenses = prompt('Введите обязательную статью расходов', 'Ботинки к лыжам');

    } while (isNumber(ItemExpenses));
        
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
    getInfoSDeposit: function () {
        if (appData.deposit) {
            do {
                appData.parcentDeposit = prompt("процент?", "10");
            } while (!isNumber(appData.parcentDeposit));
            
            do {
                appData.moneyDeposit = prompt("сумма заложена?", 2000);
            } while (!isNumber(appData.moneyDeposit));
        }
    },
    calcSavedMoney: function () {
        return appData.budgetMonth * appData.period;
    }
};    

appData.asking();
appData.getExpensesMonth();
appData.getBudget();
appData.getInfoSDeposit();
appData.calcSavedMoney();


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