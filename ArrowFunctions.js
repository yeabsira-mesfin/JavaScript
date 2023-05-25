// The notes are commmented out by // and the codes with /**/ follow

// Arrow functions, the basics
// There’s another very simple and concise syntax for creating functions, that’s often better than Function Expressions.
// It’s called “arrow functions”, because it looks like this:
// let func = (arg1, arg2, ..., argN) => expression;

/*let sum=(a,b)=>a+b;
alert(sum(23,34));*/

// Multiline arrow functions
// The arrow functions that we’ve seen so far were very simple. They took arguments from the left of =>, evaluated
// and returned the right-side expression with them.
// Sometimes we need a more complex function, with multiple expressions and statements. In that case, we can
// enclose them in curly braces. The major difference is that curly braces require a
// return within them to return a value (just like a regular function does).

let sum = (a,b) => {
    let sum = a+b;
    return sum;}
alert(sum(56,78));