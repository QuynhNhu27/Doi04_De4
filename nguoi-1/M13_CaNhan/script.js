import { initAppLayout } from '../../shared/layouts/AppLayout.js';
import { ICONS, showModal, showToast } from '../../shared/components/ui.js';
import { MOCK_HISTORY, MOCK_USER, MOCK_WARDS } from '../../shared/scripts/mock-data.js';
import { getState, updateState } from '../../shared/scripts/store.js';
import { applyPreferences, setMotionEnabled, setThemeMode } from '../../shared/scripts/theme.js';

initAppLayout({
  screenId: 'M13',
  group: 'A',
  title: 'Cá nhân & Cài đặt',
  breadcrumb: 'Lá Chắn Số / Cá nhân',
  activeNav: 'profile',
  mobileNav: 'profile',
  backTo: 'M03',
  showFab: true,
});

document.querySelectorAll('[data-chevron]').forEach((el) => {
  el.innerHTML = ICONS.chevronRight;
});

function syncUI() {
  const s = getState();
  document.getElementById('m13-name').textContent = MOCK_USER.displayName;
  document.getElementById('m13-avatar').textContent = MOCK_USER.avatarLetter;
  document.getElementById('m13-role-ward').textContent = `${s.roleLabel} · ${s.ward}`;
  document.getElementById('m13-toggle-large')?.setAttribute('aria-checked', String(s.largeText));
  document.getElementById('m13-toggle-voice')?.setAttribute('aria-checked', String(s.voiceEnabled));
  document.getElementById('m13-toggle-motion')?.setAttribute('aria-checked', String(s.motionEnabled));
  document.querySelectorAll('[data-theme-choice]').forEach((p) => {
    p.classList.toggle('is-active', p.getAttribute('data-theme-choice') === s.themeMode);
  });
}

syncUI();

document.getElementById('m13-toggle-large')?.addEventListener('click', () => {
  const next = !getState().largeText;
  updateState({ largeText: next });
  applyPreferences();
  syncUI();
  showToast(next ? 'Đã bật chế độ chữ lớn' : 'Đã trở về cỡ chữ chuẩn');
});

document.getElementById('m13-toggle-voice')?.addEventListener('click', () => {
  const next = !getState().voiceEnabled;
  updateState({ voiceEnabled: next });
  syncUI();
  showToast(next ? 'Đã bật đọc kết quả bằng giọng nói (mô phỏng)' : 'Đã tắt giọng nói');
});

document.getElementById('m13-toggle-motion')?.addEventListener('click', () => {
  const next = !getState().motionEnabled;
  setMotionEnabled(next);
  syncUI();
  showToast(next ? 'Đã bật hiệu ứng sao băng & chuyển động' : 'Đã giảm chuyển động (nền tĩnh dễ chịu)');
});

document.querySelectorAll('[data-theme-choice]').forEach((btn) => {
  btn.addEventListener('click', () => {
    setThemeMode(btn.getAttribute('data-theme-choice'));
    syncUI();
  });
});

document.getElementById('m13-change-ward')?.addEventListener('click', () => {
  const cur = getState().ward;
  const html = MOCK_WARDS.map(
    (w) =>
      `<button type="button" class="btn btn--secondary btn--full" style="margin-bottom:8px" data-pick-ward="${w}">${w}${
        w === cur ? ' (Đang chọn)' : ''
      }</button>`
  ).join('');
  showModal({ title: 'Chọn phường / xã', bodyHtml: html });
  document.querySelectorAll('[data-pick-ward]').forEach((b) => {
    b.addEventListener('click', () => {
      updateState({ ward: b.getAttribute('data-pick-ward') });
      syncUI();
      document.querySelector('.modal-backdrop')?.remove();
      showToast('Đã cập nhật địa phương');
    });
  });
});

document.getElementById('m13-history-reports')?.addEventListener('click', () => {
  const html = MOCK_HISTORY.reports
    .map(
      (r) =>
        `<div class="card" style="margin-bottom:10px"><p class="text-sub-medium">Mã ${r.code} · ${r.type}</p><p class="text-sub">${r.value} — ${r.status}</p></div>`
    )
    .join('');
  showModal({ title: 'Lịch sử báo cáo (dữ liệu mẫu)', bodyHtml: html });
});

document.getElementById('m13-history-checks')?.addEventListener('click', () => {
  const html = MOCK_HISTORY.checks
    .map(
      (c) =>
        `<div class="card" style="margin-bottom:10px"><p class="text-sub-medium">${c.value} — ${c.status}</p><p class="text-sub">${c.time}</p></div>`
    )
    .join('');
  showModal({ title: 'Lịch sử kiểm tra (dữ liệu mẫu)', bodyHtml: html });
});
