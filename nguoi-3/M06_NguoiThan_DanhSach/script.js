import { initAppLayout } from '../../shared/layouts/AppLayout.js';
import { showToast } from '../../shared/components/ui.js';
import { MOCK_SAMPLES } from '../../shared/scripts/mock-data.js';
import { goTo } from '../../shared/scripts/navigation.js';
import { getState, updateState } from '../../shared/scripts/store.js';

initAppLayout({
  screenId: 'M06a',
  group: 'A',
  title: 'Hỏi người thân',
  breadcrumb: 'Lá Chắn Số / Hỏi người thân',
  activeNav: 'relatives',
  mobileNav: 'home',
  backTo: 'M05c',
  showFab: false,
});

const state = getState();
const val = state.lastCheckedValue || MOCK_SAMPLES.scamPhone;
const status = state.lastCheckedStatus || 'NGUY HIỂM';
document.getElementById('m06a-preview').textContent =
  `Tin sẽ gửi: Mẹ vừa nhận cuộc gọi từ ${val}, app báo ${status}. Con kiểm tra giúp mẹ.`;

const list = document.getElementById('m06a-list');
if (list) {
  list.innerHTML = state.relatives
    .map(
      (r) => `
        <article class="card m06a-row">
          <div class="avatar">${r.avatarLetter || r.name.charAt(0)}</div>
          <div class="m06a-info">
            <a class="text-card-title" href="../M07_ThemNguoiThan/index.html?edit=${r.id}">${r.name}</a>
            <span class="text-sub">${r.relation} · ${r.phone}</span>
          </div>
          <div class="m06a-actions">
            <button type="button" class="btn btn--danger btn--inline" data-call="${r.name}">Gọi</button>
            <button type="button" class="btn btn--primary btn--inline" data-send="${r.name}">Gửi tin</button>
          </div>
        </article>
      `
    )
    .join('');

  list.querySelectorAll('[data-call]').forEach((b) =>
    b.addEventListener('click', () =>
      showToast(`Đang mô phỏng cuộc gọi tới ${b.getAttribute('data-call')} (không gọi số thật)`)
    )
  );
  list.querySelectorAll('[data-send]').forEach((b) =>
    b.addEventListener('click', () => {
      const name = b.getAttribute('data-send');
      updateState({ sentRelativeName: name });
      goTo('M06b', { to: name });
    })
  );
}
