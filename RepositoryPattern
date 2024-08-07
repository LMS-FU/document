# Repository Pattern trong ứng dụng web

Repository Pattern là một pattern rất thường thấy trong các ứng dụng web, đặc biệt khi các kiến trúc như Clean Architecture được phổ biến rộng rãi. Trong các cuộc phỏng vấn mình tham gia, hầu hết mọi người đều sử dụng Repository trong dự án với mục đích "nhằm linh hoạt thay đổi database và tái sử dụng code". Tuy nhiên, câu hỏi đặt ra là:

- **Có bao nhiêu dự án bạn từng làm thực sự thay đổi database hoàn toàn thông qua Repository?**

Câu trả lời: **"Rất hiếm khi"**. Việc thay đổi database bên dưới (từ MySQL sang MongoDB chẳng hạn) đòi hỏi chi phí chuyển đổi rất lớn hơn là chỉ thay đổi cách implement interface. Thông thường, các database sẽ bổ trợ nhau, chứ hiếm khi thay đổi hoàn toàn.

Nếu mục đích là để tái sử dụng code, thì câu hỏi tiếp theo là:

- **Có nhất thiết phải tạo một lớp trừu tượng (interface) rồi implement lại như Repository?**

Rõ ràng chúng ta có thể sử dụng Service Layer để tái sử dụng các phương thức đó. Ngoài ra, các ORM quen thuộc như Sequelize hay TypeORM cũng có thể hỗ trợ Repository Pattern.

Đối với một số ORM như TypeORM, việc hỗ trợ sẵn Repository Pattern càng làm chúng ta khó hiểu ý nghĩa thực sự của Repository: liệu có phải là để gom luồng xử lý database vào một chỗ, hay để thay đổi datasource linh hoạt hơn?

## Định nghĩa của Repository Pattern

Theo Martin Fowler trong *Patterns of Enterprise Application Architecture*:

> "Mediates between the domain and data mapping layers using a collection-like interface for accessing domain objects."

Repository nên là một lớp trung gian giữa business logic và lớp hạ tầng (triển khai database hoặc giao tiếp với external service). Các ORM là một ví dụ tiêu biểu cho triển khai giao tiếp database lớp hạ tầng. Bạn có thể thay thế các ORM này tùy theo khẩu vị của bạn (TypeORM, Sequelize, Prisma, etc.).

### Ví dụ về Repository Pattern

Giả sử bạn có một đối tượng sản phẩm (Product). Tại layer nghiệp vụ (Domain) của bạn, bạn định nghĩa một đối tượng là `Product`. Đối tượng này khác hoàn toàn với Model (hay Entity) `Product` của ORM (cái đại diện để tương tác với database).

#### Interface `ProductRepository`

```csharp
public interface IProductRepository
{
    Product Get(int id);
    void Save(Product product);
    void Delete(Product product);
}
