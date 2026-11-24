import { initAppLayout } from '../../shared/layouts/AppLayout.js';
import { MOCK_SAMPLES } from '../../shared/scripts/mock-data.js';
import { goTo } from '../../shared/scripts/navigation.js';
import { ganIcon, rung, choXuLy, hieuUngVao, BUOC_KIEM_TRA, TRANG_THAI } from '../chung.js';
import { kiemTra, loiSoDienThoai } from '../kiem-tra.js';
import { updateState } from '../../shared/scripts/store.js';

initAppLayout({
  screenId: 'E04',
  group: 'A',
  title: 'Kiểm tra nhanh',
  breadcrumb: 'Lá Chắn Số / Kiểm tra nhanh / Nhập sai định dạng',
  activeNav: 'check',
  mobileNav: 'check',
  backTo: 'M04a',
  showFab: true,
});

const input = document.getElementById('e04-input');
const err = document.getElementById('e04-err');
const btn = document.getElementById('e04-check');

const params = new URLSearchParams(window.location.search);
if (params.get('value') && input) input.value = params.get('value');

function validate() {
  const chu = loiSoDienThoai(input?.value || '');
  const ok = !chu;
  input?.classList.toggle('input--error', !ok);
  input?.setAttribute('aria-invalid', ok ? 'false' : 'true');
  if (err) {
    err.textContent = chu;
    err.classList.toggle('is-hidden', ok);
  }
  if (btn) {
    btn.disabled = !ok;
    btn.classList.toggle('is-disabled', !ok);
  }
}

input?.addEventListener('input', validate);
document.getElementById('e04-paste')?.addEventListener('click', () => {
  if (input) input.value = MOCK_SAMPLES.scamPhone;
  validate();
});
let dangKiem = false;
btn?.addEventListener('click', async () => {
  if (btn.disabled || dangKiem) return;
  const kq = kiemTra('phone', input?.value || '');
  if (kq.loi || kq.ma === 'E04') return validate();
  dangKiem = true;
  updateState({ lastCheckedValue: kq.giaTri, lastCheckedStatus: TRANG_THAI[kq.ma] });
  await choXuLy({ buoc: BUOC_KIEM_TRA.phone });
  const thamSo = { value: kq.giaTri, loai: 'phone' };
  if (kq.lyDo) thamSo.reasons = kq.lyDo.join('|');
  goTo(kq.ma, thamSo);
});
input?.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') btn?.click();
});
window.addEventListener('pageshow', () => { dangKiem = false; });

ganIcon('e04-paste', 'paste');
ganIcon('e04-mic', 'mic');
validate();
hieuUngVao();
setTimeout(() => rung('e04-input'), 650);
