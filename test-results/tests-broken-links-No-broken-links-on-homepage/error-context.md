# Test info

- Name: No broken links on homepage
- Location: /Users/siimjooseps/Projects/foum/tests/broken-links.spec.ts:3:5

# Error details

```
Error: expect(received).toBeLessThan(expected)

Expected: < 400
Received:   404
    at /Users/siimjooseps/Projects/foum/tests/broken-links.spec.ts:9:28
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
   3 | test('No broken links on homepage', async ({ page }) => {
   4 |   await page.goto('http://localhost:3001/');
   5 |   const links = await page.$$eval('a', as => as.map(a => a.href));
   6 |   for (const link of links) {
   7 |     if (link.startsWith('http://localhost:3001')) {
   8 |       const res = await page.request.get(link);
>  9 |       expect(res.status()).toBeLessThan(400);
     |                            ^ Error: expect(received).toBeLessThan(expected)
  10 |     }
  11 |   }
  12 | }); 
```