import { initTheme } from '../../shared/scripts/theme.js';
import { ICONS } from '../../shared/components/ui.js';
import { MOCK_SAMPLES } from '../../shared/scripts/mock-data.js';
import { goTo } from '../../shared/scripts/navigation.js';

initTheme();
document.getElementById('m04c-mic-icon').innerHTML = ICONS.mic;

const returnWithSample = () => goTo('M04a', { value: MOCK_SAMPLES.scamPhone, source: 'voice' });
document.getElementById('m04c-mic-btn')?.addEventListener('click', returnWithSample);
document.getElementById('m04c-simulate-btn')?.addEventListener('click', returnWithSample);
document.getElementById('m04c-stop-btn')?.addEventListener('click', () => goTo('M04a'));
