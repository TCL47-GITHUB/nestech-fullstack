// // Tạo mảng
// let numbers = [15, 10, 5, 6, 1];

// // Hàm tìm kiếm phần tử trong mảng bằng vòng lặp for
// function findElement(arr, value) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === value) {
//             return i; // Trả về chỉ số của phần tử nếu tìm thấy
//         }
//     }
//     return -1; // Trả về -1 nếu không tìm thấy phần tử
// }

// // Kiểm tra hàm tìm kiếm
// let index = findElement(numbers, 10);
// console.log("Chỉ số của phần tử 10: ", index); // Output: 1

// index = findElement(numbers, 99);
// console.log("Chỉ số của phần tử 99: ", index); // Output: -1





// // Tạo mảng
// let numbers = [15, 10, 5, 6, 1];

// // Hàm tìm kiếm và thay đổi phần tử trong mảng
// function updateElement(arr, oldValue, newValue) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === oldValue) {
//             arr[i] = newValue; // Thay đổi giá trị của phần tử tìm được
//             return; // Dừng vòng lặp khi đã thay đổi thành công
//         }
//     }
//     console.log("Phần tử cần sửa không tồn tại trong mảng.");
// }

// // Kiểm tra hàm
// updateElement(numbers, 6, 100);
// console.log("Mảng sau khi sửa phần tử 6 thành 100: ", numbers); // Output: [15, 10, 5, 100, 1]

// updateElement(numbers, 99, 200); // Phần tử 99 không tồn tại
// console.log("Mảng sau khi thử sửa phần tử 99 thành 200: ", numbers); // Output: [15, 10, 5, 100, 1]















// // Tạo mảng đã sửa
// let numbers = [15, 10, 5, 10, 10, 6, 10, 1];



// // Hàm tìm kiếm và thay đổi phần tử trong mảng
// function updateElement(arr, oldValue, newValue) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === oldValue) {
//             arr[i] = newValue; // Thay đổi giá trị của phần tử tìm được
//         }
//     }
// }

// // Kiểm tra hàm
// updateElement(numbers, 10, 100);
// console.log("Mảng sau khi sửa phần tử 10 thành 100: ", numbers); // Output: [15, 100, 5, 100, 100, 6, 100, 1]




// Tạo mảng gốc
let numbers = [15, 10, 5, 10, 10, 6, 10, 1];

// Hàm tạo mảng mới không chứa các phần tử có giá trị oldValue
function removeElement(arr, value) {
    let newArray = []; // Mảng mới sẽ chứa các phần tử không có giá trị oldValue
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== value) {
            newArray.push(arr[i]); // Thêm phần tử vào mảng mới nếu không bằng oldValue
        }
    }
    return newArray; // Trả về mảng mới
}

// Kiểm tra hàm
let newArray = removeElement(numbers, 10);
console.log("Mảng mới sau khi xóa tất cả phần tử 10: ", newArray); // Output: [15, 5, 6, 1]

