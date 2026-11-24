import { initAppLayout } from '../../shared/layouts/AppLayout.js';
import { ICONS } from '../../shared/components/ui.js';
import { getState } from '../../shared/scripts/store.js';

initAppLayout({
  screenId: 'M06b',
  group: 'A',
  title: 'Đã gửi người thân',
  breadcrumb: 'Lá Chắn Số / Hỏi người thân / Đã gửi',
  activeNav: 'relatives',
  mobileNav: 'home',
  backTo: 'M06a',
  showFab: false,
});

document.getElementById('m06b-icon').innerHTML = ICONS.safeCircle;
const to = new URLSearchParams(window.location.search).get('to') || getState().sentRelativeName || 'anh Nam';
document.getElementById('m06b-title').textContent = `Đã gửi cho ${to.charAt(0).toLowerCase() + to.slice(1)}`;
