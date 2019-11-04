/* 
JavaScript is a single-threaded language so it can only execute a single task at a time.
The rest of the tasks are queued in the Execution Context. 
As I told you earlier that when the JavaScript interpreter 
starts to execute your code, the context (scope) is by default set to be global. 
This global context is appended to your execution context which is actually 
the first context that starts the execution context.

After that, each function call (invocation) would append its context to the execution context. 
The same thing happens when an another function is called inside that function or somewhere else.

Each function creates its own execution context.
*/


/*
Many developers often confuse scope and context as if they equally
refer to the same concepts. But this is not the case. Scope is what
we discussed above and Context is used to refer to the value of this
in some particular part of your code. Scope refers to the visibility
of variables and context refers to the value of this in the same scope.
We can also change the context using function methods, which we will discuss later.
In the global scope context is always the Window object.
*/

// logs: Window {speechSynthesis: SpeechSynthesis, caches: CacheStorage, localStorage: Storage…}
console.log(this);

function logFunction() {
    console.log(this);
}
// logs: Window {speechSynthesis: SpeechSynthesis, caches: CacheStorage, localStorage: Storage…}
// because logFunction() is not a property of an object
logFunction();


class User {
    logName() {
        console.log(this);
    }
}

(new User).logName(); // logs User {}


/*
    One thing you'll notice is that the value of context behaves differently
if you call your functions using the new keyword. The context will
then be set to the instance of the called function. Consider one of
the examples above with the function called with the new keyword.
*/
function logFunction() {
    this.a = 5
    console.log(this);
}
logFunction() // logs Object global {}
new logFunction(); // logs logFunction {}
