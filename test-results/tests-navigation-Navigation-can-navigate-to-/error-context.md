# Test info

- Name: Navigation >> can navigate to /
- Location: /Users/siimjooseps/Projects/foum/tests/navigation.spec.ts:14:9

# Error details

```
Error: expect.toBeVisible: Error: strict mode violation: getByText(/FOUM STUDIOS/i) resolved to 2 elements:
    1) <p class="body mb-4 max-w-xl">Read about the latest collaboration between FOUM …</p> aka getByText('Read about the latest')
    2) <p class="text-black text-base uppercase font-medium md:text-base">FOUM STUDIOS</p> aka getByText('FOUM STUDIOS', { exact: true })

Call log:
  - expect.toBeVisible with timeout 5000ms
  - waiting for getByText(/FOUM STUDIOS/i)

    at /Users/siimjooseps/Projects/foum/tests/navigation.spec.ts:19:55
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
  15 |       await pwPage.goto(`http://localhost:3001${page}`);
  16 |       await expect(pwPage).toHaveURL(new RegExp(page.replace('/', '\\/?') + '$'));
  17 |       // Check header and footer exist
  18 |       await expect(pwPage.getByRole('banner')).toBeVisible();
> 19 |       await expect(pwPage.getByText(/FOUM STUDIOS/i)).toBeVisible();
     |                                                       ^ Error: expect.toBeVisible: Error: strict mode violation: getByText(/FOUM STUDIOS/i) resolved to 2 elements:
  20 |     });
  21 |   }
  22 | }); 
```