let number = 4.56789;
let angle = Math.PI / 4; // 45 độ

console.log("Giá trị tuyệt đối của -5:", Math.abs(-5)); // Kết quả: 5
console.log("Làm tròn lên 4.1:", Math.ceil(4.1)); // Kết quả: 5
console.log("Làm tròn xuống 4.9:", Math.floor(4.9)); // Kết quả: 4
console.log("Giá trị lớn nhất trong (1, 3, 2):", Math.max(1, 3, 2)); // Kết quả: 3
console.log("Giá trị nhỏ nhất trong (1, 3, 2):", Math.min(1, 3, 2)); // Kết quả: 1
console.log("Giá trị của 2^3:", Math.pow(2, 3)); // Kết quả: 8
console.log("Số ngẫu nhiên từ 0 đến 1:", Math.random()); // Kết quả: Một số ngẫu nhiên giữa 0 và 1
console.log("Làm tròn 4.5:", Math.round(4.5)); // Kết quả: 5
console.log("Căn bậc hai của 16:", Math.sqrt(16)); // Kết quả: 4
console.log("Loại bỏ phần thập phân của 4.9:", Math.trunc(4.9)); // Kết quả: 4
console.log("Làm tròn số 4.56789 đến số nguyên gần nhất:", Math.round(number)); // Kết quả: 5
console.log("Làm tròn lên số 4.56789:", Math.ceil(number)); // Kết quả: 5
console.log("Làm tròn xuống số 4.56789:", Math.floor(number)); // Kết quả: 4
console.log("Làm tròn số 4.56789 đến 2 chữ số thập phân:", number.toFixed(2)); // Kết quả: "4.57"
console.log("Loại bỏ phần thập phân của 4.56789:", Math.trunc(number)); // Kết quả: 4

// Làm tròn số 4.56789 đến 2 chữ số thập phân
let factor = Math.pow(10, 2);
let roundedToTwoDecimals = Math.round(number * factor) / factor;
console.log("Làm tròn số 4.56789 đến 2 chữ số thập phân:", roundedToTwoDecimals); // Kết quả: 4.57

// Math.pow(10, 2): Tạo hệ số 100, tương ứng với số lượng chữ số thập phân (2 chữ số).
// number * factor: Nhân số 4.56789 với 100, để chuyển số thành 456.789.
// Math.round(): Làm tròn số 456.789 thành 457.
// 457 / factor: Chia 457 cho 100 để chuyển kết quả trở lại dạng số thập phân với 2 chữ số, tạo ra 4.57.
