const {test, expect}= require('@playwright/test')


let page;



// test.beforeEach (async ({browser})=>{
// page=await browser.newPage()
// await page.goto('https://demoblaze.com/index.html')

// await page.locator('#login2').click()
// await page.locator('#loginusername').fill('pavanol')
// await page.locator('#loginpassword').fill('test@123')
// await page.locator('//button[normalize-space()="Log in]').click()

// })

// test.afterEach(async()=>{

// })

// test('Home page Test', async () => {

// const products= await page.$$('.hrefch')
// expect(products).toHaveLength(9)

// })




test.beforeAll (async ({browser})=>{
page=await browser.newPage()
await page.goto('https://demoblaze.com/index.html')

await page.locator('#login2').click()
await page.locator('#loginusername').fill('pavanol')
await page.locator('#loginpassword').fill('test@123')
await page.locator('//button[normalize-space()="Log in]').click()

})

test.afterAll(async()=>{

})

test('Home page Test', async () => {

const products= await page.$$('.hrefch')
expect(products).toHaveLength(9)

})