const {test, expect}= require('@playwright/test')


//Hard assertions   --failed test & not able to continue

//await expect(page).toHaveURL()	Page has a URL
// await expect(page).toHaveTitle()	Page has a title
// await expect(locator).toBeVisible()	Element is visible
// await expect(locator).toBeEnabled()	Control is enabled
// await expect(locator).toBeDisabled()	Element is disabled
// await expect(locator).toBeChecked()	Radio/Checkbox is checked
// await expect(locator).toHaveAttribute()	Element has attribute
// await expect(locator).toHaveText()	Element matches text
// await expect(locator).toContainText()	Element contains text
// await expect(locator).toHaveValue()	Input has a value
// await expect(locator).toHaveCount()	List of elements has given length 




test('AssertionTest', async ({page})=>{

//open app url

await page.goto('https://demo.nopcommerce.com/register')

//expect(page).toHaveURL()
await expect(page).toHaveURL('https://demo.nopcommerce.com/register')




//expect(page).toHaveTitle()	Page has a title
await expect(page).toHaveTitle('nopCommerce demo store. Register')




//expect(locator).toBeVisible()	Element is visible
const logoelement= await page.locator('.header-logo')
await expect(logoelement).toBeVisible	



// expect(locator).toBeDisabled()	Element is disabled  or
//expect(locator).toBeEnabled()	Control is enabled
const searchStoreBox= await page.locator('#small-searchterms')
await expect(searchStoreBox).toBeEnabled() 




//expect(locator).toBeChecked()	
// Radio button ------to check the Radio button is selecetd or not
const maleRadioButton = await page.locator('#gender-male')
await maleRadioButton.click()
await expect(maleRadioButton).toBeChecked()


//check box    ---to check the checkbox is already selecetd or not
const newsletterCheckbox = await page.locator('#Newsletter')
await expect(newsletterCheckbox).toBeChecked()




// expect(locator).toHaveAttribute()	to check particalr value & element has attribute
const registerButton = await page.locator(('#register-button'))
await expect(registerButton).toHaveAttribute('type', 'submit')	



 
// expect(locator).toHaveText()	Element matches text (exact match)  Register=full text value
await expect(await page.locator('.page-title h1')).toHaveText('Register')



//expect(locator).toContainText()	Element contains text (Reg= partical match)
await expect(await page.locator('.page-title h1')).toContainText('Reg')





//expect(locator).toHaveValue()	Input has a value (e.g texbox have impute value or not)
const emailInput = await page.locator('#Email')
await emailInput.fill('test@demo.com')
await expect(emailInput).toHaveValue('test@demo.com')	





//expect(locator).toHaveCount()	List of elements has given length 
const options = await page.locator('select[name="DateOfBirthMonth"] option')
await expect(options).toHaveCount(13)	
















})