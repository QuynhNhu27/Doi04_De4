import { initAppLayout } from '../../shared/layouts/AppLayout.js';
import { AlertCard, renderReasonCard, simulateSpeak } from '../../shared/components/ui.js';
import { MOCK_CHECK_RESULTS } from '../../shared/scripts/mock-data.js';
import { goTo } from '../../shared/scripts/navigation.js';
import { getState } from '../../shared/scripts/store.js';
import { ganIcon, nhanAI, docTo, hieuUngVao, hieuUngKetQua, theTomTat } from '../chung.js';
import { apDungKetQua } from '../kiem-tra.js';

initAppLayout({
  screenId: 'M05c',
  group: 'A',
  title: 'Kết quả kiểm tra',
  breadcrumb: 'Lá Chắn Số / Kiểm tra nhanh / NGUY HIỂM',
  activeNav: 'check',
  mobileNav: 'check',
  backTo: 'M04a',
  showFab: true,
});

const params = new URLSearchParams(window.location.search);
const data = { ...MOCK_CHECK_RESULTS.danger, value: params.get('value') || MOCK_CHECK_RESULTS.danger.value };
apDungKetQua(data, params, 'danger');

document.getElementById('m05c-alert').innerHTML = AlertCard(data);
document.getElementById('m05c-reason').innerHTML = renderReasonCard(data);
document.getElementById('m05c-next-steps').innerHTML = `
  <h3 class="text-card-title" style="color:var(--color-danger-text);margin-bottom:10px">Cần làm ngay bây giờ</h3>
  <ul style="display:flex;flex-direction:column;gap:8px">${data.nextSteps
    .map((s) => `<li class="text-sub" style="color:var(--color-text)">• ${s}</li>`)
    .join('')}</ul>
`;

const hasRel = getState().relatives.length > 0;
const pBtn = document.getElementById('m05c-primary');
if (pBtn) {
  if (!hasRel) pBtn.textContent = 'Thêm người thân';
  pBtn.addEventListener('click', () => goTo(hasRel ? 'M06a' : 'M07'));
}

document.getElementById('m05c-speak')?.addEventListener('click', (e) =>
  docTo(e.currentTarget, `Cảnh báo NGUY HIỂM! ${data.value}. ${data.reasons.join('. ')}. ${data.reminder}.`)
);
document.getElementById('m05c-report')?.addEventListener('click', () => goTo('M08a', { value: data.value }));

ganIcon('m05c-speak', 'volume');
ganIcon('m05c-report', 'flag');
ganIcon('m05c-primary', 'phone');
nhanAI('m05c-reason');
theTomTat('m05c-alert', data, 'danger');
hieuUngVao();
hieuUngKetQua('m05c-alert', 'danger');
