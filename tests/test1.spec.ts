import { test, expect } from '@playwright/test';

test('update file tanggal 19 17.00', async ({ page }) => {

  await page.goto('https://playwright.dev/');
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});
