import { initAppLayout } from '../../shared/layouts/AppLayout.js';
import { EmptyState } from '../../shared/components/ui.js';
import { bindDeclarativeNavigation } from '../../shared/scripts/navigation.js';

initAppLayout({
  screenId: 'E06',
  group: 'A',
  title: 'Hỏi người thân',
  breadcrumb: 'Lá Chắn Số / Hỏi người thân / Chưa có dữ liệu',
  activeNav: 'relatives',
  mobileNav: 'home',
  backTo: 'M03',
  showFab: false,
});

const slot = document.getElementById('e06-slot');
if (slot) {
  slot.innerHTML = EmptyState({
    icon: 'phone',
    title: 'Bác chưa thêm người thân nào',
    description: 'Thêm số của con cháu để hỏi chỉ bằng 1 chạm khi gặp cuộc gọi hoặc tin nhắn lạ.',
    actionHtml: '<button type="button" class="btn btn--primary btn--full" data-nav="M07">Thêm người thân</button>',
  });
  bindDeclarativeNavigation(slot);
}
