## Hướng dẫn cách cài đặt và cấu hình

### 1. Cài đặt React-Native

- New Folder, cmd Folder đó để gõ lệnh sau:
```typescript
npx react-native@latest init AwesomeProject
```
- Add Folder to Workspace vào trong Visual Studio Code để dễ quản lý
- Tại Terminal của Folder đó gõ 
npx react-native@latest init AwesomeProject
Bước 2: cd AwesomeProject
./gradlew clean để Clean the Gradle cache và try rebuilding
Bước 3: Thiết lập môi trường JAVA_HOME (windows)
Nhấp chuột phải vào This PC hoặc My Computer và chọn Properties.
Chọn Advanced system settings > Environment Variables.
Ở phần System Variables, chọn New và tạo biến mới với:
Variable name: JAVA_HOME
Variable value: Đường dẫn đến thư mục cài đặt JDK 17 (ví dụ: C:\Program Files\Java\jdk-17).
Sau đó, thêm vào biến Path giá trị %JAVA_HOME%\bin.
Bước 4: Cấu hình Android Studio để sử dụng JDK 17
Mở Android Studio.
Vào File > Project Structure > SDK Location.
Ở phần JDK location, chọn đường dẫn đến thư mục JDK 17 mà bạn vừa cài đặt (ví dụ: C:\Program Files\Java\jdk-17).
Bước 5: Đồng bộ lại dự án
Sau khi cấu hình JDK 17, bạn có thể nhấp vào nút Try Again hoặc Sync Project with Gradle Files trong Android Studio để thử đồng bộ và build lại dự án.
