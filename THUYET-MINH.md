# THUYẾT MINH DỰ ÁN — LÁ CHẮN SỐ

**Đội 04 · Đề 4 · Hackathon TP Đồng Nai 2026**

> Kiểm tra trong 10 giây, hỏi người thân bằng 1 chạm, học nhận diện trong 1 phút.

---

## 1. Bối cảnh và lý do chọn đề tài

Lừa đảo qua điện thoại, tin nhắn và mạng xã hội đang ngày càng nhiều và tinh vi. Các chiêu thường gặp là giả danh công an, giả nhân viên ngân hàng, điện lực, gửi đường dẫn "nhận quà tri ân", tuyển "việc nhẹ lương cao", báo "trúng thưởng phải nộp phí"...

Ba nhóm người dễ bị nhắm tới nhất:

- **Người cao tuổi:** ít dùng công nghệ, dễ hoảng khi bị đe dọa, ngại hỏi con cháu.
- **Học sinh, sinh viên:** dùng mạng nhiều, dễ tin các lời mời việc làm, quà tặng, đầu tư.
- **Tình nguyện viên, cán bộ khu phố:** cần công cụ để nắm tình hình lừa đảo ở địa phương và tuyên truyền cho người dân.

Hiện nay người dân khi nghi ngờ thường không biết kiểm tra ở đâu, hoặc các công cụ có sẵn quá phức tạp với người lớn tuổi. Vì vậy nhóm làm **Lá Chắn Số** — một website đơn giản, chữ to, nút to, giúp mọi người **kiểm tra nhanh, hỏi người thân ngay, và tự học cách nhận biết lừa đảo**.

## 2. Giới thiệu sản phẩm

**Lá Chắn Số** là website responsive (dùng được trên điện thoại, máy tính bảng và máy tính) gồm **30 màn hình**, chia thành 4 khối chức năng:

1. **Kiểm tra & Kết quả** — kiểm tra số điện thoại, đường dẫn, email, số tài khoản, tin nhắn.
2. **Người thân & Báo cáo** — hỏi người thân bằng 1 chạm, báo cáo lừa đảo.
3. **Bài học & Bài kiểm tra** — bài học 1 phút và câu hỏi ôn tập.
4. **Đội tình nguyện & Thống kê** — thống kê lừa đảo theo địa phương.

Phong cách giao diện: **Modern Cybersecurity Dashboard + Friendly Digital Safety** — nhìn hiện đại, an toàn nhưng vẫn thân thiện, dễ dùng.

## 3. Đối tượng người dùng và cách thiết kế cho từng nhóm

Khi mở app, người dùng chọn vai trò (màn **M02 — "Bác là ai?"**): Người lớn tuổi, Học sinh THPT, hoặc Tình nguyện viên. Giao diện được chia thành 2 nhóm:

| | Nhóm A — Người cao tuổi | Nhóm B — Học sinh & Tình nguyện viên |
|---|---|---|
| Cỡ chữ | 22px | 18px |
| Chiều cao nút chính | tối thiểu 64px | tối thiểu 56px |
| Bố cục | thoáng, ít chữ, ít chuyển động | nhiều thông tin hơn, có hiệu ứng |
| Cách xưng hô | "bác" | thân thiện, ngắn gọn |

Các nguyên tắc chung cho mọi màn:

- **Cảnh báo luôn có đủ 3 tín hiệu:** màu + biểu tượng + chữ. Người khó phân biệt màu vẫn hiểu được.
  - Xanh lá = An toàn · Vàng = Nghi ngờ · Đỏ = Nguy hiểm · Xám = Chưa có dữ liệu.
- **Chế độ sáng / tối**, có nền sao băng ở chế độ tối.
- **Công tắc giảm chuyển động:** tắt hết hiệu ứng cho người dễ chóng mặt hoặc máy yếu.
- **Nút đọc to kết quả** bằng giọng tiếng Việt cho người mắt kém.
- **Nút gọi khẩn** luôn nổi ở góc màn hình.

## 4. Mô tả chi tiết các chức năng

### 4.1. Vào app và trang chủ (Người 1)

| Mã | Màn hình | Chức năng |
|---|---|---|
| M00 | Thư viện giao diện | Tập hợp màu, chữ, nút, thẻ cảnh báo dùng chung cho cả nhóm |
| M01a / M01b | Đăng nhập / Đăng ký | Đăng nhập, tạo tài khoản, nền sao băng |
| M02 | Chọn vai trò | Chọn Người lớn tuổi / Học sinh / Tình nguyện viên |
| M03 | Trang chủ | Lối tắt tới Kiểm tra, Hỏi người thân, Bài học, Báo cáo |
| M04c | Kiểm tra bằng giọng nói | "Mời bác đọc số điện thoại" — có sóng âm khi đang nghe |
| M13 | Cá nhân & Cài đặt | Đổi chế độ sáng/tối, giảm chuyển động, xem lịch sử kiểm tra |
| E00 | Mất mạng | Báo lỗi mất kết nối, hướng dẫn thử lại |

