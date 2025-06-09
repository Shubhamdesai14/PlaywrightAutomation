const {test, expect}= require('@playwright/test')

test("Handle MultiSelect dropdowns", async ({page})=> {

await page.goto('https://testautomationpractice.blogspot.com/');


// Select multiple options from multi select dropdown
//await page.selectOption('#colors', ['Blue', 'Red', 'Yellow'])

//Assertions
//1. check no of options in drodown

//const options=await page. locator('#colors option')
//await expect(options).toHaveCount(5)



//2. check no of options in drodown using JS array

//const options=await page. $$('#colors option')
//console.log("Number of options:" , options.length)
//await expect(options.length).toBe(5);



// 3. check presence of vlue in the dropdown
const content=await page. locator('#colors').textContent
await expect(content.incluedes('Blue')).toBeThruthy()
await expect(content.incluedes('Black')).toBeFalsy()




await page.waitForTimeout(5000)

})