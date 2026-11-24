/**
 * Lá Chắn Số — Shared UI Components & Consistent SVG Icon Set
 * Bao gồm: ICONS, Button, Card, Input, Badge, Modal, Toast, ProgressBar, AlertCard, EmptyState, LoadingState
 * THƯ MỤC shared/ — DO NHÓM TRƯỞNG QUẢN LÝ.
 */

export const ICONS = {
  back: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 18l-6-6 6-6"/></svg>`,
  close: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 6L6 18M6 6l12 12"/></svg>`,
  home: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 10.5L12 3l9 7.5"/><path d="M5 9.5V20h14V9.5"/></svg>`,
  search: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/></svg>`,
  book: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v17H6.5A2.5 2.5 0 0 0 4 22V5.5z"/><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/></svg>`,
  chart: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 20h16"/><rect x="6" y="11" width="3" height="9" rx="1"/><rect x="11" y="7" width="3" height="13" rx="1"/><rect x="16" y="4" width="3" height="16" rx="1"/></svg>`,
  user: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-3.5 3.6-6 8-6s8 2.5 8 6"/></svg>`,
  phone: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.34 1.78.65 2.62a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.46-1.22a2 2 0 0 1 2.11-.45c.84.31 1.72.53 2.62.65A2 2 0 0 1 22 16.92z"/></svg>`,
  shield: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3l8 3.5V12c0 5-3.4 8.8-8 10-4.6-1.2-8-5-8-10V6.5L12 3z"/><path d="M9 12l2 2 4-4"/></svg>`,
  safeCircle: `<svg viewBox="0 0 64 64" fill="none" aria-hidden="true"><circle cx="32" cy="32" r="28" stroke="currentColor" stroke-width="4"/><path d="M20 33l8 8 16-17" stroke="currentColor" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  warningTriangle: `<svg viewBox="0 0 64 64" fill="none" aria-hidden="true"><path d="M32 9L6 54h52L32 9z" stroke="currentColor" stroke-width="4" stroke-linejoin="round"/><path d="M32 25v14" stroke="currentColor" stroke-width="4.5" stroke-linecap="round"/><circle cx="32" cy="46" r="2.8" fill="currentColor"/></svg>`,
  dangerCircle: `<svg viewBox="0 0 64 64" fill="none" aria-hidden="true"><circle cx="32" cy="32" r="28" stroke="currentColor" stroke-width="4"/><path d="M22 22l20 20M42 22L22 42" stroke="currentColor" stroke-width="4.5" stroke-linecap="round"/></svg>`,
  checkSmall: `<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4.5 10.5l3.5 3.5 7.5-8"/></svg>`,
  mic: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0"/><path d="M12 18v3M8 21h8"/></svg>`,
  paste: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="8" y="4" width="8" height="4" rx="1"/><path d="M16 6h2a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2"/></svg>`,
  spark: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3l2.2 5.8L20 11l-5.8 2.2L12 19l-2.2-5.8L4 11l5.8-2.2L12 3z"/></svg>`,
  flag: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 4v17"/><path d="M5 5h12l-2 4 2 4H5"/></svg>`,
  volume: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M11 5L6 9H3v6h3l5 4V5z"/><path d="M15.5 8.5a5 5 0 0 1 0 7"/><path d="M18.5 6a8.5 8.5 0 0 1 0 12"/></svg>`,
  chevronRight: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 18l6-6-6-6"/></svg>`,
  wifiOff: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 10l44 44"/><path d="M22 36a14 14 0 0 1 18-1.5"/><path d="M12 26a28 28 0 0 1 38-1"/><circle cx="32" cy="48" r="3" fill="currentColor"/></svg>`,
  image: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="8.5" cy="9.5" r="1.5"/><path d="M21 15l-5-5-6 6-3-3-4 4"/></svg>`,
  elderly: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="7" r="3.5"/><path d="M6 21v-3a6 6 0 0 1 12 0v3"/></svg>`,
  sun: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>`,
  moon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`,
  link: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>`,
  briefcase: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>`,
  gift: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="8" width="18" height="4" rx="1"/><path d="M12 8v13"/><path d="M5 12v9h14v-9"/><path d="M12 8a2.5 2.5 0 1 1 0-5c2 0 3 2 3 5H9c0-3 1-5 3-5"/></svg>`,
  bank: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 10l9-6 9 6"/><path d="M5 10v8M10 10v8M14 10v8M19 10v8"/><path d="M3 20h18"/></svg>`,
  bolt: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z"/></svg>`,
  bag: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 8h12l1 12H5L6 8z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/></svg>`,
  emptyBox: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="10" y="16" width="44" height="36" rx="8"/><path d="M10 30h44"/><path d="M24 41h16"/></svg>`,
  badgeStar: `<svg viewBox="0 0 40 40" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 5l4.4 9 9.9 1.4-7.2 7 1.7 9.8L20 27.6l-8.8 4.6 1.7-9.8-7.2-7 9.9-1.4L20 5z"/></svg>`,
  mapPin: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 21s-6-5.2-6-10a6 6 0 1 1 12 0c0 4.8-6 10-6 10z"/><circle cx="12" cy="11" r="2.2"/></svg>`,
};

