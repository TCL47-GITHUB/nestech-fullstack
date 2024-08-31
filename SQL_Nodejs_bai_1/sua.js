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

// Hàm cập nhật thông tin học sinh
async function updateStudent(id, updatedInfo) {
    let connection;

    try {
        connection = await connectToDatabase();
        const [results] = await connection.query(
            'UPDATE hoc_sinh SET ten = ?, toan = ?, ly = ?, hoa = ? WHERE id = ?',
            [updatedInfo.ten, updatedInfo.toan, updatedInfo.ly, updatedInfo.hoa, id]
        );
        console.log('Cập nhật học sinh thành công:', results);
    } catch (err) {
        console.error('Lỗi khi cập nhật học sinh:', err);
    } finally {
        if (connection) {
            await connection.end();
        }
    }
}

// Cập nhật thông tin học sinh
const studentIdToUpdate = 1; // Thay đổi ID theo nhu cầu
const updatedStudentInfo = {
    ten: 'Nguyen Van G',
    toan: 8.5,
    ly: 7.5,
    hoa: 8.0
};

updateStudent(studentIdToUpdate, updatedStudentInfo);
