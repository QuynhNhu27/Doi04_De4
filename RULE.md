# RULE.md — Lá Chắn Số (Đề 4)

Hackathon TP Đồng Nai 2026 — Vòng sơ loại 24/11/2026  
Nộp bài: 15h00 — thư mục `Doi[mã đội]_De4`  
**Phiên bản:** 2.0 — Website Responsive (Mobile First → Tablet → Desktop)

---

## 0. QUY ĐỊNH CHUNG CỦA NHÓM

Những hạng mục thống nhất chung cho cả 4 thành viên để sản phẩm đồng bộ, hiện đại và dễ ghép nhánh:

- **Định hướng sản phẩm:** Website Responsive thực sự trên cùng một bộ mã nguồn (Desktop có sidebar + lưới đa cột; Tablet 1–2 cột; Mobile 1 cột + thanh điều hướng dưới). **Không** đặt khung điện thoại `360 × 800` đứng giữa màn hình máy tính, **không** khoá bố cục bằng toạ độ pixel tuyệt đối.
- **Phong cách thiết kế:** Modern Cybersecurity Dashboard kết hợp Friendly Digital Safety — tin cậy, có chiều sâu, dễ đọc với người cao tuổi và hiện đại với học sinh, tình nguyện viên.
- **Hệ thống màu sắc & Design Tokens:** Quản lý tập trung tại `shared/styles/tokens.css` và `shared/styles/themes.css` (mục 2 & mục 3).
- **Hai nhóm cỡ chữ & mật độ (Nhóm A / Nhóm B):** Giữ nguyên mục 4 để bảo vệ khả năng đọc cho người cao tuổi 65 tuổi.
- **Thành phần & Layout dùng chung:** Sử dụng từ `shared/` (mục 7), không sao chép thủ công vào từng thư mục thành viên.
- **Tên màn hình, mã màn, nội dung, dữ liệu mẫu & luồng chính:** Giữ nguyên mục 8, 10, 12.
- **Kích thước tham chiếu kiểm thử / xuất bản thiết kế:** Mobile `360 × 800`, `390 × 844`; Tablet `768 × 1024`; Desktop `1024 × 768`, `1366 × 768`, `1440 × 900`, `1920 × 1080`.

Muốn thay đổi token hoặc component trong `shared/` → trao đổi nhóm trưởng cập nhật tập trung trước khi merge.

---

## 1. THÔNG TIN DỰ ÁN

**Tên sản phẩm:** Lá Chắn Số  
**Câu giới thiệu:** Kiểm tra trong 10 giây, hỏi người thân bằng 1 chạm, học nhận diện trong 1 phút.

**3 nhóm người dùng theo đề:**
1. Người cao tuổi 65 tuổi — thường nhận cuộc gọi lạ
2. Học sinh THPT — thường nhận tin nhắn "việc nhẹ lương cao" hoặc đường dẫn giả mạo
3. Đội thanh niên tình nguyện — tuyên truyền và theo dõi tình hình tại xã, phường

**Phạm vi:** 13 trang chức năng, **30 bản giao diện** (1 thư viện + 22 bản màn hình + 5 bản trạng thái + 2 bản chế độ tối), tổ chức độc lập theo 4 thư mục thành viên `nguoi-1/`, `nguoi-2/`, `nguoi-3/`, `nguoi-4/`.

---

## 2. BẢNG MÀU MỞ RỘNG & GRADIENT (CHẾ ĐỘ SÁNG)

Giữ xanh navy làm màu nhận diện thương hiệu; mở rộng sắc độ công nghệ an ninh mạng và quản lý tập trung qua CSS Custom Properties.

### Màu thương hiệu & điểm nhấn

| Vai trò | Mã màu | Ứng dụng |
|---|---|---|
| Primary Navy | `#062E55` | Nhận diện chính, sidebar desktop, hero, tiêu đề trọng tâm |
| Primary Blue | `#2563EB` | Nút hành động chính hiện đại, tương tác hover, focus |
| Accent Blue | `#11598F` | Liên kết, đường viền nhấn, cột biểu đồ |
| Cyan | `#38BDF8` | Điểm nhấn công nghệ, đuôi sao băng, glow an ninh mạng |
| Teal | `#14B8A6` | Nhấn kỹ năng số, tiến độ học tập |
| Purple AI | `#8B5CF6` | Điểm nhấn tính năng AI phân tích tin nhắn (`M04b`) |
| Indigo | `#6366F1` | Phối gradient công nghệ, thẻ thống kê |

