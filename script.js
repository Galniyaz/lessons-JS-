"use strict";

let isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

let money,
 start = function () {
        do {
      money = prompt("Доход за месяц?", 50000);
        } while (!isNumber(money));
    };
  
start();

let appData = {
    budgetDay : 0,
    budgetMonth : 0, 
    expensesMonth : 0, 
    income : {},
    addIncome : [],
    expenses : {},
    addExpenses : [],
    deposit : false,
    mission : 500000,
    period : 10,
    budget : money,
    
    getExpensesMonth : () => {
       
          for (let key in appData.expenses) {
                console.log(appData.expensesMonth += +appData.expenses[key]);
          }
      
    },

    getBudget : function () {
        appData.budgetMonth = appData.budget - appData.expensesMonth;
        appData.budgetDay  = Math.floor(appData.budgetMonth / 30);

       console.log(Math.floor(appData.budgetDay) + " Доход в день");
    
    },

    getTargetMonth : function () {
        if ((appData.mission / appData.getBudget) <= 0) {
          console.log("Цель не будет достигнута");
        } else if ((appData.mission / appData.getBudget) > 0) {
          console.log("Цель будет достигнута");
        }
      
    },

    getStatusIncome : function () {
        if (appData.budgetDay >= 1200) {
          return ("У вас высокий уровень дохода");
        } else if (appData.budgetDay >= 600 && appData.budgetDay < 1200) {
          return ("У вас средний уровень дохода");
        } else if (appData.budgetDay < 600 && appData.budgetDay >= 0) {
          return ("К сожалению у вас уровень дохода ниже среднего");
        } else {
          return ("Что то пошло не так");
        }
    },
        
    asking : function () {

        let addExpenses = prompt(" Перечислите возможные расходы за рассчитываемый период через запятую", "прк,ку,вы");
        appData.addExpenses = addExpenses.split(", ");
        appData.deposit = confirm("Есть ли у вас депозит в банке?");
        let sum = 0;
        for (let i = 0; i < 2; i++) {
          

         let ItemExpenses = prompt("Введите обязательную статью расходов", "");
   
          sum += +prompt("Во сколько это обойдется?");
          while (!isNumber(sum)) {
            sum += +prompt("Во сколько это обойдется?");
          }
          appData.expenses[ItemExpenses] = sum;
        }
       
        
    }

};
appData.asking();
appData.getExpensesMonth();
appData.getBudget();
appData.getTargetMonth();
console.log(appData.getStatusIncome());

for (let key in appData) {
    console.log(key + 'и' + appData[key]);
}


