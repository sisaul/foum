# Test info

- Name: Responsive layout >> homepage layout at 430x932
- Location: /Users/siimjooseps/Projects/foum/tests/responsive.spec.ts:13:9

# Error details

```
Error: page.goto: net::ERR_CONNECTION_REFUSED at http://localhost:3001/
Call log:
  - navigating to "http://localhost:3001/", waiting until "load"

    at /Users/siimjooseps/Projects/foum/tests/responsive.spec.ts:15:18
```

# Test source

```ts
   1 | import { test, expect } from '@playwright/test';
   2 |
   3 | const viewports = [
   4 |   { width: 2560, height: 1440 },
   5 |   { width: 1920, height: 1080 },
   6 |   { width: 1536, height: 864 },
   7 |   { width: 834, height: 1112 }, // iPad Pro
   8 |   { width: 430, height: 932 },  // iPhone 14 Pro Max
   9 | ];
  10 |
  11 | test.describe('Responsive layout', () => {
  12 |   for (const viewport of viewports) {
  13 |     test(`homepage layout at ${viewport.width}x${viewport.height}`, async ({ page }) => {
  14 |       await page.setViewportSize(viewport);
> 15 |       await page.goto('http://localhost:3001/');
     |                  ^ Error: page.goto: net::ERR_CONNECTION_REFUSED at http://localhost:3001/
  16 |       // No horizontal scroll
  17 |       const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
  18 |       const clientWidth = await page.evaluate(() => document.documentElement.clientWidth);
  19 |       expect(scrollWidth).toBeLessThanOrEqual(clientWidth + 1);
  20 |       // Main content is visible
  21 |       await expect(page.getByRole('main')).toBeVisible();
  22 |     });
  23 |   }
  24 | }); 
```