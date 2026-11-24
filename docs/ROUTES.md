# ROUTES — Bản đồ điều hướng 30 bản giao diện (v2.0)

## 1. Luồng trình diễn chính (5 màn)
`nguoi-1/M03_TrangChu/index.html` → `nguoi-2/M04_KiemTra_SoDienThoai/index.html` → `nguoi-2/M05_KetQua_NguyHiem/index.html` → `nguoi-3/M06_NguoiThan_DanhSach/index.html` → `nguoi-3/M06_NguoiThan_DaGui/index.html`.

## 2. Danh sách 30 đường dẫn trong `shared/scripts/navigation.js`

| Thành viên | Mã & Đường dẫn |
|---|---|
| **Người 1 (`nguoi-1/`)** | `M00` `nguoi-1/M00_ThuVien/index.html` · `M01a` `nguoi-1/M01_DangNhap/index.html` · `M01b` `nguoi-1/M01_DangKy/index.html` · `M02` `nguoi-1/M02_ChonVaiTro/index.html` · `M03` `nguoi-1/M03_TrangChu/index.html` · `M04c` `nguoi-1/M04_KiemTra_DangNghe/index.html` · `M13` `nguoi-1/M13_CaNhan/index.html` · `E00` `nguoi-1/E00_MatMang/index.html` |
| **Người 2 (`nguoi-2/`)** | `M04a` `nguoi-2/M04_KiemTra_SoDienThoai/index.html` · `M04b` `nguoi-2/M04_KiemTra_DanTinNhan/index.html` · `M05a` `nguoi-2/M05_KetQua_AnToan/index.html` · `M05b` `nguoi-2/M05_KetQua_NghiNgo/index.html` · `M05c` `nguoi-2/M05_KetQua_NguyHiem/index.html` · `M05c_Toi` `nguoi-2/M05_KetQua_NguyHiem_Toi/index.html` · `E04` `nguoi-2/E04_KiemTra_NhapSai/index.html` · `E05` `nguoi-2/E05_KetQua_ChuaCoDuLieu/index.html` |
| **Người 3 (`nguoi-3/`)** | `M06a` `nguoi-3/M06_NguoiThan_DanhSach/index.html` · `M06b` `nguoi-3/M06_NguoiThan_DaGui/index.html` · `M07` `nguoi-3/M07_ThemNguoiThan/index.html` · `M08a` `nguoi-3/M08_BaoCao_Form/index.html` · `M08b` `nguoi-3/M08_BaoCao_ThanhCong/index.html` · `M09` `nguoi-3/M09_DanhSachBaiHoc/index.html` · `E06` `nguoi-3/E06_NguoiThan_Trong/index.html` |
| **Người 4 (`nguoi-4/`)** | `M10` `nguoi-4/M10_BaiHoc_ChiTiet/index.html` · `M11a` `nguoi-4/M11_BaiKiemTra_CauHoi/index.html` · `M11b` `nguoi-4/M11_BaiKiemTra_KetQua/index.html` · `M12a` `nguoi-4/M12_DoiTinhNguyen/index.html` · `M12b` `nguoi-4/M12_DoiTinhNguyen_MayTinh/index.html` · `M12a_Toi` `nguoi-4/M12_DoiTinhNguyen_Toi/index.html` · `E12` `nguoi-4/E12_ThongKe_Trong/index.html` |

## 3. Điều hướng Desktop & Mobile
- **Desktop Sidebar (7 mục):** Trang chủ (`M03`), Kiểm tra nhanh (`M04a`), Hỏi người thân (`M06a`), Báo cáo lừa đảo (`M08a`), Bài học kỹ năng số (`M09`), Thống kê địa phương (`M12a`), Cá nhân (`M13`).
- **Mobile Bottom Navigation (5 mục):** Trang chủ (`M03`), Kiểm tra (`M04a`), Học (`M09`), Thống kê (`M12a`), Cá nhân (`M13`).
