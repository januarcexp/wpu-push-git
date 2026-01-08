import { test, expect } from '@playwright/test';

test('update file dengan akun januar 3', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

