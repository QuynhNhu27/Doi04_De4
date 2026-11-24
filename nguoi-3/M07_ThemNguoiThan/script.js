import { initAppLayout } from '../../shared/layouts/AppLayout.js';
import { goTo } from '../../shared/scripts/navigation.js';
import { getState, updateState } from '../../shared/scripts/store.js';

const editId = new URLSearchParams(window.location.search).get('edit');

initAppLayout({
  screenId: 'M07',
  group: 'A',
  title: editId ? 'Sửa người thân' : 'Thêm người thân',
  breadcrumb: 'Lá Chắn Số / Hỏi người thân / Thông tin người thân',
  activeNav: 'relatives',
  mobileNav: 'profile',
  backTo: 'M06a',
  showFab: false,
});

const nameEl = document.getElementById('m07-name');
const phoneEl = document.getElementById('m07-phone');
const delBtn = document.getElementById('m07-delete');
const relBtns = document.querySelectorAll('[data-rel]');
let selectedRel = 'Con trai';

function setRel(val) {
  selectedRel = val;
  relBtns.forEach((b) => b.classList.toggle('is-active', b.getAttribute('data-rel') === val));
}

relBtns.forEach((b) => b.addEventListener('click', () => setRel(b.getAttribute('data-rel'))));

if (editId) {
  const found = getState().relatives.find((r) => r.id === editId);
  if (found) {
    nameEl.value = found.name;
    phoneEl.value = found.phone;
    setRel(found.relation || 'Con trai');
  }
  delBtn?.classList.remove('is-hidden');
}

document.getElementById('m07-form')?.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = (nameEl?.value || '').trim() || 'Cháu Minh';
  const phone = (phoneEl?.value || '').trim() || '0938 555 666';
  const list = getState().relatives;
  const next = editId
    ? list.map((r) => (r.id === editId ? { ...r, name, phone, relation: selectedRel, avatarLetter: name[0].toUpperCase() } : r))
    : [...list, { id: `rel-${Date.now()}`, isMock: true, name, phone, relation: selectedRel, avatarLetter: name[0].toUpperCase() }];
  updateState({ relatives: next });
  goTo('M06a');
});

delBtn?.addEventListener('click', () => {
  const next = getState().relatives.filter((r) => r.id !== editId);
  updateState({ relatives: next });
  goTo(next.length ? 'M06a' : 'E06');
});
