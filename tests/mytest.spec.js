import { test, expect } from '@playwright/test';


//npx playwright codegen -o tests/mytest.spec.js     ------command

// (Other Commands-
// npx playwright codegen --help
   
// npx playwright codegen   (Auto generate tests with Codegen)

// npx playwright show-report (to see the last generated report log)

// npx playwright codegen --target javaScript   (If we want exlicitly the code in Js format)

// npx playwright codegen --b chromium  (if want to open into specific browser)

// npx playwright codegen --device "iphone 13"  (if want to run the script for particular mobile screen)

// npx playwright codegen --device "iphone13"   (to see what devices supported o run the test)

// npx playwright codegen --viewport-size "1280,720"  (to run the tst with specific application size)
// )



test('test', async ({ page }) => {
 
  await page.goto('https://www.demoblaze.com/index.html')

  await page.getByRole('link', { name: 'Log in' }).click();

  //await page.locator('#loginusername').click();

  await page.locator('#loginusername').fill('pavonol');

  //await page.locator('#loginusername').click();
  //await page.locator('#loginusername').fill('pavanol');
  //await page.locator('#loginpassword').click();

  await page.locator('#loginpassword').fill('test@123');

  await page.getByRole('button', { name: 'Log in' }).click();

});