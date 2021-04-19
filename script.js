'use strict';

let isNumber = function (number) {
  return !isNaN(parseFloat(number)) && isFinite(number);
};

let getStart = document.getElementById('start'),
cancelBtn = document.querySelector('#cancel'),
  getPlus = document.getElementsByTagName('button'),
  incomePlus = getPlus[0],
  expensesPlus = getPlus[1],
  getCheck = document.querySelector('#deposit-check'),
  getIncome = document.querySelectorAll('.additional_income-item'),
  getValue = document.querySelectorAll('.additional_income-value')[0],
  getMonth = document.getElementsByClassName('budget_month-value')[0],
  getDay = document.getElementsByClassName('budget_day-value')[0],
  expensesMounthValue = document.getElementsByClassName('expenses_month-value')[0],
  getResultTotal = document.getElementsByClassName('result-total')[2],
  additionalincome = document.getElementsByClassName('result-total')[3],
  additionalExpenses = document.getElementsByClassName('result-total')[4],
  additionalincomePeriod = document.getElementsByClassName('result-total')[5],
  additionaltargetMonth = document.getElementsByClassName('result-total')[6],
  expensesItem = document.querySelectorAll('.expenses-items'),
  incomeItem = document.querySelectorAll('.income-items'),
  getAdditionalValue = document.querySelector('.additional_expenses-value'),
  getAdditionalItem = document.querySelector('.additional_expenses-item'),
  getDepositAmount = document.querySelector('.deposit-amount'),
  getDepositPersent = document.querySelector('.deposit-percent'),
  getTargetAmount = document.querySelector('.target-amount'),
  getSalary = document.querySelector('.salary-amount'),
  periodSelect = document.querySelector('.period-select'),
  periodAmount = document.querySelector('.period-amount'),
  inputText = document.querySelectorAll("input[type='text']"),
  incomePeriodValue = document.querySelector('.income_period-value'),
  getPersent = document.querySelector('.deposit-percent');




