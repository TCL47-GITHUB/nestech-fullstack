// Tạo mảng
// let numbers = [15, 10, 5, 6, 1];
// console.log(numbers);
// let kq = "";

// for(let i=0 ; i < numbers.length; i++){
//     console.log(numbers[i]); 
//     if(numbers[i] == 5){
//          kq ='yes';
//          break;
//     }
//     else{
//         kq ='no';
//     }
// }
// console.log(kq);

// let fruits = ["apple", "banana", "cherry"];


// // Truy cập phần tử trong mảng
// console.log("Phần tử đầu tiên của numbers:", numbers[0]);
// console.log("Phần tử thứ hai của fruits:", fruits[1]);

// // Thay đổi giá trị của phần tử trong mảng
// numbers[0] = 10;
// console.log("Mảng numbers sau khi thay đổi giá trị đầu tiên:", numbers);

// // Thêm phần tử vào mảng
// numbers.push(6); // Thêm vào cuối
// numbers.push(555);
// numbers.unshift(555); //Thêm vào đầu
// fruits.unshift("strawberry"); // Thêm vào đầu
// console.log("Mảng numbers sau khi thêm phần tử:", numbers);
// console.log("Mảng fruits sau khi thêm phần tử:", fruits);

// // Xóa phần tử khỏi mảng
// numbers.pop(); // Xóa phần tử cuối cùng
// numbers.shift(); // Xóa phần tử đầu tiên
// fruits.shift(); // Xóa phần tử đầu tiên
// console.log("Mảng numbers sau khi xóa phần tử cuối cùng:", numbers);
// console.log("Mảng fruits sau khi xóa phần tử đầu tiên:", fruits);

// // Xóa phần tử tại vị trí cụ thể
// let indexToDelete = 2;
// numbers.splice(indexToDelete, 1); // Xóa phần tử tại vị trí thứ hai
// console.log("Mảng numbers sau khi xóa phần tử tại vị trí 2:", numbers);

// // Duyệt qua mảng
// console.log("Duyệt qua mảng fruits bằng vòng lặp for:");
// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }

// console.log("Duyệt qua mảng fruits bằng forEach:");
// fruits.forEach(function(element) {
//   console.log(element);
// });
// console.log("Duyệt qua mảng numbers bằng forEach:");
// numbers.forEach(function(element) {
//     console.log(element);
//   });
//   console.log("Duyệt qua mảng numbers bằng forEach:");
//   let b = 0;
//   numbers.forEach(function(element) {
//       b++;
//       console.log('b= ' + b);
//       console.log(element);
//       if(element == 5){
//           console.log('co');
//       }
//     });

// // Sắp xếp theo thứ tự tăng dần
// numbers.sort((a, b) => a - b);

// console.log("Mảng đã sắp xếp theo thứ tự tăng dần: ", numbers);

// // Sắp xếp theo thứ tự giảm dần
// numbers.sort((a, b) => b - a);

// console.log("Mảng đã sắp xếp theo thứ tự giảm dần: ", numbers);

// let chu = ['a', 'd', 'g', 'b'];
// console.log(chu.sort());

// let numbers = [15, 12, 5, 6, 1, 7, 1, 4];
// 1.thay số 5 thành số 100
// 2.Xóa hết số 1 trong Array

let numbers = [15, 10, 1, 5, 6, 1,1,1];
console.log(numbers);

for(let i=0 ; i < numbers.length; i++){
    if(numbers[i] == 5){
        numbers[i] = 100;
        console.log('sau khi sửa: ' + numbers);
    }
}

// cach 1
// for (let i=0 ; i < numbers.length; i++) {
//     if (numbers[i] == 1) {
//       numbers.splice(i, 1);
//       i--;
//     }
//   }
//   console.log('sau khi xóa: ' + numbers);

  // cach 2
  let new_numbers = [];

  for (let i=0 ; i < numbers.length; i++) {
    if (numbers[i] != 1) {
      new_numbers.push(numbers[i]);
    }
  }
  console.log('sau khi xóa: ' + new_numbers);