### Nền và chữ (Chế độ sáng)

| Vai trò | Mã màu |
|---|---|
| Nền trang (`Background`) | `#F4F7FA` |
| Nền thẻ (`Surface`) | `#FFFFFF` |
| Viền thẻ (`Border`) | `#E2E8F0` |
| Chữ chính (`Text`) | `#0B1B2E` |
| Chữ phụ (`Secondary Text`) | `#5C7089` |
| Nền nhạt thương hiệu | `#DEE9F3` |
| Chữ nhạt trên nền đậm | `#9FB6CC` |

### 3 mức cảnh báo (Bắt buộc nhất quán toàn website)

| Mức | Màu chính | Nền nhạt | Biểu tượng bắt buộc |
|---|---|---|---|
| **AN TOÀN** | `#12A57A` | `#E6F7F1` | Dấu tích trong vòng tròn |
| **NGHI NGỜ** | `#F2A33C` | `#FDF0DA` | Dấu chấm than trong tam giác |
| **NGUY HIỂM** | `#D92D2D` | `#FBE4E4` | Dấu X trong vòng tròn |

> **Quy tắc an toàn thị giác:** Không dùng màu đỏ `#D92D2D` cho nội dung trang trí thông thường để tránh nhầm lẫn với cảnh báo nguy hiểm. Đảm bảo độ tương phản đạt chuẩn **WCAG AA** cho văn bản và nút bấm quan trọng.

### Gradient & Hiệu ứng thị giác được phép

Cho phép sử dụng có kiểm soát các token trong `shared/styles/tokens.css`:
- **Gradient Navy → Blue:** `#062E55` → `#11598F` → `#2563EB` (Hero trang chủ, trang Đăng nhập/Đăng ký, thẻ kiểm tra nhanh).
- **Gradient Blue → Cyan:** `#2563EB` → `#38BDF8` (Điểm nhấn bảo mật, biểu đồ thống kê).
- **Gradient Blue → Purple AI:** `#2563EB` → `#6366F1` → `#8B5CF6` (Thẻ AI phân tích tin nhắn `M04b`).
- **Gradient Teal → Blue:** `#14B8A6` → `#2563EB` (Thẻ tiến độ học tập `M09`, thành tích `M11b`).
- **Đổ bóng mềm, Glassmorphism nhẹ, hiệu ứng Glow, SVG minh hoạ, micro-interactions khi hover/chuyển trạng thái.** Không dùng emoji làm hệ thống icon chính — dùng SVG đồng nhất.

---

## 3. BẢNG MÀU CHẾ ĐỘ TỐI & NỀN SAO BĂNG (`MeteorBackground`)

Bật/tắt tại **M13** với 3 chế độ: `Theo máy · Luôn sáng · Luôn tối` (mặc định `Theo máy`), kết hợp nút chuyển nhanh trên Header/Sidebar Desktop và công tắc **Bật/tắt hiệu ứng chuyển động** trong **M13**.

| Vai trò | Chế độ sáng | Chế độ tối |
|---|---|---|
| Background chính | `#F4F7FA` | `#03142B` |
| Background phụ (Nhóm A tĩnh) | `#F4F7FA` | `#081421` |
| Surface (Nền thẻ) | `#FFFFFF` | `#102437` |
| Border (Viền thẻ) | `#E2E8F0` | `#1C3A54` |
| Text (Chữ chính) | `#0B1B2E` | `#EAF1F8` |
| Secondary Text (Chữ phụ) | `#5C7089` | `#93A8BE` |
| Primary (Nút chính / nhấn) | `#062E55` / `#2563EB` | `#2E7FD1` |
| Accent | `#11598F` | `#5BA3E0` |
| An toàn | `#12A57A` / `#E6F7F1` | `#3FCFA2` / `#0E3A30` |
| Nghi ngờ | `#F2A33C` / `#FDF0DA` | `#FFC166` / `#3D2E12` |
| Nguy hiểm | `#D92D2D` / `#FBE4E4` | `#FF6B6B` / `#3D1618` |
| Thanh điều hướng dưới | `#FFFFFF` | `#081E33` |

