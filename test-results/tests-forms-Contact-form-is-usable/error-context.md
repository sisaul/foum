# Test info

- Name: Contact form is usable
- Location: /Users/siimjooseps/Projects/foum/tests/forms.spec.ts:3:5

# Error details

```
Error: page.fill: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('input[placeholder="FULL NAME"]')

    at /Users/siimjooseps/Projects/foum/tests/forms.spec.ts:5:14
```

# Page snapshot

```yaml
- banner:
  - link "FOUM":
    - /url: /
  - link "PRODUCTS":
    - /url: /products
  - link "STORIES":
    - /url: /stories
  - link "ABOUT":
    - /url: /about
  - link "STUDIO":
    - /url: /studio
  - link "CONTACT":
    - /url: /contact
- main:
  - img "FOUM showroom"
  - heading "OUR SHOWROOM" [level=1]
  - paragraph: Give us a visit in Krulli Creative District, Kopli 70A, Tallinn. Our showroom is on the third floor. Please book an appointment ahead.
  - paragraph: "BOOK AN APPOINTMENT:"
  - link "+372 5342 0141":
    - /url: tel:+37253420141
  - link "info@foum.studio":
    - /url: mailto:info@foum.studio
  - heading "FIND US IN STORES:" [level=2]
  - button "ESTONIAN DESIGN HOUSE":
    - text: ESTONIAN DESIGN HOUSE
    - img
  - button "HELSINKI FURNITURE SPACE":
    - text: HELSINKI FURNITURE SPACE
    - img
- heading "A QUESTION? AN IDEA? GET IN TOUCH." [level=2]
- separator
- text: FULL NAME
- textbox "FULL NAME"
- text: MAIL
- textbox "MAIL"
- heading "COMPANY" [level=3]
- list:
  - listitem:
    - link "About":
      - /url: /about
  - listitem:
    - link "Resellers":
      - /url: /resellers
  - listitem:
    - link "Newsletter":
      - /url: /newsletter
- heading "COMMUNITY" [level=3]
- list:
  - listitem:
    - link "Stories":
      - /url: /stories
  - listitem:
    - link "Instagram":
      - /url: https://instagram.com/foumstudio
  - listitem:
    - link "LinkedIn":
      - /url: https://linkedin.com/company/foumstudio
- heading "INFO" [level=3]
- list:
  - listitem:
    - link "FAQ":
      - /url: /faq
  - listitem:
    - link "Terms & Conditions":
      - /url: /terms-and-conditions
  - listitem:
    - link "Privacy Policy":
      - /url: /privacy-policy
- text: YOUR MESSAGE
- textbox "YOUR MESSAGE"
- button "SEND MESSAGE"
- separator
- paragraph: FOUM STUDIOS
- paragraph: ALL RIGHTS RESERVED
- button "Close newsletter banner": ✕
- heading "JOIN OUR NEWSLETTER." [level=2]
- paragraph: Subscribe to our newsletter and be the first to discover curated collections, special offers, and all the latest updates.
- paragraph: Join now for the full FOUM experience.
- text: "FULL NAME:"
- textbox "FULL NAME:"
- text: "MAIL:"
- textbox "MAIL:"
- button "SUBSCRIBE"
- alert
- button "Open Next.js Dev Tools":
  - img
```

# Test source

```ts
   1 | import { test, expect } from '@playwright/test';
   2 |
   3 | test('Contact form is usable', async ({ page }) => {
   4 |   await page.goto('http://localhost:3001/contact');
>  5 |   await page.fill('input[placeholder="FULL NAME"]', 'Test User');
     |              ^ Error: page.fill: Test timeout of 30000ms exceeded.
   6 |   await page.fill('input[placeholder="MAIL"]', 'test@example.com');
   7 |   await page.fill('textarea[name="message"]', 'This is a test message.');
   8 |   await page.click('button:has-text("SEND MESSAGE")');
   9 |   // Expect a success or error message
  10 |   await expect(page.locator('text=/sent|error/i')).toBeVisible();
  11 | });
  12 |
  13 | test('Newsletter form is usable', async ({ page }) => {
  14 |   await page.goto('http://localhost:3001/');
  15 |   await page.fill('input[placeholder="FULL NAME"]', 'Test User');
  16 |   await page.fill('input[placeholder="MAIL"]', 'test@example.com');
  17 |   await page.click('button:has-text("SUBSCRIBE")');
  18 |   // Expect a success or error message
  19 |   await expect(page.locator('text=/thank|error/i')).toBeVisible();
  20 | }); 
```