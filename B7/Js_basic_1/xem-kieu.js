let number = 42;
let name = "Alice";
let isActive = true;
let person = { name: "Bob", age: 25 };
let numbers = [1, 2, 3];
let empty = null;
let undefinedVar;

console.log(typeof number); // "number"
console.log(typeof name); // "string"
console.log(typeof isActive); // "boolean"
console.log(typeof person); // "object"
console.log(typeof numbers); // "object"
console.log(typeof empty); // "object" (Lưu ý: `typeof null` trả về "object" là một lỗi lịch sử trong JavaScript)
console.log(typeof undefinedVar); // "undefined"