3 + true; // 4
2 + 3; // 5
"hello" + " world"; // "hello world"

"2" + 3; // "23"
2 + "3"; // "23"
/*Mixing types like this can sometimes be confusing, especially because
it’s sensitive to the order of operations.Take the expression:
*/

1 + 2 + "3"; // "33"

/*Since addition groups to the left(i.e., is left - associative), this is the
same as:
*/

(1 + 2) + "3"; // "33"

//By contrast, the expression

1 + "2" + 3; // "123"
(1 + "2") + 3; // "123"

/*
The bitwise operations not only convert to numbers but to the subset
of numbers that can be represented as 32 - bit integers, as discussed
in Item 2. These include the bitwise arithmetic
operators(~ , & , ^ , and | ) and the shift operators( << , >> , and >>> ).
*/

"17" * 3; // 51
"8" | "1"; // 9
9 << 2; //36


/*
JavaScript follows the IEEE floating-point standard’s head-
scratching requirement that NaN be treated as unequal to itself. So
testing whether a value is equal to NaN doesn’t work at all:
*/
var x = NaN;
x === NaN; // false

isNaN("foo"); //true
isNaN(undefined); //true
isNaN({}); //true
isNaN({ valueOf: "foo" }); //true

/*
Similarly, objects can be converted to numbers via their valueOf
method.You can control the type conversion of objects by defining
these methods:
*/

"J" + { toString: function () { return "S"; } }; // "JS"
2 * { valueOf: function () { return 3; } }; // 6

/*
JavaScript resolves this ambi -
guity by blindly choosing valueOf over toString.But this means that
if someone intends to perform a string concatenation with an object,
it can behave unexpectedly:
*/
var obj = {
    toString: function () {
        return "[object MyObject]";
    },
    valueOf: function () {
        return 17;
    }
};
"object: " + obj; // "object: 17"