import { initAppLayout } from '../../shared/layouts/AppLayout.js';
import { AlertCard, renderReasonCard, simulateSpeak } from '../../shared/components/ui.js';
import { MOCK_CHECK_RESULTS } from '../../shared/scripts/mock-data.js';
import { goTo } from '../../shared/scripts/navigation.js';
import { getState } from '../../shared/scripts/store.js';
import { ganIcon, nhanAI, docTo, hieuUngVao, hieuUngKetQua, theTomTat } from '../chung.js';
import { apDungKetQua } from '../kiem-tra.js';

initAppLayout({
  screenId: 'E05',
  group: 'A',
  title: 'Kết quả kiểm tra',
  breadcrumb: 'Lá Chắn Số / Kiểm tra nhanh / Chưa có dữ liệu',
  activeNav: 'check',
  mobileNav: 'check',
  backTo: 'M04a',
  showFab: true,
});

const params = new URLSearchParams(window.location.search);
const data = { ...MOCK_CHECK_RESULTS.noData, value: params.get('value') || MOCK_CHECK_RESULTS.noData.value };
apDungKetQua(data, params, 'warning');

document.getElementById('e05-alert').innerHTML = AlertCard(data);
document.getElementById('e05-reason').innerHTML = renderReasonCard(data);
document.getElementById('e05-highlight').textContent = data.highlightWarning;

const hasRel = getState().relatives.length > 0;
document.getElementById('e05-primary')?.addEventListener('click', () => goTo(hasRel ? 'M06a' : 'M07'));
document.getElementById('e05-speak')?.addEventListener('click', (e) =>
  docTo(e.currentTarget, data.highlightWarning)
);
document.getElementById('e05-report')?.addEventListener('click', () => goTo('M08a', { value: data.value }));

ganIcon('e05-speak', 'volume');
ganIcon('e05-report', 'flag');
ganIcon('e05-primary', 'phone');
nhanAI('e05-reason');
theTomTat('e05-alert', data, 'warning');
hieuUngVao();
hieuUngKetQua('e05-alert', 'warning');
