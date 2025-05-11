# Test info

- Name: Responsive layout >> homepage layout at 1536x864
- Location: /Users/siimjooseps/Projects/foum/tests/responsive.spec.ts:13:9

# Error details

```
Error: expect(received).toBeLessThanOrEqual(expected)

Expected: <= 1537
Received:    2122
    at /Users/siimjooseps/Projects/foum/tests/responsive.spec.ts:19:27
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
  - img "FOUM hero image"
  - heading "DRIVEN BY PLAYFULNESS AND A SENSE OF TIMELESSNESS, WE CRAFT CUSTOMIZED CLASSICS DESIGNED TO LAST A LIFETIME AND BEYOND." [level=2]
  - link "SHELF 60":
    - /url: /products/shelf-60
    - img "SHELF 60"
  - heading "SHELF 60" [level=3]
  - link "VIEW DETAILS":
    - /url: /products/shelf-60
  - link "SHELF 120":
    - /url: /products/shelf-120
    - img "SHELF 120"
  - heading "SHELF 120" [level=3]
  - link "VIEW DETAILS":
    - /url: /products/shelf-120
  - img "Kitchen Inspiration"
  - heading "KITCHEN INSPIRATION" [level=2]
  - paragraph: Pour yourself some coffee and read about latest trends in interior design world, that our founder Kaarel Luht encountered at Milan Design Week.
  - link "READ MORE":
    - /url: /stories/kitchen-inspiration
  - heading "FOUM IS A CUSTOMIZED FURNITURE BRAND BY INTERIOR ARCHITECTS AT FOUM STUDIO." [level=2]
  - link "SHELF 60":
    - /url: /products/shelf-60
    - img "SHELF 60"
  - heading "SHELF 60" [level=3]
  - link "VIEW DETAILS":
    - /url: /products/shelf-60
  - link "SHELF 120":
    - /url: /products/shelf-120
    - img "SHELF 120"
  - heading "SHELF 120" [level=3]
  - link "VIEW DETAILS":
    - /url: /products/shelf-120
  - img "Mixing Mediums in Bedroom"
  - heading "MIXING MEDIUMS IN BEDROOM" [level=2]
  - paragraph: Read about the latest collaboration between FOUM STUDIOS and aare carpets.
  - link "READ MORE":
    - /url: /stories/mixing-mediums-in-bedroom
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
  15 |       await page.goto('http://localhost:3001/');
  16 |       // No horizontal scroll
  17 |       const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
  18 |       const clientWidth = await page.evaluate(() => document.documentElement.clientWidth);
> 19 |       expect(scrollWidth).toBeLessThanOrEqual(clientWidth + 1);
     |                           ^ Error: expect(received).toBeLessThanOrEqual(expected)
  20 |       // Main content is visible
  21 |       await expect(page.getByRole('main')).toBeVisible();
  22 |     });
  23 |   }
  24 | }); 
```