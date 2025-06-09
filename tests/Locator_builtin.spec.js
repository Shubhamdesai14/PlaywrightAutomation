//const {test, expect} =require('@playwright/test') ; //we need to add this bock evry time after creating the new test file

import {test, expect} from '@playwright/test'  //alternative of above


//Locators---
//page.getByAltText() to locate an element, usually image, by its text alternative.
//page.getByPlaceholder() to locate an input by placeholder.
//page.getByRole() to locate by explicit and implicit accessibility attributes.
//page.getByText() to locate by text content.

//page.getByLabel() to locate a form control by associated label's text.
//page.getByTitle() to locate an element by its title attribute.
//page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured).



test ('Built-inLocators', async ({page})=>{

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')


    // page.getByAltText() to locate an element, usually image, by its text alternative.
    // -----if alt="value" attribute present for any img element in domm then use this method to chack logo/img

    const logo =await page.getByAltText('company-branding')
    await expect(logo).toBeVisible()



    // page.getByPlaceholder() to locate an input by placeholder.
    // ----if there is input boxes to enter the text/data & in dom there is placeholder= "value" attribute

     await page.getByPlaceholder('Username').fill("Admin")
     await page.getByPlaceholder('Password').fill("admin123")
     

    // page.getByRole() to locate by explicit and implicit accessibility attributes.
    // ---if you have button/link/actionable element

         //we able to use link/button  //attribute:, value
    await page.getByRole('button', {type: 'submit'}).click()



    // page.getByText() to locate by text content.
    // --if there is any text contain on dashboad that all element we able to capture
    
    // await expect(await page.getByText('UserB Testb')).toBeVisible()     //-----test failed due to after login there is diff user name text present

    // alternative in the above case
    const name = await page.locator('//p[@class="oxd-userdropdown-name"]').textContent()
    await expect(await page.getByText(name)).toBeVisible() 



    // page.getByLabel() to locate a form control by associated label's text.
    //---if there is lable tag present into the element then we can use this (lable means if there istextboxes that textboxes all names are lables)
    // <label>Password <input type="password" /></label>
    // await page.getByLabel('Password').fill('secret');
    
    // page.getByTitle() to locate an element by its title attribute.
    //---if there is title tag present into the element then we can use this
    // <span title='Issues count'>25 issues</span>
    // await expect(page.getByTitle('Issues count')).toHaveText('25 issues');
    

    // page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured).
    // ---if we have data-testid attribute for button/link/whaterver then use this one
    // <button data-testid="directions">Itinéraire</button>
    // await page.getByTestId('directions').click();

})