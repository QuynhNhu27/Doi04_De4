import { initAppLayout } from '../../shared/layouts/AppLayout.js';
import { ICONS } from '../../shared/components/ui.js';
import { MOCK_QUIZ_RESULT } from '../../shared/scripts/mock-data.js';

initAppLayout({
  screenId: 'M11b',
  group: 'B',
  title: 'Kết quả bài kiểm tra',
  breadcrumb: 'Lá Chắn Số / Bài kiểm tra / Kết quả',
  activeNav: 'learn',
  mobileNav: 'learn',
  backTo: 'M09',
  showFab: true,
});

document.getElementById('m11b-badge').innerHTML = ICONS.badgeStar;
document.getElementById('m11b-summary').textContent = MOCK_QUIZ_RESULT.summary;
document.getElementById('m11b-missed').innerHTML = MOCK_QUIZ_RESULT.missedLessons
  .map((item) => `<li class="text-body" style="font-size:16px">• ${item}</li>`)
  .join('');

const scoreEl = document.getElementById('m11b-score');
const reduced = document.documentElement.getAttribute('data-motion') === 'reduced';
if (scoreEl && !reduced) {
  const start = performance.now();
  const dur = 950;
  const run = (now) => {
    const p = Math.min((now - start) / dur, 1);
    scoreEl.textContent = `${Math.round(p * MOCK_QUIZ_RESULT.score)}/${MOCK_QUIZ_RESULT.total}`;
    if (p < 1) requestAnimationFrame(run);
  };
  requestAnimationFrame(run);
}
