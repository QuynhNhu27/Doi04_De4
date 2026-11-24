# CHIA VIỆC — Lá Chắn Số (Đề 4)

File này phân công nhiệm vụ phát triển song song cho 4 thành viên. Quy định thiết kế responsive chung nằm ở `RULE.md`.

**Tổng 30 bản giao diện**, chia đều cho 4 thành viên vào 4 thư mục độc lập (`nguoi-1/` đến `nguoi-4/`), dùng chung thư viện tại `shared/`.

Ký hiệu nhóm:
- **Nhóm A:** Màn người cao tuổi sử dụng thường xuyên — chữ 22px, nút chính tối thiểu 64px, bố cục thoáng, ít chuyển động.
- **Nhóm B:** Màn học sinh & đội tình nguyện — chữ 18px, nút chính tối thiểu 56px, có hiệu ứng tương tác và sao băng ở chế độ tối.

---

## NGƯỜI 1 — Thư viện và vào app (8 bản · `nguoi-1/` · nhánh `feat/member-1`)

| Mã | Tên bản giao diện | Đường dẫn thư mục | Nhóm |
|---|---|---|---|
| M00 | `M00_ThuVien` | `nguoi-1/M00_ThuVien/` | Thư viện A & B |
| M01a | `M01_DangNhap` | `nguoi-1/M01_DangNhap/` | A (Sao băng) |
| M01b | `M01_DangKy` | `nguoi-1/M01_DangKy/` | A (Sao băng) |
| M02 | `M02_ChonVaiTro` | `nguoi-1/M02_ChonVaiTro/` | A |
| M03 | `M03_TrangChu` | `nguoi-1/M03_TrangChu/` | A |
| M04c | `M04_KiemTra_DangNghe` | `nguoi-1/M04_KiemTra_DangNghe/` | A (Sóng âm) |
| M13 | `M13_CaNhan` | `nguoi-1/M13_CaNhan/` | A |
| E00 | `E00_MatMang` | `nguoi-1/E00_MatMang/` | A |

- **Phối hợp nhóm trưởng:** Rà soát thư viện `M00_ThuVien` và các component dùng chung trong `shared/`.
- **Việc thêm:** Kiểm tra nối luồng prototype chính 5 màn.
- **Thuyết minh:** Viết mục `(a)`.

---

## NGƯỜI 2 — Kiểm tra và Kết quả (8 bản · `nguoi-2/` · nhánh `feat/member-2`)

Phần trọng tâm của luồng trình diễn ban giám khảo bấm thử.

| Mã | Tên bản giao diện | Đường dẫn thư mục | Nhóm |
|---|---|---|---|
| M04a | `M04_KiemTra_SoDienThoai` | `nguoi-2/M04_KiemTra_SoDienThoai/` | A |
| M04b | `M04_KiemTra_DanTinNhan` | `nguoi-2/M04_KiemTra_DanTinNhan/` | A (AI mô phỏng) |
| M05a | `M05_KetQua_AnToan` | `nguoi-2/M05_KetQua_AnToan/` | A |
| M05b | `M05_KetQua_NghiNgo` | `nguoi-2/M05_KetQua_NghiNgo/` | A |
| M05c | `M05_KetQua_NguyHiem` | `nguoi-2/M05_KetQua_NguyHiem/` | A |
| M05c_Toi | `M05_KetQua_NguyHiem_Toi` | `nguoi-2/M05_KetQua_NguyHiem_Toi/` | A (Chế độ tối) |
| E04 | `E04_KiemTra_NhapSai` | `nguoi-2/E04_KiemTra_NhapSai/` | A |
| E05 | `E05_KetQua_ChuaCoDuLieu` | `nguoi-2/E05_KetQua_ChuaCoDuLieu/` | A |

- **Trọng tâm:** Hoàn thiện thật sắc nét `M05_KetQua_NguyHiem` trên cả Desktop và Mobile.
- **Thuyết minh:** Viết mục `(b)`.

---

## NGƯỜI 3 — Người thân, Báo cáo, Bài học (7 bản · `nguoi-3/` · nhánh `feat/member-3`)

