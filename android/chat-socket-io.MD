Hướng Dẫn Xây Dựng Ứng Dụng Chat Với Socket.IO
# Mục Lục
- [Server (Node.js + Socket.IO)](#server-nodejs--socketio)
    - [Cài đặt Node.js và Socket.IO](#cài-đặt-nodejs-và-socketio)
    - [Tạo file server.js](#tạo-file-serverjs)
    - [Khởi chạy server](#khởi-chạy-server)
- [Client (Android - Java)](#client-android---java)
    - [Thêm Socket.IO vào build.gradle](#thêm-socketio-vào-buildgradle)
    - [Code MainActivity.java](#code-mainactivityjava)
    - [Thiết kế giao diện activity_main.xml](#thiết-kế-giao-diện-activity_mainxml)
- [Giải thích các phần](#giải-thích-các-phần)
- [Lưu ý](#lưu-ý)

## Server (Node.js + Socket.IO)

### Cài Đặt Node.js và Socket.IO
Tạo một thư mục mới và mở terminal trong thư mục đó.

Khởi tạo một dự án Node.js:

```bash
npm init -y
```

Cài đặt Socket.IO:

```bash
npm install socket.io
```

### Tạo File server.js
Tạo file `server.js` với mã sau:

```javascript
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Khi có kết nối từ client
io.on('connection', (socket) => {
        console.log('A user connected:', socket.id);

        // Lắng nghe sự kiện 'message' từ client
        socket.on('message', (msg) => {
                console.log('Message received:', msg);

                // Phát lại tin nhắn đến tất cả các client
                io.emit('message', msg);
        });

        // Khi client ngắt kết nối
        socket.on('disconnect', () => {
                console.log('A user disconnected:', socket.id);
        });
});

// Khởi chạy server
const PORT = 3000;
server.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
});
```

### Khởi Chạy Server
Chạy lệnh sau để khởi chạy server:

```bash
node server.js
```

Server sẽ chạy ở `http://localhost:3000` và lắng nghe các kết nối Socket.IO.

## Client (Android - Java)

### Thêm Socket.IO vào build.gradle
Mở `build.gradle` của module app và thêm dòng sau vào dependencies:

```groovy
implementation 'io.socket:socket.io-client:1.0.0' // Kiểm tra phiên bản mới nhất nếu cần
```

### Code MainActivity.java
Tạo `MainActivity.java` với mã sau:

```java
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;

import androidx.appcompat.app.AppCompatActivity;

import org.json.JSONException;
import org.json.JSONObject;

import java.net.URISyntaxException;

import io.socket.client.IO;
import io.socket.client.Socket;
import io.socket.emitter.Emitter;

public class MainActivity extends AppCompatActivity {

        private Socket mSocket;
        private TextView messagesTextView;
        private EditText messageInput;
        private Button sendButton;

        @Override
        protected void onCreate(Bundle savedInstanceState) {
                super.onCreate(savedInstanceState);
                setContentView(R.layout.activity_main);

                messagesTextView = findViewById(R.id.messagesTextView);
                messageInput = findViewById(R.id.messageInput);
                sendButton = findViewById(R.id.sendButton);

                try {
                        mSocket = IO.socket("http://10.0.2.2:3000"); // Đổi sang URL của server nếu cần
                } catch (URISyntaxException e) {
                        e.printStackTrace();
                }

                // Kết nối tới server
                mSocket.connect();

                // Lắng nghe sự kiện 'message' từ server
                mSocket.on("message", onNewMessage);

                // Xử lý nút gửi tin nhắn
                sendButton.setOnClickListener(new View.OnClickListener() {
                        @Override
                        public void onClick(View v) {
                                String message = messageInput.getText().toString().trim();
                                if (!message.isEmpty()) {
                                        mSocket.emit("message", message); // Gửi tin nhắn đến server
                                        messageInput.setText("");
                                }
                        }
                });
        }

        private Emitter.Listener onNewMessage = new Emitter.Listener() {
                @Override
                public void call(Object... args) {
                        final String message = (String) args[0];
                        runOnUiThread(new Runnable() {
                                @Override
                                public void run() {
                                        messagesTextView.append("Server: " + message + "\n");
                                }
                        });
                }
        };

        @Override
        protected void onDestroy() {
                super.onDestroy();
                mSocket.disconnect();
                mSocket.off("message", onNewMessage);
        }
}
```

### Thiết Kế Giao Diện activity_main.xml
Tạo file `activity_main.xml` trong thư mục `res/layout` với mã sau:

```xml
<LinearLayout
        xmlns:android="http://schemas.android.com/apk/res/android"
        android:layout_width="match_parent"
        android:layout_height="match_parent"
        android:orientation="vertical"
        android:padding="16dp">

        <TextView
                android:id="@+id/messagesTextView"
                android:layout_width="match_parent"
                android:layout_height="0dp"
                android:layout_weight="1"
                android:scrollbars="vertical"
                android:text="Messages will appear here..."
                android:padding="8dp"/>

        <EditText
                android:id="@+id/messageInput"
                android:layout_width="match_parent"
                android:layout_height="wrap_content"
                android:hint="Enter your message"/>

        <Button
                android:id="@+id/sendButton"
                android:layout_width="wrap_content"
                android:layout_height="wrap_content"
                android:text="Send"/>

</LinearLayout>
```

## Giải Thích Các Phần

### Server (Node.js)
Server lắng nghe kết nối từ client và xử lý sự kiện message. Khi nhận được tin nhắn từ client, server sẽ phát lại tin nhắn đó cho tất cả các client.

### Client (Android)
- **Kết nối với server**: Client kết nối với server thông qua URL (`http://10.0.2.2:3000` cho Android Emulator).
- **Gửi tin nhắn**: Khi nhấn nút gửi, tin nhắn sẽ được gửi đến server qua sự kiện message.
- **Nhận tin nhắn**: Client lắng nghe sự kiện message từ server và hiển thị tin nhắn vào TextView.

## Lưu Ý
Thay `http://10.0.2.2:3000` bằng địa chỉ IP hoặc URL của server nếu bạn chạy server ở nơi khác.

Đảm bảo bạn đã cấp quyền truy cập Internet cho ứng dụng trong `AndroidManifest.xml`:

```xml
<uses-permission android:name="android.permission.INTERNET" />
```

Bây giờ bạn có thể chạy cả server và client để kiểm tra việc gửi và nhận tin nhắn thời gian thực giữa chúng.