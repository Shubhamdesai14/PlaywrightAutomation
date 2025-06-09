const {test, expect}= require('@playwright/test')

test("Handle dropdowns", async ({page})=> {

await page.goto('https://testautomationpractice.blogspot.com/');


//Multiple ways to select option from the dropdown----------

//await page.locator("#country").selectOption({label:'India'})        //with lable & Visioble text (prefer this)

//await page.locator("#country").selectOption('India')  // with Visioble text  (prefer this)

//await page.locator("#country").selectOption({value: 'uk'})  // with value

//await page.locator("#country").selectOption({index: 1})  // with index number

//await page.selectOption("#country", 'India')   //by text (prefer this)





//Assertions for dropdowns

//1. check number of options in dropdown (not in array format)

// const options =await page.locator('#country.option')
// await expect(options).toHaveCount(10)



// 2. Check no of options in dropdown (in array format)

//const options= await page.$$('#country option')
//console.log("Number of options-", options.length)
// await expect(options.length).toBe(10)


//3. Chek presence of options in the dropdown

//const content=await page.locator('#country').textContent()
//await expect(content.includes('India')).toBeTruthy


//4. Check prensce of options in the dropdown using looping statment
// const options= await page.$$('#country option')
// let status=false

// for(const option of options)
//     {     
//       //console.log(await option.textContent())
//       let value=await option.textContent()
//       if(value.includes('France'))
//         {
//             status=true
//             break
//         }
//     }
// expect(status).toBeTruthy()



//5. select the option from dropdown using loop
const options= await page.$$('#country option')

for(const option of options)
    {     
      let value=await option.textContent()
      if(value.includes('France'))
        {
           await page.selectOption("#country",value)
            break
        }
    }


await page.waitForTimeout(5000)


})