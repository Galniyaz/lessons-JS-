"use strict";

let income = "Фриланс";

let money = +prompt("Доход за месяц?", "");
console.log(money);

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



let expenses1 = prompt("Введите обязательную статью расходов", "");
console.log(expenses1.split(", "));
let amount1 = +prompt("Во сколько это обойдется?", "");
console.log(amount1);
let expenses2 = prompt("Введите обязательную статью расходов", "");
console.log(expenses2.split(", "));
let amount2 = +prompt("Во сколько это обойдется?", "");
console.log(amount2);

function getExpensesMonth() {
  console.log(amount1 + amount2);
}
getExpensesMonth();

const getAccumulatedMonth = function () {
return (money - (amount1 + amount2));
};

let accumulatedMonth = getAccumulatedMonth();


function getTargetMonth() {
  console.log(Math.ceil(mission / accumulatedMonth));
}
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