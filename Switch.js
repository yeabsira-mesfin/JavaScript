// A switch statement can replace multiple if checks.
// It gives a more descriptive way to compare a value with multiple variants.
/*let a = Number(prompt('Please enter the first number'));
let b = Number(prompt('Please enter the second number'));
let c = a+b;
switch(c){
    case 3:
        alert("Too small");
        break;
    case 4:
        alert("Exactly");
        break;
    case 5:
        alert("Too big");
        break;
    default:
        alert("I don't know");
}*/
// Several variants of case which share the same code can be grouped.
// For example, if we want the same code to run for case 3 and case 5
let a = Number(prompt("Please enter the first number"))
let b = Number(prompt("Please enter the first number"))
let c=a+b;
switch(c){
    case 4:
    alert('Right!');
    break;
    case 3:
    case 5:
        alert('Wrong!');;
        alert("Why don't you take a math class?")
        break;
    default:
        alert('The result is strange. Really.')
}
// Let’s emphasize that the equality check is always strict. The values must be of the same type to match.
