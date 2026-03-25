# I. DOM: RELATION
## 1. DOM: visualize
- Trực quan hóa DOM
- Hiểu cấu trúc cây DOM của một trang web

## 2. DOM: quy ước
- Xanh dương: node gốc
- Xanh lá: node hiện tại
- Cam: node cần chú ý

## 3. DOM: relation
- __self:__ node hiện tại
- __parent:__ cha
    - là node phía trên trực tiếp của node hiện tại
- __children:__ con
    - là node phía dưới trực tiếp của node hiện tại
- __ancestor:__ tổ tiên
- __descendant:__ hậu duệ
    - là các node con, cháu, chắt,...
- __sibling:__ anh em
    - Là những phần tử cùng cấp và cùng cha
- __following:__ theo sau
    - Gồm các node ở phía bên tay phải của node hiện tại.
    - NOTE: không lấy những thằng con của node hiện tại
- __preceding:__ phía trước
    - Gồm các node ở phía bên tay trái của node hiện tại, trừ các node ancestor
- __following-sibling:__ anh em phía sau
    - = following + sibling
- __preceding-sibling:__ anh em phía trước
    - = preceding + sibling

# II. Xpath
- XPath axes methods (phương thức trục XPath) là các phương pháp để điều hướng và chọn các node trong cây DOM XML/HTML dựa trên mối quan hệ giữa các node với nhau.
- __Công dụng__
    - Tìm kiếm elements dựa trên vị trí tương đối (parent, child, sibling, ancestor...)
    - Linh hoạt hơn việc chỉ dùng đường dẫn tuyệt đối hoặc tương đối

- __Wildcard: *__
    - Nghĩa là khớp tất cả
    - VD:

            //div -> khớp thẻ div
            //* -> khớp tất cả các loại thẻ

- __child - Con trực tiếp__
    - VD:

            - Tìm tất cả các button con trực tiếp của form
            //form[@id='test-form']/child::button

            => Kết quả: button "Create Test Case" và "Reset Form"

- __descendant - Tất cả con cháu__
    - VD:

            Tìm tất cả input bên trong form (mọi cấp)
            //form[@id='test-form']/descendant::input

            => Kết quả: input testName, priority (bên trong div.form-group)

- __parent - Tìm cha__
    - VD:

            Tìm form cha của button "Create Test Case" 
            //button[text()='Create Test Case']/parent::form

            => Kết quả: form#test-form

- __ancestor - Tìm tổ tiên__
    - VD:

            Từ button "Edit" trong table, tìm table tổ tiên 
            //button[@class='btn-edit']/ancestor::table

            => Kết quả: table#test-table

- __following-sibling - Anh em phía sau__
    - VD:

            Từ label "Test Case Name", tìm input cùng cấp ngay sau nó
            //label[@for='testName']/following-sibling::input
            => Kết quả: input#testName
            —--
            Từ cột "Test Name" có text "Login Validation", lấy các cột tiếp theo
            //td[text()='Login Validation']/following-sibling::td
            => Kết quả: cột Type, Priority, Status, Actions

- __preceding-sibling - Anh em đứng trước__
    - VD:

            Từ button "Reset Form", tìm button đứng trước nó
            //button[@class='btn-reset']/preceding-sibling::button

            => Kết quả: button "Create Test Case"


- __following - Tất cả node sau trong document__
    - VD:

            Từ h2 "Test Cases List", tìm tất cả button "Run Test" phía sau
            //h2[text()='Test Cases List']/following::button[@class='btn-run']

            => Kết quả: Tất cả 5 button "Run Test" trong bảng

- __ancestor-or-self - Tổ tiên hoặc chính nó__
    - VD:

            Tìm tất cả span status trong table (bao gồm cả chính nó nếu là span)
            //table[@id='test-table']/ancestor-or-self::span[contains(@class, 'status')]

            => Kết quả: Tất cả span status-passed, status-running, status-failed, status-pending

- __preceding - Tất cả node trước trong document__
    - VD:

            Từ h2 "Test Execution Results", tìm tất cả td có text "High" phía trước
            //h2[text()='Test Execution Results']/preceding::td[@class='priority-high']

            => Kết quả: TC001 và TC003 priority cells

- __descendant-or-self - Con cháu hoặc chính nó__
    - VD:

            Tìm tất cả span status trong table (bao gồm cả chính nó nếu là span)
            //table[@id='test-table']/descendant-or-self::span[contains(@class, 'status')]

            => Kết quả: Tất cả span status-passed, status-running, status-failed, status-pending

- ***XPath: axes***
    - parent
    - child
    - ancestor
    - descendant
    - following
    - preceding
    - following-sibling
    - preceding-sibling

            //tag/relationship::tagname[@attr=’value’]

- __Chứa thuộc tính: @attribute__
    - Sử dụng @ để truy cập thuộc tính của element.
    - VD:

            //tagname[@attribute='value']

- __AND và OR operators__
    - AND - Tất cả điều kiện phải đúng
            
            //element[@condition1 and @condition2]

    - OR - Một trong các điều kiện đúng

            //element[@condition1 or @condition2]

    - Kết hợp AND và OR

- __Lấy text bên trong element__
    - text() lấy text node trực tiếp của element.
            
            //element[text()='exact text']

- __normalize-space(): Chuẩn hóa khoảng trắng__
    - Loại bỏ khoảng trắng thừa ở đầu, cuối và giữa text.

            normalize-space(string)

- __contains(): Kiểm tra chứa chuỗi con__
    - Tìm element có chứa một phần text, không cần khớp chính xác.

            //element[contains(@attribute, 'substring')]

            //element[contains(text(), 'substring')]