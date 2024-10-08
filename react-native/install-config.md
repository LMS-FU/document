## Hướng dẫn cách cài đặt và cấu hình

### 1. Cài đặt React-Native

- New Folder, cmd Folder đó để gõ lệnh sau:
```typescript
npx react-native@latest init AwesomeProject
```
- Add Folder to Workspace ( __AwesomeProject__ ) vào trong Visual Studio Code để dễ quản lý
- Nếu quá trình cài lỗi thì thực hiện dòng lệnh sau trong terminal để Clean the Gradle cache và try rebuilding
```typescript
./gradlew clean
```
### 2.Thiết lập môi trường JAVA_HOME (windows)
- Tải [JDK 21](https://www.oracle.com/java/technologies/downloads/#jdk21-windows) và cài đặt vào máy.
- Nhấp chuột phải vào This PC hoặc My Computer và chọn Properties.
- Chọn Advanced system settings > Environment Variables.
- Ở phần System Variables, chọn New và tạo biến mới với:
```typescript
Variable name: JAVA_HOME
Variable value: Đường dẫn đến thư mục cài đặt JDK 21 (ví dụ: C:\Program Files\Java\jdk-21).
```
Sau đó, thêm vào biến Path giá trị 
```typescript
%JAVA_HOME%\bin
```
### 3. Cấu hình Android Studio để sử dụng JDK 21
- Mở Android Studio > Folder Android đã cài đặt ở phần 1.
- Vào File > Project Structure > SDK Location.
Ở phần JDK location, chọn đường dẫn đến thư mục JDK 21 mà bạn vừa cài đặt (ví dụ: C:\Program Files\Java\jdk-21).
- Đồng bộ lại dự án: Sau khi cấu hình JDK 21, bạn có thể nhấp vào nút Try Again hoặc Sync Project with Gradle Files trong Android Studio để thử đồng bộ và build lại dự án.

### 4. Xử lý lỗi
