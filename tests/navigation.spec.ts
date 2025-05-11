import { test, expect } from '@playwright/test';

test.describe('Navigation', () => {
  const pages = [
    '/',
    '/products',
    '/studio',
    '/stories',
    '/about',
    '/terms-and-conditions'
  ];

  for (const page of pages) {
    test(`can navigate to ${page}`, async ({ page: pwPage }) => {
      await pwPage.goto(`http://localhost:3001${page}`);
      await expect(pwPage).toHaveURL(new RegExp(page.replace('/', '\\/?') + '$'));
      // Check header and footer exist
      await expect(pwPage.getByRole('banner')).toBeVisible();
      await expect(pwPage.getByText(/FOUM STUDIOS/i)).toBeVisible();
    });
  }
}); 