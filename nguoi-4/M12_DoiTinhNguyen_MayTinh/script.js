import { initAppLayout } from '../../shared/layouts/AppLayout.js';
import { mountStatsDashboard } from '../../shared/components/StatsDashboard.js';

initAppLayout({
  screenId: 'M12b',
  group: 'B',
  title: 'Thống kê địa phương — Bản máy tính',
  breadcrumb: 'Lá Chắn Số / Đội tình nguyện / Bảng điều khiển Desktop',
  activeNav: 'stats',
  mobileNav: null,
  backTo: 'M03',
  showFab: false,
});

mountStatsDashboard(document.getElementById('m12b-root'));
