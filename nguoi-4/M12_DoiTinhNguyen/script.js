import { initAppLayout } from '../../shared/layouts/AppLayout.js';
import { mountStatsDashboard } from '../../shared/components/StatsDashboard.js';

initAppLayout({
  screenId: 'M12a',
  group: 'B',
  title: 'Thống kê địa phương',
  breadcrumb: 'Lá Chắn Số / Đội tình nguyện / Thống kê',
  activeNav: 'stats',
  mobileNav: 'stats',
  backTo: 'M03',
  showFab: true,
});

mountStatsDashboard(document.getElementById('m12a-root'));
