/**
 * Lá Chắn Số — Dữ liệu giả lập dùng chung (RULE.md mục 8)
 * THƯ MỤC shared/ — DO NHÓM TRƯỞNG QUẢN LÝ.
 * Toàn bộ là dữ liệu mô phỏng, không chứa thông tin cá nhân thật.
 */

export const MOCK_NOTICE = 'Dữ liệu giả lập phục vụ trình diễn prototype vòng sơ loại.';

export const MOCK_USER = {
  isMock: true,
  displayName: 'Bác Tư',
  greetingName: 'bác Tư',
  age: 65,
  avatarLetter: 'T',
  roleId: 'elderly',
  roleLabel: 'Người lớn tuổi',
  ward: 'Phường Trấn Biên',
};

export const MOCK_WARDS = [
  'Phường Trấn Biên',
  'Phường Tân Mai',
  'Phường Thống Nhất',
  'Phường Tam Hiệp',
  'Phường Long Bình',
];

export const MOCK_ROLES = [
  {
    id: 'elderly',
    title: 'Người lớn tuổi',
    description: 'Chữ to 22px, nút lớn, có hỗ trợ giọng nói và hỏi người thân 1 chạm.',
    badge: 'Nhóm A · Ưu tiên dễ đọc',
    icon: 'elderly',
  },
  {
    id: 'student',
    title: 'Học sinh THPT',
    description: 'Học nhận diện lừa đảo 1 phút, làm bài kiểm tra chấm điểm nhận huy hiệu.',
    badge: 'Nhóm B · Học tương tác',
    icon: 'book',
  },
  {
    id: 'volunteer',
    title: 'Tình nguyện viên',
    description: 'Xem thống kê kiểu lừa đảo mới tại xã, phường để tuyên truyền kịp thời.',
    badge: 'Nhóm B · Thống kê địa bàn',
    icon: 'chart',
  },
];

export const MOCK_SAMPLES = {
  isMock: true,
  scamPhone: '0912 345 678',
  safePhone: '1900 545 413',
  warningPhone: '0987 654 321',
  noDataPhone: '0901 222 333',
  scamLinkText: 'quatang-trian.top',
  scamAccount: '1903 6688 4421',
  sampleMessage: 'Chuc mung ban da trung thuong 50 trieu. Truy cap quatang-trian.top de nhan qua',
  reportCode: 'BC-1124-087',
  quizScore: 8,
  quizTotal: 10,
};

export const MOCK_RELATIVES = [
  {
    id: 'rel-1',
    isMock: true,
    name: 'Anh Nam',
    relation: 'Con trai',
    phone: '0938 111 222',
    avatarLetter: 'N',
  },
  {
    id: 'rel-2',
    isMock: true,
    name: 'Chị Lan',
    relation: 'Con gái',
    phone: '0938 333 444',
    avatarLetter: 'L',
  },
];

