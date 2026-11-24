/* Kiểm tra số điện thoại, đường dẫn, email, số tài khoản (dữ liệu mẫu, chạy offline)
   Trả về { ma, giaTri, lyDo } hoặc { loi } nếu nhập chưa đúng.
   ma: M05a an toàn, M05b nghi ngờ, M05c nguy hiểm, E05 chưa có dữ liệu, E04 số điện thoại sai */

/* ---------- Dữ liệu mẫu ---------- */
const SO_LUA_DAO = ['0912345678'];
const SO_AN_TOAN = ['1900545413'];
const SO_NGHI_NGO = ['0987654321'];
const SO_KHAN_CAP = { '111': 'Tổng đài bảo vệ trẻ em', '113': 'Công an', '114': 'Cứu hỏa', '115': 'Cấp cứu', '156': 'Tổng đài báo tin nhắn rác, lừa đảo' };

const LINK_DA_BAO = ['quatang-trian.top'];
const EMAIL_DA_BAO = ['congan.hotro@gmail.com'];
const TK_DA_BAO = ['190366884421'];

const DUOI_LA = ['top', 'xyz', 'click', 'online', 'site', 'info', 'icu', 'vip', 'buzz', 'live', 'shop', 'cyou', 'cfd', 'sbs', 'rest', 'tk', 'ml', 'ga', 'cf', 'gq'];
const TU_DU_DO = ['quatang', 'qua-tang', 'trungthuong', 'trung-thuong', 'nhanqua', 'nhan-qua', 'khuyenmai', 'khuyen-mai', 'mienphi', 'mien-phi', 'xacminh', 'xac-minh', 'xacthuc', 'xac-thuc', 'verify', 'dangnhap', 'dang-nhap', 'login', 'otp', 'hoantien', 'hoan-tien', 'vaytien', 'vay-tien', 'giaingan', 'freegift', 'gift', 'bonus'];

/* Thương hiệu hay bị giả và tên miền thật của họ */
const THUONG_HIEU = {
  vietcombank: ['vietcombank.com.vn'],
  techcombank: ['techcombank.com.vn', 'techcombank.com'],
  vietinbank: ['vietinbank.vn'],
  agribank: ['agribank.com.vn'],
  bidv: ['bidv.com.vn'],
  mbbank: ['mbbank.com.vn', 'mbbank.vn'],
  sacombank: ['sacombank.com.vn'],
  momo: ['momo.vn'],
  zalopay: ['zalopay.vn'],
  shopee: ['shopee.vn'],
  lazada: ['lazada.vn'],
  tiktok: ['tiktok.com'],
  facebook: ['facebook.com'],
  zalo: ['zalo.me', 'zalo.vn'],
  google: ['google.com', 'google.com.vn'],
  youtube: ['youtube.com', 'youtu.be'],
  evn: ['evn.com.vn', 'evnhcmc.vn', 'evnspc.vn', 'cskh.evnspc.vn'],
  viettel: ['viettel.vn', 'viettel.com.vn'],
  vnpt: ['vnpt.vn', 'vnpt.com.vn'],
};
const TU_CO_QUAN = ['congan', 'cong-an', 'bocongan', 'police', 'chinhphu', 'dichvucong', 'tongcucthue', 'cucthue', 'toaan', 'vienkiemsat', 'bhxh'];
const MAIL_MIEN_PHI = ['gmail.com', 'yahoo.com', 'yahoo.com.vn', 'outlook.com', 'hotmail.com', 'icloud.com', 'proton.me', 'protonmail.com', 'yandex.com', 'mail.ru', 'aol.com'];
const TU_NGAN_HANG = ['nganhang', 'bank', 'cskh', 'hotro', 'support', 'admin', 'baomat', 'security'];

/* ---------- Hàm phụ ---------- */
const chuanHoaChu = (s) => s.toLowerCase().replace(/rn/g, 'm').replace(/vv/g, 'w').replace(/0/g, 'o').replace(/1/g, 'l');

function laMienChinhThuc(mien) {
  if (mien.endsWith('.gov.vn') || mien === 'gov.vn') return 'cơ quan nhà nước (.gov.vn)';
  for (const [ten, ds] of Object.entries(THUONG_HIEU)) {
    if (ds.some((d) => mien === d || mien.endsWith('.' + d))) return ten;
  }
  return '';
}

function hieuGia(mien) {
  const s = chuanHoaChu(mien);
  for (const ten of Object.keys(THUONG_HIEU)) {
    if (s.includes(ten)) return ten;
  }
  return '';
}

