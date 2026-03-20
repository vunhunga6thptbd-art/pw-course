import { test } from '@playwright/test';

test('test1.spec.ts', async ({ page }) => {
    await test.step("Step 1: Truy cập trang", async () => {
        await page.goto("https://material.playwrightvn.com/");
    });

    await test.step("Step 2: click vào Bàihọc 1: Register Page (có đủ các element)", async () => {
        await page.locator("//a[text()='Bài học 1: Register Page (có đủ các element)']").click();
    });

    await test.step("Step 3: Nhập thông tin cho các field", async () => {

        await page.locator("//input[@id='username']").pressSequentially("Hong Nhung", { delay: 200 });

        await page.locator("//input[@id='email']").pressSequentially("hongnhung@gmail.com", { delay: 200 });

        await page.locator("//input[@id='female']").check();

        await page.locator("//input[@id='reading']").check();

        await page.locator("//select[@id='interests']").selectOption([{ label: "Science" }, { label: "Music" }]);

        await page.locator("//select[@id='country']").selectOption("australia");

        await page.locator("//input[@id='dob']").fill("1999-01-13");

        await page.locator("//input[@id='profile']").setInputFiles("C:/Users/NHUNG/Downloads/demo.jpg");

        await page.locator("//textarea[@id='bio']").pressSequentially("Hong Nhung K22", { delay: 200 });

    });

    await test.step("Step 4: Click button Register", async () => {
        await page.locator("//button[@type='submit']").click();
    });
});