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

function parameterChange(from,text){
    from = '*' + from + '*';
    alert(from + ':' + text);
}
let from='Ann';

parameterChange(from,'Hello')
alert(from)//doesn't change since a function uses the copy of a value.

