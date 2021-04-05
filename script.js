"use strict";

let money = +prompt("Доход за месяц?", "");
console.log(money);
console.log(typeof money);

let addExpenses = prompt(" Перечислите возможные расходы за рассчитываемый период через запятую", "");
console.log(addExpenses);

let deposit = confirm("Есть ли у вас депозит в банке?");
console.log(deposit);

let expenses1 = prompt("Введите обязательную статью расходов", "");
console.log(expenses1.split(", "));
let amount1 = +prompt("Во сколько это обойдется?", "");
console.log(amount1);
let expenses2 = prompt("Введите обязательную статью расходов", "");
console.log(expenses2.split(", "));
let amount2 = +prompt("Во сколько это обойдется?", "");
console.log(amount2);


let budgetMonth = money - (amount1 + amount2);
console.log("бюджет на месяц " + Number(budgetMonth));

let mission = 500000; 

let period = mission / budgetMonth;
console.log(Math.ceil(period) + " месяцев ");


let budgetDay = (budgetMonth / 30);
console.log(Math.floor(budgetDay) + " Доход в день");




if (budgetDay >= 1200) {
  console.log("У вас высокий уровень дохода");
} else if (budgetDay >= 600 && budgetDay < 1200) {
  console.log("У вас средний уровень дохода");
} else if (budgetDay < 600 && budgetDay >= 0) {
  console.log("К сожалению у вас уровень дохода ниже среднего");
} else {
  console.log("Что то пошло не так");
}
