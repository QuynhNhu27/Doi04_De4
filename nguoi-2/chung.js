/* Dùng chung cho các màn của Người 2 */
import { ICONS, simulateSpeak } from '../shared/components/ui.js';
import { resolveRoute } from '../shared/scripts/navigation.js';
import { getState } from '../shared/scripts/store.js';

const giamChuyenDong = () =>
  document.documentElement.getAttribute('data-motion') === 'reduced' ||
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------- Icon cho nút ---------- */
export function ganIcon(id, ten) {
  const el = document.getElementById(id);
  if (!el || !ICONS[ten]) return;
  const chu = el.textContent.trim();
  const vach = ten === 'volume' ? '<span class="n2-vach" aria-hidden="true"><i></i><i></i><i></i><i></i></span>' : '';
  const lop = ten === 'volume' ? ' n2-ic-loa' : '';
  el.innerHTML = `<span class="${lop.trim()}" style="width:22px;height:22px;display:inline-flex">${ICONS[ten]}</span>${vach}<span>${chu}</span>`;
}

/* ---------- Nhãn kết quả từ AI ---------- */
export function nhanAI(idKhung) {
  const params = new URLSearchParams(window.location.search);
  if (params.get('source') !== 'ai') return;
  const khung = document.getElementById(idKhung);
  if (!khung) return;
  khung.insertAdjacentHTML('afterbegin', `
    <div class="card--soft-purple" style="display:flex;gap:12px;align-items:center;margin-bottom:16px">
      <span style="width:24px;height:24px;display:inline-flex;color:var(--brand-purple)">${ICONS.spark}</span>
      <p class="text-sub"><strong>Kết quả từ AI phân tích tin nhắn</strong> (mô phỏng ở vòng sơ loại)</p>
    </div>`);
}

/* ---------- Hiệu ứng khi mở trang ---------- */
let moCua;
const daVaoTrang = new Promise((r) => (moCua = r));

const TEN_TRANG = {
  M04_KiemTra_SoDienThoai: 'Kiểm tra nhanh',
  M04_KiemTra_DanTinNhan: 'AI soi tin nhắn',
  M05_KetQua_AnToan: 'Kết quả an toàn',
  M05_KetQua_NghiNgo: 'Kết quả nghi ngờ',
  M05_KetQua_NguyHiem: 'Kết quả nguy hiểm',
  M05_KetQua_NguyHiem_Toi: 'Kết quả nguy hiểm',
  E04_KiemTra_NhapSai: 'Kiểm tra lại số',
  E05_KetQua_ChuaCoDuLieu: 'Chưa có dữ liệu',
};
const MAU_CUA = {
  M05_KetQua_AnToan: '#34D399',
  M05_KetQua_NghiNgo: '#FBBF24',
  E05_KetQua_ChuaCoDuLieu: '#FBBF24',
  M05_KetQua_NguyHiem: '#F87171',
  M05_KetQua_NguyHiem_Toi: '#F87171',
  E04_KiemTra_NhapSai: '#CBD5E1',
};

function thuMucTrang() {
  const p = location.pathname.split('/');
  return p[p.length - 2] || '';
}

function veCua(x, chinh, mau) {
  if (!chinh) {
    return `
      <g class="n2-cua-phu">
        <rect x="${x - 6}" y="144" width="122" height="212" rx="8" fill="#0A2540"/>
        <rect x="${x}" y="150" width="110" height="206" rx="6" fill="#123A63"/>
        <rect x="${x + 30}" y="168" width="50" height="34" rx="4" fill="#1C4E80"/>
        <circle cx="${x + 92}" cy="262" r="5" fill="#7DD3FC"/>
        <circle cx="${x + 55}" cy="110" r="5" fill="#7DD3FC" opacity=".5"/>
      </g>`;
  }
  return `
    <g class="n2-cua-chinh">
      <ellipse cx="${x + 55}" cy="360" rx="120" ry="14" fill="${mau}" opacity=".18" class="n2-hl__sang"/>
      <rect x="${x - 6}" y="144" width="122" height="212" rx="8" fill="#0A2540" stroke="${mau}" stroke-width="3"/>
      <rect x="${x}" y="150" width="110" height="206" rx="6" fill="${mau}" opacity=".9"/>
      <rect x="${x}" y="150" width="110" height="206" rx="6" fill="#fff" opacity=".35"/>
      <g class="n2-canh">
        <rect x="${x}" y="150" width="110" height="206" rx="6" fill="#1D5A94"/>
        <rect x="${x + 30}" y="168" width="50" height="34" rx="4" fill="${mau}" opacity=".7"/>
        <circle cx="${x + 92}" cy="262" r="6" fill="#fff"/>
      </g>
      <circle cx="${x + 55}" cy="110" r="7" fill="${mau}"/>
      <circle cx="${x + 55}" cy="110" r="16" fill="${mau}" opacity=".25"/>
    </g>`;
}

