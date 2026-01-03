'use strict';

// write code here
const list = document.querySelector('ul');
const salarys = document.querySelectorAll('li[data-salary]');

const array = [...salarys];

function parseSalary(el) {
  const sal = el.dataset.salary.slice(1).split(',').join('');

  if (!isNaN(sal)) {
    return Number(sal);
  }
}

function sortList(arr) {
  arr.sort((a, b) => parseSalary(b) - parseSalary(a));
  list.append(...arr);
}

function getEmployees(arr) {
  return arr.map((el) => {
    return {
      name: el.textContent.trim(),
      position: el.dataset.position,
      salary: parseSalary(el),
      age: Number(el.dataset.age),
    };
  });
}

sortList(array);
getEmployees(array);
