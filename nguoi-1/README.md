# NGƯỜI 1 — Thư viện & Màn hình khởi đầu (`nguoi-1/`)

- **Nhánh Git:** `feat/member-1`
- **Số bản giao diện được giao:** 8 bản
- **Thư mục được phép chỉnh sửa:** Chỉ các file bên trong `nguoi-1/` (không sửa `nguoi-2/`, `nguoi-3/`, `nguoi-4/`; nếu cần sửa `shared/`, phối hợp nhóm trưởng).

## 1. Danh sách 8 màn hình được giao

| Mã | Thư mục | Nhóm | Ghi chú chính |
|---|---|---|---|
| `M00` | `nguoi-1/M00_ThuVien/` | A & B | Thư viện component, màu mở rộng, gradient, typography, `MeteorBackground` |
| `M01a` | `nguoi-1/M01_DangNhap/` | A | `AuthLayout` 2 cột desktop + sao băng luôn bật + nút Dùng ngay |
| `M01b` | `nguoi-1/M01_DangKy/` | A | `AuthLayout` 2 cột desktop + sao băng luôn bật |
| `M02` | `nguoi-1/M02_ChonVaiTro/` | A | Nền lưới công nghệ nhẹ, 3 thẻ vai trò xếp ngang desktop / dọc mobile |
| `M03` | `nguoi-1/M03_TrangChu/` | A | Hero gradient + khiên SVG + sao băng tuỳ chọn + 3 card hành động |
| `M04c` | `nguoi-1/M04_KiemTra_DangNghe/` | A | Giao diện nghe giọng nói có sóng âm (mô phỏng) |
| `M13` | `nguoi-1/M13_CaNhan/` | A | Hồ sơ, chữ lớn, giọng nói, bật/tắt hiệu ứng chuyển động, chế độ tối, lịch sử |
| `E00` | `nguoi-1/E00_MatMang/` | A | Trạng thái mất mạng dùng `EmptyState` |

## 2. Component dùng chung từ `shared/`
- Layouts: `shared/layouts/AppLayout.js`, `shared/layouts/AuthLayout.js`
- Components: `MeteorBackground`, `ThemeSwitcher`, `AlertCard`, `EmptyState`, `LoadingState`, `ProgressBar`, `showToast`, `showModal`
- Data & State: `shared/scripts/mock-data.js`, `shared/scripts/store.js`, `shared/scripts/theme.js`, `shared/scripts/navigation.js`

## 3. Luồng điều hướng liên quan
- `M01a → M03` (Đăng nhập) · `M01a → M02` (Dùng ngay) · `M01a ↔ M01b` (Đăng ký)
- `M02 → M03` (Hoàn tất chọn vai trò & phường)
- `M03 → M04a` (Bắt đầu luồng chính 5 màn) · `M03 → M06a / M08a / M09`
- `M04c → M04a` (Trả về SĐT mô phỏng) · `M13 → M02 / M06a / M01a`

## 4. Phần đã dựng khung & Phần cần hoàn thiện
- **Đã dựng khung:** Đủ 8 bản responsive (Mobile/Tablet/Desktop), thiết kế mẫu hoàn chỉnh cho `M01_DangNhap` và `M03_TrangChu`, nối toàn bộ điều hướng và công tắc trợ năng trong `M13`.
- **Cần hoàn thiện:** Bổ sung kiểm tra hợp lệ mô phỏng cho form `M01a`/`M01b`, tinh chỉnh hộp thoại lịch sử trong `M13`, kiểm thử chéo với Người 2 và hoàn thiện mục `(a)` bản thuyết minh.

## 5. Cách chạy & kiểm tra
```bash
python -m http.server 5500
# Mở http://localhost:5500/preview/index.html để xem nhanh 8 màn của Người 1 ở Mobile / Tablet / Desktop
```
