"use strict";
 
const buttonStart = document.getElementById('start');
const buttonCancel = document.getElementById('cancel');
const btnPlus1 = document.getElementsByTagName('button')[0];
const btnPlus2 = document.getElementsByTagName('button')[1];
const checkBox = document.querySelector('#deposit-check');
const additionalIncomeItem = document.querySelectorAll('.additional_income-item');

const getValue = document.querySelectorAll('.additional_income-value')[0];
const getMonth = document.getElementsByClassName('budget_month-value')[0];
const getDay = document.getElementsByClassName('budget_day-value')[0];
const expensesMounthValue = document.getElementsByClassName('expenses_month-value')[0];

const getResultTotal = document.getElementsByClassName('result-total')[2];
const additionalincome = document.getElementsByClassName('result-total')[3];
const additionalExpenses = document.getElementsByClassName('result-total')[4];
const additionalincomePeriod = document.getElementsByClassName('result-total')[5];
const additionaltargetMonth = document.getElementsByClassName('result-total')[6];

 const expensesItem = document.querySelectorAll('.expenses-items');
 const incomeItem = document.querySelectorAll('.income-items');
 const getAdditionalValue = document.querySelector('.additional_expenses-value');
 const getAdditionalItem = document.querySelector('.additional_expenses-item');
 const getDepositAmount = document.querySelector('.deposit-amount');
 const getDepositPersent = document.querySelector('.deposit-percent');
 const getTargetAmount = document.querySelector('.target-amount');
 const getSalary = document.querySelector('.salary-amount');

 const periodAmount = document.querySelector('.period-amount');
 const incomePeriodValue = document.querySelector('.income_period-value');
 const getPersent = document.querySelector('.deposit-percent');

const periodSelect = document.querySelector('.period-select');



// let isNumber = function (n) {
//   return !isNaN(parseFloat(n)) && isFinite(n);
// };

// let money,
//  start = function () {
//         do {
//       money = prompt("Доход за месяц?", 50000);
//         } while (!isNumber(money));
//     };
  
// start();

// let appData = {
//     budgetDay : 0,
//     budgetMonth : 0, 
//     expensesMonth : 0, 
//     income : {},
//     addIncome : [],
//     expenses : {},
//     addExpenses : [],
//     deposit : false,
//     percentDeposit:0,
//     moneyDeposit:0,
//     mission : 500000,
//     period : 10,
//     budget : money,
    
//     getExpensesMonth : () => {
       
//           for (let key in appData.expenses) {
//                 console.log(appData.expensesMonth += +appData.expenses[key]);
//           }
      
//     },

//     getBudget : function () {
//         appData.budgetMonth = appData.budget - appData.expensesMonth;
//         appData.budgetDay  = Math.floor(appData.budgetMonth / 30);

//        console.log(Math.floor(appData.budgetDay) + " Доход в день");
    
//     },

//     getTargetMonth : function () {
//         if ((appData.mission / appData.getBudget) <= 0) {
//           console.log("Цель не будет достигнута");
//         } else if ((appData.mission / appData.getBudget) > 0) {
//           console.log("Цель будет достигнута");
//         }
      
//     },

//     getStatusIncome : function () {
//         if (appData.budgetDay >= 1200) {
//           return ("У вас высокий уровень дохода");
//         } else if (appData.budgetDay >= 600 && appData.budgetDay < 1200) {
//           return ("У вас средний уровень дохода");
//         } else if (appData.budgetDay < 600 && appData.budgetDay >= 0) {
//           return ("К сожалению у вас уровень дохода ниже среднего");
//         } else {
//           return ("Что то пошло не так");
//         }
//     },
        
//     asking : function () {
//         if(confirm('Есть доп заработок?')) {
//             let itemIncome;
//             do { 
//                  itemIncome = prompt('Доп заработок?', 'Шулай');
//             } while (isNumber(itemIncome));

//             let cashIncome;
//             do {
//              cashIncome = prompt('Заработко от этого', 5000);
//             } while (!isNumber(cashIncome));

//             appData.income[itemIncome] = cashIncome;
//         }
//         let addExpenses = prompt(" Перечислите возможные расходы за рассчитываемый период через запятую", "прк,ку,вы");
//         appData.addExpenses = addExpenses.split(", ");
//         appData.deposit = confirm("Есть ли у вас депозит в банке?");
//         let sum = 0;
//         for (let i = 0; i < 2; i++) {
//           let ItemExpenses;
//             do {
//                  ItemExpenses = prompt("Введите обязательную статью расходов", "");
//                } while (isNumber(ItemExpenses));
         
   
//           sum += +prompt("Во сколько это обойдется?");
//           while (!isNumber(sum)) {
//             sum += +prompt("Во сколько это обойдется?");
//           }
//           appData.expenses[ItemExpenses] = sum;
//         }
       
        
//     },
//     getInfoSDeposit: function () {
//           if(appData.deposit) {
//               do {
//             appData.percentDeposit = prompt('Годовой процент?', 10);
//               } while (!isNumber(appData.percentDeposit));

//               do {
//             appData.moneyDeposit = prompt('Какая сумма заложена?', 5000);
//               } while (!isNumber(appData.moneyDeposit));
//           }
//     }, 
//     calcSavedMoney: function() {
//         return appData.budgetMonth * appData.period;
//     }

// };
// appData.asking();
// appData.getInfoSDeposit();
// appData.getExpensesMonth();
// appData.getBudget();
// appData.getTargetMonth();
// console.log(appData.getStatusIncome());

// for (let key in appData) {
//     console.log(key + 'и' + appData[key]);
// }

