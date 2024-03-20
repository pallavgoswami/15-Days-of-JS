// perform operations on operands (values and variables)
// --> LIST OF OPERATORS <--
// Arithmetic - Mathematical ops
// Assignment
// Comparision
// Logical
// String

// ARITHMETICAL
// ADD / SUB / PRODUCT / DIVISION / MODULUS
let x = 5 + 3;
console.log(x);
// EXPONENTIAL
let a = 5 ** 3;
console.log(a);

// ASSIGNMENT
let b = 5;
console.log(b);
b += 4; // same for -,*,/,%,**
console.log(b);

// INC AND DEC
let c = 5;
console.log(++c); // same for --c
console.log(c);

let d = 4
console.log(d++); // same for c--
console.log(d);

// COMPARISION
// <,>,<=,>=
// == (Equal Checks)
// (!=) Not equal
// === (Strict equality checks) (checks the data type)
// (!==) (Strict inequality checks) 
// The main difference between the two operators is how they compare values. The == operator compares the values of two variables after performing type conversion if necessary. On the other hand, the === operator compares the values of two variables without performing type conversion.
let e = 10;
let f = 20;
console.log(e < f);
console.log(e > f);
console.log(e <= f);
console.log(e >= f);
console.log(e == f); // type conversion
console.log(e != f);
console.log(e === f); // no type conversion
console.log(e !== f);

// LOGICAL
// AND (&&)
// OR (||)
// NOT (!)

// AND --> returns true only if all are true
// OR --> returns true if either one is true
// NOT -->  converts operator to boolean and returns flipped value

// STRING
// + operator to join or concatenate two strings
console.log("hello" + " worlds");
let k = "Yo";
k += " beeatch";
console.log(k);

// OPERATOR PRECEDENCE --> Refer to docs

// OPERATOR ASSOCIATIVITY
// Left to right
// Right to left --> only exponentiation and assignment operators have right to left associativity




