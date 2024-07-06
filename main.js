"use strict";
// Question 22
let friends = ["Alice", "Bob", "Charlie"];
console.log(friends[3]);
friends[2] = "Charlie";
// Question 23
let car = "subaru";
console.log("Is car == 'subaru'? I predict true");
console.log(car == "subaru");
console.log("Is car == 'toyota'? I predict false");
console.log(car == "toyota");
// Question 24
// Equality with strings
console.log("Testing equality with strings:");
console.log("apple" == "apple"); // True
// console.log("apple" == "Apple"); // False
// Using the lower case function
console.log("Testing with lower case:");
console.log("Apple".toLowerCase() == "apple"); // True
// Numerical tests
console.log("Numerical tests:");
console.log(10 > 5); // True
console.log(2 < 1); // False
// Tests using "and" and "or" operators
console.log("Tests with 'and' and 'or':");
console.log(true && false); // False
console.log(true || false); // True
// Test whether an item is in a array
let fruits = ["apple", "banana", "cherry"];
console.log("Is 'apple' in fruits?");
console.log(fruits.includes("apple")); // True
// Test whether an item is not in a array
console.log("Is 'mango' not in fruits?");
console.log(!fruits.includes("mango"));
