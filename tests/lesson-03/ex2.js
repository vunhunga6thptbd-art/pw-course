/*
    2. Các thông số sức khỏe được tính như sau:
        Cân nặng lý tưởng = Số lẻ của chiều cao (tính bằng cm) x 9 rồi chia 10
        Mức cân tối đa = Bằng số lẻ của chiều cao (tính bằng cm)
        Mức cân tối thiểu = Số lẻ của chiều cao (tính bằng cm) x 8 rồi chia 10

        Như vậy, nếu bạn cao 1,7m, tức 170cm thì :

        Cân cân nặng lý tưởng của bạn là: 70 x 9: 10 = 63 kg
        Cân nặng tối đa là: 70kg
        Cân nặng tối thiểu là: 70 x 8 :10 = 56 kg
        
        Phạm vi áp dụng: Công thức áp dụng cho 100 < chiều cao < 200

    Tạo file ex2.js, thêm vào code đáp án cho đề bài sau:
        a. Khai báo chiều cao của bạn (cm)
        b. In ra cân nặng lý tưởng, cân nặng tối đa, cân nặng tối thiểu trên cùng một dòng.
*/

//a. Khai báo chiều cao của bạn (cm)
const Height = 158; //cm

//b. In ra cân nặng lý tưởng, cân nặng tối đa, cân nặng tối thiểu trên cùng một dòng.

if (Height > 100 && Height < 200) {
    const a = Height % 100; // Khai báo số lẻ của chiều cao là hằng a; Tìm số lẻ của chiều cao
    const idealWeight = (a * 9) / 10; // Khai báo cân nặng lý tưởng là hằng ideal_weight
    const maxWeight = a; // Khai báo cân nặng tối đa là hằng max_weight
    const minWeight = (a * 8) / 10; // Khai báo cân nặng tối thiểu là hằng min_weight

    console.log(`Cân cân nặng lý tưởng: ${idealWeight} kg; Cân nặng tối đa: ${maxWeight} kg; Cân nặng tối thiểu: ${minWeight} kg`);
}