export function Button({ label, variant = 'primary', full = false, icon = '', attrs = '' }) {
  return `<button type="button" class="btn btn--${variant} ${full ? 'btn--full' : ''}" ${attrs}>${
    icon ? ICONS[icon] || '' : ''
  }<span>${label}</span></button>`;
}

export function Card({ content, className = '' }) {
  return `<section class="card ${className}">${content}</section>`;
}

export function Input({ id, type = 'text', placeholder = '', value = '', className = '' }) {
  return `<input id="${id}" type="${type}" class="input ${className}" placeholder="${placeholder}" value="${value}">`;
}

export function Badge({ label, tone = 'soft-blue' }) {
  return `<span class="badge badge--${tone}">${label}</span>`;
}

export function ProgressBar({ percent = 0, onDark = false }) {
  return `
    <div class="progress-track ${onDark ? 'progress-track--on-dark' : ''}">
      <div class="progress-fill ${onDark ? 'progress-fill--white' : ''}" style="width:${Math.max(0, Math.min(100, percent))}%"></div>
    </div>
  `;
}

export function AlertCard({ level = 'danger', statusText = 'NGUY HIỂM', value = '' }) {
  const iconMap = {
    safe: ICONS.safeCircle,
    warning: ICONS.warningTriangle,
    danger: ICONS.dangerCircle,
  };
  return `
    <section class="alert-card alert-card--${level}" aria-label="Kết quả kiểm tra">
      <div class="alert-card__icon">${iconMap[level] || ICONS.dangerCircle}</div>
      <div class="alert-card__status">${statusText}</div>
      <div class="alert-card__value">${value}</div>
    </section>
  `;
}

export function renderReasonCard({ reasons = [], reminder = '' }) {
  const items = reasons
    .map(
      (r) =>
        `<li style="display:flex;gap:10px;align-items:flex-start"><span style="color:var(--brand-blue);font-weight:600">•</span><span class="text-body">${r}</span></li>`
    )
    .join('');
  return `
    <section class="card" style="display:flex;flex-direction:column;gap:12px" aria-label="Lý do đánh giá">
      <span class="badge badge--soft-blue" style="align-self:flex-start">Vì sao hệ thống báo như vậy?</span>
      <ul style="display:flex;flex-direction:column;gap:10px">${items}</ul>
      <p class="text-sub" style="padding-top:8px;border-top:1px solid var(--color-border)">${reminder}</p>
    </section>
  `;
}

export function EmptyState({ icon = 'emptyBox', title, description, actionHtml = '' }) {
  return `
    <section class="card empty-state">
      <div class="empty-state__icon" aria-hidden="true">${ICONS[icon] || ICONS.emptyBox}</div>
      <h2 class="text-title">${title}</h2>
      <p class="text-sub">${description}</p>
      ${actionHtml}
    </section>
  `;
}

export function LoadingState({ label = 'Đang kiểm tra dữ liệu mẫu...' } = {}) {
  return `
    <div class="loading-state" role="status" aria-live="polite">
      <span class="loading-spinner" aria-hidden="true"></span>
      <span class="text-sub-medium">${label}</span>
    </div>
  `;
}

export function showToast(message, durationMs = 2800) {
  let toast = document.querySelector('.toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast';
    toast.setAttribute('role', 'status');
    toast.setAttribute('aria-live', 'polite');
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add('is-visible');
  window.clearTimeout(toast._timer);
  toast._timer = window.setTimeout(() => toast.classList.remove('is-visible'), durationMs);
}

export function showModal({ title, bodyHtml, confirmText = 'Đóng' }) {
  document.querySelector('.modal-backdrop')?.remove();
  const backdrop = document.createElement('div');
  backdrop.className = 'modal-backdrop';
  backdrop.innerHTML = `
    <div class="modal-card" role="dialog" aria-modal="true" aria-label="${title}">
      <div style="display:flex;align-items:center;justify-content:space-between;gap:12px">
        <h2 class="text-card-title">${title}</h2>
        <button type="button" class="app-header__back" data-close-modal aria-label="Đóng">${ICONS.close}</button>
      </div>
      <div class="modal-body">${bodyHtml}</div>
      <button type="button" class="btn btn--primary btn--full" data-close-modal>${confirmText}</button>
    </div>
  `;
  backdrop.querySelectorAll('[data-close-modal]').forEach((b) =>
    b.addEventListener('click', () => backdrop.remove())
  );
  backdrop.addEventListener('click', (e) => {
    if (e.target === backdrop) backdrop.remove();
  });
  document.body.appendChild(backdrop);
}

export function simulateSpeak(text) {
  showToast(`Đang đọc (mô phỏng giọng nói): "${text}"`, 3200);
}