### Quy định nền sao băng (`MeteorBackground`)

- Phủ toàn bộ vùng nền trang hoặc Hero bằng CSS animation + SVG nhẹ (`pointer-events: none`, `aria-hidden="true"`, `overflow: hidden`, `z-index` nằm dưới nội dung, không bị lớp opaque che mất).
- Gồm nền trời đêm xanh navy `#03142B`, lớp ánh sáng xanh dương/tím nhẹ (nebula glow), ngôi sao nhỏ nhấp nháy và các vệt sao băng nghiêng 30°–45° (đầu chấm sáng trắng, đuôi gradient `#FFFFFF → #38BDF8 → #2563EB → transparent`, độ dài 70–180px, chu kỳ 2–5s lệch pha).
- Mật độ tham khảo: Desktop `30–50` sao tĩnh + `6–10` vệt sao băng; Mobile `15–25` sao tĩnh + `3–5` vệt sao băng.
- **Tôn trọng `prefers-reduced-motion` và công tắc giảm chuyển động trong `M13`:** khi tắt chuyển động, vẫn giữ bầu trời sao tĩnh đẹp mắt cho trang Đăng nhập/Đăng ký và chuyển nền tĩnh dễ chịu cho người cao tuổi.

| Màn hình | Hiển thị `MeteorBackground` |
|---|---|
| `M01a`, `M01b` Đăng nhập, Đăng ký | Luôn có (cả chế độ sáng và tối; tĩnh nếu bật giảm chuyển động) |
| `M02` Chọn vai trò | Nền công nghệ nhẹ (lưới kỹ thuật số + glow nhẹ) |
| `M03` Trang chủ | Có trong vùng Hero khi người dùng bật hiệu ứng chuyển động |
| `M09`–`M12`, `E12` (Nhóm B) | Có phủ toàn nền ở chế độ tối khi bật hiệu ứng chuyển động |
| Các màn Nhóm A còn lại (`M04`–`M08`, `M13`, `E00`–`E06`) | Nền tĩnh sạch, không sao băng gây mất tập trung cho người cao tuổi |

---

## 4. HAI NHÓM MÀN HÌNH — BẢO VỆ NGƯỜI CAO TUỔI

Cả 13 trang dùng chung Design System và bố cục responsive, phân tách 2 nhóm mật độ và cỡ chữ thông qua `data-group="A"` và `data-group="B"`:

### Nhóm A — Màn người cao tuổi sử dụng thường xuyên (9 trang)
`M01 · M02 · M03 · M04 · M05 · M06 · M07 · M08 · M13` (và `E00 · E04 · E05 · E06`)

| Quy cách | Giá trị ưu tiên |
|---|---|
| Chữ nội dung | **22px** (linh hoạt `clamp(19px, 2.2vw, 22px)` trên màn rất nhỏ, đạt 22px chuẩn) |
| Tiêu đề màn | **24px – 28px** (`clamp(24px, 2.5vw, 28px)`) |
| Tiêu đề thẻ | **22px** |
| Chữ phụ | **16px** |
| Nút chính | Cao tối thiểu **64px** |
| Nút phụ | Cao tối thiểu **56px** |
| Ô nhập liệu | Cao khoảng **60px** |
| Chuyển động | Tối giản, không chớp nháy gây mất tập trung (ngoại lệ: sao băng trên M01, sóng âm trên M04c, hero M03 khi bật hiệu ứng) |

### Nhóm B — Màn học sinh & đội tình nguyện (4 trang)
`M09 · M10 · M11 · M12` (và `E12`)

