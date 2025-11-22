# 📌 Định hướng cho Mentor: Yêu cầu Sinh viên chuẩn bị Business Workflow khi trình bày Hội đồng

Chào các mentor,

Đề nghị các nhóm sinh viên khi chuẩn bị báo cáo với Hội đồng cần **bổ sung phần Business Workflow** trong bài trình bày. Đây là thành phần rất quan trọng để Hội đồng đánh giá:

- Mức độ hiểu bài toán thực tế,  
- Khả năng phân tích nghiệp vụ,  
- Mức độ hợp lý của hệ thống.

---

## 🎯 1. Sinh viên cần hiểu và trình bày rõ **Business Workflow**

**Business Workflow** là luồng nghiệp vụ mô tả quá trình vận hành của hệ thống:

- Người dùng bắt đầu hành động gì  
- Hệ thống xử lý ra sao  
- Điều kiện chuyển bước  
- Kết quả tại mỗi bước  

Sinh viên cần biểu diễn bằng **sơ đồ** như:
- Workflow Diagram  
- Activity Diagram  
- hoặc Diagram tự vẽ (Mermaid/Draw.io)

---

## 🧩 2. Các nhóm phải trình bày tối thiểu **3 phần bắt buộc**

### **(a) Actor & Use Context**
- Những ai sử dụng hệ thống? (Admin, User, Staff, Partner…)  
- Mỗi đối tượng tương tác vào hệ thống để làm gì?

### **(b) Business Workflow chính của hệ thống**
Ví dụ tham khảo:

- **E-Commerce:** Đặt hàng → Xác nhận → Tạo vận đơn → Giao hàng → Hoàn tất  
- **Club Management:** Nộp yêu cầu → Duyệt thành viên → Phân công → Chấm công → Báo cáo  
- **Booking:** Gửi yêu cầu → Kiểm tra lịch trống → Xác nhận → Check-in/out → Kết thúc  
- **Education System:** Tạo lớp → Đăng ký → Theo dõi → Báo cáo kết quả  

SV cần mô tả:
- Các bước xử lý  
- Ai thực hiện từng bước  
- Hệ thống xử lý gì  
- Điều kiện đầu vào/đầu ra  
- Kết quả mỗi bước

### **(c) Mapping Workflow → Tính năng**
Mỗi bước trong workflow phải liên kết được với:

- Chức năng trong hệ thống  
- API/Module Backend  
- Luồng đọc/ghi Database  

---

## 🔍 3. Hội đồng sẽ đánh giá các điểm sau

- Nhóm có **thực sự hiểu nghiệp vụ** hay chỉ code theo mẫu?  
- Luồng nghiệp vụ có **logic – đầy đủ – hợp lý**?  
- Có **áp dụng được vào tình huống thực tế** không?  
- Workflow có **ăn khớp** với kiến trúc hệ thống, API và Database?  
- Frontend – Backend – DB có đi đúng theo workflow?

---

## 📝 4. Yêu cầu SV chuẩn bị **trước khi trình bày**

Mỗi nhóm cần chuẩn bị:

- **1 slide Workflow tổng thể**  
- **1 slide Workflow chi tiết của 1 chức năng quan trọng nhất**  
- **1 slide Mapping: Workflow ↔ Feature ↔ API ↔ DB**  
- Trả lời được câu hỏi:  
  > “Tại sao quy trình được thiết kế như vậy? Có tối ưu được không?”

---

## ✔ Lưu ý dành cho Mentor

- Workflow **không phải sơ đồ kỹ thuật**, mà phải phản ánh **cách hệ thống vận hành trong thực tế**.  
- Thiếu Business Workflow = nhóm **chưa hiểu bài toán**, dù code tốt.  
- Workflow rõ ràng giúp bài trình bày mạch lạc và thuyết phục hơn.
