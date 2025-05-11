import { test, expect } from '@playwright/test';

test('Contact form is usable', async ({ page }) => {
  await page.goto('http://localhost:3001/contact');
  await page.fill('input[placeholder="FULL NAME"]', 'Test User');
  await page.fill('input[placeholder="MAIL"]', 'test@example.com');
  await page.fill('textarea[name="message"]', 'This is a test message.');
  await page.click('button:has-text("SEND MESSAGE")');
  // Expect a success or error message
  await expect(page.locator('text=/sent|error/i')).toBeVisible();
});

test('Newsletter form is usable', async ({ page }) => {
  await page.goto('http://localhost:3001/');
  await page.fill('input[placeholder="FULL NAME"]', 'Test User');
  await page.fill('input[placeholder="MAIL"]', 'test@example.com');
  await page.click('button:has-text("SUBSCRIBE")');
  // Expect a success or error message
  await expect(page.locator('text=/thank|error/i')).toBeVisible();
}); 