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
       
        buttonStart.disabled = true;
        buttonStart.style.display = 'none';

        buttonCancel.disabled = false;
        buttonCancel.style.display = 'block';

        inputText.forEach(function (element) {
            element.disabled = true;
        });

        this.budget = +getSalary.value;

          appData.getExpensesItems();
          appData.getIncome();
          appData.getExpensesMonth();
          appData.getTargetMonth();
          appData.getAddExpenses();
          appData.getAddIncome();
          appData.getBudget();
          appData.showResult();
        
    },
    checkStartBtn: function () {
        if (!isNumber(getSalary.value) || +getSalary.value === 0) {
            buttonStart.disabled = true;
        } else {
            buttonStart.disabled = false;
        }
    },
    
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
    
        
    },
  
    getExpensesMonth : () => {
       
          for (let key in this.expenses) {
            this.expensesMonth += +this.expenses[key];
          }
       
    },

    getBudget : function () {
        this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth;
        this.budgetDay  = Math.floor(this.budgetMonth / 30);

      Math.floor( this.budgetDay + "Доход в день" );
    
    },

    getTargetMonth : function () {
        return getTargetAmount.value / this.budgetMonth; 
 
      
    },


    showResult: function () {
        getMonth.value = this.budgetMonth;
        getDay.value = this.budgetDay;
        expensesMounthValue.value = this.expensesMonth;
        getAdditionalValue.value = this.addExpenses.join(', ');
        additionalincome.value = this.addIncome.join(', ');
        additionaltargetMonth.value = Math.ceil(this.getTargetMonth());
        additionalincomePeriod.value = this.calcSavedMoney();
     
    },
    addExpensesBlock: function () {
  
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
                this.expenses[itemExpense] = cashExpence;
            }
        });
    },
    getIncome: function () {
        incomeItem.forEach(function(item) {
            let itemIncome = item.querySelector('.income-title').value;
            let cashIncome = item.querySelector('.income-amount').value;
            if (itemIncome !== '' && cashIncome !== '') {
                this.income[itemIncome] = cashIncome;  
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

    calcSavedMoney: function() {
        return this.budgetMonth * periodSelect.value;
    },

    btnPlace: function() {
        placeholderIncome.value = placeholderIncome.value.replace(/[^а-яА-ЯёЁ.,():"'|;\- ]/g,'');
    }

};
window.onload = function () {
    buttonStart.disabled = true;
};
getSalary.addEventListener('input', appData.checkStartBtn);
buttonStart.addEventListener('click', appData.start.bind(appData));  
buttonCancel.addEventListener('click', appData.reset.bind(appData)); 


placeholderIncome.addEventListener('input',appData.btnPlace);

btnPlus1.addEventListener('click', appData.addIncomeBlock);
btnPlus2.addEventListener('click', appData.addExpensesBlock);
periodSelect.addEventListener('input', appData.getRange);