| Quy cách | Giá trị ưu tiên |
|---|---|
| Chữ nội dung | **18px** |
| Tiêu đề màn | **22px – 26px** |
| Tiêu đề thẻ | **18px – 20px** |
| Chữ phụ | **14px – 15px** |
| Nút chính | Cao tối thiểu **56px** |
| Nút phụ | Cao tối thiểu **48px** |
| Ô nhập liệu | Cao khoảng **52px** |
| Chuyển động | Sinh động có kiểm soát: thanh tiến độ mượt, huy hiệu nảy, cột biểu đồ mọc lên, sao băng ở chế độ tối |

---

## 5. TYPOGRAPHY, KÍCH THƯỚC & BO GÓC LINH HOẠT

- **Font chữ:** `Inter` (độ đậm `400`, `500`, `600` cho điểm nhấn số liệu KPI nếu cần), fallback `Be Vietnam Pro`, `system-ui`, `sans-serif`.
- **Viết hoa:** Viết thường tự nhiên, giữ viết hoa nổi bật cho 3 nhãn cảnh báo: `AN TOÀN`, `NGHI NGỜ`, `NGUY HIỂM`.
- **Bo góc chuẩn:**
  - Nút chính / phụ / viên thuốc: `999px` (hoặc `14px` cho nút hành động lớn dạng thẻ)
  - Thẻ (`Card`): `16px – 20px`
  - Ô nhập liệu (`Input`): `12px – 14px`
  - Ô biểu tượng (`Icon Box`): `12px` (`44×44` Nhóm A, `40×40` Nhóm B)
  - Nút gọi người thân nổi (`FloatingContactButton`): tròn `64×64`

---

## 6. HỆ THỐNG BREAKPOINT & BỐ CỤC RESPONSIVE

Không dùng toạ độ tuyệt đối cố định cho bố cục trang. Sử dụng **CSS Grid, Flexbox, `clamp()`, `minmax()`** theo 3 mốc breakpoint thống nhất:

### Mobile (`< 768px`)
- Bố cục chủ yếu **1 cột**, lề ngang `16px – 20px`, khoảng cách khối `16px`.
- Hiển thị **Header gọn phía trên** và **Thanh điều hướng dưới 5 mục** cố định (`Trang chủ · Kiểm tra · Học · Thống kê · Cá nhân`).
- **Nút gọi người thân nổi** ở góc dưới bên phải (không che nội dung, có `padding-bottom` an toàn, không chớp nháy).
- Không bao giờ xuất hiện cuộn ngang (`overflow-x: hidden`).

### Tablet (`768px` đến `< 1024px`)
- Bố cục **1 đến 2 cột** tuỳ chức năng (ví dụ: thẻ thao tác nhanh 2 cột, danh sách bài học 2 cột, thống kê 2–3 cột).
- Sidebar có thể thu gọn hoặc mở dạng ngăn kéo; khoảng cách giữa các khối tăng lên `20px`.

### Desktop (`>= 1024px`)
- **Sidebar bên trái** rộng `250px` (`240px – 260px`), nền xanh navy/dark có logo Lá Chắn Số, **7 mục điều hướng** (`Trang chủ · Kiểm tra nhanh · Hỏi người thân · Báo cáo lừa đảo · Bài học kỹ năng số · Thống kê địa phương · Cá nhân`), thông tin người dùng và nút đổi giao diện ở đáy sidebar.
- **Header phía trên** vùng nội dung gồm tiêu đề trang, breadcrumb khi cần, nhãn địa phương, nút chuyển sáng/tối và avatar người dùng.
- **Vùng nội dung bên phải** tận dụng toàn bộ không gian khả dụng (`max-width: 1440px`), padding `24px – 40px`, lưới **12 cột** (2–4 cột tuỳ màn hình).
- **Ẩn hoàn toàn** thanh điều hướng mobile bên dưới.
- Các trang biểu mẫu (`M07`, `M08a`, `M01`) giữ chiều rộng đọc tối ưu (`max-width: 680px – 960px` hoặc chia 2 cột kèm thẻ hướng dẫn), không kéo dãn ô nhập toàn màn hình `1920px`.

---

## 7. THÀNH PHẦN & LAYOUT DÙNG CHUNG (`shared/`)

Mọi thành viên sử dụng trực tiếp từ thư mục `shared/` (không sao chép lại):