function hanhLang() {
  const thuMuc = thuMucTrang();
  const mau = MAU_CUA[thuMuc] || '#38BDF8';
  const ten = TEN_TRANG[thuMuc] || 'Lá Chắn Số';
  const hep = window.innerWidth < 640;
  const lop = document.createElement('div');
  lop.className = 'n2-hl';
  lop.setAttribute('aria-hidden', 'true');
  lop.innerHTML = `
    <svg class="n2-hl__svg" viewBox="${hep ? '190 40 520 380' : '0 0 900 420'}" preserveAspectRatio="xMidYMid meet">
      <rect x="-1200" y="-1200" width="3300" height="1556" fill="url(#n2-tuong)"/>
      <rect x="-1200" y="356" width="3300" height="1200" fill="#061A30"/>
      <rect x="-1200" y="356" width="3300" height="4" fill="#1C4E80"/>
      <defs>
        <linearGradient id="n2-tuong" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#03142B"/><stop offset="1" stop-color="#0A2A4D"/>
        </linearGradient>
      </defs>
      ${[60, 230, 400, 570, 740].map((x, i) => veCua(x, i === 2, mau)).join('')}
      <text x="455" y="80" text-anchor="middle" class="n2-hl__ten" fill="#fff">${ten}</text>
      <g class="n2-nguoi" stroke="#E6F1FB" stroke-width="5" stroke-linecap="round" fill="none">
        <circle cx="0" cy="-92" r="13" fill="#E6F1FB" stroke="none"/>
        <line x1="0" y1="-78" x2="0" y2="-36"/>
        <line class="n2-tay tr" x1="0" y1="-70" x2="0" y2="-44"/>
        <line class="n2-tay ph" x1="0" y1="-70" x2="0" y2="-44"/>
        <line class="n2-chan tr" x1="0" y1="-36" x2="0" y2="0"/>
        <line class="n2-chan ph" x1="0" y1="-36" x2="0" y2="0"/>
      </g>
    </svg>`;
  document.body.appendChild(lop);
  setTimeout(() => { lop.classList.add('xong'); moCua(); }, 1250);
  setTimeout(() => {
    lop.remove();
    document.documentElement.classList.remove('n2-hl-sap');
    batBayVao();
  }, 1700);
}

/* Các khối bay vào khi lướt tới */
const CHON_BAY = '.card, [class*="card--soft"], .grid-actions-2, .tab-group';
function chuanBiBayVao() {
  const main = document.querySelector('.page-container');
  if (!main) return [];
  const ds = [...main.querySelectorAll(CHON_BAY)].filter(
    (el) => !el.closest('.n2-pop') && !el.querySelector('.alert-card') && !el.parentElement.closest(CHON_BAY)
  );
  const hep = window.innerWidth < 768;
  ds.forEach((el) => {
    const r = el.getBoundingClientRect();
    const huong = hep ? 'duoi' : r.left + r.width / 2 < window.innerWidth / 2 + 60 ? 'trai' : 'phai';
    el.classList.add('n2-bay', 'n2-bay--' + huong);
  });
  return ds;
}
let dsBay = [];
function batBayVao() {
  if (!dsBay.length) return;
  let thu = 0;
  const xem = new IntersectionObserver((muc) => {
    muc.forEach((m) => {
      if (!m.isIntersecting) return;
      m.target.style.transitionDelay = `${Math.min(thu, 6) * 120}ms`;
      thu++;
      m.target.classList.add('n2-bay--vao');
      xem.unobserve(m.target);
      setTimeout(() => {
        m.target.style.transitionDelay = '';
        m.target.classList.remove('n2-bay', 'n2-bay--trai', 'n2-bay--phai', 'n2-bay--duoi', 'n2-bay--vao');
      }, 1900);
    });
    requestAnimationFrame(() => (thu = 0));
  }, { threshold: 0.12 });
  dsBay.forEach((el) => xem.observe(el));
}