### 4.2. Kiểm tra và Kết quả (Người 2) — luồng trọng tâm

Đây là phần chính mà ban giám khảo bấm thử.

**M04a — Kiểm tra nhanh**, có 4 tab:

| Tab | Người dùng nhập | Ứng dụng kiểm tra |
|---|---|---|
| Số điện thoại | `0912 345 678`, `+84...` | Đúng định dạng VN chưa; có trong danh sách đã bị báo cáo không; có phải số khẩn cấp (113, 114, 115, 111...) hay đầu số 1900 thu phí không |
| Đường dẫn | `vietcombank-uudai.xyz` | Đuôi tên miền lạ (.xyz, .top, .click...); có từ dụ dỗ (qua tang, trung thuong, uu dai...); giả tên thương hiệu (Vietcombank, MoMo, Shopee, EVN...); giả mạo chữ (rn → m, 0 → o); dùng địa chỉ IP, ký tự @; giả cơ quan nhà nước không có đuôi `.gov.vn` |
| Email | `hotro@vietcombank-xacminh.com` | Đúng định dạng email; email miễn phí (gmail...) nhưng xưng ngân hàng/cơ quan; tên miền giả thương hiệu |
| Số tài khoản | `0123456789` | Chỉ gồm số, dài 6–19 chữ số; có trong danh sách đã bị báo cáo không |

Cách hoạt động:

- Nhập sai (thiếu số, có chữ, sai định dạng) → báo lỗi ngay dưới ô nhập, nói rõ sai chỗ nào (ví dụ: *"còn thiếu 2 chữ số"*), ô nhập rung nhẹ.
- Nhập đúng → hiện màn chờ với các bước đang kiểm tra → chuyển sang màn kết quả.
- Có nút **Dán** (dán từ bộ nhớ tạm) và danh sách **mẫu thử** để bấm nhanh.
- Bấm Enter cũng kiểm tra được.

**M04b — Dán tin nhắn cho AI:** dán nội dung tin nhắn lạ, AI (mô phỏng) đọc và tìm dấu hiệu lừa đảo như đe dọa, thúc giục chuyển tiền, đòi mã OTP, gửi đường dẫn lạ.

**Màn kết quả** — mỗi mức có màu, biểu tượng và lời khuyên riêng:

| Mã | Kết quả | Hiển thị |
|---|---|---|
| M05a | An toàn | Màu xanh, giải thích vì sao an toàn |
| M05b | Nghi ngờ | Màu vàng, liệt kê dấu hiệu đáng ngờ, khuyên kiểm tra thêm |
| M05c | Nguy hiểm | Màu đỏ, lý do cụ thể, việc cần làm ngay |
| M05c_Toi | Nguy hiểm (chế độ tối) | Giống M05c, tối ưu cho chế độ tối |
| E04 | Nhập sai | Hướng dẫn nhập lại cho đúng |
| E05 | Chưa có dữ liệu | Màu xám, chưa đủ thông tin để kết luận, khuyên cẩn thận |

Mỗi màn kết quả có:

- **Lý do** cụ thể vì sao ra kết quả đó (lấy từ chính phần kiểm tra, không phải chữ cố định).
- **Việc cần làm** theo từng loại (số điện thoại / đường dẫn / email / tài khoản) và từng mức.
- Nút **Nghe kết quả** (đọc to), **Hỏi người thân**, **Báo cáo lừa đảo**.
- Thẻ **Thông tin đã kiểm tra** (loại, nội dung, thời gian, mức cảnh báo) và nút **Kiểm tra cái khác**.
- Thẻ **3 điều luôn nhớ:** không chuyển tiền cho người lạ, không đọc mã OTP, nghi ngờ thì gọi 156.

Phần kiểm tra được viết thành file riêng (`nguoi-2/kiem-tra.js`) và đã chạy thử **56 trường hợp, đúng cả 56**.

### 4.3. Người thân, Báo cáo, Danh sách bài học (Người 3)

| Mã | Màn hình | Chức năng |
|---|---|---|
| M06a | Hỏi người thân | Danh sách con cháu, bấm 1 lần để gửi nội dung nghi ngờ cho người thân |
| M06b | Đã gửi người thân | Xác nhận đã gửi, chờ người thân phản hồi |
| M07 | Thêm người thân | Thêm số của con cháu để hỏi nhanh khi gặp cuộc gọi, tin nhắn lạ |
| M08a | Báo cáo lừa đảo | Form báo cáo: loại lừa đảo, nội dung, phường/xã |
| M08b | Báo cáo thành công | Xác nhận đã ghi nhận, xem lịch sử báo cáo |
| M09 | Danh sách bài học | Các bài học 1 phút theo chủ đề |
| E06 | Chưa có người thân | Hướng dẫn thêm người thân đầu tiên |

### 4.4. Bài học, Bài kiểm tra, Thống kê (Người 4)

