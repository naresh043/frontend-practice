let arr=[1,2,3,5,true,"naresh"]

//at
console.log(arr.at(-6));
console.log(arr.at(2));

//concat 
const array1 = Array.of(1,2,3);
const array2 = ["d", "e", "f"];
const array3 = array1.concat(array2);

console.log(array3);


//Entries
const array = ["a", "b", "c"];
let it = array.entries();

console.log(it.next()); 
// { value: [0, "a"], done: false }

console.log(it.next()); 
// { value: [1, "b"], done: false }

console.log(it.next()); 
// { value: [2, "c"], done: false }

console.log(it.next()); 
// { value: undefined, done: true }

const a = ["a", "b", "c"];

for (const [index, element] of a.entries()) {
  console.log(index, element);
}

// 0 'a'
// 1 'b'
// 2 'c'

//flat method 
const arr1 = [1, 2, [3, 4]];
console.log(arr1.flat());
// Output: [1, 2, 3, 4]

const arr2 = [1, 2, [3, 4, [5, 6]]];
console.log(arr2.flat());
// Output: [1, 2, 3, 4, [5, 6]]

const arr3 = [1, 2, [3, 4, [5, 6]]];
console.log(arr3.flat(2));
// Output: [1, 2, 3, 4, 5, 6]

const arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
console.log(arr4.flat(Infinity));
// Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//includes
// const arr = ["a", "b", "c"];

console.log(arr.includes("c", 3));      // Output: false
console.log(arr.includes("c", 100));    // Output: false
console.log([1, 2, 3].includes(2));     // Output: true
console.log([1, 2, 3].includes(4));     // Output: false
console.log([1, 2, 3].includes(3, 3));  // Output: false
console.log([1, 2, 3].includes(3, -1)); // Output: true
console.log([1, 2, NaN].includes(NaN)); // Output: true
console.log(["1", "2", "3"].includes(3)); // Output: false

//join method 
arr.push(1, [3, arr, 4], 2);
console.log(arr.join(";")); 

// Output: 1;3,,4;2

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(matrix.join()); 
// Output: 1,2,3,4,5,6,7,8,9

console.log(matrix.join(";"));
// Output: 1,2,3;4,5,6;7,8,9

//lastIndexOf()
const numbers = [2, 5, 9, 2];

console.log(numbers.lastIndexOf(2));      
console.log(numbers.lastIndexOf(7));      
console.log(numbers.lastIndexOf(2, 3));   
console.log(numbers.lastIndexOf(2, 2));   
console.log(numbers.lastIndexOf(2, -2));  
console.log(numbers.lastIndexOf(2, -1));  