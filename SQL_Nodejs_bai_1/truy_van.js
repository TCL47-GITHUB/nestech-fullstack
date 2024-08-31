const mysql = require('mysql2');

// Tạo kết nối cơ sở dữ liệu
const connection = mysql.createConnection({
    host: 'localhost',       // Địa chỉ máy chủ cơ sở dữ liệu
    user: 'root',            // Tên người dùng cơ sở dữ liệu
    password: '12345',  // Mật khẩu của người dùng cơ sở dữ liệu
    database: 'ql_hoc_sinh'  // Tên cơ sở dữ liệu
});

// Kết nối đến cơ sở dữ liệu
connection.connect((err) => {
    if (err) {
        console.error('Lỗi kết nối cơ sở dữ liệu:', err);
        return;
    }
    console.log('Kết nối cơ sở dữ liệu thành công!');
});

// Thực hiện truy vấn SELECT để lấy dữ liệu từ bảng hoc_sinh
connection.query('SELECT * FROM hoc_sinh', (err, results, fields) => {
    if (err) {
        console.error('Lỗi khi truy vấn dữ liệu:', err);
        return;
    }
    
    // Hiển thị kết quả truy vấn
    console.log('Kết quả truy vấn:', results);
    
    // Nếu bạn muốn hiển thị dữ liệu cụ thể, bạn có thể lặp qua results
    results.forEach((row) => {
        console.log(`ID: ${row.id}, Tên: ${row.ten}, Toán: ${row.toan}, Lý: ${row.ly}, Hóa: ${row.hoa}`);
    });
});

// Đóng kết nối khi không cần thiết
connection.end();