- **Layouts (`shared/layouts/`):** `AppLayout`, `AuthLayout`.
- **Navigation & Shell (`shared/components/`):** `DesktopSidebar`, `MobileBottomNavigation`, `Header`, `FloatingContactButton`, `MeteorBackground`, `ThemeSwitcher`.
- **UI Components (`shared/components/` & `shared/styles/`):** `Button` (Primary A/B, Danger, Secondary A/B, Gradient), `Card`, `Input`, `Badge` (`Nhan_Phuong`), `Modal`, `Toast`, `ProgressBar`, `AlertCard` (3 mức), `EmptyState`, `LoadingState`.
- **Trang xem thử thư viện:** `nguoi-1/M00_ThuVien/index.html` trưng bày toàn bộ component, bảng màu sáng/tối, gradient, typography A/B và `MeteorBackground`.

---

## 8. QUY TẮC NỘI DUNG VÀ DỮ LIỆU MẪU

- Dùng từ dễ hiểu với người lớn tuổi: viết **"đường dẫn"**, không viết "link" hay "URL".
- Mỗi màn hình rõ **1 mục tiêu chính** và **1 hành động chính nổi bật**.
- Kết quả cảnh báo luôn đủ **3 tín hiệu: màu sắc + biểu tượng + chữ**.
- Không có nút chết; mọi màn đều quay lại được (trừ `M01`).
- Không dùng thông tin cá nhân thật; không tạo thẻ `<a>` mở trực tiếp đường dẫn lừa đảo mẫu.
- Mọi tính năng AI, giọng nói, gọi điện, gửi tin và kết nối 156/Công an ở vòng sơ loại đều được ghi rõ là **mô phỏng**.

### Dữ liệu mẫu thống nhất (`shared/scripts/mock-data.js`)

| Loại | Giá trị giả lập |
|---|---|
| Số điện thoại lừa đảo | `0912 345 678` |
| Số điện thoại an toàn | `1900 545 413` |
| Số điện thoại nghi ngờ | `0987 654 321` |
| Số chưa có dữ liệu | `0901 222 333` |
| Đường dẫn giả mạo | `quatang-trian.top` (chỉ hiện chữ thuần) |
| Số tài khoản | `1903 6688 4421` |
| Người dùng | Bác Tư, 65 tuổi |
| Người thân | Anh Nam (Con trai, `0938 111 222`), Chị Lan (Con gái, `0938 333 444`) |
| Địa phương | Phường Trấn Biên |
| Thống kê | `120` báo cáo tháng 11, `35%` đường dẫn giả (`42` lượt), `42` đã xử lý; biểu đồ: Đường dẫn giả `42`, Giả công an `31`, Việc nhẹ lương cao `28`, Trúng thưởng `19`; kiểu mới: Giả danh nhân viên điện lực `14` lượt (tháng trước `2` lượt) |
| Điểm bài kiểm tra | `8/10`, huy hiệu `Mắt tinh` |
| Mã báo cáo | `BC-1124-087` |

---

## 9. CẤU TRÚC THƯ MỤC 4 THÀNH VIÊN

```text
LaChanSo/
├── index.html          # Cổng vào ứng dụng
├── preview/index.html  # Trang preview đủ 30 bản (chỉ dành cho nhóm phát triển)
├── shared/             # Thư viện dùng chung (nhóm trưởng quản lý)
├── nguoi-1/            # 8 bản giao diện (nhánh feat/member-1)
├── nguoi-2/            # 8 bản giao diện (nhánh feat/member-2)
├── nguoi-3/            # 7 bản giao diện (nhánh feat/member-3)
├── nguoi-4/            # 7 bản giao diện (nhánh feat/member-4)
└── docs/               # Tài liệu dự án
```

Mỗi thành viên chỉ chỉnh sửa trong thư mục `nguoi-X/` của mình. CSS riêng của màn phải có tiền tố scoped để không ảnh hưởng màn khác.

---

## 10. NỘI DUNG & ĐỊNH HƯỚNG RESPONSIVE CỦA 13 TRANG (30 BẢN)

