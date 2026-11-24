# ARCHITECTURE — Kiến trúc Website Responsive Lá Chắn Số (v2.0)

## 1. Kiến trúc tổng thể
- **Công nghệ:** HTML5 + CSS3 (Grid, Flexbox, Media Queries, `clamp()`, `minmax()`, Custom Properties) + Vanilla JavaScript (ES Modules) + SVG đồng nhất + LocalStorage (trạng thái demo không nhạy cảm).
- **Một bộ mã nguồn duy nhất** tự động thích ứng:
  - **Mobile (`< 768px`):** 1 cột, Header gọn, `MobileBottomNavigation` 5 mục, `FloatingContactButton` góc dưới phải.
  - **Tablet (`768px – 1023px`):** Lưới 1–2 cột, khoảng cách thoáng hơn.
  - **Desktop (`>= 1024px`):** `DesktopSidebar` trái (`256px`, 7 mục + hồ sơ + đổi giao diện), `Header` trên (tiêu đề, breadcrumb, phường, đổi sáng/tối, avatar), vùng nội dung phải rộng tối đa `1440px` với lưới 2–3 cột; ẩn hoàn toàn bottom nav mobile.

## 2. Cấu trúc `shared/` (Nhóm trưởng quản lý)
- `shared/styles/`: `tokens.css` (bảng màu mở rộng, 4 gradient, bóng mềm, Nhóm A/B), `base.css`, `responsive.css`, `themes.css`, `animations.css`.
- `shared/scripts/`: `navigation.js` (ROUTES đủ 30 bản), `theme.js` (sáng/tối + chữ lớn + giảm chuyển động), `store.js`, `mock-data.js`.
- `shared/components/`: `MeteorBackground.js`, `DesktopSidebar.js`, `MobileBottomNavigation.js`, `Header.js`, `FloatingContactButton.js`, `ThemeSwitcher.js`, `StatsDashboard.js`, `ui.js` (`Button`, `Card`, `Input`, `Badge`, `Modal`, `Toast`, `ProgressBar`, `AlertCard`, `EmptyState`, `LoadingState`, `ICONS`).
- `shared/layouts/`: `AppLayout.js`, `AuthLayout.js`.
- `shared/assets/`: `icons/` (`shield-logo.svg`, `shield-hero.svg`, `alert-*.svg`), `images/`, `fonts/`.

## 3. Phân tách 4 thư mục thành viên
Mỗi thành viên sở hữu 1 thư mục gốc độc lập (`nguoi-1/` → `nguoi-4/`) kèm `README.md` riêng và các thư mục con dạng `Ma_TenMan/{index.html, style.css, script.js}` để phát triển song song gần như 0% xung đột Git.
