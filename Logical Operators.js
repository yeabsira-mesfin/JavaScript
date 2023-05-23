// The notes are commmented out by // and the codes with /**/ follow
//|| (OR)
// In classical programming, the logical OR is meant to manipulate boolean values only. If any of its arguments are true, it returns true, otherwise it returns false.
// true || true  // true
// false || true   // true
// true || false   // true
// false || false // false
// As we can see, the result is always true except for the case when both operands are false.
// If an operand is not a boolean, it’s converted to a boolean for the evaluation.
// For instance, the number 1 is treated as true, the number 0 as false:

/*if(1||0){
    alert('Truthy');
}*/
// We can pass more conditions:
/*let hour=12;
let isWeekend = true;

if(hour < 10 || hour >18 || isWeekend){
    alert('The office is closed.')
}*/

// The OR || operator does the following:
// Evaluates operands from left to right.
// For each operand, converts it to boolean. If the result is true, stops and returns the original value of that operand.
// If all operands have been evaluated (i.e. all were false), returns the last operand.
// A value is returned in its original form, without the conversion.
// In other words, a chain of OR || returns the first truthy value or the last one if no truthy value is found.
// For instance:

/*alert(undefined || null || 0) // returns 0*/

// && (AND)
// true && true // true
// false && true// false
// true && false // false
// false && false// false

/*let hour = 12;
let minute = 30;

if(hour==12 && minute==30){
    alert("The time is 12:30")
}*/


// The AND && operator does the following:
// Evaluates operands from left to right.
// For each operand, converts it to a boolean. If the result is false, stops and returns the original value of that operand.
// If all operands have been evaluated (i.e. all were truthy), returns the last operand.
// In other words, AND returns the first falsy value or the last value if none were found.
// The rules above are similar to OR. The difference is that AND returns the first falsy value while OR returns the first truthy one.

/*alert(1 && 1 && 0)*/

// ! (NOT)
// The boolean NOT operator is represented with an exclamation sign !.
// The syntax is pretty simple:
// result = !value;
// The operator accepts a single argument and does the following:
// Converts the operand to boolean type: true/false.
// Returns the inverse value.

/*alert(!true)
alert(!false)*/

// A double NOT !! is sometimes used for converting a value to boolean type:

/*alert(!!'non empty string')
alert(!!null)*/


alert(1 && 2)