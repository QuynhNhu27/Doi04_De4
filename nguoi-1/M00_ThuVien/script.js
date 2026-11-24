import { initTheme } from '../../shared/scripts/theme.js';
import { createThemeSwitcher } from '../../shared/components/ThemeSwitcher.js';
import { createMeteorBackground } from '../../shared/components/MeteorBackground.js';
import { AlertCard, LoadingState, ProgressBar } from '../../shared/components/ui.js';
import { MOCK_SAMPLES } from '../../shared/scripts/mock-data.js';

initTheme();
document.getElementById('m00-theme-slot')?.appendChild(createThemeSwitcher());

const COLORS = [
  ['Primary Navy', '#062E55'], ['Primary Blue', '#2563EB'], ['Accent Blue', '#11598F'],
  ['Cyan', '#38BDF8'], ['Teal', '#14B8A6'], ['Purple AI', '#8B5CF6'], ['Indigo', '#6366F1'],
  ['An toàn', '#12A57A'], ['Nghi ngờ', '#F2A33C'], ['Nguy hiểm', '#D92D2D'],
  ['Dark Sky', '#03142B'], ['Dark Surface', '#102437'],
];

document.getElementById('m00-palette').innerHTML = COLORS.map(
  ([name, hex]) => `
    <div class="card m00-swatch">
      <div class="m00-swatch__box" style="background:${hex}"></div>
      <span class="text-sub-medium">${name}</span>
      <span class="text-sub" style="font-size:13px">${hex}</span>
    </div>
  `
).join('');

const GRADS = [
  ['Navy → Blue (Hero / Nút chính)', 'var(--grad-navy-blue)'],
  ['Blue → Cyan (Bảo mật / Biểu đồ)', 'var(--grad-blue-cyan)'],
  ['Blue → Purple AI (Phân tích tin nhắn)', 'var(--grad-blue-purple)'],
  ['Teal → Blue (Tiến độ học tập)', 'var(--grad-teal-blue)'],
];

document.getElementById('m00-gradients').innerHTML = GRADS.map(
  ([name, bg]) => `<div class="m00-grad-card" style="background:${bg}">${name}</div>`
).join('');

document.getElementById('m00-progress-slot').innerHTML = ProgressBar({ percent: 65 });
document.getElementById('m00-loading-slot').innerHTML = LoadingState();
document.getElementById('m00-alerts').innerHTML = [
  AlertCard({ level: 'safe', statusText: 'AN TOÀN', value: MOCK_SAMPLES.safePhone }),
  AlertCard({ level: 'warning', statusText: 'NGHI NGỜ', value: MOCK_SAMPLES.warningPhone }),
  AlertCard({ level: 'danger', statusText: 'NGUY HIỂM', value: MOCK_SAMPLES.scamPhone }),
].join('');

document.getElementById('m00-meteor-demo')?.prepend(createMeteorBackground({ contained: true }));
