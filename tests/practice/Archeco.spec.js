import { test, expect } from '@playwright/test';

test.setTimeout(180_000);

test('test', async ({ page }) => {
  await page.goto('https://velocity-ability-5196-dev-ed.scratch.my.salesforce.com/?ec=302&startURL=/visualforce/session%3Furl%3Dhttps%253A%252F%252Fvelocity-ability-5196-dev-ed.scratch.lightning.force.com%252Flightning%252Fo%252Fsheep__obj_system__c%252Flist%253FfilterName%253D__Recent');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('test-ctjj5ezgsjzm@example.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('N3yn!ewpvolai');
  await page.getByRole('button', { name: 'Log In to Sandbox' }).click();
  await page.goto('https://velocity-ability-5196-dev-ed.scratch.lightning.force.com/lightning/o/sheep__obj_system__c/list?filterName=__Recent');
  await page.getByRole('link', { name: 'C1000-16FP-2G-L' }).click();
  await page.getByText('AI Manager').click();
  await page.getByText('Support Information (EOL/EOS)').click();
  await page.getByText('Alternative Device').click();
  await page.getByText('Vulnerability Information').click();
  await page.getByText('Specification Information').click();
  await page.getByText('Contact Method').click();
  await page.getByText('Customer Status').click();
  await page.getByText('Check Vulnerabilities').click();
  await page.getByText('Google').click();
  await page.getByText('Google', { exact: true }).click();
});