"use strict";


const buttonStart = document.getElementById('start');
const buttonCancel = document.getElementById('cancel');
const btnPlus1 = document.getElementsByTagName('button')[0];
const btnPlus2 = document.getElementsByTagName('button')[1];

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
// incomeItem.forEach((item) => {
//     console.log(item);
// });
// console.log(incomeItem);

 const getAdditionalValue = document.querySelector('.additional_expenses-value');
 
 const getAdditionalItem = document.querySelector('.additional_expenses-item');


 const getTargetAmount = document.querySelector('.target-amount');
 const getSalary = document.querySelector('.salary-amount');

 const periodAmount = document.querySelector('.period-amount');
 const incomePeriodValue = document.querySelector('.income_period-value');

 const checkBox = document.querySelector('#deposit-check');
 const getDepositPersent = document.querySelector('.deposit-percent');
 const getDepositAmount = document.querySelector('.deposit-amount');
 const depositBank = document.querySelector('.deposit-bank');

const periodSelect = document.querySelector('.period-select');
const inputText = document.querySelectorAll("input[type='text']");
const pluski = document.querySelectorAll('.btn_plus');
// const cont = item => {
//     console.log(item);
//     const tr =  item.className;
//     console.log(tr);
//     const plus = item.querySelector(`.${tr}`);   
//     console.log(plus);
//     };
//     pluski.forEach(cont);



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

      this.getExpInc();
      this.getExpensesMonth();
      this.getAddExpenses();
      this.getAddIncome();
      this.depositHandler();
      
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
    // let cloneExpensesItemsclone = cloneExpensesItems.querySelectorAll('input');
    // cloneExpensesItemsclone.forEach((item) => {
    //     item.value = '';
    // });
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

// addExpIncBlock() {
//     const count = item => {
//         const startStr = item.className.split('-')[0];
        
     
//         const cloneItems = item.querySelector(`.${startStr}-items`);
//         cloneItems.cloneNode(true).parentNode.insertBefore(cloneItems.cloneNode(true), this.plus);
//     };

//     incomeItem.forEach(count);
//     expensesItems.forEach(count);

// }
// getExpensesItems() {
//     const _this = this;
//     expensesItems.forEach((item) => {
//         let itemExpense = item.querySelector('.expenses-title').value;
//         let cashExpence = item.querySelector('.expenses-amount').value;
//         if (itemExpense !== '' && cashExpence !== '') {
//             _this.expenses[itemExpense] = cashExpence;
//         }
//     });
// }

// getIncome() {
//     const _this = this;
//     incomeItem.forEach((item) => {
//         let itemIncome = item.querySelector('.income-title').value;
//         let cashIncome = item.querySelector('.income-amount').value;
//         if (itemIncome !== '' && cashIncome !== '') {
//             _this.income[itemIncome] = cashIncome;  
//         } 
//     });
//     for (let key in _this.income) {
//         this.incomeMonth += +this.income[key];
//     }
// }

getExpInc() {
    const _this = this;
    const count = item => {
        const startStr = item.className.split('-')[0];
        console.log(startStr);
        const itemIncome = item.querySelector(`.${startStr}-title`).value;
        const cashIncome = item.querySelector(`.${startStr}-amount`).value;
        if (itemIncome !== '' && cashIncome !== '') {
            _this[startStr][itemIncome] = cashIncome;  
        }  
    };

    incomeItem.forEach(count);
    expensesItems.forEach(count);
    
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

// getAddIncExp() {
//     const _this = this;
//     let addExpenses = getAdditionalItem.value.split(',');
//     const count = item => {
//         const startStr = item.value;
//         _this.addExpenses.push(item[startStr]);
//     };

//     addExpenses.forEach(count);
//     additionalIncomeItem.forEach(count);
// }

getExpensesMonth() {
   
    for (let key in this.expenses) {
      this.expensesMonth += +this.expenses[key];
    }
    return this.expensesMonth;
}

getBudget() {
    const monthDeposit = this.moneyDeposit * (this.percentDeposit / 100);
    this.budgetMonth = Number(this.budget) + Number(this.incomeMonth) - Number(this.expensesMonth) + Number(monthDeposit);
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
getInfoDeposit() {
    if(this.deposit) {
        this.percentDeposit = getDepositPersent.value;
        this.moneyDeposit = getDepositAmount.value;
    }
}

changePercent() {
    const valueSelect = this.value;
    if(valueSelect === 'other') {
        valueSelect.value = '';
        getDepositPersent.style.display = 'inline-block';
        valueSelect.disabled = false;
        getDepositPersent.addEventListener('change', appData.provValue.bind(appData));
        
    } else {
        getDepositPersent.style.display = 'none';
        getDepositPersent.value = valueSelect;
    }
}
provValue() {
    if(!isNumber(getDepositPersent.value) || getDepositPersent.value > 100 || getDepositPersent.value < 1) {
        alert('ВВедите число в процент');
        buttonStart.disabled = true;
        
    } else {
       
        buttonStart.disabled = false;
    }
}

depositHandler() {
    if(checkBox.checked) {
        getDepositAmount.style.display = 'inline-block';
        depositBank.style.display = 'inline-block';
        this.deposit = true;
        depositBank.addEventListener('change', this.changePercent);
    } else {
        getDepositAmount.style.display = 'none';
        depositBank.style.display = 'none';
        getDepositAmount.value = '';
        depositBank.value = '';
        this.deposit = false;
        depositBank.removeEventListener('change', this.changePercent);
    }
  
}
eventListeners() {
getSalary.addEventListener('input', this.checkStartBtn);
buttonStart.addEventListener('click', this.start.bind(this));  
buttonCancel.addEventListener('click', this.reset.bind(this)); 
placeholderIncome.addEventListener('input',this.btnPlace);
btnPlus1.addEventListener('click', this.addIncomeBlock);
btnPlus2.addEventListener('click', this.addExpensesBlock);
// pluski.addEventListener('click', appData.addExpIncBlock);
periodSelect.addEventListener('input', this.getRange);
checkBox.addEventListener('change',this.depositHandler.bind(this));
}

}

const appData = new AppData();
appData.eventListeners();





