# NGƯỜI 2 — Kiểm tra nhanh & Kết quả cảnh báo (`nguoi-2/`)

- **Nhánh Git:** `feat/member-2`
- **Số bản giao diện được giao:** 8 bản (trọng tâm luồng trình diễn ban giám khảo)
- **Thư mục được phép chỉnh sửa:** Chỉ các file bên trong `nguoi-2/`.

## 1. Danh sách 8 màn hình được giao

| Mã | Thư mục | Nhóm | Ghi chú chính |
|---|---|---|---|
| `M04a` | `nguoi-2/M04_KiemTra_SoDienThoai/` | A | Desktop 2 cột: công cụ kiểm tra 3 tab + lối vào AI dán tin nhắn + cột hướng dẫn & số mẫu |
| `M04b` | `nguoi-2/M04_KiemTra_DanTinNhan/` | A | Điểm cộng AI phân tích tin nhắn (mô phỏng), phối gradient Blue → Purple AI |
| `M05a` | `nguoi-2/M05_KetQua_AnToan/` | A | Kết quả AN TOÀN (xanh lá) + lý do + hướng dẫn tiếp theo |
| `M05b` | `nguoi-2/M05_KetQua_NghiNgo/` | A | Kết quả NGHI NGỜ (vàng cam) + nút Hỏi người thân |
| `M05c` | `nguoi-2/M05_KetQua_NguyHiem/` | A | **Trọng tâm luồng chính:** Kết quả NGUY HIỂM (đỏ) + nút Gọi người thân ngay |
| `M05c_Toi` | `nguoi-2/M05_KetQua_NguyHiem_Toi/` | A (Tối) | Bản chế độ tối Nhóm A (`#081421` tĩnh, không sao băng) |
| `E04` | `nguoi-2/E04_KiemTra_NhapSai/` | A | Trạng thái nhập sai định dạng, nút Kiểm tra mờ 40% |
| `E05` | `nguoi-2/E05_KetQua_ChuaCoDuLieu/` | A | Chưa có dữ liệu — nhấn mạnh chưa có báo cáo không phải an toàn |

## 2. Component dùng chung từ `shared/`
- `shared/layouts/AppLayout.js`, `shared/components/ui.js` (`AlertCard`, `renderReasonCard`, `simulateSpeak`, `showToast`, `ICONS`)
- `shared/scripts/mock-data.js`, `shared/scripts/store.js`, `shared/scripts/navigation.js`

## 3. Luồng điều hướng liên quan
- `M03 → M04a → M05c → M06a` (Luồng chính)
- `M04a → M04b` (AI dán tin nhắn) · `M04a → M04c` (Giọng nói) · `M04a → M05a / M05b / E04 / E05`
- `M05* → M08a` (Chuyển sang báo cáo kèm sẵn giá trị vừa tra) · `M05* → M06a / M07`

## 4. Phần đã dựng khung & Phần cần hoàn thiện
- **Đã dựng khung:** Đủ 8 màn responsive 2 cột desktop / 1 cột mobile, nối đầy đủ luồng chính và các trạng thái lỗi.
- **Đã hoàn thiện (Người 2):**
  - `kiem-tra.js`: kiểm tra 4 loại (số điện thoại, đường dẫn, số tài khoản, email), báo lỗi nhập ngay dưới ô, trả về kết quả kèm lý do.
  - `M04a`: thêm tab Email, mẫu thử đổi theo từng tab, ô trống thì báo chứ không tự điền.
  - `M04b`: dò 7 nhóm dấu hiệu, 2 dấu hiệu trở lên → `M05c`, 1 → `M05b`, không có → `E05`.
  - `M05*`, `E05`: lý do và việc cần làm đổi theo loại đã kiểm tra.
  - `chung.js` + `nguoi-2.css`: hành lang chuyển trang, khối bay vào, hover, màn quét, giọng đọc tiếng Việt, tự ẩn nút dẫn tới trang chưa có.
- **Còn lại:** soát chéo với Người 3 và viết mục `(b)` bản thuyết minh.

## 5. Cách chạy & kiểm tra
```bash
python -m http.server 5500
# Mở http://localhost:5500/preview/index.html để xem nhanh 8 màn của Người 2
```
