import { initAuthLayout } from '../../shared/layouts/AuthLayout.js';
import { goTo } from '../../shared/scripts/navigation.js';

initAuthLayout({ screenId: 'M01a' });

document.getElementById('m01a-login-form')?.addEventListener('submit', (e) => {
  e.preventDefault();
  goTo('M03');
});
