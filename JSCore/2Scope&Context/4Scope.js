/*
In the JavaScript language there are two types of scopes:

    1. Global Scope
    2. Local Scope

Variables defined inside a function are in local scope while variables 
defined outside of a function are in the global scope.
Each function when invoked creates a new scope.
*/

//      Exampe 1
var name = 'Hammad';

console.log(name); // logs 'Hammad'

function logName() {
    console.log(name); // 'name' is accessible here and everywhere else
}

logName(); // logs 'Hammad'


//      Exampe 2
// Global Scope
function someFunction() {
    // Local Scope #1
    function someOtherFunction() {
        // Local Scope #2
    }
}

// Global Scope
function anotherFunction() {
    // Local Scope #3
}
// Global Scope


/*
        Block Statements
Block statements like if and switch conditions or for and while loops,
unlike functions, don't create a new scope. Variables defined inside
of a block statement will remain in the scope they were already in.
*/

if (true) {
    // this 'if' conditional block doesn't create a new scope
    var name = 'Hammad'; // name is still in the global scope
}
console.log(name); // logs 'Hammad'4


if (true) {
    // this 'if' conditional block doesn't create a scope

    // name is in the global scope because of the 'var' keyword
    var name = 'Hammad';
    // likes is in the local scope because of the 'let' keyword
    let likes = 'Coding';
    // skills is in the local scope because of the 'const' keyword
    const skills = 'JavaScript and PHP';
}

console.log(name); // logs 'Hammad'
console.log(likes); // Uncaught ReferenceError: likes is not defined
console.log(skills); // Uncaught ReferenceError: skills is not defined















/*
При создании функции с использованием new Function, её свойство [[Scope]] 
ссылается не на текущий LexicalEnvironment, а на window.

Следующий пример демонстрирует как функция, созданная new Function,
игнорирует внешнюю переменную a и выводит глобальную вместо неё:
*/
var a = 1;

function getFunc() {
    var a = 2;

    var func = new Function('', 'console.log(a)');

    return func;
}

getFunc()(); // 1, из window