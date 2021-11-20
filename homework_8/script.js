'use strict'

function makeFibonacciFunction() {
  let a = 0, b = 1, c = 0;
  function magic() {
    console.log(b);
    c = b;
    b = a + b;
    a = c;
  }
  return magic;
}

const fibonacci = makeFibonacciFunction();

fibonacci(); // Вывод в консоль: 1
fibonacci(); // Вывод в консоль: 1
fibonacci(); // Вывод в консоль: 2
fibonacci(); // Вывод в консоль: 3
fibonacci(); // Вывод в консоль: 5
