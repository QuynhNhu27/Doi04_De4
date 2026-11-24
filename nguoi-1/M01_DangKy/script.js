import { initAuthLayout } from '../../shared/layouts/AuthLayout.js';
import { goTo } from '../../shared/scripts/navigation.js';

initAuthLayout({ screenId: 'M01b' });

document.getElementById('m01b-register-form')?.addEventListener('submit', (e) => {
  e.preventDefault();
  goTo('M02');
});
