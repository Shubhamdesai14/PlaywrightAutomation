//const {test, expect} =require('@playwright/test') ; //we need to add this bock evry time after creating the new test file

import {test, expect} from '@playwright/test'  //alternative of above


test('Locators', async ({page})=>{     //every before test run we need to add fixture with async await & annanomus fuction (page is a fixture-see hompage test)


   await page.goto("https://www.demoblaze.com/index.html")


    // click on login button   ---using id as a peoperty of the lement
    // await page.locator('id=login2').click
    await page.click('id=login2')


    //Provide username- using CSS of the element
                        //Locator               //Value
    //await page.locator('#loginusername').fill("pavanol")
    //await page.type('#loginusername', 'pavanol')
    await page.fill('#loginusername', 'pavanol')
    


    // Provide password  ---using CSS of the element
    await page.fill("input[id='loginpassword']",'test@123')


    //click on login button   ---using X-path of the element
    await page.click("//button[normalize-space()='Log in']")



    //verify the log out link present or not   ---using X-path of the element
    //const logoutlink= await page.locator("(//a[normalize-space()='Log out']")
    const logoutlink= await page.locator('class="nav-link')

    //await page.locator('[class*="nav-link"]')   
    await page.locator("//a[normalize-space()='Log out']")

    await page.close()

})