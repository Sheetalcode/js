let isLoggedIn = false
let age = 10

// primitive data types in js
//1. number => 2 to power 53
//2. bigint
//3. string => ""
//4. boolean => true/false
//5. null => standalone value
//6. undefined
//7. symbol => unique


// how to know the type of value

console.log(typeof "hitesh");
console.log(typeof 23);
console.log(typeof null); //object
console.log(typeof undefined); //undefined



// non-primitive (reference) datatypes

// arrays , objects , functions

const arr = ["sheetal" , "shaijal" , "raj" , "anushka"];   //arrays
console.log(arr)

let myObj = {
name: "sheetal",      //objects
age:24,

}
console.log(myObj)

const myFunction = function() {
    console.log("Hello World")  //functions
}


// stack memory(primitive datatypes)   {objects stored in so many blocks}
// heap memory(non-primitive datatypes) {objects stored in 1 block}