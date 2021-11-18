'use strict'

const a = prompt('Введите первое число');
const mathOperation = prompt('Введите математический знак', '+, -, / или *');
const b = prompt('Введите второе число');

if ((a === null) || (a === '') || (a === undefined)) {
  console.log('Первое число не указано');
} else if ((b === null) || (b === '') || (b === undefined)) {
  console.log('Второе число не указано');
} else if ((mathOperation === null) || (mathOperation === '')) {
  console.log('Не введён знак');
} else if (isNaN(Number(a)) || isNaN(Number(b))) {
  console.log('Некорректный ввод чисел');
} else if ((mathOperation !== '+') && (mathOperation !== '-') && (mathOperation !== '/') && (mathOperation !== '*')) {
  console.log('Программа не поддерживает такую операцию');
} else {
  const c = Number(a);
  const d = Number(b);
  switch (mathOperation) {
    case '+': console.log(c + d); break;
    case '-': console.log(c - d); break;
    case '/': {
      if (b === '0') {
        console.log('На ноль делить нельзя');
      } else {
        console.log(c / d);
      }
      break;
    }
    case '*': console.log(c * d); break;
  }
}
