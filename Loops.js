// The “while” loop
// The while loop has the following syntax:
// while (condition) {
//   // code
//   // so-called "loop body"
// }
// While the condition is truthy, the code from the loop body is executed.
// For instance, the loop below outputs i while i < 3:

/*let i=3;
while(i)alert(i--);*/

// The “do…while” loop
// The condition check can be moved below the loop body using the do..while syntax:
// do {
//   // loop body
// } while (condition);
// The loop will first execute the body, then check the condition, and, while it’s truthy, execute it again and again.

/*let i = 0;
do{
    alert(i);
    i++
}while(i<3);*/

// The “for” loop
// The for loop is more complex, but it’s also the most commonly used loop.

// It looks like this:

// for (begin; condition; step) {
//   // ... loop body ...
// }

/*for(i=0; i<3; i++){
    alert(i);
}*/

// Let’s examine the for statement part-by-part:
// part		
// begin	let i = 0	Executes once upon entering the loop.
// condition	i < 3	Checked before every loop iteration. If false, the loop stops.
// body	alert(i)	Runs again and again while the condition is truthy.
// // step	i++	Executes after the body on each iteration.

// The general loop algorithm works like this:

// Run begin
// → (if condition → run body and run step)
// → (if condition → run body and run step)
// → (if condition → run body and run step)
// → ...
for (let i = 0; i < 10; i++) {

    if (i % 2==0) {
      alert( i );
    }
  
  }