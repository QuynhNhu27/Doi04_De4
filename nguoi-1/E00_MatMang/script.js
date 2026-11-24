import { initAppLayout } from '../../shared/layouts/AppLayout.js';
import { EmptyState } from '../../shared/components/ui.js';
import { bindDeclarativeNavigation } from '../../shared/scripts/navigation.js';

initAppLayout({
  screenId: 'E00',
  group: 'A',
  title: 'Kết nối mạng',
  breadcrumb: 'Lá Chắn Số / Trạng thái mạng',
  activeNav: 'home',
  mobileNav: 'home',
  backTo: 'M03',
  showFab: true,
});

const slot = document.getElementById('e00-slot');
if (slot) {
  slot.innerHTML = EmptyState({
    icon: 'wifiOff',
    title: 'Không có kết nối',
    description: 'Bác kiểm tra lại wifi hoặc 4G rồi bấm Thử lại. Khi khẩn cấp vẫn có thể bấm nút gọi người thân ở góc dưới.',
    actionHtml: '<button type="button" class="btn btn--primary btn--full" data-nav="M03">Thử lại</button>',
  });
  bindDeclarativeNavigation(slot);
}