let appData = {
  budget: 0,
  budgetDay: 0,
  budgetMonth: 0,
  income: {},
  incomeMonth:0,
  addIncome: [],
  expenses: {},
  addExpenses: [],
  expensesMonth: 0,
  deposit: false,
  parcentDeposit: 0,
  moneyDeposit: 0, 
  start:function () {
   
    this.budget = +getSalary.value;
    appData.getExpenses();
    appData.getIncomeItem();
    appData.getExpensesMonth();
    appData.getAddExpenses();
    appData.getAddIncome();
    appData.calcSavedMoney();
    appData.getBudget();
    appData.showResult();

    getStart.disabled = true;
    getStart.style.display = 'none';
        
    cancelBtn.disabled = false;
    cancelBtn.style.display = 'block';

        incomePlus.disabled = true;
        expensesPlus.disabled = true;

        let inputText = document.querySelectorAll("input[type='text']");

        inputText.forEach(function (element) {
            element.disabled = true;
        });

  },
  reset() {

    this.income = {};
    this.addIncome = [];
    this.expenses = {};
    this.addExpenses = [];
    this.incomeMonths = 0;
    this.expensesMonth = 0;
    this.budget = 0;
    this.budgetDay = 0;
    this.budgetMonth = 0;
    this.deposit = false;
    this.percentDeposit = 0;
    this.moneyDeposit = 0;

    incomePeriodValue.value = 0;
    periodSelect.value = 1;
    periodAmount.textContent = '1';

    cancelBtn.style.display = 'none';
    
    getStart.disabled = false;
    getStart.style.display = 'block';
   
    incomePlus.disabled = false;
    expensesPlus.disabled = false;

    inputText = document.querySelectorAll("input[type='text']");

    inputText.forEach(function (element) {
        element.disabled = false;
        element.value = '';
    });

    for (let inputNumber = 1; inputNumber < incomeItem.length; inputNumber++) {
        if (incomeItem.length > 1) {
          incomeItem[inputNumber].remove();
        }
    }

    for (let inputNumber = 1; inputNumber < expensesItem.length; inputNumber++) {
        if (expensesItem.length > 1) {
          expensesItem[inputNumber].remove();
        }
    }
},

  checkStartBtn: function () {
    if (!isNumber(getSalary.value) || +getSalary.value === 0) {
      getStart.disabled = true;
    } else {
      getStart.disabled = false;
    }
  },
  showResult: function () {

    getMonth.value = this.budgetMonth;
    getDay.value = Math.ceil(this.budgetDay);
    expensesMounthValue.value = this.expensesMonth;
    getAdditionalValue.value = this.addExpenses.join(', ');
    getValue.value = this.addIncome.join(', ');
    additionaltargetMonth.value = Math.ceil(this.getTargetMonth()); 
    incomePeriodValue.value = this.calcSavedMoney();
    periodSelect.addEventListener('change', function () {
      incomePeriodValue.value = appData.calcSavedMoney();
  });
  },
  addExpensesBlock: function () {
   
    let cloneExpensesItem = expensesItem[0].cloneNode(true);
    expensesItem[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);
     expensesItem = document.querySelectorAll('.expenses-items');
    if (expensesItem.length === 3) {
      expensesPlus.style.display = 'none';
    } 
  
  },
  getExpenses: function() {
    expensesItem.forEach(function(item) {
      let getExpensesTitle = item.querySelector('.expenses-title').value;
      let getExpensesAmount = item.querySelector('.expenses-amount').value;
       if(getExpensesTitle !== '' && getExpensesAmount !== '') {
         appData.expenses[getExpensesTitle] = getExpensesAmount;
      }
      
    });

  },
  addIncomeItemBlock: function () {
    let cloneIncomeItem = incomeItem[0].cloneNode(true);
    incomeItem[0].parentNode.insertBefore(cloneIncomeItem, incomePlus);
    incomeItem = document.querySelectorAll('.income-items');
    if (incomeItem.length === 3) {
      incomePlus.style.display = 'none';
    }
  },
  getIncomeItem: function () {
    incomeItem.forEach(function (item) {
      let getincomeTitle = item.querySelector('.income-title').value;
      let getIncomeAmount = item.querySelector('.income-amount').value;
      if (getincomeTitle !== '' && getIncomeAmount !== '') {
        appData.income[getincomeTitle] = getIncomeAmount;
      
      }
    });
    for (let key in appData.income) {
      appData.incomeMonth += +appData.income[key];
    }
  },
  getAddExpenses: function() {
    let addExpenses = getAdditionalItem.value.split(',');
    addExpenses.forEach(function (item) {
      item = item.trim();
      if (item !== '') {
        appData.addExpenses.push(item);
      }
    });
  },
  getAddIncome: function () {
    getIncome.forEach(function(item) {
      let itemValue = item.value.trim();
      if (itemValue !== '') {
        appData.addIncome.push(itemValue);
      }
    });
  },
  
  getExpensesMonth: function () {
      for (let key in appData.expenses) {
          this.expensesMonth += +this.expenses[key];
    }
    return this.expensesMonth;
  },
  getBudget: function () {
      this.budgetMonth = this.budget  + this.incomeMonth - this.expensesMonth;
      this.budgetDay = Math.floor(this.budgetMonth / 30);
  },
  
  getTargetMonth: function () {
      return  getTargetAmount.value / this.budgetMonth; 
  },
  getStatusIncome: function () {
  if (this.budgetDay <= 300) {
      return('К сожалению у вас уровень дохода ниже среднего!');
  } else if (this.budgetDay <= 800) {
      return('У вас средний уровень дохода!');
  } else if(this.budgetDay >= 1200) {
      return('У вас высокий уровень дохода!');
  } else {
    return ('Что то пошло не так');
      }
  }, 
  // getInfoSDeposit: function () {
  //   appData.deposit = confirm('Есть ли у вас депозит в банке?');
  //     if (appData.deposit) {
  //         do {
  //             appData.parcentDeposit = prompt("процент?", "10");
  //         } while (!isNumber(appData.parcentDeposit));
          
  //         do {
  //             appData.moneyDeposit = prompt("сумма заложена?", 2000);
  //         } while (!isNumber(appData.moneyDeposit));
  //     }
  // },
  calcSavedMoney: function () {
      return this.budgetMonth * Number(periodSelect.value);
  },
  rangeHandler: function () {
        periodAmount.innerText = periodSelect.value;
    },
};
window.onload = function () {
  getStart.disabled = true;
};
getSalary.addEventListener('input', appData.checkStartBtn);
getStart.addEventListener('click', appData.start.bind(appData));
cancelBtn.addEventListener('click', appData.reset.bind(appData));
expensesPlus.addEventListener('click', appData.addExpensesBlock);
incomePlus.addEventListener('click', appData.addIncomeItemBlock);
periodSelect.addEventListener('input', appData.rangeHandler);



// if (appData.getTargetMonth() > 0) {
//   console.log('Цель  будет достигнута за ' + Math.ceil(appData.getTargetMonth()) + ' месяцев ');
// } else {
//   console.log('Цель не будет достигнута');
// }






// for (let key in appData){
//   console.log('Наша программа включает в себя данные: ' + key + ' - ' + appData[key]);
// }