| Mã | Tên bản giao diện | Đường dẫn thư mục | Nhóm |
|---|---|---|---|
| M06a | `M06_NguoiThan_DanhSach` | `nguoi-3/M06_NguoiThan_DanhSach/` | A |
| M06b | `M06_NguoiThan_DaGui` | `nguoi-3/M06_NguoiThan_DaGui/` | A |
| M07 | `M07_ThemNguoiThan` | `nguoi-3/M07_ThemNguoiThan/` | A |
| M08a | `M08_BaoCao_Form` | `nguoi-3/M08_BaoCao_Form/` | A |
| M08b | `M08_BaoCao_ThanhCong` | `nguoi-3/M08_BaoCao_ThanhCong/` | A |
| M09 | `M09_DanhSachBaiHoc` | `nguoi-3/M09_DanhSachBaiHoc/` | B |
| E06 | `E06_NguoiThan_Trong` | `nguoi-3/E06_NguoiThan_Trong/` | A |

- **Thuyết minh:** Viết mục `(c)`.

---

## NGƯỜI 4 — Bài học, Bài kiểm tra, Thống kê (7 bản · `nguoi-4/` · nhánh `feat/member-4`)

| Mã | Tên bản giao diện | Đường dẫn thư mục | Nhóm |
|---|---|---|---|
| M10 | `M10_BaiHoc_ChiTiet` | `nguoi-4/M10_BaiHoc_ChiTiet/` | B |
| M11a | `M11_BaiKiemTra_CauHoi` | `nguoi-4/M11_BaiKiemTra_CauHoi/` | B |
| M11b | `M11_BaiKiemTra_KetQua` | `nguoi-4/M11_BaiKiemTra_KetQua/` | B |
| M12a | `M12_DoiTinhNguyen` | `nguoi-4/M12_DoiTinhNguyen/` | B |
| M12b | `M12_DoiTinhNguyen_MayTinh` | `nguoi-4/M12_DoiTinhNguyen_MayTinh/` | B (Desktop) |
| M12a_Toi | `M12_DoiTinhNguyen_Toi` | `nguoi-4/M12_DoiTinhNguyen_Toi/` | B (Tối + sao băng) |
| E12 | `E12_ThongKe_Trong` | `nguoi-4/E12_ThongKe_Trong/` | B |

- **Thuyết minh:** Viết mục `(d)` và mục `(e)`.

---

## RÀ SOÁT CHÉO — 13h00

Mỗi thành viên kiểm tra bài của người kế bên theo **6 tiêu chí responsive & đồng nhất**:

1. **Responsive thực sự:** Desktop (`1440×900`, `1366×768`) có Sidebar + bố cục đa cột thoáng đẹp; Tablet (`768×1024`) bố cục 1–2 cột; Mobile (`360×800`, `390×844`) 1 cột dễ bấm, không cuộn ngang.
2. **Đúng nhóm A / B:** Cỡ chữ (22px vs 18px) và chiều cao nút (64px vs 56px) đúng theo đối tượng người dùng.
3. **Màu sắc & Tương phản:** Dùng token từ `shared/styles/tokens.css`, cảnh báo đủ 3 tín hiệu (màu + icon + chữ), dễ đọc ở cả chế độ sáng và tối.
4. **Dùng chung `shared/`:** Layout, Sidebar, Header, Bottom Navigation, FloatingContactButton và MeteorBackground lấy từ `shared/`, không sao chép thủ công.
5. **Hiệu ứng & Trợ năng:** Nền sao băng hiển thị rõ và không che nội dung; công tắc giảm chuyển động và chữ lớn hoạt động đúng.
6. **Không nút chết & Đúng đường dẫn:** Toàn bộ nút bấm điều hướng hoạt động, không lỗi Console.

| Ai soát | Soát bài của ai |
|---|---|
| Người 1 | Người 2 |
| Người 2 | Người 3 |
| Người 3 | Người 4 |
| Người 4 | Người 1 |

---

## THỨ TỰ ƯU TIÊN NẾU THIẾU GIỜ

1. Người 2 xong trước tiên (trọng tâm luồng chính).
2. Rồi Người 1 (thư viện, đăng nhập, trang chủ, cá nhân).
3. Rồi Người 3 (người thân, báo cáo, danh sách bài học).
4. Cuối cùng Người 4 (chi tiết bài học, kiểm tra, thống kê).

**Được phép rút gọn nếu quá gấp:** `E00`, `E06`, `E12`, `M12b`, `M01b`.  
**Tuyệt đối không được bỏ:** `M03`, `M04a`, `M04b`, `M04c`, `M05a–c`, `M05c_Toi`, `M06a–b`, `M08a–b`, `M09`, `M10`, `M11a–b`, `M12a`, `M12a_Toi`, `M13`.
