/**
 * Lá Chắn Số — ThemeSwitcher Component
 */

import { ICONS } from './ui.js';
import { toggleLightDark } from '../scripts/theme.js';

export function createThemeSwitcher({ variant = 'default' } = {}) {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.className = variant === 'dark' ? 'theme-switcher theme-switcher--dark' : 'theme-switcher';
  btn.setAttribute('aria-label', 'Chuyển chế độ sáng tối');

  function syncLabel() {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    btn.innerHTML = `${isDark ? ICONS.sun : ICONS.moon}<span>${isDark ? 'Chế độ sáng' : 'Chế độ tối'}</span>`;
  }

  syncLabel();
  btn.addEventListener('click', () => {
    toggleLightDark();
    syncLabel();
  });
  window.addEventListener('lcs:preferences-changed', syncLabel);

  return btn;
}