function coTuDuDo(chuoi) {
  const manh = chuoi.toLowerCase().split(/[^a-z0-9]+/).filter(Boolean);
  for (const w of TU_DU_DO) {
    const goc = w.replace(/-/g, '');
    if (manh.some((m) => m === goc || m.startsWith(goc) || m.endsWith(goc) || (goc.length >= 6 && m.includes(goc)))) return w.replace(/-/g, ' ');
    if (w.includes('-') && chuoi.toLowerCase().includes(w)) return w.replace(/-/g, ' ');
  }
  return '';
}

const vietHoa = (s) => s.charAt(0).toUpperCase() + s.slice(1);

/* ---------- Số điện thoại ---------- */
export function chuanHoaSo(v) {
  let s = v.replace(/[\s.\-()]/g, '');
  if (s.startsWith('+84')) s = '0' + s.slice(3);
  else if (/^84\d{9}$/.test(s)) s = '0' + s.slice(2);
  return s;
}

export function loiSoDienThoai(v) {
  const t = (v || '').trim();
  if (!t) return 'Bác nhập số điện thoại trước nhé';
  if (/[^\d+\s.\-()]/.test(t)) return 'Số điện thoại chỉ gồm chữ số';
  const s = chuanHoaSo(t);
  if (SO_KHAN_CAP[s]) return '';
  if (/^0(3|5|7|8|9)\d{8}$/.test(s)) return '';
  if (/^02\d{9}$/.test(s)) return '';
  if (/^(1800|1900)\d{4}(\d{2})?$/.test(s)) return '';
  if (/^0\d+$/.test(s) && s.length < 10) return `Số điện thoại còn thiếu ${10 - s.length} chữ số`;
  if (/^0[^2]\d+$/.test(s) && s.length > 10) return `Số điện thoại bị thừa ${s.length - 10} chữ số`;
  return 'Số điện thoại phải có 10 chữ số, bắt đầu bằng 0 (ví dụ 0912 345 678)';
}

function dinhDangSo(s) {
  if (/^0\d{9}$/.test(s)) return `${s.slice(0, 4)} ${s.slice(4, 7)} ${s.slice(7)}`;
  if (/^02\d{9}$/.test(s)) return `${s.slice(0, 3)} ${s.slice(3, 7)} ${s.slice(7)}`;
  if (/^(1800|1900)\d{6}$/.test(s)) return `${s.slice(0, 4)} ${s.slice(4, 7)} ${s.slice(7)}`;
  if (/^(1800|1900)\d{4}$/.test(s)) return `${s.slice(0, 4)} ${s.slice(4)}`;
  return s;
}

function ktSo(v) {
  if (loiSoDienThoai(v)) return { ma: 'E04', giaTri: v.trim() };
  const s = chuanHoaSo(v);
  const giaTri = dinhDangSo(s);
  if (SO_KHAN_CAP[s]) return { ma: 'M05a', giaTri, lyDo: [`Là số khẩn cấp chính thức: ${SO_KHAN_CAP[s]}`, 'Số ngắn 3 chữ số do Nhà nước quản lý'] };
  if (SO_LUA_DAO.includes(s)) return { ma: 'M05c', giaTri };
  if (SO_AN_TOAN.includes(s)) return { ma: 'M05a', giaTri };
  if (SO_NGHI_NGO.includes(s)) return { ma: 'M05b', giaTri };
  if (/^1900/.test(s)) return { ma: 'M05b', giaTri, lyDo: ['Đầu số 1900 tính cước cao, kẻ gian hay dùng để dụ gọi lại', 'Số này chưa có trong danh sách tổng đài chính thức'] };
  return { ma: 'E05', giaTri };
}

