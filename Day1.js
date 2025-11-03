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




// --- Unary and Binary Operators ---
let x = 1;
x = -x;
alert(x); // -1, unary negation

let y = 3;
alert(y - x); // 4, binary subtraction (3 - (-1) = 4)


// --- Remainder % ---
alert(5 % 2); // 1
alert(8 % 3); // 2
alert(8 % 4); // 0


// --- Exponentiation ** ---
alert(2 ** 2); // 4
alert(2 ** 3); // 8
alert(2 ** 4); // 16

alert(4 ** (1/2)); // 2, square root
alert(8 ** (1/3)); // 2, cubic root


// --- String concatenation with + ---
let s = "my" + "string";
alert(s); // "mystring"

alert('1' + 2); // "12"
alert(2 + '1'); // "21"
alert(2 + 2 + '1'); // "41"
alert('1' + 2 + 2); // "122"

// Other arithmetic operators convert to numbers:
alert(6 - '2'); // 4
alert('6' / '2'); // 3


// --- Unary + (Numeric conversion) ---
let a = 1;
alert(+a); // 1

let b = -2;
alert(+b); // -2

alert(+true); // 1
alert(+"" );  // 0


// --- Converting strings to numbers before adding ---
let apples = "2";
let oranges = "3";

alert(apples + oranges); // "23" (string concatenation)
alert(+apples + +oranges); // 5 (numeric addition)


// --- Operator Precedence ---
let result = 1 + 2 * 2;
alert(result); // 5 (multiplication first)

result = (1 + 2) * 2;
alert(result); // 6


// --- Assignment ---
let z = 2 * 2 + 1;
alert(z); // 5


// --- Assignment returns a value ---
let aa = 1;
let bb = 2;
let cc = 3 - (aa = bb + 1);

alert(aa); // 3
alert(cc); // 0


// --- Chaining Assignments ---
let p, q, r;
p = q = r = 2 + 2;
alert(p); // 4
alert(q); // 4
alert(r); // 4


// --- Modify-in-place ---
let n = 2;
n += 5; // 7
n *= 2; // 14
alert(n); // 14

n = 2;
n *= 3 + 5; // n = 2 * 8
alert(n); // 16


// --- Increment/Decrement ---
let counter = 2;
counter++;
alert(counter); // 3

counter--;
alert(counter); // 2

// Prefix vs Postfix
counter = 1;
let pre = ++counter;
alert(pre); // 2

counter = 1;
let post = counter++;
alert(post); // 1

// No difference if not using the result
counter = 0;
counter++;
++counter;
alert(counter); // 2

// Prefix returns new value
counter = 0;
alert(++counter); // 1

// Postfix returns old value
counter = 0;
alert(counter++); // 0

// In expressions
counter = 1;
alert(2 * ++counter); // 4

counter = 1;
alert(2 * counter++); // 2

// Clearer style:
counter = 1;
alert(2 * counter);
counter++;


// --- Bitwise Operators (examples only, no alerts) ---
let bitA = 5 & 3; // AND
let bitO = 5 | 3; // OR
let bitX = 5 ^ 3; // XOR
let bitN = ~5;    // NOT
let bitL = 5 << 1; // Left shift
let bitR = 5 >> 1; // Right shift
let bitZR = 5 >>> 1; // Zero-fill right shift

console.log(bitA, bitO, bitX, bitN, bitL, bitR, bitZR);




// --- Basic comparisons ---
alert(2 > 1);   // true
alert(2 == 1);  // false
alert(2 != 1);  // true

// Assign comparison result to a variable
let result = 5 > 4;
alert(result);  // true


// --- String comparison ---
alert('Z' > 'A');      // true
alert('Glow' > 'Glee'); // true
alert('Bee' > 'Be');   // true


// --- Comparison of different types ---
alert('2' > 1);  // true ('2' converted to number 2)
alert('01' == 1); // true ('01' converted to number 1)

// Booleans to numbers
alert(true == 1);  // true
alert(false == 0); // true


// --- Funny consequence ---
let a = 0;
alert(Boolean(a)); // false

let b = "0";
alert(Boolean(b)); // true

alert(a == b); // true (string "0" converted to number 0)


// --- Strict equality === ---
alert(0 == false);  // true (type conversion)
alert('' == false); // true (empty string -> 0)

alert(0 === false); // false (different types)


// --- Strict non-equality !== ---
alert(1 !== true); // true
alert('1' !== 1);  // true
alert(1 !== 1);    // false


// --- Comparison with null and undefined ---
alert(null === undefined); // false (different types)
alert(null == undefined);  // true (special case)

// Math and comparison operators convert null/undefined to numbers
alert(null > 0);  // false
alert(null == 0); // false
alert(null >= 0); // true

// undefined comparisons
alert(undefined > 0);  // false
alert(undefined < 0);  // false
alert(undefined == 0); // false


// --- Safe practice reminder ---
// Always check for null/undefined explicitly before comparing:
let value = null;
if (value == null) {
  alert("Value is null or undefined");
} else if (value >= 0) {
  alert("Value is non-negative");
} else {
  alert("Value is negative");
}
