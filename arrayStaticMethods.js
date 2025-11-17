// from mthod

let createAnArray=(arr)=>{
    return Array.from(arr)
}
let arr=createAnArray([1,2,3]);
console.log(createAnArray(1,2,3));

for (i of arr)console.log(i) 




//array.of
let createAnArrayWithOfMethod=(arr)=>{
    return Array.of(arr)
}
let arr1=createAnArrayWithOfMethod(1,2,3);
console.log(createAnArrayWithOfMethod("123"));

for (i of arr1){
    console.log(i) 
}

//isArray
// all following calls return true
console.log(Array.isArray([])); // Output: true
console.log(Array.isArray([1])); // Output: true
console.log(Array.isArray(new Array())); // Output: true
console.log(Array.isArray(new Array("a", "b", "c", "d"))); // Output: true
console.log(Array.isArray(new Array(3))); // Output: true

// Little known fact: Array.prototype itself is an array:
console.log(Array.isArray(Array.prototype)); // Output: true

// --- Calls returning FALSE ---

console.log(Array.isArray()); // Output: false (No argument passed)
console.log(Array.isArray({})); // Output: false (Plain object)
console.log(Array.isArray(null)); // Output: false (Primitive)
console.log(Array.isArray(undefined)); // Output: false (Primitive)
console.log(Array.isArray(17)); // Output: false (Primitive number)
console.log(Array.isArray("Array")); // Output: false (Primitive string)
console.log(Array.isArray(true)); // Output: false (Primitive boolean)
console.log(Array.isArray(false)); // Output: false (Primitive boolean)
console.log(Array.isArray(new Uint8Array(32))); // Output: false (Typed Array)

// This is not an array, because it was not created using the
// array literal syntax or the Array constructor
console.log(Array.isArray({ __proto__: Array.prototype })); // Output: false (Plain object with array prototype, but still just an object)