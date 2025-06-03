# Test info

- Name: Newsletter form is usable
- Location: /Users/siimjooseps/Projects/foum/tests/forms.spec.ts:13:5

# Error details

```
Error: page.goto: net::ERR_CONNECTION_REFUSED at http://localhost:3001/
Call log:
  - navigating to "http://localhost:3001/", waiting until "load"

    at /Users/siimjooseps/Projects/foum/tests/forms.spec.ts:14:14
```

# Test source

```ts
   1 | import { test, expect } from '@playwright/test';
   2 |
   3 | test('Contact form is usable', async ({ page }) => {
   4 |   await page.goto('http://localhost:3001/contact');
   5 |   await page.fill('input[placeholder="FULL NAME"]', 'Test User');
   6 |   await page.fill('input[placeholder="MAIL"]', 'test@example.com');
   7 |   await page.fill('textarea[name="message"]', 'This is a test message.');
   8 |   await page.click('button:has-text("SEND MESSAGE")');
   9 |   // Expect a success or error message
  10 |   await expect(page.locator('text=/sent|error/i')).toBeVisible();
  11 | });
  12 |
  13 | test('Newsletter form is usable', async ({ page }) => {
> 14 |   await page.goto('http://localhost:3001/');
     |              ^ Error: page.goto: net::ERR_CONNECTION_REFUSED at http://localhost:3001/
  15 |   await page.fill('input[placeholder="FULL NAME"]', 'Test User');
  16 |   await page.fill('input[placeholder="MAIL"]', 'test@example.com');
  17 |   await page.click('button:has-text("SUBSCRIBE")');
  18 |   // Expect a success or error message
  19 |   await expect(page.locator('text=/thank|error/i')).toBeVisible();
  20 | }); 
```