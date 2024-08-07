# UML – Công cụ mạnh mẽ hỗ trợ thiết kế phần mềm

## UML là gì?
UML (Unified Modeling Language – ngôn ngữ mô hình thống nhất) là ngôn ngữ dành cho việc đặc tả, hình dung, xây dựng và làm tài liệu của các phần mềm, ứng dụng. UML được tạo ra ở Rational Software - doanh nghiệp thành lập bởi Paul Levy và Mike Devlin vào năm 1994 – 1995 với mong muốn chuẩn hóa các hệ thống kí hiệu và phương pháp phát triển phần mềm.

## Một số loại UML phổ biến
### Use Case Diagram
Use Case Diagram miêu tả chức năng của hệ thống cung cấp theo hướng nhìn từ ngoài vào mà không miêu tả các chức năng nội bộ bên trong sẽ hoạt động ra sao. Sơ đồ use case giúp hiển thị các tình huống cụ thể và các actor liên quan, qua đó đảm bảo phần mềm sẽ đáp ứng yêu cầu đặt ra.

Một use case diagram sẽ bao gồm các thành phần: Actor, Use Case và Relationship.
- **Actor (người sử dụng):** là bất kỳ thứ gì tương tác với hệ thống, có sự trao đổi dữ liệu với hệ thống có thể là người dùng, hệ thống phần mềm khác hay thiết bị phần cứng, thường được kí hiệu bằng một hình người.
- **Use case (chức năng):** Mô tả chức năng của hệ thống, là một chuỗi các hành động của hệ thống thực hiện dẫn đến kết quả cho một actor.
- **Relationship (quan hệ trong Use Case):** được mô tả thông qua 4 kiểu là association, include, extend và generalization.
  - **Association:** thường dùng để mô tả quan hệ tương tác giữa các actor, các use case hoặc giữa actor và use case.
  - **Include:** mô tả một use case lớn được chia ra thành các use case nhỏ hơn thuận tiện cho việc cài đặt hoặc tái sử dụng chức năng của một use case khác.
  - **Extend:** mô tả một use case bổ sung chức năng cho một use case khác có sẵn.
  - **Generalization:** thể hiện quan hệ thừa kế giữa các use case hoặc các actor với nhau.

### Class Diagram
Class diagram cung cấp cái nhìn tổng quan về các thành phần, đối tượng trong hệ thống và mối quan hệ giữa chúng, giúp xác định cấu trúc và thiết kế của hệ thống.

Một class diagram gồm 2 thành phần chính: class và relationship.
- **Class (lớp):** bao gồm 3 thành phần cơ bản: tên lớp, các thuộc tính và các phương thức. Ngoài ra còn có các kí hiệu thể hiện phạm vi truy cập của các thuộc tính và phương thức:
  - Private access ( – )
  - Public access ( + )
  - Protected access ( # )
- **Relationship trong class diagram** được chia làm 4 loại:
  - **Inheritance:** chỉ một class kế thừa một class khác.
  - **Association:** chỉ hai class có mối quan hệ với nhau nhưng không chỉ rõ là quan hệ gì.
  - **Aggregation:** nếu đối tượng từ class này mất thì đối tượng từ class kia vẫn có thể tồn tại.
  - **Composition:** nếu đối tượng từ class này mất thì đối tượng từ class kia cũng sẽ mất.

### Sequence Diagram
Sequence Diagram chủ yếu mô tả cách đối tượng trong hệ thống tương tác với nhau theo thời gian. Sequence diagram miêu tả chi tiết các thông điệp được gửi và nhận giữa các đối tượng đồng thời cũng chú trọng đến trình tự thời gian gửi và nhận các thông điệp đó.

Các thành phần chính của một sequence diagram:
- **Object:** biểu diễn bằng hình chữ nhật có tên bên trong, bên dưới có một đường dọc gạch đứt (lifeline).
- **Lifeline:** đường thẳng dọc biểu thị sự tồn tại của đối tượng trong quá trình tương tác.
- **Message (thông điệp):** biểu diễn bằng đường mũi tên, chỉ thông điệp, hành động truyền từ đối tượng này sang đối tượng khác.
- **Activation:** biểu diễn bằng hình chữ nhật nhỏ trên lifeline chỉ thời gian một đối tượng thực hiện một hành động nào đó.

## Kết luận
Trong thực tế, hầu hết các dự án phần mềm đều sử dụng UML trong khâu thiết kế, việc này giúp cho quá trình bảo trì và phát triển dự án trở nên dễ dàng hơn. Mỗi loại biểu đồ UML được sử dụng tại các giai đoạn khác nhau trong quá trình phát triển phần mềm. Việc kết hợp linh hoạt các biểu đồ này không chỉ giúp ta hiểu rõ hơn về hệ thống mà còn hỗ trợ quá trình thiết kế và triển khai phần mềm hiệu quả.
