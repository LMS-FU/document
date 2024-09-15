Tóm tắt về công nghệ, frameworks và tools

# 1. Server-Side Languages
- **Purpose**: Xử lý logic, xử lý dữ liệu và các hoạt động phía server của các ứng dụng web.

### Popular Languages:
- **Python**: Ngôn ngữ linh hoạt, phổ biến với các framework như **Django** và **Flask**.
  - **Ví dụ**: Sử dụng Django để phát triển hệ thống quản lý nội dung (CMS).
  
- **PHP**: Dễ học, phổ biến cho phát triển web với các framework như **Laravel**.
  - **Ví dụ**: Laravel được sử dụng để xây dựng một trang thương mại điện tử.

- **Node.js**: Runtime của Javascript, giúp xây dựng các ứng dụng mạng có khả năng mở rộng.
  - **Ví dụ**: Sử dụng Node.js để xây dựng một API thời gian thực với **Socket.io**.

- **Java**: Ngôn ngữ mạnh mẽ, thường dùng cho ứng dụng doanh nghiệp với các framework như **Spring**.
  - **Ví dụ**: Dùng Spring Boot để xây dựng hệ thống quản lý thông tin nội bộ doanh nghiệp.

---

# 2. Databases
- **Purpose**: Lưu trữ, truy xuất và quản lý dữ liệu cho các ứng dụng web.

### Types of Databases:
- **SQL (Relational)**: Dữ liệu có cấu trúc với quan hệ (ví dụ: **MySQL**, **PostgreSQL**, **SQL Server**).
  - **Ví dụ**: Sử dụng MySQL để lưu trữ dữ liệu người dùng cho một hệ thống quản lý sinh viên.

- **NoSQL (Non-Relational)**: Lược đồ linh hoạt cho dữ liệu không có cấu trúc (ví dụ: **MongoDB**, **Cassandra**).
  - **Ví dụ**: Sử dụng MongoDB để lưu trữ dữ liệu động cho một ứng dụng mạng xã hội.

### CRUD Operations:
- Các thao tác cơ bản với database: **CREATE**, **READ**, **UPDATE**, **DELETE**.

---

# 3. API (Application Programming Interface)
- **Purpose**: Cho phép giao tiếp giữa server và client hoặc giữa các dịch vụ với nhau.

### Types of APIs:
- **REST (Representational State Transfer)**: Sử dụng các phương thức HTTP (GET, POST, PUT, DELETE).
  - **Ví dụ**: Tạo API RESTful để xử lý yêu cầu sản phẩm cho trang thương mại điện tử.

- **GraphQL**: Ngôn ngữ truy vấn API cho phép client yêu cầu dữ liệu cụ thể.
  - **Ví dụ**: Dùng GraphQL để giảm số lượng request khi lấy dữ liệu cho nhiều thành phần giao diện trên một trang.

- **SOAP (Simple Object Access Protocol)**: Giao thức cho việc trao đổi thông tin có cấu trúc trong dịch vụ web.
  - **Ví dụ**: Sử dụng SOAP cho các hệ thống tài chính có yêu cầu bảo mật cao.

---

# 4. Authentication & Authorization
- **Authentication**: Xác minh danh tính người dùng (ví dụ: Hệ thống đăng nhập).
- **Authorization**: Xác định quyền truy cập của người dùng (ví dụ: Điều khiển truy cập).

### Methods:
- **Sessions/Cookies**: Lưu trữ dữ liệu phiên trên server hoặc client.
- **JWT (JSON Web Tokens)**: Token bảo mật cho xác thực không trạng thái.
- **OAuth**: Giao thức cấp quyền (ví dụ: Đăng nhập qua mạng xã hội).

---

**Tóm tắt về công nghệ, frameworks và tools**

# 5. Web Servers
- **Purpose**: Phục vụ các trang web và xử lý yêu cầu từ phía client.

### Popular Servers:
- **Apache**: Mã nguồn mở phổ biến, hỗ trợ tốt cho **PHP**.
  - **Ví dụ**: Apache chạy trên máy chủ web của doanh nghiệp để phục vụ các trang nội bộ.

- **Nginx**: Server hiệu suất cao, thường được dùng như một proxy ngược.
  - **Ví dụ**: Dùng Nginx để làm proxy điều phối request đến nhiều microservices.

- **Node.js**: Khả năng built-in server với module **HTTP**.
  - **Ví dụ**: Dùng Node.js để tạo API cho hệ thống chat thời gian thực.

---

# 6. Middleware
- **Purpose**: Xử lý các yêu cầu và phản hồi trước khi đến server hoặc client.

### Examples:
- **Express.js Middleware**: Xử lý các tác vụ như ghi nhật ký, xác thực, xử lý lỗi.
- **Middleware in Django**: Xử lý các yêu cầu và phản hồi, hỗ trợ bảo mật và quản lý phiên.

---

# 7. Version Control
- **Git**: Theo dõi các thay đổi, cộng tác trên mã nguồn và quản lý phiên bản (ví dụ: `git init`, `git branch`, `git merge`).
- **Branching**: Làm việc trên các tính năng/sửa lỗi mà không ảnh hưởng đến mã nguồn chính.

---

# 8. Deployment
- **Purpose**: Triển khai các ứng dụng đến người dùng.

### Tools:
- **Containers**: Gói ứng dụng và các phụ thuộc (ví dụ: **Docker**).
- **CI/CD Pipelines**: Tự động hóa kiểm thử, tích hợp và triển khai (ví dụ: **Jenkins**, **GitHub Actions**).
- **Cloud Services**: Lưu trữ ứng dụng trên các nền tảng đám mây (ví dụ: **AWS**, **Azure**, **Google Cloud**).
