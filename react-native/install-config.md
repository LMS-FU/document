## Hướng dẫn cách cài đặt và cấu hình

### 1. Cài đặt React-Native

- New Folder, cmd Folder đó để gõ lệnh sau:
```typescript
npx react-native@latest init AwesomeProject
or
npx @react-native-community/cli init AwesomeProject
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

![image](https://github.com/user-attachments/assets/e49bd923-0bf5-4736-b0bd-4da6547a9445)

![image](https://github.com/user-attachments/assets/a9d5bdc6-817c-417a-93fa-b25da9fa1a19)

![image](https://github.com/user-attachments/assets/08595c98-25cb-4017-b17f-fdc51d84cf18)

- Đồng bộ lại dự án: Sau khi cấu hình JDK 21, bạn có thể nhấp vào nút Try Again hoặc Sync Project with Gradle Files trong Android Studio để thử đồng bộ và build lại dự án.
- Quay lại Visual Code, tại Terminal của Folder React Native gõ lệnh chạy

```typescript
npm start
```

![image](https://github.com/user-attachments/assets/80522a2f-88e6-4944-82fe-9930845ea81f)

![image](https://github.com/user-attachments/assets/a1b2838d-28b0-48b7-8105-5c3a676d4865)


### 4. Xử lý lỗi

__4.1. Lỗi liên quan đến việc Gradle không thể di chuyển một không gian làm việc tạm thời khi xây dựng dự án React Native__

- Xóa thư mục .gradle trong thư mục Android của dự án

```typescript
cd android
./gradlew clean
```

__4.2. Lỗi requires JDK17 or higher__

- Cài đặt JDK 21
- Thiết lập biến môi trường JAVA_HOME (Windows)
- Kiểm tra phiên bản JDK
```typescript
java -version
```
- Cấu hình Android Studio để sử dụng JDK
- Đồng bộ lại dự án

__4.3. Kiểm tra lại các gói trong node_modules__

Vì lỗi đến từ node_modules, bạn nên thử xóa và cài đặt lại các gói này để đảm bảo không có gói nào bị hỏng.
- Xóa thư mục node_modules
- Xóa cả cache npm và cài đặt lại:
```typescript
npm cache clean --force
npm install
```
__4.4. Xóa và đồng bộ lại Gradle__

Có thể xóa thư mục .gradle để loại bỏ các tập tin cache có thể gây lỗi và thử đồng bộ lại dự án:

```typescript
rm -rf .gradle
./gradlew clean
./gradlew build
```

__4.5. Giải pháp để thay đổi thư mục cache mặc định của Gradle sang ổ D__

Bạn có thể thay đổi vị trí của thư mục cache của Gradle sang ổ đĩa khác (như ổ D) bằng cách chỉnh sửa tệp gradle.properties hoặc cấu hình thông qua dòng lệnh. Dưới đây là các cách để làm điều đó:

__Sử dụng biến môi trường:__

Bạn cũng có thể thiết lập biến môi trường GRADLE_USER_HOME trỏ đến thư mục bạn muốn trên ổ D.
Truy cập System Properties > Environment Variables > New (trong User variables), và thêm:
Variable name: GRADLE_USER_HOME
Variable value: D:\gradle-cache (hoặc vị trí bạn muốn).
Cần thì khởi động lại máy
