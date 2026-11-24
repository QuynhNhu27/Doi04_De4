import { initAppLayout } from '../../shared/layouts/AppLayout.js';
import { AlertCard, renderReasonCard, simulateSpeak } from '../../shared/components/ui.js';
import { MOCK_CHECK_RESULTS } from '../../shared/scripts/mock-data.js';
import { goTo } from '../../shared/scripts/navigation.js';
import { getState } from '../../shared/scripts/store.js';
import { ganIcon, nhanAI, docTo, hieuUngVao, hieuUngKetQua, theTomTat } from '../chung.js';
import { apDungKetQua } from '../kiem-tra.js';

initAppLayout({
  screenId: 'M05c_Toi',
  group: 'A',
  title: 'Kết quả kiểm tra (Chế độ tối)',
  breadcrumb: 'Lá Chắn Số / Kiểm tra nhanh / NGUY HIỂM (Tối)',
  activeNav: 'check',
  mobileNav: 'check',
  backTo: 'M04a',
  showFab: true,
  forceTheme: 'dark',
});

const params = new URLSearchParams(window.location.search);
const data = { ...MOCK_CHECK_RESULTS.danger, value: params.get('value') || MOCK_CHECK_RESULTS.danger.value };
apDungKetQua(data, params, 'danger');
document.getElementById('m05ct-alert').innerHTML = AlertCard(data);
document.getElementById('m05ct-reason').innerHTML = renderReasonCard(data);
document.getElementById('m05ct-next-steps').innerHTML = `
  <h3 class="text-card-title" style="color:var(--color-danger-text);margin-bottom:10px">Cần làm ngay bây giờ</h3>
  <ul style="display:flex;flex-direction:column;gap:8px">${data.nextSteps
    .map((s) => `<li class="text-sub" style="color:var(--color-text)">• ${s}</li>`)
    .join('')}</ul>
`;

const hasRel = getState().relatives.length > 0;
const pBtnT = document.getElementById('m05ct-primary');
if (pBtnT && !hasRel) pBtnT.textContent = 'Thêm người thân';
document.getElementById('m05ct-primary')?.addEventListener('click', () => goTo(hasRel ? 'M06a' : 'M07'));
document.getElementById('m05ct-speak')?.addEventListener('click', (e) =>
  docTo(e.currentTarget, `Cảnh báo NGUY HIỂM! ${data.value}. ${data.reasons.join('. ')}. ${data.reminder}.`)
);
document.getElementById('m05ct-report')?.addEventListener('click', () => goTo('M08a', { value: data.value }));

ganIcon('m05ct-speak', 'volume');
ganIcon('m05ct-report', 'flag');
ganIcon('m05ct-primary', 'phone');
nhanAI('m05ct-reason');
theTomTat('m05ct-alert', data, 'danger');
hieuUngVao();
hieuUngKetQua('m05ct-alert', 'danger');
