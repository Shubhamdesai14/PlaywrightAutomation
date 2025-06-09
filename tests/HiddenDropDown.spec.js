const {test, expect}= require('@playwright/test')

test("Hidden option dropdown", async ({page})=> {          //dropdown contains options but most are hidden & we not directly/unable to inspect them

await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')   // use selectore hub debugger to freeze the screen


await page.locator("[name='Username']").fill("Admin")
await page.locator("[name='Password']").fill("admin123")   
await page.getByRole("[type='submit']").click()


await page.locator("//span[normalize-space()='PIM']").click()

//clisk on the dropdown
await page.locator("//*[@id='app']/div[1]/div[2]/div[2]/div/div[1]/div[2]/from/div[1]/div/div[6]/div/div[2]/div/div/div[2]").click()



//waiting for options
await page.waitForTimeout(5000)


const options=await page.$$("//div[@role='listbox']//span")

for(let option of options)
{
const jobTitle=await option.textContent()
//console.log(jobTitle)

if(jobTitle.includes('QA Engineer'))
{

    await option.click()
    break;
}

}

await page.waitForTimeout(5000)




})