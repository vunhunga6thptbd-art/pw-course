import { test } from '@playwright/test';

test('test2.spec.ts', async ({ page }) => {
    await test.step("Step 1: Truy cập trang", async () => {
        await page.goto("https://material.playwrightvn.com/");
    });

    await test.step("Step 2: click vào Bài học 2: Product page", async () => {
        await page.locator("//a[text()='Bài học 2: Product page']").click();
    });

    await test.step("Thêm sản phẩm vào giỏ hàng", async () => {

        await page.locator("//button[@data-product-id=1]").dblclick();

        for (let i = 0; i < 3; i++) {
            await page.locator("//button[@data-product-id=2]").click();
        }

        await page.locator("//button[@data-product-id=3]").click();

    });
});