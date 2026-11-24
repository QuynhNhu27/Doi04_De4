/**
 * Lá Chắn Số — AuthLayout (M01 Đăng nhập / M01 Đăng ký)
 * Luôn hiển thị nền sao băng thực sự (MeteorBackground) phía sau layout 2 cột Desktop / 1 cột Mobile.
 */

import { initTheme } from '../scripts/theme.js';
import { bindDeclarativeNavigation } from '../scripts/navigation.js';
import { createMeteorBackground } from '../components/MeteorBackground.js';

export function initAuthLayout({ screenId = 'M01a' } = {}) {
  document.documentElement.setAttribute('data-group', 'A');
  document.documentElement.setAttribute('data-screen', screenId);
  initTheme();

  const authShell = document.querySelector('.auth-shell');
  if (authShell) {
    authShell.prepend(createMeteorBackground({ contained: false, darkOnly: false }));
  }

  bindDeclarativeNavigation(document);
}
