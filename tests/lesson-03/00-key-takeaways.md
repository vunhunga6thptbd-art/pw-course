# I. Git
## 1. Undo things
### 1.1. undo commit message
- __Thay đổi commit mới nhất:__

        git commit --amend -m"<message_mới>"

            Ví dụ:
                git commit --amend -m”feat: add feature”

### 1.2. un-stage (Staging → Working Directory)
- __Un-stage một file cụ thể:__

        git restore --staged <Tên file>

- __Un-stage tất cả các file:__

        git restore --staged .

### 1.3. un-commit (Repository → Staging)
- __Đưa nội dung commit cuối về staging:__

        git reset --soft HEAD~1

- __Đưa nội dung commit cuối về working directory:__

        git reset HEAD~1


***Lưu ý:***
    
- Commit đầu tiên không thể bị reset.
- Nếu muốn reset → xoá thư mục .git đi rồi init lại

## 2. Branch
### 2.1. Mục đích của tạo nhánh
- Project như một dòng thời gian.

- Branch cho phép tạo ra dòng thời gian song song để:

    + Phát triển tính năng mới mà không ảnh hưởngcode đang chạy ổn định
    
    + Nhiều người làm việc độc lập, không đè lên nhau
    
    + Thử nghiệm, nếu hỏng thì xóa nhánh mà không ảnh
hưởng gì

### 2.2. Bản chất của tạo nhánh mới
- __Không phải copy__ — Branch chỉ là một __con trỏ (pointer)__ trỏ đến một commit.

### 2.3. Các câu lệnh
- __Xem danh sách các nhánh:__
        
        git branch

    ***Lưu ý:*** Cần có ít nhất 1 commit mới hiện danh sách nhánh

- __Chỉ tạo nhánh, chưa chuyển sang nhánh:__
        
        git branch <Tên nhánh>

- __Chuyển nhánh:__

        git checkout <Tên nhánh>

- __Vừa tạo, vừa chuyển nhánh:__
    
        git checkout -b <Tên nhánh>

- __Xóa nhánh:__

        git branch -D <Tên nhánh>

    ***Lưu ý:***
        
    - Không thể xóa nhánh nếu đang đứng tại chính nhánh đó.
    - Cần chuyển sang nhánh khác trước khi xóa.

- __Đưa nhánh lên online (remote):__

        git push origin <Tên nhánh>

- __Xoá nhánh trên online (remote):__

        git push -D origin <Tên nhánh>

# II. JavaScript
## 1. Câu điều kiện
- Câu điều kiện dùng để kiểm tra một đoạn logic trước khi chạy
- Nếu điều kiện đúng thì mới chạy
- Trong JavaScript, có các loại câu điều kiện:

    + if
    + if...else
    + if...else if...else
    + switch...case

- __Cú pháp (Câu điều kiện if):__

        if (<điều kiện>) {
            // code...
        }

    - __Câu điều kiện lồng nhau:__
        
        + Cách 1:
            
                if (<điều kiện>) {
                    if (<điều kiện>) {
                        // code...
                    }
                }

        + Cách 2:
            
                if (<điều kiện 1> && <điều kiện 2>) {
                    // code...
                }

## 2. Vòng lặp
- Vòng lặp dùng để lặp lại 1 đoạn logic.
- Có thể lặp một số lần nhất định, hoặc lặp vô hạn, tuỳ theo điều kiện dừng
- Trong JavaScript, có các loại vòng lặp:
    + for (i)
    + for (of)
    + for (each)
    + for (in)
    + while
    + do...while

- __Cú pháp vòng lặp for (i):__

        for (<điều kiện khởi tạo>; <điều kiện lặp>;<cập nhật>) {
            // code
        }

            Trong đó:
                - Điều kiện khởi tạo: chạy một lần duy nhất, khi vòng lặp bắt đầu.
                - Điều kiện lặp: nếu đúng thì chạy tiếp, sai thì dừng.
                - Cập nhật: chạy vào mỗi cuối vòng lặp, để thay đổi giá trị của biến đếm.

    