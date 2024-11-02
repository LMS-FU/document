# Git - Tóm tắt và hướng dẫn sử dụng

## Tạo một repository mới
Để tạo một repository mới, mở cửa sổ lệnh và gõ lệnh sau:

```javascript
git init
```

## Sao chép (clone) một repository
Để clone một repository có sẵn trên máy cục bộ, sử dụng lệnh:

```javascript
git clone /đường-dẫn-đến/repository/
```

## Quy trình làm việc
Thư mục cục bộ của bạn bao gồm ba "trees" được duy trì bởi Git:

- **Working Directory**: Chứa các tập tin hiện tại.
- **Index**: Đóng vai trò như một staging area.
- **HEAD**: Trỏ đến commit gần đây nhất.

## Thêm (add) & Commit
Bạn có thể đề xuất thay đổi bằng cách thêm vào chỉ mục (Index):

```javascript
git add <tên-tập-tin>
git add *
```

Để commit các thay đổi:

```javascript
git commit -m "Ghi chú Commit"
```

Lúc này, tập tin đã được commit đến HEAD, nhưng chưa được đẩy lên repository remote.

## Đẩy (push) các thay đổi
Các thay đổi hiện đang ở HEAD của bản sao cục bộ. Để đẩy chúng đến repository remote:

```javascript
git push origin master
```

Nếu bạn chưa kết nối đến repository remote, bạn cần thêm nó bằng lệnh:

```javascript
git remote add origin <máy-chủ>
```

## Nhánh (Branches)
Các nhánh được dùng để phát triển tính năng độc lập. Tạo nhánh mới và chuyển sang nhánh đó:

```javascript
git checkout -b feature_x
```

Quay lại nhánh master:

```javascript
git checkout master
```

Xóa nhánh feature_x:

```javascript
git branch -d feature_x
```

Đẩy nhánh mới lên remote:

```javascript
git push origin <nhánh>
```

## Cập nhật & Trộn (Update & Merge)
Để cập nhật repository cục bộ với các commit mới nhất:

```javascript
git pull
```

Trộn nhánh khác vào nhánh hiện tại (ví dụ, nhánh master):

```javascript
git merge <nhánh>
```

Nếu xảy ra xung đột, chỉnh sửa thủ công và đánh dấu đã trộn bằng lệnh:

```javascript
git add <tên-tập-tin>
```

## Gắn nhãn (Tagging)
Tạo một tag mới:

```javascript
git tag 1.0.0 1b2e1d63ff
```

Bạn có thể lấy mã commit bằng lệnh:

```javascript
git log
```

Thay thế các thay đổi cục bộ
Nếu bạn muốn thay thế các thay đổi cục bộ:

```javascript
git checkout -- <tên-tập-tin>
```

__Chuyển nhánh__

```javascript
git checkout -b 'tên nhánh'
```

Hoặc hủy tất cả các thay đổi và lấy lại lịch sử từ repository remote:

```javascript
git fetch origin
git reset --hard origin/master
```

## The error "refusing to merge unrelated histories"

```javascript
git pull origin main --allow-unrelated-histories
```

## Các gợi ý hữu ích
- **Git GUI tích hợp sẵn**: `gitk`
- **Hiển thị kết quả git với nhiều màu**: `git config color.ui true`
- **Hiện log chỉ một dòng mỗi commit**: `git config format.pretty oneline`
- **Sử dụng thêm tập tin tương tác**: `git add -i`


