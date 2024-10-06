# Phân biệt `type` và `interface` trong TypeScript

## 1. **`interface`**
- **Định nghĩa cấu trúc của một đối tượng**. Interface có thể được mở rộng (extend) và hợp nhất (declaration merging).
- **Mở rộng nhiều interface khác**: Interface cho phép mở rộng (extend) từ nhiều interface khác.
- **Declaration Merging**: Nếu cùng một tên interface được khai báo nhiều lần, TypeScript sẽ tự động hợp nhất chúng.

```typescript
interface User {
  name: string;
  age: number;
}

interface Admin extends User {
  isAdmin: boolean;
}

const admin: Admin = {
  name: 'Alice',
  age: 30,
  isAdmin: true
};

```

**Declaration Merging:**

```typescript
interface User {
  email: string;
}

const user: User = {
  name: 'Bob',
  age: 25,
  email: 'bob@example.com'
};

```

Ở đây, `User` được hợp nhất từ hai lần khai báo. Điều này có nghĩa là hai khai báo interface với cùng tên `User` sẽ được TypeScript tự động kết hợp lại thành một. Khi đó, `User` sẽ bao gồm cả các thuộc tính `name`, `age` từ khai báo đầu tiên và `email` từ khai báo thứ hai.

## 2. **`type`**
- **Định nghĩa kiểu dữ liệu phức tạp**: `type` có thể sử dụng cho nhiều thứ hơn, không chỉ là đối tượng (object). Nó có thể định nghĩa các **union**, **intersection**, **tuple**, và nhiều kiểu dữ liệu phức tạp khác.
- **Không thể mở rộng (extend)** từ nhiều `type` như `interface`. Tuy nhiên, `type` hỗ trợ **union** và **intersection**, giúp tạo ra các kiểu phức tạp hơn.
- **Không hỗ trợ Declaration Merging**: Không giống như `interface`, `type` không thể tự động kết hợp khi được khai báo nhiều lần với cùng một tên.

### Ví dụ về `type`:

```typescript
type User = {
  name: string;
  age: number;
};

type Admin = User & {
  isAdmin: boolean;
};

const admin: Admin = {
  name: 'Alice',
  age: 30,
  isAdmin: true
};

```

Trong ví dụ trên, type được sử dụng để tạo ra kiểu User và sau đó kết hợp với một kiểu mới là Admin thông qua intersection (&). Kiểu Admin sẽ bao gồm tất cả các thuộc tính của User cùng với thuộc tính mới isAdmin.

### Union và Intersection:

Trong TypeScript, `type` có thể sử dụng để định nghĩa các **union** và **intersection**. Đây là những tính năng mạnh mẽ giúp bạn tạo ra các kiểu dữ liệu phức tạp.

- **Union Type**: Cho phép một biến có thể là một trong nhiều kiểu dữ liệu khác nhau.
- **Intersection Type**: Kết hợp nhiều kiểu dữ liệu lại với nhau, yêu cầu biến phải có tất cả các thuộc tính của các kiểu dữ liệu đó.

#### Ví dụ về Union Type:

```typescript
type Role = 'admin' | 'user' | 'guest'; // Union type

let userRole: Role;

userRole = 'admin';  // Hợp lệ
userRole = 'guest';  // Hợp lệ
userRole = 'superuser';  // Không hợp lệ, vì 'superuser' không có trong union type

```

Trong ví dụ này, userRole chỉ có thể nhận một trong các giá trị 'admin', 'user', hoặc 'guest'. Nếu gán bất kỳ giá trị nào khác, TypeScript sẽ báo lỗi.

### Ví dụ về Intersection Type:

Intersection Type trong TypeScript kết hợp nhiều kiểu dữ liệu lại với nhau, tạo ra một kiểu mới có tất cả các thuộc tính của các kiểu dữ liệu ban đầu.

#### Ví dụ cụ thể:

```typescript
type Person = {
  name: string;
  age: number;
};

type Employee = {
  employeeId: number;
  department: string;
};

type Staff = Person & Employee; // Intersection type

const staffMember: Staff = {
  name: 'Alice',
  age: 28,
  employeeId: 101,
  department: 'HR'
};

```

Trong ví dụ này:

- **`Person`** định nghĩa một đối tượng có các thuộc tính `name` (kiểu `string`) và `age` (kiểu `number`).
- **`Employee`** định nghĩa một đối tượng có các thuộc tính `employeeId` (kiểu `number`) và `department` (kiểu `string`).
- **`Staff`** là **Intersection Type** kết hợp giữa `Person` và `Employee`, nghĩa là đối tượng kiểu `Staff` phải có tất cả các thuộc tính của cả hai kiểu `Person` và `Employee`.