/* Nút dẫn tới trang chưa có thì ẩn đi */
async function coTrang(url) {
  const sach = url.split('?')[0].split('#')[0];
  const khoa = 'n2-trang:' + sach;
  try {
    const nho = sessionStorage.getItem(khoa);
    if (nho !== null) return nho === '1';
  } catch (e) {}
  let co = true;
  try {
    const r = await fetch(sach, { cache: 'no-store' });
    const thuMuc = sach.split('/').slice(-2)[0];
    co = r.ok && (await r.text()).includes(thuMuc);
  } catch (e) {
    co = true;
  }
  try { sessionStorage.setItem(khoa, co ? '1' : '0'); } catch (e) {}
  return co;
}

function anNutChuaNoi() {
  const coNguoiThan = (getState().relatives || []).length > 0;
  document.querySelectorAll('[id$="-report"]').forEach((b) => { if (!b.dataset.n2Den) b.dataset.n2Den = 'M08a'; });
  document.querySelectorAll('[id$="-primary"]').forEach((b) => { if (!b.dataset.n2Den) b.dataset.n2Den = coNguoiThan ? 'M06a' : 'M07'; });

  const ds = [...document.querySelectorAll('a[href], [data-nav], [data-n2-den]')].filter((el) => !el.hasAttribute('data-n2-giu'));
  ds.forEach((el) => {
    const dich = el.dataset.n2Den ? resolveRoute(el.dataset.n2Den)
      : el.dataset.nav ? resolveRoute(el.dataset.nav)
      : el.getAttribute('href');
    if (!dich || dich.startsWith('#')) return;
    const url = new URL(dich, location.href);
    if (url.origin !== location.origin || !url.pathname.endsWith('.html')) return;
    el.classList.add('n2-dang-kiem');
    coTrang(url.href).then((co) => {
      el.classList.remove('n2-dang-kiem');
      if (co) return;
      if (el.matches('.sidebar-brand, .sidebar-user, .app-header .badge')) {
        el.removeAttribute('href');
        el.style.cursor = 'default';
        return;
      }
      el.style.display = 'none';
      const cha = el.parentElement;
      const conLai = cha ? [...cha.children].filter((c) => c.style.display !== 'none') : [];
      if (conLai.length === 1) conLai[0].style.gridColumn = '1 / -1';
    });
  });
}


/* ---------- Phần dưới menu bên trái ---------- */
function doiChuNen(nut) {
  const chu = nut.querySelector('span');
  if (!chu) return;
  if (chu.textContent === 'Chế độ sáng') chu.textContent = 'Chuyển nền sáng';
  if (chu.textContent === 'Chế độ tối') chu.textContent = 'Chuyển nền tối';
}

function lamMenu() {
  const nav = document.querySelector('.sidebar-nav');
  if (nav && !nav.querySelector('.n2-menu-nhan')) {
    nav.insertAdjacentHTML('afterbegin', '<p class="n2-menu-nhan">Chức năng chính</p>');
  }
  const chan = document.querySelector('.sidebar-footer');
  if (!chan) return;
  const nutNen = chan.querySelector('.theme-switcher');
  if (nutNen) {
    doiChuNen(nutNen);
    nutNen.addEventListener('click', () => setTimeout(() => doiChuNen(nutNen), 0));
    window.addEventListener('lcs:preferences-changed', () => setTimeout(() => doiChuNen(nutNen), 0));
  }
  if (!chan.querySelector('.n2-ve-chung')) {
    const goc = resolveRoute('INDEX');
    chan.insertAdjacentHTML('beforeend', `<a class="n2-ve-chung" href="${goc}" data-n2-giu>${ICONS.home || ''}<span>Về trang chủ chung</span></a>`);
  }
}

