# Test info

- Name: No broken links on homepage
- Location: /Users/siimjooseps/Projects/foum/tests/broken-links.spec.ts:3:5

# Error details

```
Error: page.goto: net::ERR_CONNECTION_REFUSED at http://localhost:3001/
Call log:
  - navigating to "http://localhost:3001/", waiting until "load"

    at /Users/siimjooseps/Projects/foum/tests/broken-links.spec.ts:4:14
```

# Test source

```ts
   1 | import { test, expect } from '@playwright/test';
   2 |
   3 | test('No broken links on homepage', async ({ page }) => {
>  4 |   await page.goto('http://localhost:3001/');
     |              ^ Error: page.goto: net::ERR_CONNECTION_REFUSED at http://localhost:3001/
   5 |   const links = await page.$$eval('a', as => as.map(a => a.href));
   6 |   for (const link of links) {
   7 |     if (link.startsWith('http://localhost:3001')) {
   8 |       const res = await page.request.get(link);
   9 |       expect(res.status()).toBeLessThan(400);
  10 |     }
  11 |   }
  12 | }); 
```