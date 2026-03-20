import { test } from '@playwright/test';

test('test3.spec.ts - Thêm todo task', async ({ page }) => {
    await test.step("Step 1: Truy cập trang", async () => {
        await page.goto("https://material.playwrightvn.com/");
    });

    await test.step("Step 2: click vào Bài học 3: Todo page", async () => {
        await page.locator("//a[text()='Bài học 3: Todo page']").click();
    });

    await test.step("Step 3: Add todo", async () => {
        for (let i = 1; i <= 100; i++) {
            await page.locator("//input[@id='new-task']").fill(`Todo ${i}`);
            await page.locator("//button[@id='add-task']").click();
        }
    });

    await test.step("Step 4: Delete", async () => {
        page.on('dialog', async dialog => dialog.accept());
        for (let i = 1; i <= 100; i++) {
            if (i % 2 === 1) {
                const todo = page.locator(`//button[@id='todo-${i}-delete']`);
                await page.click(`//button[@id='todo-${i}-delete']`);
            }
        }
    });
});