/* ---------- Thẻ tóm tắt dưới kết quả ---------- */
const TEN_LOAI = { phone: 'Số điện thoại', link: 'Đường dẫn', account: 'Số tài khoản', email: 'Email' };
const NHAN_MUC = { danger: 'badge--danger', warning: 'badge--warning', safe: 'badge--safe' };

export function theTomTat(idThe, data, muc) {
  const the = document.getElementById(idThe);
  const cot = the && the.parentElement;
  if (!cot) return;
  const params = new URLSearchParams(window.location.search);
  const laAI = params.get('source') === 'ai';
  const loai = TEN_LOAI[params.get('loai')] ? params.get('loai') : 'phone';
  const bayGio = new Date();
  const gio = `${String(bayGio.getHours()).padStart(2, '0')}:${String(bayGio.getMinutes()).padStart(2, '0')} · ${bayGio.toLocaleDateString('vi-VN')}`;
  const linkLai = laAI ? '../M04_KiemTra_DanTinNhan/index.html' : `../M04_KiemTra_SoDienThoai/index.html?tab=${loai}`;

  const khung = document.createElement('div');
  khung.className = 'n2-tom-tat-khung';
  khung.innerHTML = `
    <section class="card n2-tom-tat">
      <h3 class="text-card-title">Thông tin đã kiểm tra</h3>
      <dl class="n2-dong">
        <div><dt>Loại</dt><dd data-o="loai"></dd></div>
        <div><dt>Nội dung</dt><dd data-o="gt"></dd></div>
        <div><dt>Lúc kiểm tra</dt><dd data-o="gio"></dd></div>
        <div><dt>Mức cảnh báo</dt><dd><span class="badge ${NHAN_MUC[muc] || ''}" data-o="muc"></span></dd></div>
      </dl>
      <a class="btn btn--secondary btn--full" href="${linkLai}" data-n2-giu>${ICONS.search || ''}<span>Kiểm tra cái khác</span></a>
    </section>
    <section class="card--soft-blue n2-nho">
      <p class="text-sub-medium">3 điều luôn nhớ</p>
      <ul>
        <li>Không chuyển tiền cho người lạ, kể cả xưng công an</li>
        <li>Không đọc mã OTP hay mật khẩu cho ai</li>
        <li>Nghi ngờ thì gọi 156 hoặc hỏi con cháu</li>
      </ul>
    </section>`;
  khung.querySelector('[data-o="loai"]').textContent = laAI ? 'Tin nhắn (AI soi)' : TEN_LOAI[loai];
  khung.querySelector('[data-o="gt"]').textContent = data.value || '';
  khung.querySelector('[data-o="gio"]').textContent = gio;
  khung.querySelector('[data-o="muc"]').textContent = data.statusText || '';
  cot.appendChild(khung);
}

export function hieuUngVao() {
  lamMenu();
  window.addEventListener('pageshow', (e) => {
    if (e.persisted) document.querySelectorAll('.n2-cho, .n2-hl').forEach((x) => x.remove());
  });
  anNutChuaNoi();
  /* Bấm menu thì đánh dấu để trang sau chạy hành lang */
  document.addEventListener('click', (e) => {
    if (e.target.closest('.sidebar-nav__item, .mobile-bottom-nav__item, .sidebar-brand, .sidebar-user')) {
      try { sessionStorage.setItem('n2-qua-menu', '1'); } catch (loi) {}
    }
  }, true);
  const quaMenu = document.documentElement.classList.contains('n2-hl-sap');
  if (giamChuyenDong()) {
    document.documentElement.classList.remove('n2-hl-sap');
    moCua();
  } else if (quaMenu) {
    dsBay = chuanBiBayVao();
    hanhLang();
  } else {
    moCua();
    dsBay = chuanBiBayVao();
    setTimeout(batBayVao, 260);
  }
  requestAnimationFrame(() => document.documentElement.classList.remove('n2-an'));
}

