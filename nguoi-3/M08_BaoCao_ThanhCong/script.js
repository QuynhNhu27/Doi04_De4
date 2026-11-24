import { initAppLayout } from '../../shared/layouts/AppLayout.js';
import { ICONS } from '../../shared/components/ui.js';
import { MOCK_SAMPLES } from '../../shared/scripts/mock-data.js';

initAppLayout({
  screenId: 'M08b',
  group: 'A',
  title: 'Báo cáo thành công',
  breadcrumb: 'Lá Chắn Số / Báo cáo lừa đảo / Thành công',
  activeNav: 'report',
  mobileNav: 'home',
  backTo: 'M03',
  showFab: true,
});

document.getElementById('m08b-icon').innerHTML = ICONS.safeCircle;
document.getElementById('m08b-code').textContent = MOCK_SAMPLES.reportCode;
