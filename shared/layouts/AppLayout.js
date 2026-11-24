/**
 * Lá Chắn Số — AppLayout (Responsive Website Shell)
 * - Desktop (>=1024px): Sidebar trái 7 mục + Header + Main fluid (max 1440px).
 * - Mobile/Tablet (<1024px): Header gọn + Main 1-2 cột + MobileBottomNavigation 5 mục.
 * - Nhóm B chế độ tối: Tự động gắn MeteorBackground phủ toàn viewport.
 */

import { initTheme } from '../scripts/theme.js';
import { bindDeclarativeNavigation } from '../scripts/navigation.js';
import { createDesktopSidebar } from '../components/DesktopSidebar.js';
import { createMobileBottomNavigation } from '../components/MobileBottomNavigation.js';
import { createHeader } from '../components/Header.js';
import { createFloatingContactButton } from '../components/FloatingContactButton.js';
import { createMeteorBackground } from '../components/MeteorBackground.js';

export function initAppLayout({
  screenId = '',
  group = 'A',
  title = 'Lá Chắn Số',
  breadcrumb = '',
  activeNav = 'home', // sidebar key
  mobileNav = 'home', // bottom nav key | null để ẩn
  showSidebar = true,
  showHeader = true,
  headerMode = 'default',
  showBack = true,
  backTo = 'M03',
  progressPercent = null,
  showFab = true,
  forceTheme = null,
  meteorDarkOnly = false,
} = {}) {
  document.documentElement.setAttribute('data-group', group);
  if (screenId) document.documentElement.setAttribute('data-screen', screenId);

  initTheme({ forceTheme });

  const shell = document.querySelector('.app-shell');
  const main = document.querySelector('.app-main');
  if (!shell || !main) {
    bindDeclarativeNavigation(document);
    return;
  }

  if (!mobileNav) shell.classList.add('no-bottom-nav');

  // Nền sao băng cho Nhóm B ở chế độ tối
  if (meteorDarkOnly || group === 'B') {
    document.body.prepend(createMeteorBackground({ darkOnly: true }));
  }

  // Sidebar Desktop (>= 1024px)
  if (showSidebar) {
    shell.prepend(createDesktopSidebar(activeNav));
  }

  // Header dùng chung
  if (showHeader) {
    main.prepend(
      createHeader({
        title,
        breadcrumb,
        showBack,
        backTo,
        mode: headerMode,
        progressPercent,
      })
    );
  }

  // Bottom Navigation Mobile (< 1024px)
  if (mobileNav) {
    document.body.appendChild(createMobileBottomNavigation(mobileNav));
  }

  // Nút gọi người thân nổi
  if (showFab) {
    document.body.appendChild(createFloatingContactButton());
  }

  bindDeclarativeNavigation(document);
}
