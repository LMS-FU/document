# Mục lục

1. [Repository Pattern trong ứng dụng web](#repository-pattern-trong-ứng-dụng-web)
2. [Định nghĩa của Repository Pattern](#định-nghĩa-của-repository-pattern)
3. [Ví dụ về Repository Pattern](#ví-dụ-về-repository-pattern)
   - [Interface `IProductRepository`](#interface-iproductrepository)
   - [Triển khai Repository](#triển-khai-repository)
4. [Lợi ích của Repository Pattern](#lợi-ích-của-repository-pattern)
5. [Tóm tắt](#tóm-tắt)

---

# Repository Pattern trong ứng dụng web

Repository Pattern là một pattern rất thường thấy trong các ứng dụng web, đặc biệt khi các kiến trúc như Clean Architecture được phổ biến rộng rãi. Trong các cuộc phỏng vấn mình tham gia, hầu hết mọi người đều sử dụng Repository trong dự án với mục đích "nhằm linh hoạt thay đổi database và tái sử dụng code". Tuy nhiên, câu hỏi đặt ra là:

- **Có bao nhiêu dự án bạn từng làm thực sự thay đổi database hoàn toàn thông qua Repository?**

Câu trả lời: **"Rất hiếm khi"**. Việc thay đổi database bên dưới (từ MySQL sang MongoDB chẳng hạn) đòi hỏi chi phí chuyển đổi rất lớn hơn là chỉ thay đổi cách implement interface. Thông thường, các database sẽ bổ trợ nhau, chứ hiếm khi thay đổi hoàn toàn.

Nếu mục đích là để tái sử dụng code, thì câu hỏi tiếp theo là:

- **Có nhất thiết phải tạo một lớp trừu tượng (interface) rồi implement lại như Repository?**

Rõ ràng chúng ta có thể sử dụng Service Layer để tái sử dụng các phương thức đó. Ngoài ra, các ORM quen thuộc như Sequelize hay TypeORM cũng có thể hỗ trợ Repository Pattern.

Đối với một số ORM như TypeORM, việc hỗ trợ sẵn Repository Pattern càng làm chúng ta khó hiểu ý nghĩa thực sự của Repository: liệu có phải là để gom luồng xử lý database vào một chỗ, hay để thay đổi datasource linh hoạt hơn?

# Định nghĩa của Repository Pattern

Theo Martin Fowler trong *Patterns of Enterprise Application Architecture*:

> "Mediates between the domain and data mapping layers using a collection-like interface for accessing domain objects."

Repository nên là một lớp trung gian giữa business logic và lớp hạ tầng (triển khai database hoặc giao tiếp với external service). Các ORM là một ví dụ tiêu biểu cho triển khai giao tiếp database lớp hạ tầng. Bạn có thể thay thế các ORM này tùy theo khẩu vị của bạn (TypeORM, Sequelize, Prisma, etc.).

# Ví dụ về Repository Pattern

Giả sử bạn có một đối tượng sản phẩm (Product). Tại layer nghiệp vụ (Domain) của bạn, bạn định nghĩa một đối tượng là `Product`. Đối tượng này khác hoàn toàn với Model (hay Entity) `Product` của ORM (cái đại diện để tương tác với database).

## Interface `ProductRepository`

```csharp
public interface IProductRepository
{
    Product Get(int id);
    void Save(Product product);
    void Delete(Product product);
}
```

Interface này được đặt ở layer nghiệp vụ (Domain). Lớp nghiệp vụ giao tiếp nội bộ bên trong nó và không biết về việc triển khai lại interface này. Điều này giúp nghiệp vụ được tách bạch khỏi việc triển khai kỹ thuật.

## Triển khai Repository

Triển khai Repository nằm ở lớp hạ tầng (Infrastructure). Điều này giúp nghiệp vụ rõ ràng và linh hoạt hơn trong thiết kế.

```csharp
public class ProductRepository : IProductRepository
{
    private readonly MyDbContext _context;

    public ProductRepository(MyDbContext context)
    {
        _context = context;
    }

    public Product Get(int id)
    {
        return _context.Products.Find(id);
    }

    public void Save(Product product)
    {
        _context.Products.Add(product);
        _context.SaveChanges();
    }

    public void Delete(Product product)
    {
        _context.Products.Remove(product);
        _context.SaveChanges();
    }
}
```

# Lợi ích của Repository Pattern

- **Tách biệt nghiệp vụ khỏi technical design:** Giúp bạn linh hoạt hơn trong thiết kế khi nghiệp vụ phức tạp.
- **Linh hoạt trong triển khai:** Repository có thể được implement để gọi API hoặc nâng cấp hạ tầng mà không ảnh hưởng tới nghiệp vụ đã triển khai.

# Tóm tắt

- Repository không phải là ORM. Đừng dùng nó như ORM vì như thế dùng thẳng ORM còn hơn.
- Repository tách biệt khỏi Technical design, là cầu nối giữa nghiệp vụ và triển khai hệ thống.
- Nếu dự án nhỏ, không nên sử dụng Repository. Hãy tận dụng trực tiếp các tính năng mạnh mẽ của các ORM như Sequelize hoặc Prisma.
- Repository khá đơn giản, nhưng nó là cầu nối quan trọng trước khi bạn tiếp cận cách triển khai kiến trúc theo Clean Architecture và Domain Driven Design.

