# TEAM-GUIDE — Hướng dẫn phát triển song song 4 thành viên

## 1. Phân quyền thư mục & nhánh Git

| Thành viên | Thư mục được phép sửa | Nhánh Git | Số bản | Hướng dẫn chi tiết |
|---|---|---|---|---|
| **Người 1** | `nguoi-1/` | `feat/member-1` | 8 bản | [nguoi-1/README.md](../nguoi-1/README.md) |
| **Người 2** | `nguoi-2/` | `feat/member-2` | 8 bản | [nguoi-2/README.md](../nguoi-2/README.md) |
| **Người 3** | `nguoi-3/` | `feat/member-3` | 7 bản | [nguoi-3/README.md](../nguoi-3/README.md) |
| **Người 4** | `nguoi-4/` | `feat/member-4` | 7 bản | [nguoi-4/README.md](../nguoi-4/README.md) |

- Thư mục `shared/` do nhóm trưởng quản lý (Người 1 phối hợp khi cập nhật `M00_ThuVien`).
- Tuyệt đối không tự ý chỉnh sửa thư mục `nguoi-X/` của thành viên khác.

## 2. Quy trình Git hàng ngày
```bash
git checkout main && git pull origin main
git checkout -b feat/member-1   # hoặc member-2 / member-3 / member-4
# Làm việc chỉ trong thư mục nguoi-X/
git add nguoi-1/
git commit -m "feat(nguoi-1): hoan thien giao dien responsive"
git push -u origin feat/member-1
```

## 3. Kiểm thử Responsive trước khi tạo Pull Request
Chạy `python -m http.server 5500`, mở `http://localhost:5500/preview/index.html` và kiểm tra đủ các viewport:
`360×800`, `390×844`, `768×1024`, `1024×768`, `1366×768`, `1440×900`, `1920×1080` ở cả chế độ sáng, chế độ tối và bật/tắt hiệu ứng chuyển động trong `M13`.

## 4. Sản phẩm nộp thi vòng sơ loại (`Doi[mã]_De4`)
1. File **PDF thiết kế giao diện** xuất từ công cụ thiết kế (đủ màn bắt buộc, rõ tên màn).
2. **Prototype bấm được** (trọn vẹn luồng chính 5 màn `M03 → M04a → M05c → M06a → M06b`).
3. **Bản thuyết minh tối đa 3 trang**, đủ 5 mục `(a)` đến `(e)` (khai báo AI lấy từ `docs/AI-USAGE.md`).
