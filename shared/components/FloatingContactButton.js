/**
 * Lá Chắn Số — FloatingContactButton Component
 * Nút gọi / hỏi người thân nổi (không chớp nháy gây mất tập trung cho người cao tuổi).
 */

import { ICONS } from './ui.js';
import { resolveRoute } from '../scripts/navigation.js';

export function createFloatingContactButton() {
  const link = document.createElement('a');
  link.className = 'floating-contact-btn';
  link.href = resolveRoute('M06a');
  link.setAttribute('aria-label', 'Hỏi người thân ngay');
  link.setAttribute('title', 'Hỏi người thân ngay');
  link.innerHTML = ICONS.phone;
  return link;
}
