import { initAppLayout } from '../../shared/layouts/AppLayout.js';
import { ICONS, showToast } from '../../shared/components/ui.js';
import { goTo } from '../../shared/scripts/navigation.js';
import { updateState } from '../../shared/scripts/store.js';
import { TRANG_THAI, BUOC_KIEM_TRA, choXuLy, hieuUngVao, ganIcon, rung } from '../chung.js';
import { kiemTra } from '../kiem-tra.js';

initAppLayout({
  screenId: 'M04a',
  group: 'A',
  title: 'Kiểm tra nhanh',
  breadcrumb: 'Lá Chắn Số / Kiểm tra nhanh',
  activeNav: 'check',
  mobileNav: 'check',
  backTo: 'M03',
  showFab: true,
});

document.getElementById('m04a-icon-paste').innerHTML = ICONS.paste;
document.getElementById('m04a-icon-mic').innerHTML = ICONS.mic;
document.getElementById('m04a-icon-spark').innerHTML = ICONS.spark;

const TABS = {
  phone: {
    placeholder: 'Nhập hoặc dán số điện thoại',
    kieuNhap: 'tel',
    mau: ['0912 345 678', '1900 545 413', '0987 654 321', '0901 222 333'],
  },
  link: {
    placeholder: 'Nhập hoặc dán đường dẫn',
    kieuNhap: 'url',
    mau: ['quatang-trian.top', 'dichvucong.gov.vn', 'tinhot24h.xyz', 'baomoi.com'],
  },
  account: {
    placeholder: 'Nhập hoặc dán số tài khoản',
    kieuNhap: 'numeric',
    mau: ['1903 6688 4421', '0071 0004 56789'],
  },
  email: {
    placeholder: 'Nhập hoặc dán địa chỉ email',
    kieuNhap: 'email',
    mau: ['congan.hotro@gmail.com', 'hotro@dichvucong.gov.vn', 'cskh.vietcombank@gmail.com', 'ban.lan@gmail.com'],
  },
};

const NHAN = {
  M05c: '<span class="badge badge--danger">NGUY HIỂM</span>',
  M05a: '<span class="badge badge--safe">AN TOÀN</span>',
  M05b: '<span class="badge badge--warning">NGHI NGỜ</span>',
  E05: '<span class="badge">Chưa có dữ liệu</span>',
};

let activeTab = 'phone';
const input = document.getElementById('m04a-input');
const loi = document.getElementById('m04a-err');
const khungMau = document.getElementById('m04a-samples');
const tabBtns = document.querySelectorAll('[data-tab]');

function baoLoi(chu) {
  if (!loi) return;
  loi.textContent = chu || '';
  loi.classList.toggle('is-hidden', !chu);
  input?.classList.toggle('input--error', !!chu);
  input?.setAttribute('aria-invalid', chu ? 'true' : 'false');
}

function veMau() {
  if (!khungMau) return;
  khungMau.innerHTML = TABS[activeTab].mau
    .map((m) => `<button type="button" class="m04a-sample-btn" data-sample="${m}"><span>${m}</span>${NHAN[kiemTra(activeTab, m).ma] || ''}</button>`)
    .join('');
  khungMau.querySelectorAll('[data-sample]').forEach((btn) =>
    btn.addEventListener('click', () => {
      input.value = btn.getAttribute('data-sample');
      baoLoi('');
      input.focus();
    })
  );
}

function setTab(key) {
  activeTab = TABS[key] ? key : 'phone';
  tabBtns.forEach((b) => {
    const match = b.getAttribute('data-tab') === activeTab;
    b.classList.toggle('is-active', match);
    b.setAttribute('aria-selected', String(match));
  });
  if (input) {
    input.placeholder = TABS[activeTab].placeholder;
    input.setAttribute('inputmode', TABS[activeTab].kieuNhap);
  }
  baoLoi('');
  veMau();
}

tabBtns.forEach((b) =>
  b.addEventListener('click', () => {
    if (b.getAttribute('data-tab') !== activeTab && input) input.value = '';
    setTab(b.getAttribute('data-tab'));
  })
);

const params = new URLSearchParams(window.location.search);
setTab(params.get('tab') || 'phone');
if (params.get('value') && input) {
  input.value = params.get('value');
  if (params.get('source') === 'voice') showToast('Đã nhận số điện thoại bằng giọng nói (mô phỏng)');
}

input?.addEventListener('input', () => baoLoi(''));
input?.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') document.getElementById('m04a-check-btn')?.click();
});

document.getElementById('m04a-paste-btn')?.addEventListener('click', async () => {
  let chu = '';
  try {
    chu = (await navigator.clipboard.readText()).trim();
  } catch (e) {
    chu = '';
  }
  if (chu) {
    input.value = chu;
    showToast('Đã dán từ bộ nhớ tạm');
  } else {
    input.value = TABS[activeTab].mau[0];
    showToast('Chưa có gì để dán, đã điền dữ liệu mẫu');
  }
  baoLoi('');
});

let dangKiem = false;
document.getElementById('m04a-check-btn')?.addEventListener('click', async () => {
  if (dangKiem) return;
  const raw = input ? input.value.trim() : '';
  const kq = kiemTra(activeTab, raw);

  if (kq.loi) {
    baoLoi(kq.loi);
    rung('m04a-input');
    input?.focus();
    return;
  }
  if (kq.ma === 'E04') return goTo('E04', { value: raw });

  dangKiem = true;
  updateState({ lastCheckedValue: kq.giaTri, lastCheckedStatus: TRANG_THAI[kq.ma] });
  await choXuLy({ buoc: BUOC_KIEM_TRA[activeTab] });
  const thamSo = { value: kq.giaTri, loai: activeTab };
  if (kq.lyDo) thamSo.reasons = kq.lyDo.join('|');
  goTo(kq.ma, thamSo);
});

window.addEventListener('pageshow', () => { dangKiem = false; });

ganIcon('m04a-check-btn', 'search');
hieuUngVao();