Vì vậy, đối tượng `staffMember` phải có đầy đủ các thuộc tính:
- `name` (từ `Person`)
- `age` (từ `Person`)
- `employeeId` (từ `Employee`)
- `department` (từ `Employee`)

Như vậy, đối tượng `staffMember` là một ví dụ về kiểu dữ liệu kết hợp, bao gồm tất cả các thuộc tính từ hai kiểu dữ liệu khác nhau (`Person` và `Employee`).

Khi sử dụng **Intersection Type**, TypeScript sẽ yêu cầu đối tượng có đầy đủ tất cả các thuộc tính của các kiểu đã được kết hợp. Điều này rất hữu ích khi bạn muốn tạo ra các kiểu dữ liệu phức tạp hơn bằng cách kết hợp nhiều kiểu khác nhau mà không cần phải khai báo lại từng thuộc tính.

Ví dụ trong trường hợp này, `Staff` thừa hưởng tất cả các thuộc tính từ cả `Person` và `Employee`, giúp bạn đảm bảo rằng một đối tượng thuộc kiểu `Staff` sẽ luôn có đầy đủ các thông tin cần thiết như tên, tuổi, mã nhân viên và phòng ban.

```typescript
const staffMember: Staff = {
  name: 'Alice',
  age: 28,
  employeeId: 101,
  department: 'HR'
};

```

Như vậy, `staffMember` là một đối tượng hợp lệ với tất cả các thuộc tính từ cả hai kiểu `Person` và `Employee`. Nhờ vào **Intersection Type**, chúng ta có thể kết hợp hai kiểu riêng biệt lại với nhau một cách dễ dàng mà không cần phải định nghĩa lại toàn bộ các thuộc tính.

Điều này đặc biệt hữu ích khi bạn cần xử lý các đối tượng có nhiều thuộc tính đến từ các nguồn khác nhau hoặc khi làm việc với các kiểu dữ liệu phức tạp mà bạn không muốn lặp lại mã. Nó giúp tăng tính tái sử dụng và giữ cho mã nguồn gọn gàng hơn.

### Lợi ích của Intersection Type:
- **Tái sử dụng**: Giảm thiểu sự lặp lại bằng cách kết hợp các kiểu đã định nghĩa trước đó.
- **Tính linh hoạt**: Bạn có thể mở rộng các kiểu hiện có mà không cần sửa đổi cấu trúc ban đầu.
- **Quản lý tốt hơn**: Khi làm việc với các hệ thống phức tạp, Intersection Type giúp dễ dàng quản lý các đối tượng phức tạp với nhiều thuộc tính mà không cần khai báo lại từ đầu.

Ví dụ, nếu bạn cần thêm thuộc tính mới vào `Person` hoặc `Employee`, Intersection Type sẽ tự động kế thừa những thay đổi đó, giúp duy trì sự nhất quán mà không cần thay đổi `Staff`.

```typescript
type Person = {
  name: string;
  age: number;
  address: string; // Thêm thuộc tính mới
};

type Staff = Person & Employee;

const staffMember: Staff = {
  name: 'Alice',
  age: 28,
  address: '123 Main St',  // Thuộc tính mới cũng có mặt
  employeeId: 101,
  department: 'HR'
};

```

Trong ví dụ trên, chúng ta thêm thuộc tính `address` vào `Person`, và đối tượng `Staff` tự động thừa hưởng thuộc tính mới này mà không cần thay đổi thêm gì ở phần kết hợp với `Employee`. Điều này cho thấy sự linh hoạt và mạnh mẽ của **Intersection Type** trong TypeScript.

### Tại sao nên sử dụng Intersection Type?
- **Dễ dàng mở rộng**: Khi bạn thêm hoặc thay đổi các thuộc tính trong các kiểu dữ liệu cơ bản, các kiểu kết hợp (Intersection) sẽ tự động kế thừa những thay đổi đó mà không cần điều chỉnh mã ở các phần liên quan. Điều này giúp tiết kiệm thời gian khi bảo trì mã.
- **Tính nhất quán cao**: Khi kết hợp nhiều kiểu với nhau, bạn đảm bảo rằng tất cả các đối tượng đều tuân thủ theo một cấu trúc cố định, giảm thiểu sai sót do thiếu hoặc sai thuộc tính.
- **Sử dụng trong nhiều ngữ cảnh**: Intersection Type rất hữu ích khi làm việc với các đối tượng có nhiều vai trò, chẳng hạn như trong ví dụ trên, một nhân viên (`Staff`) có cả thuộc tính của một người (`Person`) và một nhân viên công ty (`Employee`).

#### Một ví dụ phức tạp hơn:
```typescript
type ContactInfo = {
  phone: string;
  email: string;
};

type Person = {
  name: string;
  age: number;
  address: string;
};

type Employee = {
  employeeId: number;
  department: string;
};

type Staff = Person & Employee & ContactInfo; // Intersection với nhiều kiểu

const staffMember: Staff = {
  name: 'Alice',
  age: 28,
  address: '123 Main St',
  employeeId: 101,
  department: 'HR',
  phone: '123-456-7890',
  email: 'alice@example.com'
};

```

