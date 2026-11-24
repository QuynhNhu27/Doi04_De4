import { initAppLayout } from '../../shared/layouts/AppLayout.js';
import { AlertCard, renderReasonCard, simulateSpeak } from '../../shared/components/ui.js';
import { MOCK_CHECK_RESULTS } from '../../shared/scripts/mock-data.js';
import { goTo } from '../../shared/scripts/navigation.js';
import { getState } from '../../shared/scripts/store.js';
import { ganIcon, nhanAI, docTo, hieuUngVao, hieuUngKetQua, theTomTat } from '../chung.js';
import { apDungKetQua } from '../kiem-tra.js';

initAppLayout({
  screenId: 'M05b',
  group: 'A',
  title: 'Kết quả kiểm tra',
  breadcrumb: 'Lá Chắn Số / Kiểm tra nhanh / NGHI NGỜ',
  activeNav: 'check',
  mobileNav: 'check',
  backTo: 'M04a',
  showFab: true,
});

const params = new URLSearchParams(window.location.search);
const data = { ...MOCK_CHECK_RESULTS.warning, value: params.get('value') || MOCK_CHECK_RESULTS.warning.value };
apDungKetQua(data, params, 'warning');
if (params.get('source') === 'ai' && data.reasons.length === 1) {
  data.reasons.push('Mới có 1 dấu hiệu, chưa đủ để kết luận là lừa đảo');
}

document.getElementById('m05b-alert').innerHTML = AlertCard(data);
document.getElementById('m05b-reason').innerHTML = renderReasonCard(data);
document.getElementById('m05b-next-steps').innerHTML = `
  <h3 class="text-card-title" style="margin-bottom:10px">Hướng dẫn tiếp theo</h3>
  <ul style="display:flex;flex-direction:column;gap:8px">${data.nextSteps
    .map((s) => `<li class="text-sub">• ${s}</li>`)
    .join('')}</ul>
`;

const hasRel = getState().relatives.length > 0;
const pBtn = document.getElementById('m05b-primary');
if (pBtn) {
  if (!hasRel) pBtn.textContent = 'Thêm người thân';
  pBtn.addEventListener('click', () => goTo(hasRel ? 'M06a' : 'M07'));
}

document.getElementById('m05b-speak')?.addEventListener('click', (e) =>
  docTo(e.currentTarget, `Kết quả NGHI NGỜ. ${data.value}. ${data.reasons.join('. ')}. ${data.reminder}.`)
);
document.getElementById('m05b-report')?.addEventListener('click', () => goTo('M08a', { value: data.value }));

ganIcon('m05b-speak', 'volume');
ganIcon('m05b-report', 'flag');
ganIcon('m05b-primary', 'phone');
nhanAI('m05b-reason');
theTomTat('m05b-alert', data, 'warning');
hieuUngVao();
hieuUngKetQua('m05b-alert', 'warning');
