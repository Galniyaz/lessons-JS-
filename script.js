"use strict";




const buttonStart = document.getElementById('start');
const buttonCancel = document.getElementById('cancel');
const btnPlus1 = document.getElementsByTagName('button')[0];
const btnPlus2 = document.getElementsByTagName('button')[1];
const checkBox = document.querySelector('#deposit-check');
const additionalIncomeItem = document.querySelectorAll('.additional_income-item');

let placeholderIncome = document.querySelector('.income-items .income-title');

const getValue = document.querySelectorAll('.additional_income-value')[0];
const getMonth = document.getElementsByClassName('budget_month-value')[0];
const getDay = document.getElementsByClassName('budget_day-value')[0];
const expensesMounthValue = document.getElementsByClassName('expenses_month-value')[0];

const getResultTotal = document.getElementsByClassName('result-total')[2];
const additionalincome = document.getElementsByClassName('result-total')[3];

const additionalExpenses = document.getElementsByClassName('result-total')[4];
const additionalincomePeriod = document.getElementsByClassName('result-total')[5];

const additionaltargetMonth = document.getElementsByClassName('result-total')[6];

let expensesItems = document.querySelectorAll('.expenses-items');
 console.log(expensesItems);
let incomeItem = document.querySelectorAll('.income-items');
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



let isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

if (getSalary.value === '') {
    buttonStart.disabled = true;
} else {
    buttonStart.disabled = false;
}
 

let appData = {
    budgetDay : 0,
    budgetMonth : 0, 
    expensesMonth : 0, 
    income : {},
    incomeMonth : 0,
    addIncome : [],
    expenses : {},
    addExpenses : [],
    deposit : false,
    percentDeposit:0,
    moneyDeposit:0,
    budget : 0,
    start:function () {
       
        appData.budget = +getSalary.value;

          appData.getExpensesItems();
          appData.getIncome();

        //   appData.getInfoSDeposit();

          appData.getExpensesMonth();
          appData.getTargetMonth();
          appData.getAddExpenses();
          appData.getAddIncome();
          appData.getBudget();
          appData.showResult();
        
    },
  
    getExpensesMonth : () => {
       
          for (let key in appData.expenses) {
               appData.expensesMonth += +appData.expenses[key];
          }
       
    },

    getBudget : function () {
        appData.budgetMonth = appData.budget + appData.incomeMonth - appData.expensesMonth;
        appData.budgetDay  = Math.floor(appData.budgetMonth / 30);

      Math.floor( appData.budgetDay + "Доход в день" );
    
    },

    getTargetMonth : function () {
        return getTargetAmount.value / appData.budgetMonth; 
 
      
    },

    // getStatusIncome : function () {
    //     if (appData.budgetDay >= 1200) {
    //       return ("У вас высокий уровень дохода");
    //     } else if (appData.budgetDay >= 600 && appData.budgetDay < 1200) {
    //       return ("У вас средний уровень дохода");
    //     } else if (appData.budgetDay < 600 && appData.budgetDay >= 0) {
    //       return ("К сожалению у вас уровень дохода ниже среднего");
    //     } else {
    //       return ("Что то пошло не так");
    //     }
    // },
    showResult: function () {
        getMonth.value = appData.budgetMonth;
        getDay.value = appData.budgetDay;
        expensesMounthValue.value = appData.expensesMonth;
        getAdditionalValue.value = appData.addExpenses.join(', ');
        additionalincome.value = appData.addIncome.join(', ');
        additionaltargetMonth.value = Math.ceil(appData.getTargetMonth());
        additionalincomePeriod.value = appData.calcSavedMoney();
     
    },
    addExpensesBlock: function () {
        // expensesItems.forEach(function (items) {
          
        //  let itemses  = items.querySelectorAll('input');
        //  for (let item of itemses) {
        //      console.log(item);
             
        //      item.value = '';
        //  }
        let cloneExpensesItems = expensesItems[0].cloneNode(true);

        expensesItems[0].parentNode.insertBefore(cloneExpensesItems, btnPlus2);
        expensesItems = document.querySelectorAll('.expenses-items');
        let cloneExpensesItemsclone = cloneExpensesItems.querySelectorAll('input');
        cloneExpensesItemsclone.forEach(function(item){
            item.value = '';
   
        });
       
        if(expensesItems.length === 3) {
            btnPlus2.style.display = 'none';
        }
          
      
       
    },
    addIncomeBlock: function () {
        
        let cloneIncomeBlocks = incomeItem[0].cloneNode(true);
        incomeItem[0].parentNode.insertBefore(cloneIncomeBlocks, btnPlus1);
        incomeItem = document.querySelectorAll('.income-items');
        if(incomeItem.length === 3) {
            btnPlus1.style.display = 'none';
        }
    },

    getExpensesItems: function () {
        expensesItems.forEach(function(item) {
            let itemExpense = item.querySelector('.expenses-title').value;
            let cashExpence = item.querySelector('.expenses-amount').value;
            if (itemExpense !== '' && cashExpence !== '') {
                appData.expenses[itemExpense] = cashExpence;
            }
        });
    },
    getIncome: function () {
        incomeItem.forEach(function(item) {
            let itemIncome = item.querySelector('.income-title').value;
            let cashIncome = item.querySelector('.income-amount').value;
            if (itemIncome !== '' && cashIncome !== '') {
                appData.income[itemIncome] = cashIncome;  
            }
            for (let key in appData.income) {
                appData.incomeMonth += +appData.income[key];
            }
        });
    },
    getAddExpenses: function () {
        let addExpenses = getAdditionalItem.value.split(',');
        addExpenses.forEach(function(item) {
            if (item !== '') {
                appData.addExpenses.push(item);
            }
      
        });
    
    },
    getAddIncome: function () {
        additionalIncomeItem.forEach(function(item) {
            let itemValue = item.value;
            appData.addIncome.push(itemValue);
        });
    },

    getRange: function () {
         periodAmount.innerHTML = periodSelect.value;
    },
    // getInfoSDeposit: function () {
    //     appData.deposit = confirm("Есть ли у вас депозит в банке?");
    //       if(appData.deposit) {
    //           do {
    //         appData.percentDeposit = prompt('Годовой процент?', 10);
    //           } while (!isNumber(appData.percentDeposit));

    //           do {
    //         appData.moneyDeposit = prompt('Какая сумма заложена?', 5000);
    //           } while (!isNumber(appData.moneyDeposit));
    //       }
    // }, 
    calcSavedMoney: function() {
        return appData.budgetMonth * periodSelect.value;
    },

    btnPlace: function() {
        placeholderIncome.value = placeholderIncome.value.replace(/[^а-яА-ЯёЁ.,():"'|;\- ]/g,'');
    }

};


buttonStart.addEventListener('click', appData.start);  


placeholderIncome.addEventListener('input',appData.btnPlace);

btnPlus1.addEventListener('click', appData.addIncomeBlock);
btnPlus2.addEventListener('click', appData.addExpensesBlock);
periodSelect.addEventListener('input', appData.getRange);


// for (let key in appData) {
//     console.log(key + ' и ' + appData[key]);
// }

