/**
 * Lá Chắn Số — Shared StatsDashboard Component (dùng chung cho M12a, M12b, M12a_Toi)
 * Tránh lặp logic giữa bản di động, bản máy tính và bản chế độ tối.
 */

import { MOCK_STATS } from '../scripts/mock-data.js';
import { goTo } from '../scripts/navigation.js';
import { showModal } from './ui.js';

export function mountStatsDashboard(rootEl, { darkNotice = false } = {}) {
  if (!rootEl) return;

  const kpiHtml = MOCK_STATS.summary
    .map(
      (item) => `
        <article class="card stats-kpi-card stats-kpi-card--${item.tone}">
          <span class="stats-kpi-val">${item.value}</span>
          <span class="text-sub-medium">${item.label}</span>
          <span class="text-sub" style="font-size:13px">${item.delta}</span>
        </article>
      `
    )
    .join('');

  const barsHtml = MOCK_STATS.chart
    .map(
      (bar) => `
        <div class="stats-bar-col">
          <span class="text-sub-medium">${bar.count}</span>
          <div class="stats-bar-track">
            <div class="stats-bar-rect anim-bar-grow" style="height:${bar.heightPx}px"></div>
          </div>
          <span class="stats-bar-label">${bar.label}</span>
          <span class="text-sub" style="font-size:12px">${bar.percent}%</span>
        </div>
      `
    )
    .join('');

  rootEl.innerHTML = `
    <section class="stats-toolbar">
      <div class="stats-filter-group">
        <button type="button" class="badge badge--soft-blue stats-pill" data-stats-ward>${MOCK_STATS.ward}</button>
        <button type="button" class="badge stats-pill" data-stats-month>${MOCK_STATS.month}</button>
      </div>
      <div class="stats-toolbar-actions">
        <button type="button" class="btn btn--secondary btn--inline" data-stats-empty>Xem tháng trống (E12)</button>
        <button type="button" class="btn btn--primary btn--inline" data-stats-export>Xuất báo cáo tháng</button>
      </div>
    </section>

    <section class="grid-3" aria-label="Chỉ số tổng quan">${kpiHtml}</section>

    <section class="grid-split-8-4">
      <article class="card stats-chart-card">
        <div style="display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap">
          <div>
            <h2 class="text-card-title">Phân bố các hình thức lừa đảo</h2>
            <p class="text-sub">Tổng hợp 120 báo cáo mẫu tại ${MOCK_STATS.ward} · ${MOCK_STATS.month}</p>
          </div>
          <span class="badge badge--soft-blue">Biểu đồ cột</span>
        </div>
        <div class="stats-bars-grid">${barsHtml}</div>
      </article>

      <aside class="card--soft-warning stats-alert-card" aria-label="Cảnh báo kiểu lừa đảo mới">
        <span class="badge badge--warning" style="align-self:flex-start">${MOCK_STATS.emergingAlert.title}</span>
        <h2 class="text-card-title" style="color:var(--color-text)">Giả danh nhân viên điện lực</h2>
        <p class="text-body" style="font-size:17px">${MOCK_STATS.emergingAlert.body}</p>
        <p class="text-sub">${MOCK_STATS.emergingAlert.actionNote}</p>
        ${darkNotice ? '<p class="text-sub" style="font-size:13px">Chế độ tối Nhóm B tích hợp nền sao băng toàn màn hình.</p>' : ''}
      </aside>
    </section>
  `;

  rootEl.querySelector('[data-stats-ward]')?.addEventListener('click', () => {
    showModal({
      title: 'Bộ lọc địa bàn (mô phỏng)',
      bodyHtml: `<p class="text-sub">Đang hiển thị số liệu mẫu của <strong>${MOCK_STATS.ward}</strong>. Khi triển khai thật ở vòng chung kết, tình nguyện viên có thể chuyển giữa các xã/phường trong tỉnh Đồng Nai.</p>`,
    });
  });

  rootEl.querySelector('[data-stats-month]')?.addEventListener('click', () => goTo('E12'));
  rootEl.querySelector('[data-stats-empty]')?.addEventListener('click', () => goTo('E12'));
  rootEl.querySelector('[data-stats-export]')?.addEventListener('click', () => {
    showModal({
      title: 'Xuất báo cáo tháng (mô phỏng)',
      bodyHtml: `<p class="text-sub">Đã tạo bản tổng hợp mẫu <strong>${MOCK_STATS.ward} — ${MOCK_STATS.month}</strong> (120 báo cáo, 35% đường dẫn giả, 42 đã xử lý). Xuất tệp PDF/CSV thật sẽ hoàn thiện trong vòng chung kết 24 giờ.</p>`,
    });
  });
}
