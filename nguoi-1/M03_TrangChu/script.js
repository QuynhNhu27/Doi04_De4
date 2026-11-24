import { initAppLayout } from '../../shared/layouts/AppLayout.js';
import { createMeteorBackground } from '../../shared/components/MeteorBackground.js';
import { ICONS } from '../../shared/components/ui.js';
import { MOCK_USER } from '../../shared/scripts/mock-data.js';

initAppLayout({
  screenId: 'M03',
  group: 'A',
  title: `Chào ${MOCK_USER.greetingName}`,
  breadcrumb: 'Lá Chắn Số / Trang chủ',
  activeNav: 'home',
  mobileNav: 'home',
  headerMode: 'home',
  showBack: false,
  showFab: true,
});

// Nền sao băng trong Hero Trang chủ khi người dùng bật hiệu ứng chuyển động
const heroEl = document.getElementById('m03-hero');
if (heroEl) {
  heroEl.prepend(createMeteorBackground({ contained: true, heroOptional: true }));
}

document.getElementById('m03-icon-call').innerHTML = ICONS.phone;
document.getElementById('m03-icon-report').innerHTML = ICONS.flag;
document.getElementById('m03-icon-learn').innerHTML = ICONS.book;
