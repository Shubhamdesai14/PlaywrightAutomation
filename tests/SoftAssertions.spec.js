const {test, expect}= require('@playwright/test')


//Soft  assertions   --failed test & able to continue





test('Soft AssertionTest', async ({page})=>{

await page.goto('https://www.demoblaze.com/index.html')


//Hard Assertions
//await expect(page).toHaveTitle('STORE123')
await expect(page).toHaveTitle('STORE')

await expect(page).toHaveURL('https://www.demoblaze.com/index.html')

await expect(page.locator('.navbar-brand')).toBeVisible()



//Soft Assertions
await expect.soft(page).toHaveTitle('STORE123')

await expect.soft(page).toHaveURL('https://www.demoblaze.com/index.html')

await expect.soft(page.locator('.navbar-brand')).toBeVisible()

})