/* ---------- Thẻ kết quả bật lên + vòng sóng ---------- */
export function hieuUngKetQua(idThe, muc) {
  const the = document.getElementById(idThe);
  if (!the) return;
  the.classList.add('n2-cho-pop');
  daVaoTrang.then(() => {
    the.classList.remove('n2-cho-pop');
    the.classList.add('n2-pop');
    if (muc === 'danger') {
      const icon = the.querySelector('.alert-card__icon');
      if (icon) icon.insertAdjacentHTML('beforeend', '<span class="n2-song"></span><span class="n2-song thu-hai"></span>');
    }
  });
}

/* ---------- Đọc to bằng giọng tiếng Việt ---------- */
let dangDoc = null;
export function docTo(nut, noiDung) {
  const btn = typeof nut === 'string' ? document.getElementById(nut) : nut;
  const synth = window.speechSynthesis;
  if (!synth || typeof SpeechSynthesisUtterance === 'undefined') {
    simulateSpeak(noiDung);
    return;
  }
  if (dangDoc === btn) {
    synth.cancel();
    btn?.classList.remove('is-speaking');
    dangDoc = null;
    return;
  }
  synth.cancel();
  const u = new SpeechSynthesisUtterance(noiDung);
  u.lang = 'vi-VN';
  u.rate = 0.9;
  const giong = synth.getVoices().find((v) => v.lang && v.lang.toLowerCase().startsWith('vi'));
  if (giong) u.voice = giong;
  else simulateSpeak(noiDung);
  const tat = () => { btn?.classList.remove('is-speaking'); dangDoc = null; };
  u.onend = tat;
  u.onerror = tat;
  btn?.classList.add('is-speaking');
  dangDoc = btn;
  synth.speak(u);
  setTimeout(() => { if (dangDoc === btn && !synth.speaking) tat(); }, 1500);
}

/* ---------- Lớp phủ đang kiểm tra / AI đang phân tích ---------- */
export function choXuLy({ ai = false, buoc = [] } = {}) {
  return new Promise((xong) => {
    if (giamChuyenDong()) { xong(); return; }
    const icon = ai ? ICONS.spark : ICONS.shield;
    const tieuDe = ai ? 'AI đang đọc tin nhắn...' : 'Đang kiểm tra...';
    const lop = document.createElement('div');
    lop.className = 'n2-cho';
    lop.setAttribute('role', 'status');
    lop.innerHTML = `
      <div class="n2-cho__hop">
        <div class="n2-quet${ai ? ' ai' : ''}">${icon}</div>
        <p class="text-title" style="font-size:22px;font-weight:600">${tieuDe}</p>
        <ul class="n2-buoc">${buoc.map((b) => `<li><span class="dau">✓</span><span>${b}</span></li>`).join('')}</ul>
      </div>`;
    document.body.appendChild(lop);
    const ds = lop.querySelectorAll('.n2-buoc li');
    let i = 0;
    const tiep = () => {
      if (i > 0) { ds[i - 1].classList.remove('dang'); ds[i - 1].classList.add('xong'); }
      if (i < ds.length) { ds[i].classList.add('dang'); i++; setTimeout(tiep, 420); }
      else setTimeout(xong, 260);
    };
    tiep();
  });
}

/* ---------- Rung ô nhập sai ---------- */
export function rung(id) {
  const el = document.getElementById(id);
  if (!el || giamChuyenDong()) return;
  el.classList.remove('n2-rung');
  void el.offsetWidth;
  el.classList.add('n2-rung');
}

export const TRANG_THAI = { M05a: 'AN TOÀN', M05b: 'NGHI NGỜ', M05c: 'NGUY HIỂM', E05: 'NGHI NGỜ' };

export const BUOC_KIEM_TRA = {
  phone: ['Đọc số điện thoại', 'Tìm trong dữ liệu báo cáo', 'Đối chiếu danh sách an toàn'],
  link: ['Đọc đường dẫn', 'Kiểm tra tên miền', 'Tìm trong dữ liệu báo cáo'],
  account: ['Đọc số tài khoản', 'Tìm trong dữ liệu báo cáo', 'Đối chiếu danh sách an toàn'],
  email: ['Đọc địa chỉ email', 'Kiểm tra tên miền người gửi', 'Tìm trong dữ liệu báo cáo'],
};