- **M00 — `M00_ThuVien` (1 bản):** Thư viện component, màu sáng/tối, gradient, typography A/B, `MeteorBackground`.
- **M01 — Đăng nhập / Đăng ký · Nhóm A (2 bản: `M01_DangNhap`, `M01_DangKy`):** Dùng `AuthLayout` + `MeteorBackground` phủ toàn nền. Desktop chia 2 cột (trái: logo, khiên bảo mật SVG, slogan, giá trị cốt lõi; phải: form card). Mobile xếp dọc 1 cột. Có nút `"Dùng ngay, không cần đăng ký"`.
- **M02 — `M02_ChonVaiTro` · Nhóm A (1 bản):** Nền công nghệ nhẹ. Desktop: 3 thẻ vai trò xếp ngang (`grid 3 cột`) + chọn phường gọn ở giữa; Mobile: xếp dọc 1 cột.
- **M03 — `M03_TrangChu` · Nhóm A (1 bản):** Desktop: Sidebar + Header + Hero kiểm tra nhanh (gradient + khiên SVG + sao băng khi bật hiệu ứng) + 3 card thao tác nhanh xếp ngang 3 cột (Gọi người thân, Báo cáo lừa đảo, Học 1 phút). Mobile: 1 cột gọn gàng + thanh điều hướng dưới + nút gọi nổi.
- **M04 — Kiểm tra nhanh · Nhóm A (3 bản: `M04_KiemTra_SoDienThoai`, `M04_KiemTra_DanTinNhan`, `M04_KiemTra_DangNghe`):** Desktop chia 2 cột (trái: 3 tab + công cụ nhập / dán / nói / nút kiểm tra + lối vào rõ ràng sang AI dán tin nhắn `M04b`; phải: hướng dẫn nhanh, số mẫu thử nhanh và lưu ý an toàn). `M04c` phủ màn hình nghe giọng nói có sóng âm.
- **M05 — Kết quả kiểm tra · Nhóm A (4 bản: `M05_KetQua_AnToan`, `M05_KetQua_NghiNgo`, `M05_KetQua_NguyHiem`, `M05_KetQua_NguyHiem_Toi`):** Desktop bố trí lưới 2 cột (trái: thẻ cảnh báo nổi bật + hành động chính; phải: thẻ lý do "Vì sao?" + thẻ hướng dẫn bước tiếp theo + nút Nghe kết quả & Báo cáo). Đủ màu + biểu tượng + chữ.
- **M06 — Hỏi người thân · Nhóm A (2 bản: `M06_NguoiThan_DanhSach`, `M06_NguoiThan_DaGui`):** Desktop chia 2 cột (trái: danh sách người thân với nút Gọi/Gửi tin mô phỏng; phải: khung xem trước tin nhắn tự động soạn sẵn và lưu ý an toàn). `M06b` căn giữa rõ ràng với thẻ nhắc đỏ không chuyển tiền.
- **M07 — `M07_ThemNguoiThan` · Nhóm A (1 bản):** Desktop chia 2 cột (form rộng vừa phải + thẻ giải thích cách hoạt động bên cạnh); Mobile 1 cột. Hỗ trợ trạng thái chỉnh sửa `?edit=...`.
- **M08 — Báo cáo lừa đảo · Nhóm A (2 bản: `M08_BaoCao_Form`, `M08_BaoCao_ThanhCong`):** Desktop chia 2 cột (trái: biểu mẫu loại lừa đảo, giá trị tự điền từ M05, mô tả, khung đính kèm ảnh; phải: giải thích kênh tiếp nhận 156 & Công an phường mô phỏng + hướng dẫn chụp bằng chứng). `M08b` hiển thị mã `BC-1124-087`.
- **M09 — `M09_DanhSachBaiHoc` · Nhóm B (1 bản):** Card tiến độ gradient (`Đã học 3/10 bài`) + đủ 10 bài học theo đề (Desktop lưới 2–3 cột; Mobile danh sách 1 cột).
- **M10 — `M10_BaiHoc_ChiTiet` · Nhóm B (1 bản):** Desktop chia 2 cột (minh hoạ tình huống bên trái + nội dung 5 bước, tiến độ, nút Nghe & Tiếp/Làm bài kiểm tra bên phải); Mobile xếp dọc.
- **M11 — Bài kiểm tra · Nhóm B (2 bản: `M11_BaiKiemTra_CauHoi`, `M11_BaiKiemTra_KetQua`):** `M11a` khung tin nhắn giả lập (không tạo link bấm được) + câu hỏi + đáp án + thẻ giải thích nảy lên. `M11b` vòng tròn `8/10`, huy hiệu `Mắt tinh` và gợi ý học lại 2 bài sai.
- **M12 — Thống kê đội tình nguyện · Nhóm B (3 bản: `M12_DoiTinhNguyen`, `M12_DoiTinhNguyen_MayTinh`, `M12_DoiTinhNguyen_Toi`):** Dùng chung một module dữ liệu & giao diện thống kê (`KPI 3 ô` + bộ lọc phường/tháng + biểu đồ cột mọc lên + thẻ cảnh báo kiểu mới tăng nhanh + nút xuất báo cáo). `M12b` trình diễn đầy đủ khung desktop; `M12a_Toi` trình diễn chế độ tối có sao băng.
- **M13 — `M13_CaNhan` · Nhóm A (1 bản):** Desktop chia lưới 2 cột (Hồ sơ + Cài đặt giao diện & trợ năng gồm chữ lớn, giọng nói, chế độ tối, **bật/tắt hiệu ứng chuyển động**; bên phải là Quản lý người thân, Lịch sử báo cáo/kiểm tra và Đăng xuất).
- **5 bản trạng thái (`E00_MatMang`, `E04_KiemTra_NhapSai`, `E05_KetQua_ChuaCoDuLieu`, `E06_NguoiThan_Trong`, `E12_ThongKe_Trong`):** Hiển thị cân đối trên cả Mobile, Tablet và Desktop; `E05` nhấn mạnh chưa có báo cáo không đồng nghĩa với an toàn.

