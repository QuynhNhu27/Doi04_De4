# NGƯỜI 3 — Người thân, Báo cáo lừa đảo & Danh sách bài học (`nguoi-3/`)

- **Nhánh Git:** `feat/member-3`
- **Số bản giao diện được giao:** 7 bản
- **Thư mục được phép chỉnh sửa:** Chỉ các file bên trong `nguoi-3/`.

## 1. Danh sách 7 màn hình được giao

| Mã | Thư mục | Nhóm | Ghi chú chính |
|---|---|---|---|
| `M06a` | `nguoi-3/M06_NguoiThan_DanhSach/` | A | **Luồng chính:** Desktop 2 cột (danh sách người thân + xem trước tin nhắn tự động soạn sẵn) |
| `M06b` | `nguoi-3/M06_NguoiThan_DaGui/` | A | **Kết thúc luồng chính:** Xác nhận đã gửi + thẻ nhắc đỏ không chuyển tiền |
| `M07` | `nguoi-3/M07_ThemNguoiThan/` | A | Desktop 2 cột (biểu mẫu rộng vừa phải + thẻ giải thích), hỗ trợ thêm/sửa/xoá |
| `M08a` | `nguoi-3/M08_BaoCao_Form/` | A | Biểu mẫu báo cáo + đính kèm ảnh mẫu + kênh 156 & Công an phường (mô phỏng) |
| `M08b` | `nguoi-3/M08_BaoCao_ThanhCong/` | A | Xác nhận thành công kèm mã `BC-1124-087` |
| `M09` | `nguoi-3/M09_DanhSachBaiHoc/` | B | Thẻ tiến độ gradient + lưới 2–3 cột desktop / danh sách mobile đủ 10 bài học 1 phút |
| `E06` | `nguoi-3/E06_NguoiThan_Trong/` | A | Trạng thái trống chưa thêm người thân |

## 2. Component dùng chung từ `shared/`
- `shared/layouts/AppLayout.js`, `shared/components/ui.js` (`ProgressBar`, `EmptyState`, `showToast`, `ICONS`)
- `shared/scripts/mock-data.js`, `shared/scripts/store.js`, `shared/scripts/navigation.js`

## 3. Luồng điều hướng liên quan
- `M05c → M06a → M06b → M03` (Luồng chính)
- `M06a ↔ M07` (Thêm/sửa/xoá người thân) · `E06 → M07`
- `M03 / M05* → M08a → M08b → M03` (Luồng báo cáo)
- `M03 → M09 → M10` (Luồng học tập)

## 4. Phần đã dựng khung & Phần cần hoàn thiện
- **Đã dựng khung:** Đủ 7 màn responsive hoàn chỉnh, nối điều hướng và trạng thái demo.
- **Cần hoàn thiện:** Bổ sung kiểm tra hợp lệ biểu mẫu ở `M07` và `M08a`, tinh chỉnh bộ lọc/trạng thái hoàn thành 10 bài ở `M09`, rà soát chéo với Người 4 và viết mục `(c)` bản thuyết minh.

## 5. Cách chạy & kiểm tra
```bash
python -m http.server 5500
# Mở http://localhost:5500/preview/index.html để xem nhanh 7 màn của Người 3
```
