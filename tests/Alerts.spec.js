const {test, expect}= require('@playwright/test')

test.skip ("Alret with OK", async ({page})=> {

await page.goto('https://testautomationpractice.blogspot.com/')


//enabling alret handling or dialog window handler
page.on('dialog', async dialog=>{
expect(dialog.type()).toContain('alert')
expect(dialog.message()).toContain('I am an alert box!')
await dialog.accept()

           })

await page.click('//button[normalize-space()="Alert"]')
await page.waitForTimeout(5000)

})






test.skip("Confirmation Dialog-Alert with OK & Cancle", async ({page})=> {

await page.goto('https://testautomationpractice.blogspot.com/')


//enabling dialog window handler
page.on('dialog', async dialog=>{
expect(dialog.type()).toContain('confirm')
expect(dialog.message()).toContain('Press a button!')
await dialog.accept()      //closing alret using Ok button
//await dialog.dismiss()     // closing alret using cancle button


              })
 
await page.click('//button[normalize-space()="Confirm Box"]')
await expect(page.locator('//p[@id="demo"]')).toHaveText('You pressed OK!')
await page.waitForTimeout(5000)


})






test("Promp Dialog", async ({page})=> {

await page.goto('https://testautomationpractice.blogspot.com/')


//enabling dialog window handler
page.on('dialog', async dialog=>{
expect(dialog.type()).toContain('prompt')
expect(dialog.message()).toContain('Please enter your name:')
expect(dialog.defaultValue()).toContain('Harry Potter')

await dialog.accept('John')      //closing alret using Ok button

              })
 
await page.click('//button[normalize-space()="Prompt"]')
await expect(page.locator('//p[@id="demo"]')).toHaveText('Hello John! How are you!')
await page.waitForTimeout(5000)


})