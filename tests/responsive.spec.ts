import { test, expect } from '@playwright/test';

const viewports = [
  { width: 2560, height: 1440 },
  { width: 1920, height: 1080 },
  { width: 1536, height: 864 },
  { width: 834, height: 1112 }, // iPad Pro
  { width: 430, height: 932 },  // iPhone 14 Pro Max
];

test.describe('Responsive layout', () => {
  for (const viewport of viewports) {
    test(`homepage layout at ${viewport.width}x${viewport.height}`, async ({ page }) => {
      await page.setViewportSize(viewport);
      await page.goto('http://localhost:3001/');
      // No horizontal scroll
      const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
      const clientWidth = await page.evaluate(() => document.documentElement.clientWidth);
      expect(scrollWidth).toBeLessThanOrEqual(clientWidth + 1);
      // Main content is visible
      await expect(page.getByRole('main')).toBeVisible();
    });
  }
}); 