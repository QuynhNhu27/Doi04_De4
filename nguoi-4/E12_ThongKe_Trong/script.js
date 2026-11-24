import { initAppLayout } from '../../shared/layouts/AppLayout.js';
import { EmptyState } from '../../shared/components/ui.js';
import { bindDeclarativeNavigation } from '../../shared/scripts/navigation.js';

initAppLayout({
  screenId: 'E12',
  group: 'B',
  title: 'Thống kê địa phương',
  breadcrumb: 'Lá Chắn Số / Thống kê / Chưa có dữ liệu',
  activeNav: 'stats',
  mobileNav: 'stats',
  backTo: 'M12a',
  showFab: true,
});

const slot = document.getElementById('e12-slot');
if (slot) {
  slot.innerHTML = EmptyState({
    icon: 'chart',
    title: 'Tháng này phường Trấn Biên chưa có báo cáo nào',
    description: 'Chưa có lượt báo cáo lừa đảo mới được ghi nhận trong tháng 12/2026. Bạn có thể xem lại số liệu tháng trước.',
    actionHtml: '<button type="button" class="btn btn--secondary btn--full" data-nav="M12a">Xem tháng trước (Tháng 11/2026)</button>',
  });
  bindDeclarativeNavigation(slot);
}
