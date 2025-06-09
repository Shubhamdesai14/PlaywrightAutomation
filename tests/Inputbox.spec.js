const {test, expect}= require('@playwright/test')





test('handle inputbox', async ({page})=>{

//await page.goto('https://itera-qa.azurewebsites.net/home/automation')
await page.goto('https://testautomationpractice.blogspot.com/')




//--------------------------------------------------------------------------------------------------------------------------------------------
//Inputbox with multiple assertions
await expect (await page.locator("//input[@id='name']")).toBeVisible() //input[@id='name']
await expect (await page.locator("//input[@id='name']")).toBeEmpty()
await expect (await page.locator("//input[@id='name']")).toBeEditable()
await expect (await page.locator("//input[@id='name']")).toBeEnabled()

//await page.locator("//input[@id='name']").fill("John")
await page.fill("//input[@id='name']", 'John' )

await page.waitForTimeout(5000) //pausing code





//------------------------------------------------------------------------------------------------------------------------------------------
// Handle radio buttons  with multiple assertions

await page.locator("//input[@id='male']").check()
//await page.check("//input[@id='male']")

await expect (await page.locator("//input[@id='male']")).toBeChecked() //or
await expect (await page.locator("//input[@id='male']").isChecked()).toBeTruthy()

await expect (await page.locator("//input[@id='female']").isChecked()).toBeFalsy()

await page.waitForTimeout(5000) //pausing code







//--------------------------------------------------------------------------------------------------------------------------------------------
// Handle checkboxes  with multiple assertions

await page.locator("//input[@id='monday' and @type='checkbox']").check()
//await page.check("//input[@id='monday' and @type='checkbox']")


expect(await page.locator("//input[@id='monday' and @type='checkbox']")).toBeChecked() //or
expect(await page.locator("//input[@id='monday' and @type='checkbox']").isChecked()).toBeTruthy()

expect(await page.locator("//input[@id='sunday' and @type='checkbox']").isChecked()).toBeFalsy()



//if want to select radom checkbox
 const checkboxesLocatores =[
                        "//input[@id='sunday' and @type='checkbox']",
                        "//input[@id='sunday' and @type='checkbox']",
                        "//input[@id='saturday' and @type='checkbox']"

                    ]

// select multiple checkboxes
 for (const locator of checkboxesLocatores)    
 {
   await page.locator(locator).check() 
 }

await page.waitForTimeout(5000) //pausing code



// Unselect multiple checkboxes which are already selected
for (const locator of checkboxesLocatores)     
{
    if(await page.locator(locator).isChecked())
    {
    await page.locator(locator).uncheck()
    }
}
    await page.waitForTimeout(5000) //pausing code




//----------------------------------------------------------------------------------------------------------------------------- 
// Handle drop down with multiple assertions








})