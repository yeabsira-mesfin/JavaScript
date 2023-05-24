// The notes are commmented out by // and the codes with /**/ follow

// Function
// Quite often we need to perform a similar action in many places of the script.
// For example, we need to show a nice-looking message when a visitor logs in, logs out and maybe somewhere else.
// Functions are the main “building blocks” of the program. They allow the code to be called many times without repetition.
// We’ve already seen examples of built-in functions, like alert(message), prompt(message, default) and confirm(question). But we can create functions of our own as well.

// To create a function we can use a function declaration.
// It looks like this:
// function showMessage() {
//   alert( 'Hello everyone!' );
// }


/*function showMessage(){
    alert('Hello everyone! ');
}
showMessage();*/

// A variable declared inside a function is only visible inside that function.

/*function localVariable(){
    let message="Hello, I'm JavaScript!" // locala variable

    alert(message);
}
localVariable();*/

//A function can access an outer variable as well, for example:

/*let userName= 'John';
function outerVariable(){
    let mesage = "Hello," + userName; 
    alert(mesage)
}
outerVariable();*/

//If a same-named variable is declared inside the function then it shadows the outer one. For instance, in the code below the function uses the local userName. The outer one is ignored:

// Global variables
// Variables declared outside of any function, such as the outer userName in the code above, are called global.
// Global variables are visible from any function (unless shadowed by locals).
// It’s a good practice to minimize the use of global variables. Modern code has few or no globals. Most variables reside in their functions. Sometimes though, they can be useful to store project-level data.

// Parameters
// We can pass arbitrary data to functions using parameters.
// In the example below, the function has two parameters: from and text.

/*function paramater(from,text){
    alert(from + ':' + text);
}
paramater('Ann','Hello');*/

// Please note: the function changes the parameter, but the change is not seen outside, because a function always gets a copy of the value:

/*function parameterChange(from,text){
    from = '*' + from + '*';
    alert(from + ':' + text);
}
let from='Ann';

parameterChange(from,'Hello')
alert(from)//doesn't change since a function uses the copy of a value.
*/
// When a value is passed as a function parameter, it’s also called an argument.
// In other words, to put these terms straight:
// A parameter is the variable listed inside the parentheses in the function declaration (it’s a declaration time term).
// An argument is the value that is passed to the function when it is called (it’s a call time term).
// We declare functions listing their parameters, then call them passing arguments.
// In the example above, one might say: "the function showMessage is declared with two parameters, then called with two arguments: from and "Hello"".
// If a function is called, but an argument is not provided, then the corresponding value becomes undefined.
// We can specify the so-called “default” (to use if omitted) value for a parameter in the function declaration, using =:

/*function defaultValue(from,text=" Default value"){
    alert(from + ":" + text);
}
defaultValue('This will show you the ->');*/

// Modern JavaScript engines support the nullish coalescing operator ??, it’s better when most falsy values, such as 0, should be considered “normal”:

/*function showCoalescingOperator(text){
    alert(text??'Unknown')
}
showCoalescingOperator(0);
showCoalescingOperator(null);
showCoalescingOperator();*/

// Returning a value
// A function can return a value back into the calling code as the result.
// The simplest example would be a function that sums two values:

/*function sum(a,b){
    return a+b;
}
let result=sum(44,45);
alert(result);*/

// The directive return can be in any place of the function. When the execution reaches it, the function stops, 
// and the value is returned to the calling code (assigned to result above).

/*function checkAge(age) {
    if (age >= 18) {
      return true;
    } else {
      return confirm('Do you have permission from your parents?');
    }
  }
  
  let age = prompt('How old are you?', 18);
  
  if ( checkAge(age) ) {
    alert( 'Access granted' );
  } else {
    alert( 'Access denied' );
  }*/

// Never add a newline between return and the value

//Generally function names should be concise and descriptive.
//showMessage() // should only show a message.
//getMessage()  // should only get a message.

function power(a,n){
    return a**n;
}
let a=prompt('Enter the first number')
let b=prompt('Enter the second number')
alert(power(a,b))