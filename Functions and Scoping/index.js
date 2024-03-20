function printTheValue(a, b, c) { // parameters
    let result = (a * 10 + b * 10 + c * 10) / 10;
    console.log(result);
}
printTheValue(5, 10, 15); // arguments

// anonymous function
let ans = function (a = 0, b = 0, c = 0) {
    let result = (a * 10 + b * 10 + c * 10) / 10;
    console.log(result);
}
ans(24, 33, 55);


function intro(name = "Sample", age = 33) {
    console.log(`Hello my name is ${name}, and my age is ${age}!`);
    console.log(ans(1, 2, 3));
}
intro("Pallav", 23)

function arrSum (arr = []) {    
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        console.log(sum);        
    }
}
arrSum([1, 2, 657])

// let is not accessible outside a defined scope
// var is accessible outside a scope as well 
// global declaration can be accessed inside a scope but vice-versa not possible
// Differences between var, let, and const
// The scope of a var variable is functional or global scope. The scope of a let variable is block scope. The scope of a const variable is block scope. It can be updated and re-declared in the same scope.

let a = 20;
{
    var b = 454;
}
console.log(b);