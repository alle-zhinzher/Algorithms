/*
                Явное и неявное преобразование
    Преобразование типов может происходить явно и неявно.
    Когда разработчик хочет намеренно произвести преобразование типов, написав,
    к примеру Number(value), это называется явным преобразованием типов (или type casting).
*/

// Три типа конвертации
// 1. Cтроковое
// 2. Булевое
// 3. Численное

//          Приведение к строке

// Для явного приведения значения к строке необходимо применить к нему функцию String().
// Неявное преобразование будет вызвано бинарным оператором +, кода один из операндов является строкой:

String(123) // explicit
123 + ''    // implicit

String(123)         // '123'
String(-12.3)       // '-12.3'
String(null)        // 'null'
String(undefined)   // 'undefined'
String(true)        // 'true'
String(false)       // 'false'

// Преобразование символов происходит немного сложнее,
// потому что они могут быть преобразованы только явным образом.

String(Symbol('my symbol'))   // 'Symbol(my symbol)'
'' + Symbol('my symbol')      // TypeError is thrown



/*
                    Булевое преобразование
    Для явного преобразования к булевому значению, нужно применить функцию Boolean().
    Неявное преобразование происходит в логическом контексте if (val) { … }
    или при применении логических операторов (|| && !).
*/

Boolean(2)          // explicit
if (2) { const a = "Heelo" }      // implicit due to logical context
!!2                 // implicit due to logical operator
2 || 'hello'        // implicit due to logical operator


// На заметку, логические операторы такие как || и && производят булевое преобразование под капотом,
// но при этом всегда возвращают оригинальное значение операндов, даже если они не являются булевыми.
// returns number 123, instead of returning true
// 'hello' and 123 are still coerced to boolean internally to calculate the expression
let x = 'hello' && 123;   // x === 123

Boolean('')           // false
Boolean(0)            // false     
Boolean(-0)           // false
Boolean(NaN)          // false
Boolean(null)         // false
Boolean(undefined)    // false
Boolean(false)        // false


// Любое значение, которое не вошло в этот список, будет преобразовано в true,
// включая объекты, функции, Array, Date и так далее.
// Символы, пустые объекты и массивы так же будут иметь значение true.

Boolean({})             // true
Boolean([])             // true
Boolean(Symbol())       // true
!!Symbol()              // true
Boolean(function () { })  // true



/*
Численное преобразование
Для явного преобразования к числу нужно применить функцию Number(),
Неявное преобразование несколько запутаннее, так как оно вызывается в большем количестве случаев.
    1. Oператоры сравнения (>, <, <=,>=)
    2. Бинарные операторы (| & ^ ~)
    3. Арифметические операторы (- + * / % ).
       Обратите внимание, что бинарный оператор + не вызывает численного преобразования,
       если один из операндов является строкой
    4. Унарный оператор +
    5. оператор нестрогого равенства == (включая !=).
       Обратите внимание, что данный оператор не вызывает численное преобразование,
       если оба операнда являются строками
*/

Number('123');  // explicit
+ '123';        // implicit
123 != '456';   // implicit
4 > '5';        // implicit
5 / null;       //Infinity    // implicit
true | 0;       // implicit

Number(null)         // 0
Number(undefined)    // NaN
Number(true)         // 1
Number(false)        // 0
Number(" 12 ")       // 12
Number("-12.34")     // -12.34
Number("\n")         // 0
Number(" 12s ")      // NaN
Number(123)          // 123

/*
При преобразовании строки в число, движок сначала отсекает все пробельные символы,
символы \n, и \t в начале и в конце строки, и возвращает NaN если обрезанная строка
не представляет из себя корректное число. Если строка окажется пустой, то результатом будет 0.
null и undefined обрабатываются по разному: null станет 0, в то время как undefined станет NaN.
*/

/*
Численное преобразование, как явное так и неявное, не работает для символов.
Более того, движок бросает ошибку TypeError, вместо того,
чтобы по - тихому преобразовать Symbol в NaN, как это происходит с undefined.
Подробнее о правилах преобразования символов можно посмотреть на MDN.
*/

Number(Symbol('my symbol'));    // TypeError is thrown
+ Symbol('123');                // TypeError is thrown



/* 
При применении == к null или undefined, численное преобразование не происходит, 
так как null может равняться только null или undefined, и ничему другому.
*/

null == 0               // false, null is not converted to 0
null == null            // true
undefined == undefined  // true
null == undefined       // true


//                      Преобразование типов для объектов
/*
В общих чертах алгоритм выглядит следующим образом:
    1. Если входящее значение уже является примитивом, ничего не делать и просто вернуть его.
    2. Вызвать input.toString(), если результат примитив — вернуть его.
    3. Вызвать input.valueOf(), если результат примитив — вернуть его.
    4. Если ни один из методов не вернул примитив — бросить ошибку TypeError.
*/

/*
При численном преобразовании сначала вызывается метод valueOf(), а уже затем toString().
При строковом преобразовании наоборот — сначала происходит вызов toString(), а уже потом valueOf().
*/


let d = new Date();

// get string representation
let str = d.toString();  // 'Wed Jan 17 2018 16:15:42'

// get numeric representation, num of milliseconds since Unix epoch
let num = d.valueOf();   // 1516198542525

// compare with a string representation
// true because d is converted to same string
console.log(d == str);   // true

// compare with numeric representation
// false, because d is not converted to a number via valueOf()
console.log(d == num);   // false

// Result is 'Wed Jan 17 2018 16:15:42Wed Jan 17 2018 16:15:42'
// '+' same to '==' triggers default conversion mode
console.log(d + d);

// Result is 0, since '-' operator explicitly triggers numeric conversion, not a default one
console.log(d - d);


//Вы можете переопределить методы toString() и valueOf() 
//для того, чтобы повлиять на логику преобразования объектов в примитив.
var obj = {
    prop: 101,
    toString() {
        return 'Prop: ' + this.prop;
    },
    valueOf() {
        return this.prop;
    }
};

console.log(String(obj));  // 'Prop: 101'
console.log(obj + '')      // '101'
console.log(+obj);         //  101
console.log(obj > 100);    //  true


true + false             // 1
12 / "6"                 // 2
"number" + 15 + 3        // 'number153'
15 + 3 + "number"        // '18number'
[1] > null               // true
"foo" + + "bar"          // 'fooNaN'
'true' == true           // false; NaN == 1 
false == 'false'         // false; 0 == NaN
// null равен только null или undefined и ничему другому.
null == ''               // false; null == ''
// Оператор !! конвертирует строки true и false в булевое значение true
!!"false" == !!"true"    // true !!"false" == !!"true" ==> true == true
// Метод массива valueOf() возвращает сам массив, а значит результат игнорируется, 
// так как не является примитивом. 
// Далее, вызывается метод массива toString(), который конвертирует[‘x’]в строку ‘x’
['x'] == 'x';             // true  'x' == 'x'
[] + null + 1;           // 'null1'; '' + null + 1  ==> 'null' + 1  
[1, 2, 3] == [1, 2, 3]   // false
{ } +[] + {} + [1]       // '0[object Object]1'
!+[] + [] + ![]          // 'truefalse'
new Date(0) - 0          // 0
new Date(0) + 0          // 'Thu Jan 01 1970 02:00:00(EET)0'