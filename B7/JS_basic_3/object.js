// 1. Tạo Đối Tượng
// javascript
// Tạo một đối tượng rỗng


// let person = {};

// Tạo một đối tượng với các thuộc tính và phương thức
// let person = {
//     name: 'Alice',
//     age: 30,
//     obj: {a: 1, b: 'hehe', c: [1,2,3]},
//     tall: '170'
// };
// console.log(person);

// let person = {
//     name: 'Alice',
//     age: 30,
//     greet: function() {
//         console.log('Hello, my name is ' + this.name);
//     }
// };

// // 2. Truy Cập Thuộc Tính
// // Có hai cách để truy cập thuộc tính của đối tượng:
// javascript

// let person = {
//     name: 'Alice',
//     age: 30,
//     obj: {a: 1}
// };

// // Truy cập bằng dấu chấm
// console.log(person.obj.a); // Output: Alice

// // Truy cập bằng dấu ngoặc vuông
// console.log(person['age']); // Output: 30

// // 3. Thêm hoặc Cập Nhật Thuộc Tính
// // javascript

// let person = {
//     name: 'Alice',
//     age: 30
// };

// // Thêm thuộc tính mới
// person.job = 'Engineer';

// // // Cập nhật thuộc tính đã tồn tại
// person.age = 31;

// console.log(person); // Output: { name: 'Alice', age: 31, job: 'Engineer' }

// // 4. Xóa Thuộc Tính
// // javascript

// let person = {
//     name: 'Alice',
//     age: 30
// };

// // Xóa thuộc tính
// delete person.age;

// console.log(person); // Output: { name: 'Alice' }

// // 5. Kiểm Tra Sự Tồn Tại Của Thuộc Tính
// // javascript

// let person = {
//     name: 'Alice',
//     age: 30
// };

// // Kiểm tra thuộc tính tồn tại
// console.log('name' in person); // Output: true
// console.log('age' in person); // Output: true
// console.log('job' in person); // Output: false

// // 6. Lặp Qua Các Thuộc Tính
// // Sử dụng for...in để lặp qua các thuộc tính của đối tượng:
// // javascript

// let person = {
//     name: 'Alice',
//     age: 30,
//     job: 'Engineer',
//     obj: {a: 1, b:2}
// };

// for (let key in person) {
//     console.log(key + ': ' + person[key]);
// }
// Output:
// name: Alice
// age: 30
// job: Engineer

// // 7. Ký Tự Đặc Biệt Trong Tên Thuộc Tính
// // Nếu tên thuộc tính chứa ký tự đặc biệt hoặc là một từ khóa JavaScript, bạn cần sử dụng dấu ngoặc vuông:
// // javascript

// let obj = {
//     'first name': 'John',
//     'age': 25
// };

// console.log(obj['first name']); // Output: John

// // 8. Nhúng Đối Tượng
// // Đối tượng có thể chứa các đối tượng khác như thuộc tính:
// // javascript

// let person = {
//     name: 'Alice',
//     address: {
//         street: '123 Main St',
//         city: 'Somewhere'
//     }
// };

// console.log(person.address.city); // Output: Somewhere

// // 9. Sao Chép Đối Tượng
// // Bạn có thể sao chép đối tượng bằng cách sử dụng Object.assign() hoặc spread operator (...):
// // javascript

// Sử dụng Object.assign()
// let person = { name: 'Alice', age: 30 };
// let copyPerson = Object.assign({}, person);
// console.log(copyPerson); // Output: { name: 'Alice', age: 30 }

// Sử dụng spread operator
// let person = { name: 'Alice', age: 30 };
// let copyPerson = { ...person };
// console.log(copyPerson); // Output: { name: 'Alice', age: 30 }

// // 10. Gộp Đối Tượng
// Sử dụng Object.assign() hoặc spread operator để kết hợp các đối tượng:
// javascript

// let person = { name: 'Alice' };
// let job = { job: 'Engineer' };

// let combined = Object.assign({}, person, job);
// console.log(combined); // Output: { name: 'Alice', job: 'Engineer' }

// // Sử dụng spread operator
// let combined = { ...person, ...job };
// console.log(combined); // Output: { name: 'Alice', job: 'Engineer' }

// // 11. Lấy Các Phương Thức và Thuộc Tính
// // Sử dụng Object.keys(), Object.values(), và Object.entries() để lấy danh sách thuộc tính và giá trị:
// // javascript

let person = { name: 'Alice', age: 30 };

// Lấy tất cả các khóa
console.log(Object.keys(person)); // Output: ['name', 'age']

// Lấy tất cả các giá trị
console.log(Object.values(person)); // Output: ['Alice', 30]

// Lấy tất cả các cặp khóa-giá trị
console.log(Object.entries(person)); // Output: [['name', 'Alice'], ['age', 30]]
