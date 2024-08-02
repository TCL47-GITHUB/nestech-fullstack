let number = 4.56789;

// Làm tròn đến số nguyên gần nhất
let roundedNearest = Math.round(number);
console.log("Làm tròn đến số nguyên gần nhất:", roundedNearest); // Kết quả: 5

// Làm tròn lên đến số nguyên gần nhất
let roundedUp = Math.ceil(number);
console.log("Làm tròn lên đến số nguyên gần nhất:", roundedUp); // Kết quả: 5

// Làm tròn xuống đến số nguyên gần nhất
let roundedDown = Math.floor(number);
console.log("Làm tròn xuống đến số nguyên gần nhất:", roundedDown); // Kết quả: 4

// Làm tròn đến 2 chữ số thập phân
let roundedToFixed = number.toFixed(2);
console.log("Làm tròn đến 2 chữ số thập phân:", roundedToFixed); // Kết quả: "4.57"

// Loại bỏ phần thập phân và chỉ giữ lại phần nguyên
let truncated = Math.trunc(number);
console.log("Loại bỏ phần thập phân:", truncated); // Kết quả: 4

// Làm tròn đến 2 chữ số thập phân
let factor = Math.pow(10, 2);
let roundedTo = Math.round(number * factor) / factor;
console.log("Làm tròn đến 2 chữ số thập phân:", roundedTo); // Kết quả: 4.57


// Math.pow(10, 2): Tạo hệ số 100, tương ứng với số lượng chữ số thập phân (2 chữ số).
// number * factor: Nhân số 4.56789 với 100, để chuyển số thành 456.789.
// Math.round(): Làm tròn số 456.789 thành 457.
// 457 / factor: Chia 457 cho 100 để chuyển kết quả trở lại dạng số thập phân với 2 chữ số, tạo ra 4.57.






// // Làm tròn đến số nguyên gần nhất
// function roundNearest(num) {
//     return Math.round(num);
// }

// // Làm tròn lên đến số nguyên gần nhất
// function roundUp(num) {
//     return Math.ceil(num);
// }

// // Làm tròn xuống đến số nguyên gần nhất
// function roundDown(num) {
//     return Math.floor(num);
// }

// // Làm tròn đến số chữ số thập phân cố định
// function roundToFixed(num, decimals) {
//     return num.toFixed(decimals);
// }

// // Loại bỏ phần thập phân và chỉ giữ lại phần nguyên
// function truncate(num) {
//     return Math.trunc(num);
// }

// // Làm tròn đến số chữ số thập phân cụ thể
// function roundTo(num, decimals) {
//     let factor = Math.pow(10, decimals);
//     return Math.round(num * factor) / factor;
// }

// // Ví dụ sử dụng các hàm trên
// let number = 4.56789;

// console.log("Làm tròn đến số nguyên gần nhất:", roundNearest(number));      // Kết quả: 5
// console.log("Làm tròn lên đến số nguyên gần nhất:", roundUp(number));       // Kết quả: 5
// console.log("Làm tròn xuống đến số nguyên gần nhất:", roundDown(number));   // Kết quả: 4
// console.log("Làm tròn đến 2 chữ số thập phân:", roundToFixed(number, 2));   // Kết quả: "4.57"
// console.log("Loại bỏ phần thập phân:", truncate(number));                   // Kết quả: 4
// console.log("Làm tròn đến 2 chữ số thập phân:", roundTo(number, 2));        // Kết quả: 4.57
