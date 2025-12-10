import { test, expect } from '@playwright/test';

test.setTimeout(180_000);

test('test', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('textbox', { name: 'Password' }).press('Enter');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('listitem').filter({ hasText: 'Eman Mostafa' }).locator('i').click();
  await page.getByRole('menuitem', { name: 'About' }).click();
  await page.getByRole('button', { name: '×' }).click();
  await page.getByRole('listitem').filter({ hasText: 'Eman Mostafa' }).locator('i').click();
  await page.getByRole('menuitem', { name: 'Support' }).click();
  await page.waitForTimeout(3000); // Waits for 3 seconds
  await page.getByText('Eman Mostafa').click();
  await page.getByRole('menuitem', { name: 'Change Password' }).click();
  await page.getByRole('textbox', { name: 'Search' }).click();
  await page.getByRole('link', { name: 'Admin' }).click();
  await page.getByRole('link', { name: 'PIM' }).click();
  await page.getByRole('link', { name: 'Leave' }).click();
  await page.getByRole('link', { name: 'Time' }).click();
  await page.getByRole('link', { name: 'Recruitment' }).click();
  await page.getByRole('link', { name: 'My Info' }).click();
  await page.getByRole('link', { name: 'Performance' }).click();
  await page.getByRole('link', { name: 'Dashboard' }).click();
  await page.getByRole('link', { name: 'Directory' }).click();
  await page.getByRole('link', { name: 'Claim' }).click();
  // await page.getByRole('link', { name: 'Buzz' }).click();
  await page.getByRole('listitem').filter({ hasText: 'Eman Mostafa' }).locator('i').click();
  await page.getByRole('menuitem', { name: 'Logout' }).click();
});