| Mã | Màn hình | Chức năng |
|---|---|---|
| M10 | Chi tiết bài học | Chiêu thức thường gặp → dấu hiệu nhận biết → cách xử lý → ghi nhớ trong 10 giây |
| M11a / M11b | Bài kiểm tra / Kết quả | Câu hỏi ôn tập sau bài học, chấm điểm |
| M12a | Thống kê địa phương | Số báo cáo trong tháng, tỉ lệ từng kiểu lừa đảo, kiểu mới tăng nhanh |
| M12b | Thống kê — bản máy tính | Bố cục nhiều cột cho màn hình lớn |
| M12a_Toi | Thống kê — chế độ tối | Có nền sao băng |
| E12 | Thống kê trống | Khi phường chưa có báo cáo nào |

Các chủ đề bài học: giả danh công an, đường dẫn nhận quà, tuyển cộng tác viên đặt đơn, giả người thân gặp nạn, việc nhẹ lương cao, trúng thưởng nộp phí, giả nhân viên ngân hàng, giả nhân viên điện lực, bán hàng không giao, đầu tư lãi cao.

## 5. Luồng sử dụng chính

```
Trang chủ (M03)
   └─> Kiểm tra (M04a / M04b / M04c)
          ├─> Nhập sai ─────────> E04 ─> nhập lại
          └─> Kết quả: An toàn (M05a) / Nghi ngờ (M05b) / Nguy hiểm (M05c) / Chưa có dữ liệu (E05)
                    ├─> Hỏi người thân (M06a) ─> Đã gửi (M06b)
                    ├─> Báo cáo lừa đảo (M08a) ─> Thành công (M08b)
                    └─> Học bài liên quan (M09 ─> M10 ─> M11)
```

Ví dụ: Bác Tư nhận cuộc gọi lạ xưng công an → mở app, nhập số → kết quả **Nguy hiểm** màu đỏ, kèm lý do → bấm **Hỏi người thân** gửi cho con → bấm **Báo cáo** để cảnh báo người khác → học bài *"Giả danh công an"* để lần sau tự nhận ra.

## 6. Công nghệ và cách tổ chức code

- **HTML, CSS, JavaScript thuần** (ES Modules), không dùng framework, không cần build → chạy nhẹ, dễ triển khai.
- **Responsive:** Mobile (360–390px) → Tablet (768px) → Desktop (1366–1440px). Máy tính có thanh menu bên trái, điện thoại có thanh menu dưới.
- **Thư viện dùng chung `shared/`:** màu sắc, cỡ chữ, bố cục, menu, nút gọi khẩn, nền sao băng, chuyển trang, lưu trạng thái. Cả nhóm dùng chung để giao diện đồng nhất.
- **Lưu trạng thái** (vai trò, chế độ sáng/tối, giảm chuyển động) bằng `localStorage`.
- **Dữ liệu mẫu** (danh sách số/link đã báo cáo, thống kê) để trình diễn; sau này có thể nối với cơ sở dữ liệu thật.

Cấu trúc thư mục:

```
├── index.html     Cổng vào
├── preview/       Xem trước cả 30 màn (Desktop / Tablet / Mobile)
├── shared/        Thư viện dùng chung
├── nguoi-1/       8 màn — Vào app, trang chủ, cá nhân
├── nguoi-2/       8 màn — Kiểm tra và kết quả
├── nguoi-3/       7 màn — Người thân, báo cáo, danh sách bài học
├── nguoi-4/       7 màn — Bài học, bài kiểm tra, thống kê
└── docs/          Tài liệu kiến trúc, quy trình, khai báo dùng AI
```

## 7. Điểm nổi bật

1. **Kiểm tra thật, không phải giao diện tĩnh:** phân tích đúng số điện thoại, đường dẫn, email, số tài khoản và trả về lý do cụ thể.
2. **Thiết kế riêng cho người cao tuổi:** chữ to, nút to, đọc to kết quả, xưng "bác", báo lỗi dễ hiểu.
3. **Hỏi người thân bằng 1 chạm:** gắn người già với con cháu thay vì để họ tự xử lý một mình.
4. **Học trong 1 phút:** bài học ngắn theo đúng các chiêu lừa đang phổ biến.
5. **Thống kê theo phường/xã** cho đội tình nguyện tuyên truyền đúng chỗ.
6. **Trợ năng:** đủ 3 tín hiệu cảnh báo, chế độ tối, giảm chuyển động, dùng tốt trên mọi màn hình.

## 8. Hạn chế và hướng phát triển

- AI đọc tin nhắn và danh sách số/link lừa đảo hiện là **mô phỏng bằng dữ liệu mẫu**. Hướng phát triển: kết nối nguồn dữ liệu cảnh báo chính thức và mô hình AI thật.
- Chức năng gửi cho người thân hiện là mô phỏng; sau này nối với Zalo/SMS.
- Có thể làm thêm ứng dụng điện thoại để tự cảnh báo khi có cuộc gọi đến.

## 9. Cách chạy

Mở trực tiếp: xem link GitHub Pages của nhóm, hoặc chạy ở máy:

```bash
python -m http.server 5500
# mở http://localhost:5500/index.html
```

Lưu ý: không mở bằng cách bấm đúp file `index.html` (trình duyệt sẽ chặn module), phải chạy qua server như trên.
