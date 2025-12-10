// const{test, expect} =require('@playwright/test');
import { test, expect } from '@playwright/test';

test('Home Page', async ({page})=>{
   await page.goto('https://demoblaze.com/');

   const pageTitle=await page.title();
   console.log('Page title is: ',pageTitle);

   await expect(page).toHaveTitle('STORE');

   const pageURL= page.url();
   console.log('Page URL is: ',pageURL);

   await expect(page).toHaveURL('https://demoblaze.com/');
   await page.locator('id=login2').click();
   await page.fill('id=loginusername', 'Rrk');
   await page.fill('id=loginpassword', 'test@123');
   await page.click("//button[normalize-space()='Log in']");
   const logoutLink = page.locator("//a[normalize-space()='Log out']");
   await expect(logoutLink).toBeVisible();
   await logoutLink.click();
//    await expect(logoutlink).toBeVisible();
//    await expect(page).
   //id="loginpassword"
//    await page.click('id=login2');

//    await page.locator('id=login2').click();


})