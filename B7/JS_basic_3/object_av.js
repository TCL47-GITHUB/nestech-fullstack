// 1. Tạo đối tượng
// javascript
// Sao chép mã
const products = {
  101: { name: 'Laptop', price: 1000 },
  102: { name: 'Smartphone', price: 500 },
  103: { name: 'Tablet', price: 300 }
};
// 2. Tìm thuộc tính theo điều kiện
// Ví dụ: Tìm sản phẩm có giá lớn hơn 400.

// javascript
// Sao chép mã
function findProductsByPrice(minPrice) {
  const result = [];
  for (const key in products) {
    if (products[key].price > minPrice) {
      result.push(products[key]);
    }
  }
  return result;
}

console.log(findProductsByPrice(400));
// Kết quả: [{ name: 'Laptop', price: 1000 }, { name: 'Smartphone', price: 500 }]
// 3. Thêm thuộc tính mới
// Ví dụ: Thêm một sản phẩm mới vào đối tượng.

// javascript
// Sao chép mã
products[104] = { name: 'Headphones', price: 150 };

console.log(products);
// Kết quả: { 101: { name: 'Laptop', price: 1000 }, ... , 104: { name: 'Headphones', price: 150 } }
// 4. Xóa thuộc tính
// Ví dụ: Xóa sản phẩm có ID là 103.

// javascript
// Sao chép mã
delete products[103];

console.log(products);
// Kết quả: { 101: { name: 'Laptop', price: 1000 }, ... , 104: { name: 'Headphones', price: 150 } }
// 5. Sửa thuộc tính theo điều kiện
// Ví dụ: Sửa giá của sản phẩm có ID là 102 nếu giá hiện tại nhỏ hơn 600.

// javascript
// Sao chép mã
const productIdToUpdate = 102;
const newPrice = 450;

if (products[productIdToUpdate] && products[productIdToUpdate].price < 600) {
  products[productIdToUpdate].price = newPrice;
}

console.log(products);
// Kết quả: { 101: { name: 'Laptop', price: 1000 }, 102: { name: 'Smartphone', price: 450 }, 



// const products = {
//     101: { name: 'Laptop', price: 1000 },
//     102: { name: 'Smartphone', price: 500 },
//     103: { name: 'Tablet', price: 300 },
//     104: { name: 'Headphones', price: 150 }
//   };
  
//   function deleteProductByName(name) {
//     // Lặp qua các khóa của đối tượng products
//     for (const key in products) {
//       if (products[key].name === name) {
//         delete products[key]; // Xóa thuộc tính có tên khớp
//         return true; // Trả về true để cho biết xóa thành công
//       }
//     }
//     return false; // Trả về false nếu không tìm thấy sản phẩm
//   }
  
//   // Xóa sản phẩm có tên 'Tablet'
//   const result = deleteProductByName('Tablet');
  
//   console.log(result); // true nếu thành công, false nếu không tìm thấy
//   console.log(products);
//   // Kết quả: { 101: { name: 'Laptop', price: 1000 }, 102: { name: 'Smartphone', price: 500 }, 104: { name: 'Headphones', price: 150 } }