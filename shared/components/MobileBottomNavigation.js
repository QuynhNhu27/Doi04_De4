/**
 * Lá Chắn Số — MobileBottomNavigation Component (< 1024px)
 * Giữ đúng 5 mục cố định: Trang chủ, Kiểm tra, Học, Thống kê, Cá nhân.
 */

import { ICONS } from './ui.js';
import { resolveRoute } from '../scripts/navigation.js';

const MOBILE_NAV_ITEMS = [
  { key: 'home', label: 'Trang chủ', icon: 'home', route: 'M03' },
  { key: 'check', label: 'Kiểm tra', icon: 'search', route: 'M04a' },
  { key: 'learn', label: 'Học', icon: 'book', route: 'M09' },
  { key: 'stats', label: 'Thống kê', icon: 'chart', route: 'M12a' },
  { key: 'profile', label: 'Cá nhân', icon: 'user', route: 'M13' },
];

export function createMobileBottomNavigation(activeKey = 'home') {
  const nav = document.createElement('nav');
  nav.className = 'mobile-bottom-nav';
  nav.setAttribute('aria-label', 'Điều hướng di động');

  nav.innerHTML = MOBILE_NAV_ITEMS.map((item) => {
    const isActive = item.key === activeKey;
    return `
      <a class="mobile-bottom-nav__item ${isActive ? 'is-active' : ''}"
         href="${resolveRoute(item.route)}"
         ${isActive ? 'aria-current="page"' : ''}>
        ${ICONS[item.icon]}
        <span>${item.label}</span>
      </a>
    `;
  }).join('');

  return nav;
}
