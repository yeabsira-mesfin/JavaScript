// The if(...) statement evaluates a condition in parentheses and, if the result is true, executes a block of code.
//// let year = prompt('In which year was ECMAScript- 2015 specification published?');
//// if(year ==2015) {
////     alert('You are right')
//// }

// we can also use if statements in more complex statements.

//// let num=prompt('Please enter a number!');
//// if (num == 5){
////     alert(10*num);
//// }

// The if statement may contain an optional else block. It executes when the condition is falsy.

//// let year = prompt('In which year was ECMAScript- 2015 specification published');
//// if (year == 2015) {
////     alert('You guessed right');
//// }
//// else alert('That is not correct');

// Sometimes, we’d like to test several variants of a condition. The else if clause lets us do that.
// There can be more else if blocks. The final else is optional.
let year = prompt('In which year was ECMAScript- 2015 specification published');
if(year < 2015) {
    alert('Too early');
}
else if(year > 2015){
    alert('Too late');
}
else if(year==2015)
{
    alert('That is right');
}
// else alert('Excatly');