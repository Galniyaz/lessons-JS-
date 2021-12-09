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
const inputText = document.querySelectorAll("input[type='text']");


let isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

window.onload = function () {
    buttonStart.disabled = true;
    };
    
    class AppData {
        constructor () {

            this.budgetDay = 0;
            this.budgetMonth = 0; 
            this.expensesMonth = 0; 
            this.income = {};
            this.incomeMonth = 0;
            this.addIncome = [];
            this.expenses = {};
            this.addExpenses = [];
            this.deposit = false;
            this.percentDeposit=0;
            this.moneyDeposit=0;
            this.budget = 0;
        
        }

start() {
       
 
    this.budget = +getSalary.value;

      this.getExpensesItems();
      this.getIncome();
      this.getExpensesMonth();
    //   this.getTargetMonth();
      this.getAddExpenses();
      this.getAddIncome();
      this.getBudget();
      this.showResult();

      buttonStart.disabled = true;
      buttonStart.style.display = 'none';
  
      buttonCancel.disabled = false;
      buttonCancel.style.display = 'block';
  
      inputText.forEach(function (element) {
          element.disabled = true;
      });
  
}

reset() {

    this.budgetDay = 0;
    this.budgetMonth = 0; 
    this.expensesMonth = 0; 
    this.income = {};
    this.incomeMonth = 0;
    this.addIncome = [];
    this.expenses = {};
    this.addExpenses = [];
    this.deposit = false;
    this.percentDeposit=0;
    this.moneyDeposit=0;
    this.budget = 0;
   
    buttonCancel.style.display = 'none';
    buttonStart.disabled = false;
    buttonStart.style.display = 'block';
    
    inputText.forEach(function (element) {
        element.disabled = false;
        element.value = '';
    });

    
}
checkStartBtn() {
    if (!isNumber(getSalary.value) || +getSalary.value === 0) {
        buttonStart.disabled = true;
    } else {
        buttonStart.disabled = false;
    }
}

showResult() {
    const _this = this;
    getMonth.value = this.budgetMonth;
    getDay.value = this.budgetDay;
    expensesMounthValue.value = this.expensesMonth;
    getAdditionalValue.value = this.addExpenses.join(', ');
    additionalincome.value = this.addIncome.join(', ');
    additionaltargetMonth.value = Math.ceil(this.getTargetMonth());
    additionalincomePeriod.value = this.calcSavedMoney();
    periodSelect.addEventListener('change', function(){
        additionalincomePeriod.value = _this.calcSavedMoney();
    }); 
}

addExpensesBlock() {
    let cloneExpensesItems = expensesItems[0].cloneNode(true);
    expensesItems[0].parentNode.insertBefore(cloneExpensesItems, btnPlus2);
    expensesItems = document.querySelectorAll('.expenses-items');
    let cloneExpensesItemsclone = cloneExpensesItems.querySelectorAll('input');
    cloneExpensesItemsclone.forEach((item) => {
        item.value = '';
    });
    if(expensesItems.length === 3) {
        btnPlus2.style.display = 'none';
    }
}

addIncomeBlock() {
    
    let cloneIncomeBlocks = incomeItem[0].cloneNode(true);
    incomeItem[0].parentNode.insertBefore(cloneIncomeBlocks, btnPlus1);
    incomeItem = document.querySelectorAll('.income-items');
    if(incomeItem.length === 3) {
        btnPlus1.style.display = 'none';
    }
}

getExpensesItems() {
    const _this = this;
    expensesItems.forEach((item) => {
        let itemExpense = item.querySelector('.expenses-title').value;
        let cashExpence = item.querySelector('.expenses-amount').value;
        if (itemExpense !== '' && cashExpence !== '') {
            _this.expenses[itemExpense] = cashExpence;
        }
    });
}

getIncome() {
    const _this = this;
    incomeItem.forEach((item) => {
        let itemIncome = item.querySelector('.income-title').value;
        let cashIncome = item.querySelector('.income-amount').value;
        if (itemIncome !== '' && cashIncome !== '') {
            _this.income[itemIncome] = cashIncome;  
        } 
    });
    for (let key in _this.income) {
        this.incomeMonth += +this.income[key];
    }
}

getAddExpenses() {
    const _this = this;
    let addExpenses = getAdditionalItem.value.split(',');
    addExpenses.forEach((item) => {
        if (item !== '') {
            _this.addExpenses.push(item);
        }
  
    });

}

getAddIncome() {
    const _this = this;
    additionalIncomeItem.forEach((item) => {
        let itemValue = item.value;
        _this.addIncome.push(itemValue);
    });
}

getExpensesMonth() {
   
    for (let key in this.expenses) {
      this.expensesMonth += +this.expenses[key];
    }
    return this.expensesMonth;
}

getBudget() {
    this.budgetMonth = Number(this.budget) + Number(this.incomeMonth) - Number(this.expensesMonth);
    this.budgetDay  = Math.floor(this.budgetMonth / 30);

}

getTargetMonth() {
    return getTargetAmount.value / this.budgetMonth; 
}

calcSavedMoney() {
    return Number(this.budgetMonth) * Number(periodSelect.value);
}

getRange() {
     periodAmount.innerHTML = periodSelect.value;
}

btnPlace() {
    placeholderIncome.value = placeholderIncome.value.replace(/[^а-яА-ЯёЁ.,():"'|;\- ]/g,'');
}

eventListeners() {
getSalary.addEventListener('input', appData.checkStartBtn);
buttonStart.addEventListener('click', appData.start.bind(appData));  
buttonCancel.addEventListener('click', appData.reset.bind(appData)); 
placeholderIncome.addEventListener('input',appData.btnPlace);
btnPlus1.addEventListener('click', appData.addIncomeBlock);
btnPlus2.addEventListener('click', appData.addExpensesBlock);
periodSelect.addEventListener('input', appData.getRange);


}

}

const appData = new AppData();
appData.eventListeners();





