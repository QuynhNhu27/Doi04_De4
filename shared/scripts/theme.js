/**
 * Lá Chắn Số — Theme & Motion Preferences Manager (RULE.md mục 3 & 8)
 * THƯ MỤC shared/ — DO NHÓM TRƯỞNG QUẢN LÝ.
 */

import { getState, updateState } from './store.js';

function resolveTheme(mode, forceTheme) {
  if (forceTheme === 'light' || forceTheme === 'dark') return forceTheme;
  if (mode === 'light' || mode === 'dark') return mode;
  const prefersDark =
    typeof window !== 'undefined' &&
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches;
  return prefersDark ? 'dark' : 'light';
}

export function applyPreferences({ forceTheme = null } = {}) {
  const state = getState();
  const effectiveTheme = resolveTheme(state.themeMode, forceTheme);
  const osReduced =
    typeof window !== 'undefined' &&
    window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const reducedMotion = !state.motionEnabled || osReduced;

  document.documentElement.setAttribute('data-theme', effectiveTheme);
  document.documentElement.setAttribute('data-theme-mode', state.themeMode);
  document.documentElement.setAttribute('data-large-text', state.largeText ? 'true' : 'false');
  document.documentElement.setAttribute('data-motion', reducedMotion ? 'reduced' : 'full');

  window.dispatchEvent(new CustomEvent('lcs:preferences-changed', { detail: { effectiveTheme, state } }));
  return effectiveTheme;
}

export function setThemeMode(mode) {
  if (!['system', 'light', 'dark'].includes(mode)) return;
  updateState({ themeMode: mode });
  applyPreferences();
}

export function toggleLightDark() {
  const current = document.documentElement.getAttribute('data-theme');
  setThemeMode(current === 'dark' ? 'light' : 'dark');
}

export function setMotionEnabled(enabled) {
  updateState({ motionEnabled: Boolean(enabled) });
  applyPreferences();
}

export function initTheme({ forceTheme = null } = {}) {
  const effective = applyPreferences({ forceTheme });
  if (!forceTheme && typeof window !== 'undefined' && window.matchMedia) {
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    if (typeof mq.addEventListener === 'function') {
      mq.addEventListener('change', () => {
        if (getState().themeMode === 'system') applyPreferences();
      });
    }
  }
  return effective;
}
