import { test, expect } from '@playwright/test';

test ('AssertionsTest', async ({page})=>{

    //open URL
    await page.goto('https://demo.nopcommerce.com/');

    //page have URL
    await expect(page).toHaveURL('https://demo.nopcommerce.com/');

    await expect(page).toHaveTitle('nopCommerce demo store. Home page title');
    
    const logoElement = await page.locator("//div[@class='header-logo']");
    expect(logoElement).toBeVisible();

    const searchBox = await page.locator("#small-searchterms");
    await expect(searchBox).toBeEnabled();
})