// In JavaScript 7 Data Types
// JavaSCript is dynamically-typed, interpreted language



//              1. Number
let n = 12;
let b = 12.12;
console.log(typeof n);
console.log(typeof b);
// Special Values for Number
const h = NaN;
const inf = Infinity;
const inf2 = -Infinity;
const inf3 = 1 / 0;
console.log(inf === inf3) // True
console.log(typeof h === typeof inf); // True
/*
JavaScript follows the IEEE floating-point standard’s head-
scratching requirement that NaN be treated as unequal to itself. So
testing whether a value is equal to NaN doesn’t work at all:
*/
const checkIsNaN = (number) => {
    const x = number;
    return (x !== number); // true if passed NaN
}
console.log(checkIsNaN(NaN)) // true

isNaN("foo"); //true
isNaN(undefined); //true
isNaN({}); //true
isNaN({ valueOf: 10 }); //true



//              2. String
// Нет отдельного типа данных для одного символа.
// В JavaScript подобного типа нет, есть только тип string. 
// Строка может содержать один символ или множество.
let str = "Привет";
let str2 = 'Одинарные кавычки тоже подойдут';
let phrase = `Обратные кавычки позволяют встраивать переменные ${str}`;


//              3. Boolean

let nameFieldChecked = true; // да, поле отмечено
let ageFieldChecked = false; // нет, поле не отмечено
//Булевые значения также могут быть результатом сравнений:
let isGreater = 4 > 1;


//              4. Null
// !!!!!! Для null  typeof возвращает "object" – это ошибка в языке, на самом деле это не объект.


// Специальное значение null не относится ни к одному из типов, описанных выше.
// Оно формирует отдельный тип, который содержит только значение null:

let age = null;
// В JavaScript null не является «ссылкой на несуществующий объект» или «нулевым указателем», 
// как в некоторых других языках.

// Это просто специальное значение, которое представляет собой «ничего»,
// «пусто» или «значение неизвестно».


//                         5. undefined

// Специальное значение undefined также стоит особняком. 
// Оно формирует тип из самого себя так же, как и null.

let x;
alert(x); // выведет "undefined"



//                         6. Object
// object для более сложных структур данных.



//                         7. Symbol
// symbol для уникальных идентификаторов.