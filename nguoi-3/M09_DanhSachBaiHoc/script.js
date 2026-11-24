import { initAppLayout } from '../../shared/layouts/AppLayout.js';
import { ICONS, ProgressBar } from '../../shared/components/ui.js';
import { MOCK_LESSONS } from '../../shared/scripts/mock-data.js';
import { resolveRoute } from '../../shared/scripts/navigation.js';

initAppLayout({
  screenId: 'M09',
  group: 'B',
  title: 'Bài học 1 phút',
  breadcrumb: 'Lá Chắn Số / Bài học kỹ năng số',
  activeNav: 'learn',
  mobileNav: 'learn',
  backTo: 'M03',
  showFab: true,
});

const done = MOCK_LESSONS.filter((l) => l.completed).length;
document.getElementById('m09-progress-title').textContent = `Đã học ${done}/${MOCK_LESSONS.length} bài`;
document.getElementById('m09-progress-bar').innerHTML = ProgressBar({
  percent: Math.round((done / MOCK_LESSONS.length) * 100),
  onDark: true,
});

document.getElementById('m09-list').innerHTML = MOCK_LESSONS.map(
  (lesson, i) => `
    <a class="card card--interactive m09-lesson-card" href="${resolveRoute('M10', { lesson: lesson.id })}">
      <span class="icon-box ${lesson.completed ? 'icon-box--safe' : 'icon-box--blue'}">
        ${ICONS[lesson.icon] || ICONS.book}
      </span>
      <div class="m09-lesson-info">
        <span class="text-card-title" style="font-size:17px">${i + 1}. ${lesson.title}</span>
        <div class="m09-lesson-meta">
          <span class="text-sub" style="font-size:13px">${lesson.duration}</span>
          <span class="badge badge--soft-blue" style="padding:2px 8px;font-size:12px">${lesson.category}</span>
        </div>
      </div>
      ${lesson.completed ? `<span class="m09-done-mark" aria-label="Đã học">${ICONS.checkSmall}</span>` : ''}
    </a>
  `
).join('');
