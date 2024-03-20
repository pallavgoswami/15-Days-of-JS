// Three types --> Conditional Statments, Loops, Try/Catch Statements

// CONDITIONALS
// if, else, else-if, switch
let country = "India";
let age = 18;
if (country == "India" && age >= 18) {
  console.log("You are eligible");
} else if (age >= 16) {
  console.log("teenager");
} else {
  console.log("You are ineligible");
}

// switch
let value = 56;
switch (typeof value) {
  case "number":
    console.log("Number");
    break;
  case "string":
    console.log("String");
    break;
  case "boolean":
    console.log("Boolean");
    break;
  default:
    console.log("other");
    break;
}

let day = 6;
switch (day) {
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
    break;
  case 7:
    day = "Sunday";
    break;
  default:
    console.log("meh");
    break;
} console.log("The day is: " + day);

// Ternary Operator --> ?
// condition ? value_if_true : value_if_false

let ages = 20;
if (ages >= 18) {
    console.log("You an adult");
} else {
    console.log("Minor");
}

let aged = 20;
let msg  = (aged >= 18 ? "adult" : "Minor");
console.log(msg);


