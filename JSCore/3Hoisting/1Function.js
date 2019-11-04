console.log(sum(1, 2)); // 3

// Function hoisted to the top
function sum(a, b) { // Function declaration
    return a + b;
}


// Function hoisted to the top
sum2(1, 2) // Error sum2 is not a function
var sum2 = function (a, b) { // Function declaration
    return a + b;
}

sum2(1, 2) // 3
