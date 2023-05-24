// In JavaScript, a function is not a “magical language structure”, but a special kind of value.
// The syntax that we used before is called a Function Declaration:

 /*function sayHi() {
 alert( "Hello" );*/

// There is another syntax for creating a function that is called a Function Expression.
// It allows us to create a new function in the middle of any expression.
// For example:

/*let sayHi = function() {
 alert( "Hello" );
};

function sayHi(){
    alert('Hello');
}
alert(sayHi)*/

// Function is a value
// Let’s reiterate: no matter how the function is created, a function is a value. Both examples above store a function in the sayHi variable.
// We can even print out that value using alert:

/*function sayHi() {
  alert( "Hello" );
}
alert( sayHi );*/              // shows the function code


// Please note that the last line does not run the function, because there are no parentheses after sayHi. There are programming languages where any mention of a function name causes its execution, but JavaScript is not like that.
// In JavaScript, a function is a value, so we can deal with it as a value. The code above shows its string representation, which is the source code.
// Surely, a function is a special value, in the sense that we can call it like sayHi().
// But it’s still a value. So we can work with it like with other kinds of values.
// We can copy a function to another variable:


/*function sayHi() {   // (1) create
  alert( "Hello" );
}
let func = sayHi;    // (2) copy
func(); // Hello     // (3) run the copy (it works)!
// sayHi(); */    // Hello    //     this still works too (why wouldn't it)


// Here’s what happens above in detail:
// The Function Declaration (1) creates the function and puts it into the variable named sayHi.
// Line (2) copies it into the variable func. Please note again: there are no parentheses after sayHi. If there were, then func = sayHi() would write the result of the call sayHi() into func, not the function sayHi itself.
// Now the function can be called as both sayHi() and func().

// Callback functions

/*function ask(question,yes,no){
    if(confirm(question)) yes()
    else no();
}
function showOk(){
    alert('You agreed.');
}
function showCancel(){
    alert('You canceled the excecution ')
}
ask('Do you agree?',showOk,showCancel)*/
// The arguments showOk and showCancel of ask are called callback functions or just callbacks.

// A function is a value representing an “action”
// Regular values like strings or numbers represent the data.
// A function can be perceived as an action.
// We can pass it between variables and run when we want.

// A Function Expression is created when the execution reaches it and is usable only from that moment.
// Once the execution flow passes to the right side of the assignment let sum = function… – here we go, the function is created and can be used (assigned, called, etc. ) from now on.
// Function Declarations are different.
// A Function Declaration can be called earlier than it is defined.
// For example, a global Function Declaration is visible in the whole script, no matter where it is.
// That’s due to internal algorithms. When JavaScript prepares to run the script, it first looks for global Function Declarations in it and creates the functions. We can think of it as an “initialization stage”.
// And after all Function Declarations are processed, the code is executed. So it has access to these functions.

let age= prompt('Enter you age',18)
let welcome = (age < 18) ?
function(){alert('Hello!');}:
function(){alert('Greetings!');};

welcome()