import { initAppLayout } from '../../shared/layouts/AppLayout.js';
import { mountStatsDashboard } from '../../shared/components/StatsDashboard.js';

initAppLayout({
  screenId: 'M12a_Toi',
  group: 'B',
  title: 'Thống kê địa phương (Chế độ tối)',
  breadcrumb: 'Lá Chắn Số / Đội tình nguyện / Chế độ tối sao băng',
  activeNav: 'stats',
  mobileNav: 'stats',
  backTo: 'M03',
  showFab: true,
  forceTheme: 'dark',
  meteorDarkOnly: true,
});

mountStatsDashboard(document.getElementById('m12at-root'), { darkNotice: true });
