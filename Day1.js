// 3. The Modern Mode — "use strict"
// 2. Code Structure
let name = "Naresh"; // Statement 1
console.log(name);   // Statement 2

alert("Hello")

[1, 2].forEach(alert);

// no error
let message = "hello";
message = 123456;
let n = 123;
n = 12.345;

alert(1 / 0); // Infinity
alert(Infinity); // Infinity

alert("not a number" / 2); // NaN, such division is erroneous


alert(NaN + 1); // NaN
alert(3 * NaN); // NaN
alert("not a number" / 2 - 1); // NaN


console.log(9007199254740991 + 1); // 9007199254740992
console.log(9007199254740991 + 2); // 9007199254740992

// the "n" at the end means it's a BigInt
const bigInt = 1234567890123456789012345678901234567890n;


let str = "Hello";
let str2 = 'Single quotes are ok too';
let phrase = `can embed another ${str}`;


typeof undefined;        // "undefined"
typeof 0;                // "number"
typeof 10n;              // "bigint"
typeof true;             // "boolean"
typeof "foo";            // "string"
typeof Symbol("id");     // "symbol"
typeof Math;             // "object"
typeof null;             // "object"
typeof alert;            // "function"


let value = true;
alert(typeof value); // boolean

value = String(value); // now value is a string "true"
alert(typeof value); // string


let str1= "123";
alert(typeof str1); // string

let num = Number(str1); // becomes a number 123
alert(typeof num); // number
