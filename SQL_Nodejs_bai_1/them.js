const mysql = require('mysql2/promise');

// Tạo kết nối cơ sở dữ liệu
async function connectToDatabase() {
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '12345',
        database: 'ql_hoc_sinh'
    });
}

// Hàm thêm học sinh mới
async function addStudent(student) {
    const connection = await connectToDatabase();

    try {
        const [results] = await connection.query('INSERT INTO hoc_sinh SET ?', student);
        console.log('Thêm học sinh thành công với ID:', results.insertId);
    } catch (err) {
        console.error('Lỗi khi thêm học sinh:', err);
    } finally {
        await connection.end();
    }
}

// Thêm học sinh mới
const newStudent = { ten: 'Nguyen Van E', toan: 7.5, ly: 8.0, hoa: 8.5 };
addStudent(newStudent);
