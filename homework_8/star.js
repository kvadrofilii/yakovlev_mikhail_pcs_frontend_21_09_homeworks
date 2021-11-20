'use strict'

const fibonacci2 = (() => {
  let a = 0, b = 1, c = 0;
  return () => {
    console.log(b);
    c = b;
    b = a + b;
    a = c;
  }
})();

fibonacci2(); // Вывод в консоль: 1
fibonacci2(); // Вывод в консоль: 1
fibonacci2(); // Вывод в консоль: 2
fibonacci2(); // Вывод в консоль: 3
fibonacci2(); // Вывод в консоль: 5
