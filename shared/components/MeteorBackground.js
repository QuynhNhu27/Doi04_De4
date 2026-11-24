/**
 * Lá Chắn Số — MeteorBackground Component (RULE.md mục 3 & 8)
 * Tạo bầu trời đêm xanh navy với:
 * - 3 lớp ánh sáng nebula xanh dương / tím / cyan
 * - 40 ngôi sao tĩnh nhấp nháy trên Desktop (20 trên Mobile)
 * - 8 vệt sao băng nghiêng 34 độ lệch pha trên Desktop (4 trên Mobile)
 * - Tự động tôn trọng [data-motion="reduced"] và prefers-reduced-motion.
 */

const STARS = [
  [5, 8, 2], [14, 16, 2.5], [23, 6, 2], [31, 22, 3], [42, 11, 2],
  [52, 18, 2.5], [64, 9, 2], [75, 14, 3], [86, 7, 2], [93, 21, 2.5],
  [8, 34, 2], [19, 42, 2.5], [35, 38, 2], [48, 31, 3], [61, 44, 2],
  [73, 36, 2.5], [84, 41, 2], [91, 52, 2.5], [11, 63, 2], [27, 71, 3],
  // Desktop extra stars (21..40)
  [39, 64, 2], [55, 59, 2.5], [68, 67, 2], [79, 62, 3], [89, 73, 2],
  [6, 84, 2.5], [18, 89, 2], [33, 82, 2.5], [46, 91, 2], [59, 85, 3],
  [71, 79, 2], [82, 88, 2.5], [95, 83, 2], [28, 15, 2], [57, 26, 2.5],
  [77, 24, 2], [15, 53, 2.5], [44, 49, 2], [66, 51, 2.5], [92, 33, 2],
];

const METEORS = [
  // top%, left%, lengthPx, durationSec, delaySec, desktopOnly
  [8, 6, 130, 3.0, 0.0, false],
  [18, 42, 155, 3.6, 1.1, false],
  [44, 12, 120, 3.2, 2.2, false],
  [62, 54, 145, 3.8, 0.6, false],
  // Desktop additional meteors
  [4, 68, 165, 2.9, 1.7, true],
  [30, 74, 140, 4.1, 2.8, true],
  [52, 30, 170, 3.5, 1.4, true],
  [72, 18, 125, 4.4, 3.1, true],
];

export function createMeteorBackground({
  contained = false,
  darkOnly = false,
  heroOptional = false,
} = {}) {
  const el = document.createElement('div');
  const classes = ['meteor-bg'];
  if (contained) classes.push('meteor-bg--contained');
  if (darkOnly) classes.push('meteor-bg--dark-only');
  if (heroOptional) classes.push('meteor-bg--hero-optional');
  el.className = classes.join(' ');
  el.setAttribute('aria-hidden', 'true');

  const starsHtml = STARS.map(([left, top, size], idx) => {
    const dur = (2.2 + (idx % 5) * 0.45).toFixed(2);
    const delay = ((idx % 7) * 0.35).toFixed(2);
    const desktopCls = idx >= 20 ? 'is-desktop-only' : '';
    return `<span class="meteor-bg__star ${desktopCls}" style="left:${left}%;top:${top}%;width:${size}px;height:${size}px;--twinkle-dur:${dur}s;--twinkle-delay:${delay}s"></span>`;
  }).join('');

  const meteorsHtml = METEORS.map(([top, left, len, dur, delay, desktopOnly]) => {
    const desktopCls = desktopOnly ? 'is-desktop-only' : '';
    return `<span class="meteor-bg__streak ${desktopCls}" style="--m-top:${top}%;--m-left:${left}%;--m-len:${len}px;--m-dur:${dur}s;--m-delay:${delay}s"></span>`;
  }).join('');

  el.innerHTML = `
    <div class="meteor-bg__nebula meteor-bg__nebula--blue"></div>
    <div class="meteor-bg__nebula meteor-bg__nebula--purple"></div>
    <div class="meteor-bg__nebula meteor-bg__nebula--cyan"></div>
    ${starsHtml}
    ${meteorsHtml}
  `;

  return el;
}
