/**
 * Lá Chắn Số — Responsive Header Component
 * Mobile: nút quay lại + tiêu đề + nhãn phường.
 * Desktop: tiêu đề + breadcrumb + địa phương + ThemeSwitcher + avatar người dùng.
 */

import { ICONS } from './ui.js';
import { createThemeSwitcher } from './ThemeSwitcher.js';
import { goBack, resolveRoute } from '../scripts/navigation.js';
import { getState } from '../scripts/store.js';
import { MOCK_USER } from '../scripts/mock-data.js';

export function createHeader({
  title = 'Lá Chắn Số',
  breadcrumb = '',
  showBack = true,
  backTo = 'M03',
  mode = 'default', // 'default' | 'home' | 'quiz'
  progressPercent = null,
} = {}) {
  const state = getState();
  const header = document.createElement('header');
  header.className = 'app-header';

  const leftControl =
    showBack && mode !== 'home'
      ? `<button type="button" class="app-header__back" aria-label="${mode === 'quiz' ? 'Đóng' : 'Quay lại'}">${
          mode === 'quiz' ? ICONS.close : ICONS.back
        }</button>`
      : '';

  header.innerHTML = `
    <div class="app-header__left">
      ${leftControl}
      <div class="app-header__titles">
        ${breadcrumb ? `<span class="app-header__breadcrumb">${breadcrumb}</span>` : ''}
        <h1 class="app-header__title">${title}</h1>
      </div>
    </div>
    <div class="app-header__right">
      <a class="badge" href="${resolveRoute('M13')}" aria-label="Địa bàn hiện tại">
        <span style="width:16px;height:16px;display:inline-flex">${ICONS.mapPin}</span>
        <span>${state.ward}</span>
      </a>
      <div class="app-header__desktop-only" data-header-theme-slot></div>
      <a class="avatar avatar--sm app-header__desktop-only" href="${resolveRoute('M13')}" aria-label="Hồ sơ ${MOCK_USER.displayName}">${MOCK_USER.avatarLetter}</a>
    </div>
    ${
      typeof progressPercent === 'number'
        ? `<div class="app-header__progress" aria-hidden="true">
             <div class="app-header__progress-fill" style="width:${progressPercent}%"></div>
           </div>`
        : ''
    }
  `;

  header.querySelector('.app-header__back')?.addEventListener('click', () => goBack(backTo));

  const themeSlot = header.querySelector('[data-header-theme-slot]');
  if (themeSlot) {
    themeSlot.appendChild(createThemeSwitcher());
  }

  return header;
}