---

## 11. HƯỚNG DẪN LƯỚI & KHOẢNG CÁCH RESPONSIVE (THAY BẢNG TOẠ ĐỘ CỐ ĐỊNH)

| Thành phần / Vùng | Mobile (`< 768px`) | Tablet (`768px – 1023px`) | Desktop (`>= 1024px`) |
|---|---|---|---|
| Vùng nội dung chính | `100%`, padding `16px 16px 96px` | `100%`, padding `24px 24px 96px` | `flex: 1`, `max-width: 1440px`, padding `28px 36px 48px` |
| Thanh điều hướng | Bottom nav 5 mục (`64px`) | Bottom nav hoặc Sidebar thu gọn | Sidebar trái `252px` (7 mục) + Header trên `68px` |
| Lưới thẻ chức năng (`M03`, `M02`) | 1 cột (`gap: 16px`) | 2 cột (`gap: 16px`) | 3 cột (`gap: 20px`) |
| Lưới 2 cột công cụ + hướng dẫn (`M04`, `M05`, `M06`, `M07`, `M08`, `M10`, `M13`) | 1 cột | 1–2 cột | Grid `7fr / 5fr` hoặc `1fr 1fr` (`gap: 24px`) |
| Lưới bài học (`M09`) | 1 cột | 2 cột | 2–3 cột (`repeat(auto-fill, minmax(290px, 1fr))`) |
| Lưới thống kê (`M12`) | KPI 3 ô gọn + biểu đồ + cảnh báo xếp dọc | KPI 3 cột + biểu đồ/cảnh báo 2 cột | KPI 3 cột + Grid `8fr / 4fr` (biểu đồ & cảnh báo mới) |
| Trang biểu mẫu đơn / kết quả (`M06b`, `M08b`, `E00`, `E06`, `E12`) | `100%` | Căn giữa `max-width: 560px` | Căn giữa `max-width: 600px` |

---

## 12. LUỒNG CHÍNH ĐỂ NỐI PROTOTYPE

```text
M03 Trang chủ
  → M04a Kiểm tra nhanh
    → M05c Kết quả NGUY HIỂM
      → M06a Hỏi người thân
        → M06b Đã gửi
```