Trong ví dụ này, `Staff` không chỉ kết hợp `Person` và `Employee`, mà còn thêm cả kiểu `ContactInfo`. Đối tượng `staffMember` giờ đây phải chứa tất cả các thuộc tính từ cả ba kiểu `Person`, `Employee`, và `ContactInfo`. Điều này giúp bạn dễ dàng mở rộng và kết hợp các kiểu dữ liệu mà không làm phức tạp mã nguồn.

### Tính tiện ích của việc kết hợp nhiều kiểu:
- **Dễ dàng bảo trì**: Khi bạn thêm các thuộc tính mới vào một kiểu dữ liệu, các kiểu kết hợp tự động cập nhật, giúp bạn không phải điều chỉnh từng nơi riêng lẻ. Điều này đặc biệt hữu ích khi bạn làm việc với các đối tượng có cấu trúc phức tạp.
- **Tính linh hoạt cao**: Bạn có thể dễ dàng kết hợp nhiều kiểu để tạo ra các kiểu mới mà không cần phải viết lại nhiều mã. Điều này giúp bạn dễ dàng tái sử dụng các thành phần hiện có và giảm thiểu sự trùng lặp trong mã nguồn.
  
Ví dụ, nếu cần thêm thông tin liên lạc vào một nhân viên (cả địa chỉ, email và số điện thoại), thay vì phải viết lại kiểu dữ liệu từ đầu, bạn chỉ cần sử dụng Intersection Type để kết hợp các kiểu lại với nhau.

### Một ví dụ khác về sự linh hoạt của Intersection Type:

```typescript
type Account = {
  username: string;
  password: string;
};

type Profile = {
  name: string;
  age: number;
  bio: string;
};

type UserAccount = Account & Profile;

const user: UserAccount = {
  username: 'john_doe',
  password: 'securepassword123',
  name: 'John Doe',
  age: 30,
  bio: 'Software developer and tech enthusiast.'
};

```

Trong ví dụ này:

- **`UserAccount`** là sự kết hợp của hai kiểu dữ liệu `Account` và `Profile`. Điều này có nghĩa là kiểu `UserAccount` sẽ bao gồm tất cả các thuộc tính của cả hai kiểu.
- Đối tượng **`user`** bây giờ phải chứa tất cả các thuộc tính từ cả `Account` (bao gồm `username` và `password`) và `Profile` (bao gồm `name`, `age`, và `bio`).

Điều này minh họa cho việc **Intersection Type** cho phép bạn dễ dàng kết hợp các kiểu dữ liệu có liên quan với nhau để tạo ra các đối tượng có đầy đủ thông tin mà không cần phải định nghĩa lại từng phần của dữ liệu.

Thay vì phải sao chép hoặc viết lại các thuộc tính của `Account` và `Profile` trong một kiểu mới, bạn chỉ cần sử dụng Intersection Type để kết hợp các kiểu lại với nhau. Điều này giúp mã của bạn:
- **Gọn gàng hơn**: Bạn không phải viết lại cấu trúc hoặc các thuộc tính đã định nghĩa.
- **Dễ bảo trì**: Nếu bạn muốn thay đổi hoặc thêm mới thuộc tính vào `Account` hoặc `Profile`, tất cả các kiểu kết hợp sẽ tự động kế thừa những thay đổi này mà không cần chỉnh sửa thêm.
- **Mở rộng linh hoạt**: Bạn có thể dễ dàng kết hợp nhiều kiểu dữ liệu khác nhau để tạo ra các cấu trúc đối tượng phù hợp cho các trường hợp sử dụng phức tạp.

Ví dụ, nếu sau này bạn cần thêm thuộc tính `address` vào `Profile`, kiểu `UserAccount` sẽ tự động kế thừa thuộc tính mới này mà không cần phải thay đổi gì thêm trong định nghĩa `UserAccount`.

```typescript
type Profile = {
  name: string;
  age: number;
  bio: string;
  address: string; // Thuộc tính mới
};

type UserAccount = Account & Profile;

const user: UserAccount = {
  username: 'john_doe',
  password: 'securepassword123',
  name: 'John Doe',
  age: 30,
  bio: 'Software developer and tech enthusiast.',
  address: '123 Main St'
};

```

Trong ví dụ trên, UserAccount tự động có thuộc tính address mà không cần phải chỉnh sửa thêm bất kỳ phần nào khác của mã. Điều này cho thấy cách mà Intersection Type giúp mã nguồn linh hoạt và dễ bảo trì hơn khi làm việc với các kiểu dữ liệu phức tạp.