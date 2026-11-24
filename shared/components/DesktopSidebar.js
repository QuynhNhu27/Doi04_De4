/**
 * Lá Chắn Số — DesktopSidebar Component (>= 1024px)
 * 7 mục điều hướng + thông tin người dùng + nút chuyển giao diện.
 */

import { ICONS } from './ui.js';
import { createThemeSwitcher } from './ThemeSwitcher.js';
import { getRootPrefix, resolveRoute } from '../scripts/navigation.js';
import { getState } from '../scripts/store.js';
import { MOCK_USER } from '../scripts/mock-data.js';

const SIDEBAR_ITEMS = [
  { key: 'home', label: 'Trang chủ', icon: 'home', route: 'M03' },
  { key: 'check', label: 'Kiểm tra nhanh', icon: 'search', route: 'M04a' },
  { key: 'relatives', label: 'Hỏi người thân', icon: 'phone', route: 'M06a' },
  { key: 'report', label: 'Báo cáo lừa đảo', icon: 'flag', route: 'M08a' },
  { key: 'learn', label: 'Bài học kỹ năng số', icon: 'book', route: 'M09' },
  { key: 'stats', label: 'Thống kê địa phương', icon: 'chart', route: 'M12a' },
  { key: 'profile', label: 'Cá nhân', icon: 'user', route: 'M13' },
];

export function createDesktopSidebar(activeKey = 'home') {
  const state = getState();
  const aside = document.createElement('aside');
  aside.className = 'app-sidebar';
  aside.setAttribute('aria-label', 'Điều hướng máy tính');

  const navHtml = SIDEBAR_ITEMS.map((item) => {
    const isActive = item.key === activeKey;
    return `
      <a class="sidebar-nav__item ${isActive ? 'is-active' : ''}"
         href="${resolveRoute(item.route)}"
         ${isActive ? 'aria-current="page"' : ''}>
        ${ICONS[item.icon]}
        <span>${item.label}</span>
      </a>
    `;
  }).join('');

  aside.innerHTML = `
    <a class="sidebar-brand" href="${resolveRoute('M03')}">
      <img src="${getRootPrefix()}shared/assets/icons/shield-logo.svg" alt="" width="40" height="40">
      <div>
        <div class="sidebar-brand__name">Lá Chắn Số</div>
        <div class="sidebar-brand__tag">An toàn số · Đồng Nai</div>
      </div>
    </a>
    <nav class="sidebar-nav">${navHtml}</nav>
    <div class="sidebar-footer">
      <a class="sidebar-user" href="${resolveRoute('M13')}">
        <span class="avatar avatar--sm">${MOCK_USER.avatarLetter}</span>
        <span class="sidebar-user__info">
          <span class="sidebar-user__name">${MOCK_USER.displayName}</span>
          <span class="sidebar-user__meta">${state.roleLabel} · ${state.ward}</span>
        </span>
      </a>
      <div data-sidebar-theme-slot></div>
    </div>
  `;

  const slot = aside.querySelector('[data-sidebar-theme-slot]');
  if (slot) {
    const switcher = createThemeSwitcher({ variant: 'dark' });
    switcher.style.width = '100%';
    switcher.style.justifyContent = 'center';
    slot.appendChild(switcher);
  }

  return aside;
}
