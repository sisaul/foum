# Test info

- Name: All nav links are keyboard accessible
- Location: /Users/siimjooseps/Projects/foum/tests/a11y-keyboard.spec.ts:3:5

# Error details

```
Error: page.goto: net::ERR_CONNECTION_REFUSED at http://localhost:3001/
Call log:
  - navigating to "http://localhost:3001/", waiting until "load"

    at /Users/siimjooseps/Projects/foum/tests/a11y-keyboard.spec.ts:4:14
```

# Test source

```ts
   1 | import { test, expect } from '@playwright/test';
   2 |
   3 | test('All nav links are keyboard accessible', async ({ page }) => {
>  4 |   await page.goto('http://localhost:3001/');
     |              ^ Error: page.goto: net::ERR_CONNECTION_REFUSED at http://localhost:3001/
   5 |   await page.keyboard.press('Tab'); // Focus first element
   6 |   // Tab through header links
   7 |   for (let i = 0; i < 6; i++) {
   8 |     await page.keyboard.press('Tab');
   9 |   }
  10 |   // Should be able to focus a main CTA or nav link
  11 |   const active = await page.evaluate(() => document.activeElement?.tagName);
  12 |   expect(['A', 'BUTTON', 'INPUT', 'TEXTAREA']).toContain(active);
  13 | }); 
```