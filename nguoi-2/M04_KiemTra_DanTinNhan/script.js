import { initAppLayout } from '../../shared/layouts/AppLayout.js';
import { ICONS, showToast } from '../../shared/components/ui.js';
import { MOCK_SAMPLES } from '../../shared/scripts/mock-data.js';
import { goTo } from '../../shared/scripts/navigation.js';
import { updateState } from '../../shared/scripts/store.js';
import { choXuLy, hieuUngVao, ganIcon, rung } from '../chung.js';

initAppLayout({
  screenId: 'M04b',
  group: 'A',
  title: 'AI kiểm tra tin nhắn',
  breadcrumb: 'Lá Chắn Số / Kiểm tra nhanh / Dán tin nhắn',
  activeNav: 'check',
  mobileNav: 'check',
  backTo: 'M04a',
  showFab: true,
});

document.getElementById('m04b-spark').innerHTML = ICONS.spark;
const ta = document.getElementById('m04b-textarea');

document.getElementById('m04b-paste-sample')?.addEventListener('click', () => {
  if (ta) ta.value = MOCK_SAMPLES.sampleMessage;
  showToast('Đã dán tin nhắn giả mẫu');
});

const DAU_HIEU = [
  { tu: ['.top', '.xyz', '.click', 'http', 'truy cap', 'truy cập', 'bam vao', 'bấm vào'], ly_do: 'Có đường dẫn lạ, không phải trang chính thức' },
  { tu: ['trung thuong', 'trúng thưởng', 'qua tri an', 'quà tri ân', 'nhan qua', 'nhận quà'], ly_do: 'Hứa trúng thưởng hoặc tặng quà bất thường' },
  { tu: ['luong cao', 'lương cao', 'viec nhe', 'việc nhẹ', 'ctv', 'cong tac vien', 'cộng tác viên', 'hoa hong', 'hoa hồng'], ly_do: 'Mời việc nhẹ lương cao, tuyển cộng tác viên' },
  { tu: ['cong an', 'công an', 'toa an', 'tòa án', 'vien kiem sat', 'viện kiểm sát'], ly_do: 'Tự xưng là công an hoặc cơ quan nhà nước' },
  { tu: ['chuyen tien', 'chuyển tiền', 'chuyen khoan', 'chuyển khoản', 'nap tien', 'nạp tiền'], ly_do: 'Yêu cầu chuyển tiền hoặc nạp tiền' },
  { tu: ['otp', 'mat khau', 'mật khẩu', 'ma xac nhan', 'mã xác nhận'], ly_do: 'Đòi mã OTP hoặc mật khẩu' },
  { tu: ['gap', 'gấp', 'ngay lap tuc', 'ngay lập tức', '30 phut', '30 phút', 'het han', 'hết hạn'], ly_do: 'Giục làm gấp, không cho thời gian suy nghĩ' },
];

document.getElementById('m04b-submit')?.addEventListener('click', async () => {
  const text = (ta?.value || '').trim();
  if (!text) {
    showToast('Bác dán tin nhắn vào ô trước nhé');
    rung('m04b-textarea');
    ta?.focus();
    return;
  }
  const low = text.toLowerCase();
  const tim_thay = DAU_HIEU.filter((d) => d.tu.some((t) => low.includes(t))).map((d) => d.ly_do);
  const tom_tat = text.length > 40 ? text.slice(0, 40) + '...' : text;
  await choXuLy({ ai: true, buoc: ['Đọc nội dung tin nhắn', 'Tìm đường dẫn và lời mời lạ', 'So sánh với 10 kiểu lừa đảo phổ biến'] });

  if (tim_thay.length >= 2) {
    updateState({ lastCheckedValue: tom_tat, lastCheckedStatus: 'NGUY HIỂM' });
    goTo('M05c', { value: tom_tat, source: 'ai', reasons: tim_thay.slice(0, 3).join('|') });
  } else if (tim_thay.length === 1) {
    updateState({ lastCheckedValue: tom_tat, lastCheckedStatus: 'NGHI NGỜ' });
    goTo('M05b', { value: tom_tat, source: 'ai', reasons: tim_thay[0] });
  } else {
    updateState({ lastCheckedValue: tom_tat, lastCheckedStatus: 'NGHI NGỜ' });
    goTo('E05', { value: tom_tat, source: 'ai' });
  }
});

ganIcon('m04b-submit', 'spark');
ganIcon('m04b-paste-sample', 'paste');
hieuUngVao();
