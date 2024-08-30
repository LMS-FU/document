# Hướng dẫn thiết lập CI/CD Pipeline cơ bản cho dự án .NET

Yêu cầu sinh viên thiết lập CI/CD pipeline cơ bản cho dự án .NET từ đầu, thực hiện theo các bước sau:

## 1. Chuẩn bị trước cuộc thi:

### Cung cấp môi trường:

- Cung cấp cho sinh viên kho lưu trữ (repository) trên GitHub, Azure DevOps, hoặc bất kỳ nền tảng quản lý mã nguồn nào khác.
- Hướng dẫn sinh viên cài đặt và cấu hình các công cụ cần thiết như .NET SDK, Git, và IDE như Visual Studio hoặc Visual Studio Code.

### Đề bài:

- Ứng dụng .NET Core đơn giản, ví dụ: ứng dụng web MVC hoặc API đơn giản với một vài tính năng cơ bản (ví dụ: hiển thị danh sách sản phẩm, tạo mới sản phẩm).
- Sinh viên cần fork hoặc clone kho lưu trữ để bắt đầu làm bài.

## 2. Nội dung cụ thể của bài thi:

### Thiết lập CI Pipeline:

- **Bước 1:** Cấu hình CI pipeline để tự động build và chạy các bài kiểm thử (unit tests) khi có bất kỳ thay đổi nào được đẩy lên nhánh chính (main branch) của repository.
- **Bước 2:** Đảm bảo pipeline bao gồm các bước:
  - Khởi tạo môi trường (ví dụ: thiết lập .NET SDK, khôi phục các gói nuget).
  - Build ứng dụng.
  - Chạy các bài kiểm thử tự động (unit tests).

### Thiết lập CD Pipeline:

- **Bước 3:** Thiết lập CD pipeline để tự động triển khai ứng dụng lên môi trường staging hoặc production sau khi build thành công trên nhánh chính.
- **Bước 4:** Các bước triển khai:
  - Đẩy ứng dụng lên server hoặc cloud service (ví dụ: Azure Web Apps).
  - Thực hiện các bước cần thiết để đảm bảo ứng dụng hoạt động đúng trên môi trường được triển khai (cài đặt, khởi chạy dịch vụ, kiểm tra).

## 3. Hướng dẫn sinh viên:

### Cung cấp tài liệu và ví dụ:

- Trước khi cuộc thi diễn ra, cung cấp tài liệu hướng dẫn về cách thiết lập CI/CD pipeline cho dự án .NET, bao gồm các ví dụ cơ bản.
- Tổ chức một buổi hướng dẫn ngắn trước cuộc thi để giới thiệu về cách sử dụng các công cụ CI/CD như GitHub Actions, Github Organization > Projects, Azure DevOps Pipelines, hoặc Jenkins.

## 4. Đánh giá kết quả:

### Tiêu chí chấm điểm:

- **Tính chính xác:** Pipeline có hoạt động đúng theo yêu cầu không?
- **Tính hoàn thiện:** Pipeline có bao gồm tất cả các bước cần thiết như build, test, và deploy không?
- **Tính tối ưu:** Pipeline có được cấu hình một cách hiệu quả và sử dụng các thực hành tốt nhất không?
- **Sáng tạo:** Sinh viên có sử dụng các công cụ hoặc cách tiếp cận sáng tạo để cải thiện pipeline không?

### Chấm điểm:

- Ban giám khảo sẽ kiểm tra từng pipeline, xem xét các log của CI/CD chạy qua từng commit và đánh giá kết quả dựa trên tiêu chí đã đặt ra.

## 5. Công bố kết quả và trao giải:

- **Thảo luận:** Sau khi cuộc thi kết thúc, tổ chức một phiên thảo luận để đánh giá các kết quả, nhấn mạnh các điểm mạnh và điểm yếu của từng bài thi.
- **Trao giải:** Công bố các đội/cá nhân đoạt giải và trao giải thưởng đã định sẵn.

Sự kiện này giúp sinh viên có cơ hội thực hành trực tiếp với các công cụ và quy trình CI/CD, từ đó hiểu sâu hơn về quy trình phát triển và triển khai phần mềm hiện đại.
