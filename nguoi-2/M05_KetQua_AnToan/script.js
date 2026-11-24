import { initAppLayout } from '../../shared/layouts/AppLayout.js';
import { AlertCard, renderReasonCard, simulateSpeak } from '../../shared/components/ui.js';
import { MOCK_CHECK_RESULTS } from '../../shared/scripts/mock-data.js';
import { goTo } from '../../shared/scripts/navigation.js';
import { ganIcon, nhanAI, docTo, hieuUngVao, hieuUngKetQua, theTomTat } from '../chung.js';
import { apDungKetQua } from '../kiem-tra.js';

initAppLayout({
  screenId: 'M05a',
  group: 'A',
  title: 'Kết quả kiểm tra',
  breadcrumb: 'Lá Chắn Số / Kiểm tra nhanh / AN TOÀN',
  activeNav: 'check',
  mobileNav: 'check',
  backTo: 'M04a',
  showFab: true,
});

const params = new URLSearchParams(window.location.search);
const data = { ...MOCK_CHECK_RESULTS.safe, value: params.get('value') || MOCK_CHECK_RESULTS.safe.value };
apDungKetQua(data, params, 'safe');

document.getElementById('m05a-alert').innerHTML = AlertCard(data);
document.getElementById('m05a-reason').innerHTML = renderReasonCard(data);
document.getElementById('m05a-next-steps').innerHTML = `
  <h3 class="text-card-title" style="margin-bottom:10px">Hướng dẫn tiếp theo</h3>
  <ul style="display:flex;flex-direction:column;gap:8px">${data.nextSteps
    .map((s) => `<li class="text-sub">• ${s}</li>`)
    .join('')}</ul>
`;

document.getElementById('m05a-speak')?.addEventListener('click', (e) =>
  docTo(e.currentTarget, `Kết quả AN TOÀN. ${data.value}. ${data.reasons.join('. ')}. ${data.reminder}.`)
);
document.getElementById('m05a-report')?.addEventListener('click', () => goTo('M08a', { value: data.value }));

ganIcon('m05a-speak', 'volume');
ganIcon('m05a-report', 'flag');
nhanAI('m05a-reason');
ganIcon('m05a-home', 'home');
theTomTat('m05a-alert', data, 'safe');
hieuUngVao();
hieuUngKetQua('m05a-alert', 'safe');
