import { initTheme } from '../../shared/scripts/theme.js';
import { ICONS } from '../../shared/components/ui.js';
import { MOCK_ROLES, MOCK_WARDS } from '../../shared/scripts/mock-data.js';
import { goTo } from '../../shared/scripts/navigation.js';
import { getState, updateState } from '../../shared/scripts/store.js';

initTheme();
const state = getState();
let selectedRoleId = state.roleId || 'elderly';

const roleList = document.getElementById('m02-role-list');
const wardSelect = document.getElementById('m02-ward-select');

function renderRoles() {
  if (!roleList) return;
  roleList.innerHTML = MOCK_ROLES.map((role, idx) => {
    const tone = idx === 0 ? 'blue' : idx === 1 ? 'teal' : 'purple';
    const isSel = role.id === selectedRoleId;
    return `
      <button type="button" class="card card--interactive m02-role-card ${isSel ? 'is-selected' : ''}"
              role="radio" aria-checked="${isSel}" data-role-id="${role.id}">
        <span class="icon-box icon-box--${tone}">${ICONS[role.icon] || ICONS.user}</span>
        <span class="badge badge--soft-blue">${role.badge}</span>
        <span class="text-card-title">${role.title}</span>
        <span class="text-sub">${role.description}</span>
      </button>
    `;
  }).join('');

  roleList.querySelectorAll('[data-role-id]').forEach((btn) => {
    btn.addEventListener('click', () => {
      selectedRoleId = btn.getAttribute('data-role-id');
      renderRoles();
    });
  });
}

if (wardSelect) {
  wardSelect.innerHTML = MOCK_WARDS.map(
    (w) => `<option value="${w}" ${w === state.ward ? 'selected' : ''}>${w}</option>`
  ).join('');
}

renderRoles();

document.getElementById('m02-done-btn')?.addEventListener('click', () => {
  const role = MOCK_ROLES.find((r) => r.id === selectedRoleId) || MOCK_ROLES[0];
  updateState({
    roleId: role.id,
    roleLabel: role.title,
    ward: wardSelect ? wardSelect.value : state.ward,
  });
  goTo('M03');
});
