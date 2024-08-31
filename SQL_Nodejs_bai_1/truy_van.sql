-- 1. Tạo cơ sở dữ liệu và sử dụng nó
CREATE DATABASE ql_hoc_sinh;
USE ql_hoc_sinh;

-- 2. Tạo bảng `hoc_sinh`
CREATE TABLE hoc_sinh (
    id INT AUTO_INCREMENT PRIMARY KEY,
    ten VARCHAR(255) NOT NULL,
    toan FLOAT,
    ly FLOAT,
    hoa FLOAT
);

-- 3. Thêm dữ liệu vào bảng
INSERT INTO hoc_sinh (ten, toan, ly, hoa) VALUES ('Nguyen Van A', 8.5, 9.0, 7.5);
INSERT INTO hoc_sinh (ten, toan, ly, hoa) VALUES ('Tran Thi B', 7.0, 6.5, 8.0);

-- 4. Sửa dữ liệu trong bảng
UPDATE hoc_sinh
SET toan = 9.0, ly = 8.5
WHERE ten = 'Nguyen Van A';

-- 5. Xóa dữ liệu trong bảng
DELETE FROM hoc_sinh
WHERE ten = 'Tran Thi B';

-- 6. Thêm cột vào bảng
ALTER TABLE hoc_sinh
ADD COLUMN dia_ly FLOAT;

-- 7. Sửa cột trong bảng
ALTER TABLE hoc_sinh
MODIFY COLUMN hoa DECIMAL(5, 2);

-- 8. Xóa cột trong bảng
ALTER TABLE hoc_sinh
DROP COLUMN dia_ly;

















-- 1. Truy Vấn Tất Cả Dữ Liệu Trong Bảng
SELECT * FROM hoc_sinh;

-- 2. Truy Vấn Dữ Liệu Theo Điều Kiện
SELECT * FROM hoc_sinh WHERE ten = 'Nguyen Van A';

-- 3. Truy Vấn Các Cột Cụ Thể
SELECT ten, toan, ly FROM hoc_sinh;

-- 4. Sắp Xếp Dữ Liệu
-- Theo điểm Toán giảm dần
SELECT * FROM hoc_sinh ORDER BY toan DESC;

-- Theo tên học sinh tăng dần
SELECT * FROM hoc_sinh ORDER BY ten ASC;

-- 5. Tính Tổng, Trung Bình, Tối Đa, Tối Thiểu
-- Tổng điểm Toán
SELECT SUM(toan) AS tong_diem_toan FROM hoc_sinh;

-- Trung bình điểm Toán
SELECT AVG(toan) AS trung_binh_diem_toan FROM hoc_sinh;

-- Điểm Toán cao nhất
SELECT MAX(toan) AS diem_toan_cao_nhat FROM hoc_sinh;

-- Điểm Toán thấp nhất
SELECT MIN(toan) AS diem_toan_thap_nhat FROM hoc_sinh;

-- 6. Đếm Số Lượng Dữ Liệu
SELECT COUNT(*) AS so_luong_hoc_sinh FROM hoc_sinh;

-- 7. Nhóm Dữ Liệu và Tính Tổng
-- Tính tổng điểm Toán theo mỗi học sinh
SELECT ten, SUM(toan) AS tong_diem_toan FROM hoc_sinh GROUP BY ten;

-- 8. Truy Vấn Với Điều Kiện Phức Tạp
-- Tìm các học sinh có điểm Toán trên 8 và điểm Lý dưới 7
SELECT * FROM hoc_sinh WHERE toan > 8 AND ly < 7;

-- Tìm các học sinh có điểm Toán lớn hơn điểm Lý
SELECT * FROM hoc_sinh WHERE toan > ly;
