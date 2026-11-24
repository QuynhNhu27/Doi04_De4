/**
 * Lá Chắn Số — LocalStorage State Manager (trạng thái demo không nhạy cảm)
 * THƯ MỤC shared/ — DO NHÓM TRƯỞNG QUẢN LÝ.
 * KHÔNG lưu mật khẩu hoặc thông tin cá nhân thật.
 */

import { MOCK_RELATIVES, MOCK_SAMPLES, MOCK_USER } from './mock-data.js';

const STORAGE_KEY = 'lachanso_demo_state_v2';

const DEFAULT_STATE = {
  themeMode: 'system', // 'system' | 'light' | 'dark'
  largeText: false,
  voiceEnabled: true,
  motionEnabled: true, // Tùy chọn bật/tắt hiệu ứng chuyển động & sao băng trong M13
  roleId: MOCK_USER.roleId,
  roleLabel: MOCK_USER.roleLabel,
  ward: MOCK_USER.ward,
  lastCheckedValue: MOCK_SAMPLES.scamPhone,
  lastCheckedStatus: 'NGUY HIỂM',
  relatives: MOCK_RELATIVES,
  sentRelativeName: 'Anh Nam',
};

function readStore() {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return { ...DEFAULT_STATE };
    const parsed = JSON.parse(raw);
    return {
      ...DEFAULT_STATE,
      ...parsed,
      relatives: Array.isArray(parsed.relatives) ? parsed.relatives : DEFAULT_STATE.relatives,
    };
  } catch {
    return { ...DEFAULT_STATE };
  }
}

function writeStore(next) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  } catch {
    // Bỏ qua nếu trình duyệt chặn LocalStorage
  }
}

export function getState() {
  return readStore();
}

export function updateState(patch) {
  const next = { ...readStore(), ...patch };
  writeStore(next);
  return next;
}

export function resetState() {
  writeStore({ ...DEFAULT_STATE });
  return { ...DEFAULT_STATE };
}