/* ---------- Đường dẫn ---------- */
function ktLink(v) {
  const t = v.trim();
  if (/\s/.test(t)) return { loi: 'Đường dẫn không được có dấu cách' };
  let url;
  try {
    url = new URL(/^[a-z][a-z0-9+.-]*:\/\//i.test(t) ? t : 'http://' + t);
  } catch (e) {
    return { loi: 'Đường dẫn chưa đúng, ví dụ: quatang-trian.top' };
  }
  if (!['http:', 'https:'].includes(url.protocol)) return { loi: 'Chỉ kiểm tra được đường dẫn trang web (http, https)' };
  const mien = url.hostname.toLowerCase().replace(/\.$/, '');
  const laIP = /^\d{1,3}(\.\d{1,3}){3}$/.test(mien);
  const duoi = mien.split('.').pop();
  if (!laIP && (!mien.includes('.') || !/^[a-z]{2,}$|^xn--/.test(duoi))) {
    return { loi: 'Đường dẫn chưa đúng, ví dụ: quatang-trian.top' };
  }

  const giaTri = t.replace(/^https?:\/\//i, '').replace(/\/$/, '');
  const chinhThuc = laMienChinhThuc(mien);
  const lyDo = [];
  const toanBo = (mien + url.pathname + url.search).toLowerCase();

  if (LINK_DA_BAO.some((d) => mien === d || mien.endsWith('.' + d))) lyDo.push('Đã có người ở Đồng Nai báo cáo đường dẫn này');
  if (DUOI_LA.includes(duoi)) lyDo.push(`Đuôi tên miền “.${duoi}” rẻ, hay bị dùng làm trang lừa đảo`);
  if (laIP) lyDo.push('Dùng dãy số IP thay cho tên trang, trang thật không làm vậy');
  if (mien.includes('xn--')) lyDo.push('Tên miền có ký tự lạ để giả giống trang thật');
  if (url.username || t.includes('@')) lyDo.push('Có ký tự @ để che địa chỉ thật của trang');
  const tu = coTuDuDo(toanBo);
  if (tu) lyDo.push(`Có từ dụ dỗ “${tu}” trong đường dẫn`);
  if (!chinhThuc) {
    const gia = hieuGia(mien);
    if (gia) lyDo.push(`Mượn tên “${vietHoa(gia)}” nhưng không phải trang chính thức`);
    const coQuan = TU_CO_QUAN.find((w) => mien.includes(w));
    if (coQuan) lyDo.push('Xưng là cơ quan nhà nước nhưng không có đuôi .gov.vn', 'Trang thật của cơ quan nhà nước luôn kết thúc bằng .gov.vn');
  }
  if (mien.split('.').length > 4) lyDo.push('Tên miền quá nhiều tầng, dễ che giấu trang thật');

  if (chinhThuc && !lyDo.length) {
    return { ma: 'M05a', giaTri, lyDo: [`Là trang chính thức của ${chinhThuc === 'cơ quan nhà nước (.gov.vn)' ? chinhThuc : vietHoa(chinhThuc)}`, 'Tên miền khớp danh sách an toàn mẫu'] };
  }
  if (lyDo.length >= 2) return { ma: 'M05c', giaTri, lyDo };
  if (lyDo.length === 1) return { ma: 'M05b', giaTri, lyDo: [...lyDo, 'Mới thấy 1 dấu hiệu, chưa đủ để kết luận'] };
  return { ma: 'E05', giaTri, lyDo: ['Chưa ai báo cáo đường dẫn này', 'Không thấy dấu hiệu lạ nhưng chưa xác minh được trang'] };
}

/* ---------- Email ---------- */
function ktEmail(v) {
  const s = v.trim().toLowerCase();
  if (!/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(s) || s.includes('..') || s.startsWith('.') || s.includes('.@') || s.includes('@.')) {
    return { loi: 'Email chưa đúng, ví dụ: ten@gmail.com' };
  }
  const [ten, mien] = s.split('@');
  const chinhThuc = laMienChinhThuc(mien);
  const mienPhi = MAIL_MIEN_PHI.includes(mien);
  const duoi = mien.split('.').pop();
  const lyDo = [];

  if (EMAIL_DA_BAO.includes(s)) lyDo.push('Đã có người ở Đồng Nai báo cáo email này');
  if (mienPhi) {
    const coQuan = TU_CO_QUAN.find((w) => ten.includes(w));
    const hieu = hieuGia(ten);
    const nganHang = TU_NGAN_HANG.find((w) => ten.includes(w));
    if (coQuan) lyDo.push('Xưng là cơ quan nhà nước nhưng dùng email miễn phí', 'Công an, cơ quan nhà nước không làm việc với dân qua gmail');
    else if (hieu) lyDo.push(`Xưng là “${vietHoa(hieu)}” nhưng dùng email miễn phí`);
    else if (nganHang) lyDo.push('Xưng là bộ phận hỗ trợ nhưng dùng email miễn phí');
  } else if (!chinhThuc) {
    const gia = hieuGia(mien);
    if (gia) lyDo.push(`Tên miền mượn tên “${vietHoa(gia)}” nhưng không phải của họ`);
    if (TU_CO_QUAN.some((w) => mien.includes(w))) lyDo.push('Xưng là cơ quan nhà nước nhưng không có đuôi .gov.vn', 'Email thật của cơ quan nhà nước luôn có đuôi .gov.vn');
  }
  if (DUOI_LA.includes(duoi)) lyDo.push(`Đuôi tên miền “.${duoi}” hay bị dùng để lừa đảo`);
  const tu = coTuDuDo(ten);
  if (tu) lyDo.push(`Tên email có từ dụ dỗ “${tu}”`);

  if (chinhThuc && !lyDo.length) {
    return { ma: 'M05a', giaTri: s, lyDo: [`Gửi từ tên miền chính thức của ${chinhThuc === 'cơ quan nhà nước (.gov.vn)' ? chinhThuc : vietHoa(chinhThuc)}`, 'Tên miền khớp danh sách an toàn mẫu'] };
  }
  if (lyDo.length >= 2) return { ma: 'M05c', giaTri: s, lyDo };
  if (lyDo.length === 1) return { ma: 'M05b', giaTri: s, lyDo: [...lyDo, 'Mới thấy 1 dấu hiệu, chưa đủ để kết luận'] };
  return {
    ma: 'E05',
    giaTri: s,
    lyDo: [mienPhi ? 'Email cá nhân, chưa ai báo cáo' : 'Chưa ai báo cáo email này', 'Chưa xác minh được ai là người gửi'],
  };
}

/* ---------- Số tài khoản ---------- */
function ktTaiKhoan(v) {
  const s = v.replace(/[\s.\-]/g, '');
  if (!/^\d+$/.test(s)) return { loi: 'Số tài khoản chỉ gồm chữ số' };
  if (s.length < 6 || s.length > 19) return { loi: 'Số tài khoản thường dài từ 6 đến 19 chữ số' };
  const giaTri = v.trim();
  if (TK_DA_BAO.includes(s)) {
    return { ma: 'M05c', giaTri, lyDo: ['5 người ở Đồng Nai đã báo tài khoản này nhận tiền lừa đảo', 'Hay đi kèm chiêu giả danh công an bắt chuyển tiền'] };
  }
  return { ma: 'E05', giaTri, lyDo: ['Chưa ai báo cáo số tài khoản này', 'Chưa xác minh được chủ tài khoản'] };
}

/* ---------- Hàm chính ---------- */
const BAO_TRONG = {
  phone: 'Bác nhập số điện thoại trước nhé',
  link: 'Bác dán đường dẫn vào ô trước nhé',
  email: 'Bác nhập địa chỉ email trước nhé',
  account: 'Bác nhập số tài khoản trước nhé',
};

export function kiemTra(loai, giaTriNhap) {
  const v = (giaTriNhap || '').trim();
  if (!v) return { loi: BAO_TRONG[loai] || BAO_TRONG.phone };
  if (loai === 'link') return ktLink(v);
  if (loai === 'email') return ktEmail(v);
  if (loai === 'account') return ktTaiKhoan(v);
  return ktSo(v);
}

/* Việc cần làm theo từng loại, số điện thoại dùng nội dung mặc định */
export const VIEC_CAN_LAM = {
  link: {
    safe: ['Vẫn nhìn kỹ địa chỉ trên thanh trình duyệt trước khi đăng nhập.', 'Không nhập mã OTP khi có người lạ yêu cầu.'],
    warning: ['Chưa bấm vào vội, nhờ con cháu xem giúp.', 'Tự gõ địa chỉ trang chính thức thay vì bấm đường dẫn được gửi.'],
    danger: ['Không bấm vào đường dẫn, không nhập mật khẩu hay mã OTP.', 'Xoá tin nhắn có đường dẫn này.', 'Gửi báo cáo để cảnh báo bà con trong phường.'],
  },
  email: {
    safe: ['Vẫn không gửi mật khẩu, mã OTP hay ảnh giấy tờ qua email.', 'Nếu thấy lạ, gọi tổng đài chính thức để hỏi lại.'],
    warning: ['Không trả lời, không mở tệp đính kèm.', 'Gọi tổng đài chính thức để hỏi lại trước khi làm theo.'],
    danger: ['Không trả lời, không mở tệp, không bấm đường dẫn trong email.', 'Cơ quan nhà nước và ngân hàng không làm việc qua gmail.', 'Gửi báo cáo để cảnh báo mọi người.'],
  },
  account: {
    warning: ['Gọi lại người nhận bằng số quen để xác nhận.', 'Không chuyển khoản thử theo yêu cầu của người lạ.'],
    danger: ['Tuyệt đối không chuyển tiền vào tài khoản này.', 'Nếu lỡ chuyển, gọi ngay ngân hàng để yêu cầu phong tỏa.', 'Gửi báo cáo để cảnh báo bà con.'],
  },
};

/* Áp lý do và việc cần làm lên dữ liệu trang kết quả */
export function apDungKetQua(data, params, muc) {
  const lyDo = params.get('reasons');
  if (lyDo) data.reasons = lyDo.split('|').filter(Boolean);
  const loai = params.get('loai');
  const viec = VIEC_CAN_LAM[loai] && VIEC_CAN_LAM[loai][muc];
  if (viec) data.nextSteps = viec;
  return data;
}
