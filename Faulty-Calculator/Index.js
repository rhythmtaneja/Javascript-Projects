/* Create a faulty calculator using JavaScript

This faulty calculator does following:
1. It takes two numbers as input from the user
2. It perfoms wrong operations as follows:

+ ---> -
* ---> +
- ---> /
/ ---> **

It performs wrong operation 10% of the times

*/

let random = Math.random();
let a = prompt("Enter first number: ");
let c = prompt("Enter operation");
let b = prompt("Enter second number: ");


let obj = {
    "+" : "-",
    "*" : "+",
    "-" : "/",
    "/" : "**"
}

//if the random no. is greater than 0.1 perform correct operation, if not then it is that 10% faulty operation
console.log(random);
if (random > 0.1){
    // performing correct operation
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`); 
    // eval() used to solve, less used in industry; must know kab nhi use karna chahiye
}


else{
    c = obj[c]; // correct change
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`); 
}
