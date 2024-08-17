// Khai báo hằng số không thay đổi
const PI = 3.14159;

// Hàm tính diện tích của một hình tròn
function calculateArea(radius) {
    // Khai báo biến tạm thời trong phạm vi hàm
    let area = PI * radius * radius;
    return area;
}

// Hàm chính để thực hiện các phép toán và hiển thị kết quả
function main() {
    // Khai báo biến đầu vào với let, vì giá trị có thể thay đổi
    let radius = 5;
    
    // Tính diện tích với hàm calculateArea
    let area = calculateArea(radius);
    
    // Hiển thị kết quả
    console.log(`Diện tích của hình tròn với bán kính ${radius} là ${area}.`);
    
    // Thay đổi bán kính và tính lại diện tích
    radius = 10;
    area = calculateArea(radius);
    console.log(`Diện tích của hình tròn với bán kính ${radius} là ${area}.`);
}

// Gọi hàm chính để thực hiện mã
main();


