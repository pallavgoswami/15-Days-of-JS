// var, let, const keywords used to declare variables
var a = 100;
// var is keyword and a is identifier
// var is oldest


// variables can be used to store any kind of data like number, string, object, arrays
// varibales name must begin with alphabet, $, _, 
// JS is case sensitive

// LET
// let introduced in ES6
// let keyword is used to declare a block-scoped variable
// i.e it is only visible within the block in which it is declared
let x = 10;
if (x > 5) {
    let y = 20;
    console.log(y);
}
// console.log(y); Uncaught ReferenceError: y is not defined

// CONST
// const used to declare constant variables
// variable cannot be reassigned to a new value
const b = 4;
console.log(b);
// b = 5; // Uncaught TypeError: Assignment to constant variable

// SCOPE
// visibility of variables and functions within a program
// 3 scopes --> Global Scope, Function Scope, Block Scope

// Global Scope
// outermost scope in a js program
// variables and functions declared in the global scope are visible from anywhere in the program
var c = "hello, GreatStack"
function example() {
    console.log(c);
}
example();
console.log(c);

// Function Scope
// created when a function is declared
// variables and functions declared in a function's scope are only visible within that function
function test() {
    var d = "Hello again";
    console.log(d);
}
test();
// console.log(d); Uncaught ReferenceError: d is not defined

// Block Scope
// visibility of variables and functions within a block of code
// A block of code is a group of statements that are enlclosed in curly braces
// variables and functions decalred in a block's scope are only visible within that block
function fs() {
    if(true) {
        let bv = "Testing";
        console.log(bv);
    }
    // console.log(bv); Uncaught ReferenceError: d is not defined
}
fs();
// console.log(bv); Uncaught ReferenceError: d is not defined