export const MOCK_CHECK_RESULTS = {
  safe: {
    level: 'safe',
    statusText: 'AN TOÀN',
    value: '1900 545 413',
    reasons: [
      'Là tổng đài chính thức của ngân hàng',
      'Đã được xác minh trong danh sách an toàn mẫu',
    ],
    reminder: 'Vẫn nên cẩn thận khi chuyển tiền hoặc cung cấp mã OTP',
    nextSteps: [
      'Không đọc mã OTP hay mật khẩu ngân hàng cho bất kỳ ai.',
      'Nếu vẫn thấy bất thường, hãy bấm Hỏi người thân để xác nhận thêm.',
    ],
    primaryActionText: 'Về trang chủ',
    primaryTarget: 'M03',
  },
  warning: {
    level: 'warning',
    statusText: 'NGHI NGỜ',
    value: '0987 654 321',
    reasons: [
      'Chưa ai báo cáo số này',
      'Số này mới xuất hiện gần đây tại địa bàn',
    ],
    reminder: 'Chưa ai báo không có nghĩa là an toàn',
    nextSteps: [
      'Khoan vội tin theo yêu cầu chuyển tiền hoặc bấm vào đường dẫn lạ.',
      'Bấm "Hỏi người thân" để nhờ con cháu kiểm tra giúp trước khi quyết định.',
    ],
    primaryActionText: 'Hỏi người thân',
    primaryTarget: 'M06a',
  },
  danger: {
    level: 'danger',
    statusText: 'NGUY HIỂM',
    value: '0912 345 678',
    reasons: [
      '12 người ở Đồng Nai đã báo số này giả danh công an',
      'Xuất hiện lần đầu tháng 11/2026',
    ],
    reminder: 'Không chuyển tiền cho người lạ',
    nextSteps: [
      'Cúp máy ngay lập tức, không làm theo hướng dẫn cài ứng dụng lạ.',
      'Bấm nút "Gọi người thân ngay" để báo cho con cháu biết tình huống.',
      'Gửi báo cáo để cảnh báo sớm cho bà con trong phường.',
    ],
    primaryActionText: 'Gọi người thân ngay',
    primaryTarget: 'M06a',
  },
  noData: {
    level: 'warning',
    statusText: 'NGHI NGỜ',
    value: '0901 222 333',
    reasons: [
      'Chưa ai báo cáo số này',
      'Chưa có thông tin xác minh trong cơ sở dữ liệu mẫu',
    ],
    reminder: 'Chưa ai báo không có nghĩa là an toàn',
    highlightWarning: 'Chưa ai báo không có nghĩa là an toàn. Bác vẫn nên hỏi người thân trước khi tin tưởng.',
    nextSteps: [
      'Tuyệt đối không chuyển khoản thử hay gửi ảnh căn cước.',
      'Hỏi người thân được chỉ định trước để đối chiếu thông tin.',
    ],
    primaryActionText: 'Hỏi người thân',
    primaryTarget: 'M06a',
  },
};

export const MOCK_LESSONS = [
  {
    id: 'lesson-1',
    title: 'Giả danh công an yêu cầu chuyển tiền',
    shortTitle: 'Giả danh công an',
    duration: '1 phút',
    completed: true,
    category: 'Cuộc gọi',
    icon: 'shield',
    steps: [
      { title: 'Chiêu thức thường gặp', body: 'Kẻ xấu gọi điện tự xưng công an, nói bác liên quan vụ án và yêu cầu giữ bí mật tuyệt đối.' },
      { title: 'Dấu hiệu nhận biết 1', body: 'Cơ quan công an không bao giờ làm việc hoặc yêu cầu chuyển tiền xác minh qua điện thoại.' },
      { title: 'Dấu hiệu nhận biết 2', body: 'Đối tượng thường thúc giục chuyển gấp, đe doạ và cấm không cho kể với người thân.' },
      { title: 'Cách xử lý an toàn', body: 'Bình tĩnh cúp máy ngay. Gọi cho người thân hoặc liên hệ trực tiếp Công an phường.' },
      { title: 'Ghi nhớ trong 10 giây', body: 'Không chuyển tiền, không đọc mã OTP, bấm nút Hỏi người thân ngay khi có cuộc gọi lạ.' },
    ],
  },
  { id: 'lesson-2', title: 'Đường dẫn nhận quà tri ân', shortTitle: 'Đường dẫn nhận quà', duration: '1 phút', completed: true, category: 'Đường dẫn', icon: 'link' },
  { id: 'lesson-3', title: 'Tuyển cộng tác viên đặt đơn', shortTitle: 'Cộng tác viên đặt đơn', duration: '1 phút', completed: true, category: 'Việc làm', icon: 'briefcase' },
  { id: 'lesson-4', title: 'Người thân gặp tai nạn cần tiền gấp', shortTitle: 'Giả người thân gặp nạn', duration: '1 phút', completed: false, category: 'Cuộc gọi', icon: 'phone' },
  { id: 'lesson-5', title: 'Việc nhẹ lương cao', shortTitle: 'Việc nhẹ lương cao', duration: '1 phút', completed: false, category: 'Tin nhắn', icon: 'spark' },
  { id: 'lesson-6', title: 'Trúng thưởng phải nộp phí', shortTitle: 'Trúng thưởng nộp phí', duration: '1 phút', completed: false, category: 'Tin nhắn', icon: 'gift' },
  { id: 'lesson-7', title: 'Giả danh nhân viên ngân hàng', shortTitle: 'Giả nhân viên ngân hàng', duration: '1 phút', completed: false, category: 'Tài khoản', icon: 'bank' },
  { id: 'lesson-8', title: 'Giả danh nhân viên điện lực', shortTitle: 'Giả nhân viên điện lực', duration: '1 phút', completed: false, category: 'Cuộc gọi', icon: 'bolt' },
  { id: 'lesson-9', title: 'Bán hàng qua mạng không giao', shortTitle: 'Bán hàng không giao', duration: '1 phút', completed: false, category: 'Mua sắm', icon: 'bag' },
  { id: 'lesson-10', title: 'Mời đầu tư lãi cao', shortTitle: 'Đầu tư lãi cao', duration: '1 phút', completed: false, category: 'Tài chính', icon: 'chart' },
];

