Để làm sơ đồ Mermaid có màu sắc phong phú hơn, bạn có thể sử dụng các thuộc tính tuỳ chỉnh như style và classDef để điều chỉnh màu sắc và kiểu dáng của các nút và liên kết trong sơ đồ. Dưới đây là cách thực hiện:

# Cách đổi màu sắc trong Mermaid
__1. Sử dụng style__
Bạn có thể áp dụng màu sắc riêng cho từng node bằng cách dùng style trong Mermaid:

```typescript
```mermaid
graph TD
    A[Đăng nhập] --> B[Chọn sở thích]
    B --> C[Khám phá phòng]
    C --> D[Tham gia phòng]
    D --> E[Tương tác]
    E --> F[Kết nối bạn bè]

    %% Định nghĩa màu sắc cho từng node
    style A fill:#ffcccc,stroke:#ff0000,stroke-width:2px
    style B fill:#ccffcc,stroke:#008000,stroke-width:2px
    style C fill:#ccccff,stroke:#0000ff,stroke-width:2px
    style D fill:#ffffcc,stroke:#ffcc00,stroke-width:2px
    style E fill:#ffccff,stroke:#ff00ff,stroke-width:2px
    style F fill:#ccffff,stroke:#00cccc,stroke-width:2px
```

```mermaid
graph TD
    A[Đăng nhập] --> B[Chọn sở thích]
    B --> C[Khám phá phòng]
    C --> D[Tham gia phòng]
    D --> E[Tương tác]
    E --> F[Kết nối bạn bè]

    %% Định nghĩa màu sắc cho từng node
    style A fill:#ffcccc,stroke:#ff0000,stroke-width:2px
    style B fill:#ccffcc,stroke:#008000,stroke-width:2px
    style C fill:#ccccff,stroke:#0000ff,stroke-width:2px
    style D fill:#ffffcc,stroke:#ffcc00,stroke-width:2px
    style E fill:#ffccff,stroke:#ff00ff,stroke-width:2px
    style F fill:#ccffff,stroke:#00cccc,stroke-width:2px

```

__2. Sử dụng classDef và class__
Nếu bạn có nhiều node cần cùng một kiểu màu, sử dụng classDef để định nghĩa lớp và áp dụng bằng class.

```typescript
```mermaid
graph TD
    A[Đăng nhập] --> B[Chọn sở thích]
    B --> C[Khám phá phòng]
    C --> D[Tham gia phòng]
    D --> E[Tương tác]
    E --> F[Kết nối bạn bè]

    %% Định nghĩa các class
    classDef highlight fill:#ffcccc,stroke:#ff0000,stroke-width:2px
    classDef green fill:#ccffcc,stroke:#008000,stroke-width:2px
    classDef blue fill:#ccccff,stroke:#0000ff,stroke-width:2px

    %% Áp dụng class vào các node
    class A,B highlight
    class C green
    class D,E,F blue
```

```mermaid
graph TD
    A[Đăng nhập] --> B[Chọn sở thích]
    B --> C[Khám phá phòng]
    C --> D[Tham gia phòng]
    D --> E[Tương tác]
    E --> F[Kết nối bạn bè]

    %% Định nghĩa các class
    classDef highlight fill:#ffcccc,stroke:#ff0000,stroke-width:2px
    classDef green fill:#ccffcc,stroke:#008000,stroke-width:2px
    classDef blue fill:#ccccff,stroke:#0000ff,stroke-width:2px

    %% Áp dụng class vào các node
    class A,B highlight
    class C green
    class D,E,F blue

```

__3. Đổi màu liên kết (Edge)__
Bạn có thể thay đổi màu sắc và kiểu dáng của liên kết bằng cách sử dụng linkStyle.

```typescript
```mermaid
graph TD
    A[Đăng nhập] --> B[Chọn sở thích]
    B --> C[Khám phá phòng]
    C --> D[Tham gia phòng]
    D --> E[Tương tác]
    E --> F[Kết nối bạn bè]

    %% Định nghĩa màu sắc cho các liên kết
    linkStyle 0 stroke:#ff0000,stroke-width:2px
    linkStyle 1 stroke:#00ff00,stroke-width:2px
    linkStyle 2 stroke:#0000ff,stroke-width:2px
    linkStyle 3 stroke:#ffcc00,stroke-width:2px
    linkStyle 4 stroke:#ff00ff,stroke-width:2px

```

```mermaid
graph TD
    A[Đăng nhập] --> B[Chọn sở thích]
    B --> C[Khám phá phòng]
    C --> D[Tham gia phòng]
    D --> E[Tương tác]
    E --> F[Kết nối bạn bè]

    %% Định nghĩa màu sắc cho các liên kết
    linkStyle 0 stroke:#ff0000,stroke-width:2px
    linkStyle 1 stroke:#00ff00,stroke-width:2px
    linkStyle 2 stroke:#0000ff,stroke-width:2px
    linkStyle 3 stroke:#ffcc00,stroke-width:2px
    linkStyle 4 stroke:#ff00ff,stroke-width:2px

```

__Lưu ý__
- Sử dụng mã màu HEX hoặc RGB cho màu sắc (VD: #ffcccc hoặc rgb(255,204,204)).
- Các thuộc tính bạn có thể tuỳ chỉnh:
    - __fill__: Màu nền của node.
    - __stroke__: Màu viền của node.
    - __stroke-width__: Độ dày của viền.
- Để xem trước hiệu ứng, bạn nên sử dụng Mermaid Live Editor hoặc VS Code với plugin hỗ trợ.
- Nhấn tổ hợp phím Ctrl + Shift + V để xem
