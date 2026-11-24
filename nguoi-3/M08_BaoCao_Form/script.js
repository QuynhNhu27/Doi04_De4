import { initAppLayout } from '../../shared/layouts/AppLayout.js';
import { ICONS, showToast } from '../../shared/components/ui.js';
import { goTo } from '../../shared/scripts/navigation.js';
import { getState } from '../../shared/scripts/store.js';

initAppLayout({
  screenId: 'M08a',
  group: 'A',
  title: 'Báo cáo lừa đảo',
  breadcrumb: 'Lá Chắn Số / Báo cáo lừa đảo',
  activeNav: 'report',
  mobileNav: 'home',
  backTo: 'M03',
  showFab: true,
});

document.getElementById('m08a-upload-icon').innerHTML = ICONS.image;
document.querySelectorAll('[data-tick]').forEach((el) => (el.innerHTML = ICONS.checkSmall));

const state = getState();
document.getElementById('m08a-police-label').textContent = `Gửi tới kênh Công an ${state.ward.toLowerCase()} (mô phỏng)`;

const prefill = new URLSearchParams(window.location.search).get('value');
if (prefill) document.getElementById('m08a-value').value = prefill;

const typeBtns = document.querySelectorAll('[data-type]');
typeBtns.forEach((b) =>
  b.addEventListener('click', () => {
    typeBtns.forEach((x) => x.classList.remove('is-active'));
    b.classList.add('is-active');
  })
);

let attached = false;
document.getElementById('m08a-upload-btn')?.addEventListener('click', () => {
  attached = !attached;
  document.getElementById('m08a-upload-label').textContent = attached
    ? 'Đã đính kèm: anh-chup-man-hinh-mau.png (mô phỏng)'
    : 'Thêm ảnh chụp màn hình bằng chứng';
  showToast(attached ? 'Đã chọn ảnh mẫu (mô phỏng)' : 'Đã bỏ ảnh mẫu');
});

document.getElementById('m08a-form')?.addEventListener('submit', (e) => {
  e.preventDefault();
  goTo('M08b');
});
