# Test info

- Name: Navigation >> can navigate to /about
- Location: /Users/siimjooseps/Projects/foum/tests/navigation.spec.ts:14:9

# Error details

```
Error: page.goto: net::ERR_CONNECTION_REFUSED at http://localhost:3001/about
Call log:
  - navigating to "http://localhost:3001/about", waiting until "load"

    at /Users/siimjooseps/Projects/foum/tests/navigation.spec.ts:15:20
```

# Test source

```ts
   1 | import { test, expect } from '@playwright/test';
   2 |
   3 | test.describe('Navigation', () => {
   4 |   const pages = [
   5 |     '/',
   6 |     '/products',
   7 |     '/studio',
   8 |     '/stories',
   9 |     '/about',
  10 |     '/terms-and-conditions'
  11 |   ];
  12 |
  13 |   for (const page of pages) {
  14 |     test(`can navigate to ${page}`, async ({ page: pwPage }) => {
> 15 |       await pwPage.goto(`http://localhost:3001${page}`);
     |                    ^ Error: page.goto: net::ERR_CONNECTION_REFUSED at http://localhost:3001/about
  16 |       await expect(pwPage).toHaveURL(new RegExp(page.replace('/', '\\/?') + '$'));
  17 |       // Check header and footer exist
  18 |       await expect(pwPage.getByRole('banner')).toBeVisible();
  19 |       await expect(pwPage.getByText(/FOUM STUDIOS/i)).toBeVisible();
  20 |     });
  21 |   }
  22 | }); 
```