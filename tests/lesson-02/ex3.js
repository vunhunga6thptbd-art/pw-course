/*
Tạo file ex3.js, thêm vào đáp án cho câu hỏi sau: Cho 2 biến: a = true, b = false, c =
true. Theo bạn, kết quả của các biểu thức sau là gì?
a. a && b && c
b. a && b || c

Trả lời:
a. a && b && c
    true && false && true
=> Kết quả: false
    Do && trả về đúng nếu cả 2 vế của mệnh đề đúng

b. a && b || c
    true && false || true
=> Kết quả: true
    Do a && b = false
       b || c = true
        => a && b || c = true
*/
let a = true
let b = false
let c = true

console.log(a && b &&c );
console.log(a && b || c);