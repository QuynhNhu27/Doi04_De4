import { initAppLayout } from '../../shared/layouts/AppLayout.js';
import { ICONS, simulateSpeak } from '../../shared/components/ui.js';
import { MOCK_LESSONS } from '../../shared/scripts/mock-data.js';
import { goTo } from '../../shared/scripts/navigation.js';

const lessonId = new URLSearchParams(window.location.search).get('lesson') || 'lesson-1';
const lesson = MOCK_LESSONS.find((l) => l.id === lessonId) || MOCK_LESSONS[0];
const steps = lesson.steps || MOCK_LESSONS[0].steps;

initAppLayout({
  screenId: 'M10',
  group: 'B',
  title: lesson.shortTitle || 'Giả danh công an',
  breadcrumb: `Lá Chắn Số / Bài học / ${lesson.shortTitle}`,
  activeNav: 'learn',
  mobileNav: 'learn',
  backTo: 'M09',
  showFab: true,
});

document.getElementById('m10-vol').innerHTML = ICONS.volume;

let stepIdx = 0;
const dots = document.getElementById('m10-dots');
const badge = document.getElementById('m10-step-badge');
const title = document.getElementById('m10-title');
const body = document.getElementById('m10-body');
const nextBtn = document.getElementById('m10-next');

function render() {
  const s = steps[stepIdx];
  dots.innerHTML = steps
    .map((_, i) => `<button type="button" class="m10-dot ${i === stepIdx ? 'is-active' : ''}" data-step="${i}" aria-label="Bước ${i + 1}"></button>`)
    .join('');
  dots.querySelectorAll('[data-step]').forEach((d) =>
    d.addEventListener('click', () => {
      stepIdx = Number(d.getAttribute('data-step'));
      render();
    })
  );
  badge.textContent = `Bước ${stepIdx + 1} / ${steps.length}`;
  title.textContent = s.title;
  body.textContent = s.body;
  nextBtn.textContent = stepIdx === steps.length - 1 ? 'Làm bài kiểm tra' : 'Tiếp theo';
}

render();

document.getElementById('m10-listen')?.addEventListener('click', () => {
  const s = steps[stepIdx];
  simulateSpeak(`${s.title}. ${s.body}`);
});

nextBtn?.addEventListener('click', () => {
  if (stepIdx < steps.length - 1) {
    stepIdx += 1;
    render();
  } else {
    goTo('M11a');
  }
});
