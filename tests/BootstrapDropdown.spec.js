const {test, expect}= require('@playwright/test')

test("Bootstrap dropdown", async ({page})=> {

await page.goto('https://www.jquery-az.com/boots/demo.php?ex=63.0_2');



// Bootstrap dropown do not have select tag/HTML is contrains dev tag/buttons tag

await page.locator('.multiselect').click()   // click on the dropdown

//1. using without js array
//const options= await page.locator('ul>li lable input')
//await expect(options).toHaveCount(11)


//2. using js array
//const options= await page.$$('ul>li lable input')
//await expect(options.lenght).toBe(11)


//3. sellect multiple options from the dropdown
/*   const options=await page.$$('ul>li lable input')
for (let option of options)

{
    const value=await option.textContent()
    //console.log("Value is", value)

    if(value.includes('Angular') || value.includes('Java'))
    {

        await option.click()
    }

}   */




// deslect options

const options=await page.$$('ul>li lable input')
for (let option of options)

{
    const value=await option.textContent()
    //console.log("Value is", value)

    if(value.includes('HTML') || value.includes('CSS'))
    {

        await option.click()
    }

}


await page.waitForTimeout(5000)

})