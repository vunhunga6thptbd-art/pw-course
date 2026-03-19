# I. DOM
## 1. Hiểu hơn về DOM
- Khi vào một website, ta nhìn thấy website dưới dạng:
    - Các khối text
    - Các hình ảnh
    - Các liên kết
    - Các ô input

- __Máy tính__ sẽ “nhìn” ở dưới dạng “cây có cấu trúc
    - Mở cây này bằng cách bấm phím F12 (hoặc chuột phải và vùng trống, chọn “Inspect”); sau đó chọn tab “__Element__”
    - Cấu trúc này gọi là __DOM__ (Document Object Model)

## 2. DOM - Các thẻ HTML thường gặp
- Trên thực tế, có rất nhiều loại thẻ khác nhau:
    - __Thẻ tiêu chuẩn:__ thẻ do tổ chức uy tín mozilla định nghĩa
    - __Thẻ tự định nghĩa:__ do lập trình viên/ website tự định nghĩa

- __Các thẻ tiêu chuẩn thường gặp__
    - __Thẻ Cấu Trúc khung trang:__
        
               <html>: Thẻ gốc của trang

               <head>: Chứa metadata: tiêu đề website, hiển thị Google

               <body>: Nội dung của cả website hiển thị

    - __Thẻ Bố Cục & Ngữ nghĩa:__
                
                <div>: Khối/container chung

                <header>, <footer>, <nav>, <section>: Thẻ ngữ nghĩa

    - __Thẻ Nội Dung:__
        
                <h1> đến <h6>: Tiêu đề
                
                <paragraph>: Đoạn văn
                
                <ul>, <ol>, <li>: Danh sách

    - __Thẻ Tương Tác & Media:__
                
                <a>: Liên kết
                
                <img>: Hình ảnh

    - __Thẻ Form (Quan trọng cho Testing):__
        
                <form>: Biểu mẫu
        
                <input>: Ô nhập liệu (text, password, checkbox, radio, etc.)
                
                <button>: Nút bấm
                
                <select> và <option>: Dropdown
                
                <textarea>: Vùng văn bản nhiều dòng

# II. Selector
## 1. Hiểu hơn về selector
- __Automation = tương tác__ với các phần tử trên trang web
    - Input
    - Fill
    - Click
    - ...
- Để tương tác được, ta cần __tìm__ được phần tử này
- Selector là công cụ giúp ta __tìm__
- __Có 3 loại selector thường dùng:__
    - __XPath:__
        - Dùng được trong hầu hết các trường hợp (99.99%)
        - Đa dạng, có khả năng tìm các phần tử khó
        - Hơi dài
        - VD: //button[normalize-space() = ‘Add to cart’]

    - __CSS selector:__
        - Ngắn gọn, performance cao
        - Dùng cho các trường hợp dễ tìm.
        - Không linh hoạt bằng XPath
        - VD: .add-to-cart

    - __Playwright selector:__
        - Chỉ dùng riêng cho Playwright
        - Cú pháp ngắn gọn, không phụ thuộc vào cấu trúc DOM
        - Hướng tới “giống người dùng đang nhìn thấy gì”
        - VD: page.getByText(“Add to cart”);

- __Khi nào thì dùng gì?__
    
        Playwright selector > CSS Selector > XPath

    - Vẫn cần học hiểu cả ba loại để có thể “cân” được mọi loại dự án.
    - Có những dự án “thích” dùng CSS, “thích” dùng XPath, ta buộc phải tuân theo.

## 2. XPath selector
- XPath = XML Path
- Có 2 loại:
    - Tuyệt đối: đi dọc theo cây DOM
        - bắt đầu bởi 1 /
    - Tương đối: tìm dựa vào đặc tính
        - bắt đầu bởi 2 //
        - //tenthe[@thuoctinh=”giatri”]
- Nên dùng XPath tương đối

### 2.1. XPath Tuyệt Đối
- Bắt đầu từ __root__ (gốc), dùng dấu /
        
        /html/body/div/input
- __Đặc điểm:__
    - Bắt đầu bằng /
    - Phải viết đầy đủ đường dẫn từ root
    - Dễ bị lỗi khi cấu trúc HTML thay đổi
    - Ít linh hoạt

### 2.2. XPath Tương Đối
- Bắt đầu từ __bất kỳ đâu__ trong DOM, dùng //
    
        //input[@id=’user’]
- __Đặc điểm:__
    - Bắt đầu bằng //
    - Tìm element ở bất kỳ vị trí nào
    - Linh hoạt, ít bị ảnh hưởng khi HTML thay đổi
    - ***Nên dùng*** trong thực tế

### 2.3. Khi nào dùng gì?
- Dùng tương đối (//): 99% trường hợp
- Tránh tuyệt đối (/): Chỉ khi bạn chắc chắn cấu trúc không đổi
- ***Mẹo:*** Luôn kết hợp với attributes như @id, @class, @name để XPath chính xác hơn!

# III. Playwright basic syntax
## 1. Các cú pháp cơ bản
- Automation = tương tác + verify
- __test:__ Đơn vị cơ bản để khai báo một test
```
import { test } from '@playwright/test';

test('<tên test>', async ({ page }) => {
    // Code của test
});
```
- __step:__ Đơn vị nhỏ hơn test, để khai báo từng step của test case
```
await test.step('Tên step', async () => {
    // Code here
});

Lưu ý: step nên được map 1-1 với test case để dễ dàng maintain.
```

- __Navigate:__
```
await

page.goto('https://pw-practice.playwrightvn.com/');
```

- __Locate:__ Sử dụng page.locator(```<selector>```) để chọn phần tử trên trang
```
VD:
page.locator(“//input[@id=’email’]”)
```
- __Click:__ 
    - Single click
        
            await page.locator("//button").click();

    - Double click
            
            await page.locator("//button").dblclick();

    - Click chuột phải
            
            page.locator("//button").click({
                button: 'right'
            })

    - Click chuột kèm bấm phím khác

            page.locator("").click({
                modifiers: ['Shift'],
            })

- __Input:__
    - Fill
        - Giống việc bạn paste content vào một ô input

                page.locator("//input").fill('Playwright Viet Nam');

    - pressSequentially
        - Giống việc bạn gõ từng chữ cái vào ô input
                
                page.locator("//input").pressSequentially('Playwright Viet Nam', {
                    delay: 100,
                });

- __Radio/checkbox:__
    - Lấy giá trị hiện tại đang là check hay không:
                
                const isChecked = page.locator("//input").isChecked();
    
    - Check/ uncheck
                
                page.locator("//input").check();
                page.locator("//input").setChecked(false);

- __Select:__

                await page.locator('//select[@id=”country”]').selectOption({ label: 'USA' })

- __Upload file:__

                await page.locator("//input[@id='profile']").setInputFiles("<file-path>");




