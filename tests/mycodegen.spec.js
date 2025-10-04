import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.airwallex.com/');
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.locator('[data-test="switch_PHONE"]').click();
  await page.getByText('+').click();
  await page.locator('[data-test="phone"]').click();
  await page.locator('[data-test="phone"]').fill('1717212182');
  await page.locator('div').filter({ hasText: /^PasswordForgot password\?$/ }).nth(1).click();
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('12872128127872712781w');
  await page.locator('[data-test="phone"]').click();
  await page.locator('[data-test="phone"]').fill('17172121828788');
  await page.getByRole('button', { name: 'Log in' }).click();
});