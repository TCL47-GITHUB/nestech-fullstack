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

// Hàm xóa học sinh theo ID
async function deleteStudent(id) {
    let connection;

    try {
        connection = await connectToDatabase();
        const [results] = await connection.query('DELETE FROM hoc_sinh WHERE id = ?', [id]);
        console.log('Xóa học sinh thành công:', results);
    } catch (err) {
        console.error('Lỗi khi xóa học sinh:', err);
    } finally {
        if (connection) {
            await connection.end();
        }
    }
}

// Xóa học sinh theo ID
const studentIdToDelete = 1; // Thay đổi ID theo nhu cầu
deleteStudent(studentIdToDelete);
