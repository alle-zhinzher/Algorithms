// 4 types of declaretion function

/*
Чистая Функция - функция которая всегда даёт предсказуемый результат
Функции с побочными эфектами - функция которая изменяет что-то помимо 
слбственного скоупа. Функция которая возращант непредсказуемый результат
*/
// 1. Function Declaration
// Hoisted to the top
function inc(a) {
    return a++;
};


// 2. Function Expresion
// Hoisted like a variable
const sum = function(a, b) {
    return a + b;
};


// 3. Lambda Expresion
const max = (a, b) => (a > b ? a : b);

// 4. Lambda Function 
const ang = (a, b) => {
    const s = sum(a, b);
    return s  / 2;
};