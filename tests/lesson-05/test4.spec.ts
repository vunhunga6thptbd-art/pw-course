import { test } from '@playwright/test';

test('test4.spec.ts', async ({ page }) => {
    await test.step("Step 1: Truy cập trang", async () => {
        await page.goto("https://material.playwrightvn.com/");
    });

    await test.step("Step 2: click vào Bài học 4: Personal notes", async () => {
        await page.locator("//a[text()='Bài học 4: Personal notes']").click();
    });

    await test.step("Step 3: Thêm 10 note", async () => {

        const note = [
            { title: "click", content: "Hàm click dùng để thực hiện click vào các phần tử trên trang web" },
            { title: "fill", content: "Hàm fill dùng để điền văn bản vào các trường input hoặc textarea trên trang web" },
            { title: "type", content: "Hàm type dùng để nhập từng ký tự một vào phần tử, mô phỏng hành vi gõ phím thực tế của người dùng" },
            { title: "hover", content: "Hàm hover dùng để di chuyển con trỏ chuột đến vị trí của phần tử, kích hoạt các hiệu ứng hover" },
            { title: "check", content: "Hàm check dùng để đánh dấu checkbox hoặc radio button, đảm bảo phần tử ở trạng thái checked" },
            { title: "uncheck", content: "Hàm uncheck dùng để bỏ đánh dấu checkbox, đảm bảo phần tử ở trạng thái unchecked" },
            { title: "selectOption", content: "Hàm selectOption dùng để chọn một hoặc nhiều option trong thẻ select dropdown" },
            { title: "press", content: "Hàm press dùng để mô phỏng việc nhấn phím bàn phím như Enter, Tab, Escape hoặc các phím khác" },
            { title: "dblclick", content: "Hàm dblclick dùng để thực hiện double click (nhấp đúp chuột) vào phần tử trên trang web" },
            { title: "dragAndDrop", content: "Hàm dragAndDrop dùng để kéo một phần tử từ vị trí nguồn và thả vào vị trí đích trên trang web" }
        ];

        for (let i = 0; i < note.length; i++) {
            await page.locator("//input[@id='note-title']").fill(`${note[i].title}`);
            await page.locator("//textarea[@id='note-content']").fill(`${note[i].content}`);
            await page.locator("//button[@id='add-note']").click();
        }
    });

    await test.step("Step 4: Search với keyword", async () => {
        await page.locator("//input[@id='search']").pressSequentially("một hoặc nhiều", { delay: 200 });
    });
});