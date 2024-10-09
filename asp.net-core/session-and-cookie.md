# Phân biệt Session và Cookie trong ASP.NET Razor Pages

Trong **ASP.NET Razor Pages**, `Session` và `Cookie` đều là cách để lưu trữ thông tin trạng thái giữa các yêu cầu HTTP, tuy nhiên chúng có các điểm khác biệt về cách hoạt động, nơi lưu trữ, tính bảo mật, và cách sử dụng.

## 1. Session
- **Định nghĩa**: `Session` là một cơ chế lưu trữ dữ liệu trên **máy chủ** để duy trì thông tin giữa các yêu cầu từ cùng một người dùng.
- **Lưu trữ**: Dữ liệu được lưu trữ ở máy chủ và mỗi người dùng có một `Session ID` duy nhất, được lưu trữ trong cookie hoặc truyền qua URL để xác định `Session` của họ.
- **Thời gian sống**: `Session` tồn tại trong thời gian ngắn, chỉ có hiệu lực cho đến khi người dùng kết thúc phiên làm việc (thường là khi đóng trình duyệt hoặc sau một khoảng thời gian không hoạt động). Thời gian mặc định của `Session` thường là 20 phút nhưng có thể cấu hình lại.
- **Bảo mật**: Vì dữ liệu `Session` được lưu trữ trên máy chủ nên nó bảo mật hơn so với `Cookie`. Người dùng không thể truy cập trực tiếp vào dữ liệu `Session`.
- **Ứng dụng**: Thường được sử dụng để lưu trữ thông tin nhạy cảm như thông tin người dùng đăng nhập, giỏ hàng trong ứng dụng thương mại điện tử, hoặc dữ liệu cần bảo mật.

### Ví dụ sử dụng Session trong ASP.NET Razor Pages
```csharp
// Lưu trữ thông tin vào Session
HttpContext.Session.SetString("UserName", "JohnDoe");

// Lấy thông tin từ Session
var userName = HttpContext.Session.GetString("UserName");
```

## 2. Cookie
- **Định nghĩa**: `Cookie` là một cơ chế lưu trữ dữ liệu trên **trình duyệt** của người dùng để duy trì thông tin giữa các yêu cầu HTTP. Cookie có thể được gửi qua lại giữa máy chủ và trình duyệt.
- **Lưu trữ**: Dữ liệu được lưu trữ ở phía **trình duyệt** của người dùng và máy chủ có thể đọc hoặc ghi vào cookie khi có yêu cầu HTTP.
- **Thời gian sống**: Thời gian sống của cookie có thể được thiết lập tùy ý. Cookie có thể có thời gian tồn tại ngắn (đến khi trình duyệt đóng) hoặc lâu hơn (lưu trữ trong nhiều ngày, tuần, hoặc tháng).
- **Bảo mật**: Cookie dễ bị tấn công hơn so với `Session`, đặc biệt là tấn công `XSS` (Cross-Site Scripting) và `CSRF` (Cross-Site Request Forgery). Thông tin trong cookie cần được mã hóa nếu chứa dữ liệu nhạy cảm để đảm bảo an toàn.
- **Ứng dụng**: Cookie thường được sử dụng để lưu trữ dữ liệu không nhạy cảm như tuỳ chọn người dùng, thông tin ngôn ngữ, thông tin trạng thái đăng nhập (token).

### Ví dụ sử dụng Cookie trong ASP.NET Razor Pages
```csharp
// Tạo và lưu trữ Cookie
CookieOptions option = new CookieOptions();
option.Expires = DateTime.Now.AddDays(1); // Cookie có thời gian tồn tại 1 ngày
Response.Cookies.Append("UserName", "JohnDoe", option);

// Đọc Cookie
string userName = Request.Cookies["UserName"];
```

## So sánh Session và Cookie

| Đặc điểm            | Session                                  | Cookie                                  |
|---------------------|------------------------------------------|-----------------------------------------|
| **Nơi lưu trữ**     | Máy chủ                                   | Trình duyệt người dùng                  |
| **Thời gian sống**  | Ngắn (thường kết thúc khi đóng trình duyệt hoặc hết thời gian `timeout`) | Tùy thuộc vào thời gian được thiết lập |
| **Dung lượng**      | Không giới hạn, chỉ phụ thuộc bộ nhớ máy chủ | Bị giới hạn (thường tối đa 4KB)          |
| **Bảo mật**         | An toàn hơn, người dùng không truy cập được | Dễ bị tấn công, cần mã hóa nếu có dữ liệu nhạy cảm |
| **Mục đích sử dụng**| Lưu trữ dữ liệu nhạy cảm và dữ liệu trong phiên làm việc | Lưu trữ dữ liệu đơn giản, không nhạy cảm, tùy chọn người dùng |

## Khi nào sử dụng Session và Cookie?
- **Sử dụng `Session`** khi bạn cần lưu trữ dữ liệu chỉ tồn tại trong phiên làm việc của người dùng và dữ liệu đó quan trọng, nhạy cảm, hoặc không nên lưu trữ trên trình duyệt. Ví dụ: thông tin đăng nhập của người dùng sau khi đã xác thực.
- **Sử dụng `Cookie`** khi bạn cần lưu trữ thông tin trong thời gian dài hoặc dữ liệu không quá nhạy cảm, và cần duy trì trạng thái giữa các phiên duyệt khác nhau. Ví dụ: lưu trữ thông tin ngôn ngữ mà người dùng đã chọn.

Bằng cách hiểu rõ sự khác biệt giữa Session và Cookie, bạn có thể đưa ra quyết định tốt hơn về cách lưu trữ thông tin trong ứng dụng ASP.NET Razor Pages một cách an toàn và hiệu quả.