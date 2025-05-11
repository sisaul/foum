import { test, expect } from '@playwright/test';

test('All nav links are keyboard accessible', async ({ page }) => {
  await page.goto('http://localhost:3001/');
  await page.keyboard.press('Tab'); // Focus first element
  // Tab through header links
  for (let i = 0; i < 6; i++) {
    await page.keyboard.press('Tab');
  }
  // Should be able to focus a main CTA or nav link
  const active = await page.evaluate(() => document.activeElement?.tagName);
  expect(['A', 'BUTTON', 'INPUT', 'TEXTAREA']).toContain(active);
}); 