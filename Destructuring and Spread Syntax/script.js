// DESTRUCTURING
// unpack values from an array or properties from objects into distinct variables and 
// ... --> spread operator

let arr = [2, 4, 4, 5, 6, 7, 78]
// let [a, b, c, d, ...rest] = arr
// console.log(a, b, c, d, rest);
// No need to do
// let a = arr[0]
// let b = arr[1]
// let [a, , , , ...rest] = arr
// console.log(a, rest);
let {a, b} = { a: 1, b: 2 }
console.log(a, b);



// SPREAD OPERATOR
// adds key value pair to the object being created
let arr1 = [2, 4, 4]
let obj1 = {...arr1}
console.log(obj1);

function sum(v1, v2, v3) {
    return v1 + v2 + v3
}
console.log(sum(...arr1));

let obj2 = {
    name: "Pallav",
    company: "xyz",
    address: "XYZ"
}
console.log({ ...obj2, name : "John" }); // this prints obj2 and changes name to john
console.log({ name : "John", ...obj2  }); // this doesn't change the name as ob2 is put afer