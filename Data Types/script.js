// JS BASICS

// Data Types -> Primitive and Reference
// Primitive -> String, Number, Boolean, Null, Undefined, BigInt, Symbol
// Reference -> Object, Array, Function

// --> PRIMITIVES <--

// STRINGS
// string is a sequence of zero or more charcaters
// string starts and ends with either a single quote(') or a double quote(" ")
// for storing and manipulating text
let firstName = "Elon";
let lastName = 'Musk';

// NUMBER
// represent integer and floating point numbers
let num = 96.0;
console.log(num);
let x = '10';
console.log(typeof x);

// BOOLEAN
// has two values -> true or false
let learning = true;
let completed = false;
console.log(typeof learning);
let z = 20 < 10;
console.log(typeof z);

// UNDEFINED
// If a variable is declared but the value is not assigned, then the value of that variable will be undefined
// And the data type is also undefined
let age;
console.log(age);
console.log(typeof age);

// NULL
// special value that represents empty or unknown value
let number = null;
console.log(number);
console.log(typeof number);
// type should be null but it says type is an object
// known bug in js
console.log(null == undefined);

// --> Reference <--


// OBJECT
// Object is collection of properties
// where each property is defined as a key value pair
// an object can store different data types
let person = {
    firstName : 'Elon',
    lastName : 'Musk',
    age : 35
};
console.log(person);
console.log(typeof person);

// ARRAY
// type of object that stores a collection of values
// also an object data type
let nums = [1, 2, 3, 4, 5];
console.log(nums);
console.log(typeof nums);

// FUNCTION
// type of object that is used to execute code
// console says function type but its also object data type
function msg() {
    console.log("Hello World");
}
console.log(typeof msg);

// JavaScript is a dynamically typed language
// So we can store different data-type in the same variable
let a;
console.log(a);
console.log(typeof a);

a = "Great Stack"
console.log(a);
console.log(typeof a);
 
a = 100;
console.log(a);
console.log(typeof a);

a = true;
console.log(a);
console.log(typeof a);

