# NGƯỜI 4 — Bài học chi tiết, Bài kiểm tra & Thống kê đội tình nguyện (`nguoi-4/`)

- **Nhánh Git:** `feat/member-4`
- **Số bản giao diện được giao:** 7 bản (100% Nhóm B — có hiệu ứng tương tác & sao băng chế độ tối)
- **Thư mục được phép chỉnh sửa:** Chỉ các file bên trong `nguoi-4/`.

## 1. Danh sách 7 màn hình được giao

| Mã | Thư mục | Nhóm | Ghi chú chính |
|---|---|---|---|
| `M10` | `nguoi-4/M10_BaiHoc_ChiTiet/` | B | Desktop 2 cột (minh hoạ tình huống + nội dung 5 bước, tiến độ, nút Nghe & Tiếp) |
| `M11a` | `nguoi-4/M11_BaiKiemTra_CauHoi/` | B | Khung tin nhắn giả mẫu (chữ thuần, không link), câu hỏi, phản hồi đúng/sai nảy lên |
| `M11b` | `nguoi-4/M11_BaiKiemTra_KetQua/` | B | Vòng tròn điểm 8/10 chạy số, huy hiệu Mắt tinh nảy, gợi ý học lại 2 bài sai |
| `M12a` | `nguoi-4/M12_DoiTinhNguyen/` | B | Dashboard thống kê responsive dùng chung `StatsDashboard.js` |
| `M12b` | `nguoi-4/M12_DoiTinhNguyen_MayTinh/` | B | Bản trình diễn Desktop, dùng chung 100% logic `StatsDashboard.js` với `M12a` |
| `M12a_Toi` | `nguoi-4/M12_DoiTinhNguyen_Toi/` | B (Tối) | Bản chế độ tối có nền sao băng `MeteorBackground` chạy phía sau thẻ |
| `E12` | `nguoi-4/E12_ThongKe_Trong/` | B | Trạng thái tháng chưa có báo cáo nào |

## 2. Component dùng chung từ `shared/`
- `shared/layouts/AppLayout.js`, `shared/components/StatsDashboard.js`, `shared/components/MeteorBackground.js`
- `shared/components/ui.js` (`EmptyState`, `simulateSpeak`, `showModal`, `ICONS`)
- `shared/scripts/mock-data.js`, `shared/scripts/navigation.js`

## 3. Luồng điều hướng liên quan
- `M09 → M10 → M11a → M11b → M10 / M03`
- `M03 / Sidebar → M12a ↔ E12` · `M12b` · `M12a_Toi`

## 4. Phần đã dựng khung & Phần cần hoàn thiện
- **Đã dựng khung:** Đủ 7 màn responsive Nhóm B, dùng chung `StatsDashboard.js` không trùng lặp logic, tự động hiển thị sao băng ở chế độ tối.
- **Cần hoàn thiện:** Thiết kế thêm tranh minh hoạ SVG cho 5 bước bài học `M10`, mở rộng bộ câu hỏi trắc nghiệm mẫu `M11a`, rà soát chéo với Người 1 và viết mục `(d)` và `(e)` bản thuyết minh.

## 5. Cách chạy & kiểm tra
```bash
python -m http.server 5500
# Mở http://localhost:5500/preview/index.html để xem nhanh 7 màn của Người 4
```