Kết hợp các luồng phụ hoàn chỉnh: Đăng nhập/Đăng ký → Chọn vai trò → Trang chủ; Kiểm tra → Báo cáo (`M08a → M08b`); Học 1 phút (`M09 → M10 → M11a → M11b`); Thống kê (`M12a/M12b/E12`); Cá nhân (`M13`).

---

## 13. CHECKLIST KIỂM TRA TRƯỚC KHI NỘP

- [ ] Desktop hiển thị giao diện website thực sự (có Sidebar + lưới đa cột, không bị bó vào khung `360px`)
- [ ] Mobile (`360 × 800`, `390 × 844`) 1 cột rõ ràng, có thanh điều hướng dưới 5 mục, không cuộn ngang
- [ ] Tablet (`768 × 1024`) và Desktop (`1024 × 768`, `1366 × 768`, `1440 × 900`, `1920 × 1080`) cân đối
- [ ] Đúng nhóm A/B: Nhóm A chữ 22px nút tối thiểu 64px; Nhóm B chữ 18px nút tối thiểu 56px
- [ ] Cảnh báo luôn đủ 3 tín hiệu: màu + biểu tượng + chữ
- [ ] Nền sao băng (`MeteorBackground`) hiển thị rõ ở M01, Hero M03 và Nhóm B chế độ tối; không che nút/form; tắt được bằng công tắc trong M13 và tôn trọng `prefers-reduced-motion`
- [ ] Chế độ sáng/tối hoạt động đồng bộ, độ tương phản đạt WCAG AA
- [ ] Không có nút chết, không lỗi Console, không lỗi đường dẫn
- [ ] Dữ liệu dùng hoàn toàn từ `shared/scripts/mock-data.js`, không có thông tin thật

---

## 14. BẢN THUYẾT MINH & SẢN PHẨM NỘP THI (TRƯỚC 15H00)

Thư mục `Doi[mã đội]_De4` gồm đủ 3 phần:
1. **PDF thiết kế giao diện** (xuất từ công cụ thiết kế, có đầy đủ màn bắt buộc và tên rõ ràng).
2. **Prototype bấm được** (chạy trọn vẹn luồng chính 5 màn).
3. **Bản thuyết minh tối đa 3 trang**, đủ 5 mục: `(a)` Vấn đề & 3 nhóm người dùng, `(b)` Luồng sử dụng chính 5 màn, `(c)` Danh sách tính năng làm trong 24 giờ vòng chung kết, `(d)` Kiến trúc & công nghệ dự kiến, `(e)` **Công cụ trí tuệ nhân tạo đã dùng** (bắt buộc khai báo trung thực).

---

## 15. ĐỐI CHIẾU YÊU CẦU ĐỀ THI

| Yêu cầu của đề | Màn hình đáp ứng |
|---|---|
| 1. Kiểm tra nhanh SĐT, đường dẫn, STK + kết quả An toàn/Nghi ngờ/Nguy hiểm kèm lý do | `M04a`, `M05a`, `M05b`, `M05c`, `M05c_Toi`, `E04`, `E05` |
| 2. Báo cáo một trường hợp lừa đảo | `M08a`, `M08b` |
| 3. Hỏi người thân được chỉ định trước | `M06a`, `M06b`, `M07`, `E06` |
| 4. Bài học ngắn 1 phút theo tình huống | `M09`, `M10` |
| 5. Bài kiểm tra nhận diện có chấm điểm | `M11a`, `M11b` |
| 6. Thống kê kiểu lừa đảo mới tại địa phương cho đội tình nguyện | `M12a`, `M12b`, `M12a_Toi`, `E12` |
| Hỗ trợ người cao tuổi | Nhóm A (chữ 22px, nút 64px, chữ lớn, giọng nói, giảm chuyển động) |
| Điểm cộng 1: AI phân tích nội dung tin nhắn | `M04b` |
| Điểm cộng 2: Chế độ giọng nói cho người cao tuổi | `M04c`, nút Nghe ở `M05`/`M10`, công tắc `M13` |
| Điểm cộng 3: Kênh tiếp nhận tin báo của Công an / 156 | `M08a`, `M08b` |

**Đủ 6/6 yêu cầu bắt buộc và 3/3 nội dung điểm cộng.**
