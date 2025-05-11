import { test, expect } from '@playwright/test';

test('No broken links on homepage', async ({ page }) => {
  await page.goto('http://localhost:3001/');
  const links = await page.$$eval('a', as => as.map(a => a.href));
  for (const link of links) {
    if (link.startsWith('http://localhost:3001')) {
      const res = await page.request.get(link);
      expect(res.status()).toBeLessThan(400);
    }
  }
}); 