export const MOCK_QUIZ_QUESTIONS = [
  {
    id: 1,
    indexLabel: 'Câu 3/10',
    progressPercent: 30,
    fakeMessage: 'Chuc mung ban da trung thuong 50 trieu. Truy cap quatang-trian.top de nhan qua',
    question: 'Theo bạn, đây là gì?',
    correctAnswer: 'scam',
    explanationCorrect: 'Chính xác! Đường dẫn lạ kèm lời hứa trúng thưởng 50 triệu là dấu hiệu lừa đảo điển hình.',
    explanationWrong: 'Chưa đúng. Đây là tin nhắn lừa đảo dụ bấm vào đường dẫn giả mạo để đánh cắp thông tin.',
  },
  {
    id: 2,
    indexLabel: 'Câu 4/10',
    progressPercent: 40,
    fakeMessage: 'Dien luc thong bao cat dien sau 2 gio. Vui long chuyen tien vao STK 1903 6688 4421.',
    question: 'Theo bạn, đây là gì?',
    correctAnswer: 'scam',
    explanationCorrect: 'Chính xác! Ngành điện lực không bao giờ yêu cầu chuyển tiền điện vào tài khoản cá nhân.',
    explanationWrong: 'Chưa đúng. Đây là kịch bản giả danh nhân viên điện lực đang tăng nhanh tại địa bàn.',
  },
];

export const MOCK_QUIZ_RESULT = {
  score: 8,
  total: 10,
  badgeName: 'Mắt tinh',
  summary: 'Bạn nhận ra 8 trong 10 tình huống lừa đảo',
  missedLessons: [
    'Giả danh nhân viên điện lực',
    'Mời đầu tư lãi cao',
  ],
};

export const MOCK_STATS = {
  isMock: true,
  ward: 'Phường Trấn Biên',
  month: 'Tháng 11/2026',
  summary: [
    { value: '120', label: 'báo cáo trong tháng', delta: '+18% so với tháng trước', tone: 'blue' },
    { value: '35%', label: 'đường dẫn giả mạo', delta: '42 lượt ghi nhận', tone: 'purple' },
    { value: '42', label: 'báo cáo đã xử lý', delta: 'Tuyên truyền tới 6 khu phố', tone: 'safe' },
  ],
  chart: [
    { label: 'Đường dẫn giả', count: 42, percent: 35, heightPx: 148 },
    { label: 'Giả công an', count: 31, percent: 26, heightPx: 110 },
    { label: 'Việc nhẹ lương cao', count: 28, percent: 23, heightPx: 98 },
    { label: 'Trúng thưởng', count: 19, percent: 16, heightPx: 68 },
  ],
  emergingAlert: {
    title: 'Kiểu mới tăng nhanh',
    body: 'Giả danh nhân viên điện lực báo nợ tiền điện, 14 lượt, tháng trước chỉ 2 lượt',
    actionNote: 'Đề xuất đội thanh niên tình nguyện phát tờ rơi và loa phát thanh tại các tổ dân phố trong tuần này.',
  },
};

export const MOCK_HISTORY = {
  checks: [
    { value: '0912 345 678', status: 'NGUY HIỂM', time: 'Hôm nay, 09:40' },
    { value: 'quatang-trian.top', status: 'NGUY HIỂM', time: 'Hôm qua, 16:15' },
    { value: '1900 545 413', status: 'AN TOÀN', time: '20/11/2026' },
  ],
  reports: [
    { code: 'BC-1124-087', type: 'Cuộc gọi', value: '0912 345 678', status: 'Đã ghi nhận (mô phỏng)' },
  ],
};
