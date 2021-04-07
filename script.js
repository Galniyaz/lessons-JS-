"use strict";

let isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};


let income = "Фриланс";

let money;




let start = function () {
  do {
    money = prompt("Доход за месяц?", "");
  } while (!isNumber(money));
};
start();




let mission = 500000; 

let deposit = confirm("Есть ли у вас депозит в банке?");
console.log(deposit);

let showTypeOf = function (data) {
  console.log(data, typeof (data));
};

showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

let addExpenses = prompt(" Перечислите возможные расходы за рассчитываемый период через запятую", "");
console.log(addExpenses.split(", "));



let expenses = [];

let getExpensesMonth = function getExpensesMonth() {
  let sum = 0;
  for (let i = 0; i < 2; i++) {
  
      expenses[i] = prompt("Введите обязательную статью расходов", "");
 
    sum += +prompt("Во сколько это обойдется?");
    while (!isNumber(sum)) {
      sum += +prompt("Во сколько это обойдется?");
    }
  }
  console.log(expenses);
  return sum;
};



let expensesAmount = getExpensesMonth();
console.log(expensesAmount);

let getAccumulatedMonth = function () {
return money - expensesAmount;
};

let accumulatedMonth = getAccumulatedMonth();


let getTargetMonth = function () {
  if ((mission / accumulatedMonth) <= 0) {
    console.log("Цель не будет достигнута");
  } else if ((mission / accumulatedMonth) > 0) {
    console.log("Цель будет достигнута");
  }

};
getTargetMonth();



let budgetDay = (accumulatedMonth / 30);
console.log(Math.floor(budgetDay) + " Доход в день");


let getStatusIncome = function () {
  if (budgetDay >= 1200) {
    return ("У вас высокий уровень дохода");
  } else if (budgetDay >= 600 && budgetDay < 1200) {
    return ("У вас средний уровень дохода");
  } else if (budgetDay < 600 && budgetDay >= 0) {
    return ("К сожалению у вас уровень дохода ниже среднего");
  } else {
    return ("Что то пошло не так");
  }
};

console.log(getStatusIncome());