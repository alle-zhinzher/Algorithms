/*
In addition to objects, JavaScript has five types of primitive values:
    1. booleans
    2. numbers
    3. strings
    4. null
    5. undefined. (Confusingly, the typeof operator reports the type of null as "object",
                   but the ECMAScript standard describes it as a distinct type.)
At the same time, the standard library provides constructors
for wrapping booleans, numbers, and strings as objects.
You can create a String object that wraps a string value:*/

var s = new String("hello");
/*
In some ways, a String object behaves similarly to the string value it
wraps.You can concatenate it with other values to create strings:
*/
s + " world"; // "hello world"

//But unlike primitive strings, a String object is a true object:
typeof "hello"; // "string"
typeof s; // "object"

/*
This is an important difference, because it means that you can’t
compare the contents of two distinct String objects using builtin operators:
*/
const s1 = new String("hello");
const s2 = new String("hello");
s1 === s2; // false
s1 == s2; // false


/*
A strange consequence of this implicit wrapping is that you can set
properties on primitive values with essentially no effect:
*/
"hello".someProperty = 17;
"hello".someProperty; // undefined