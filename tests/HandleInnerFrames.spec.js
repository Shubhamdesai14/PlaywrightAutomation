const {test, expect}= require('@playwright/test')

test ('Inner Frames', async ({page})=>{

await page.goto('https://ui.vision/demo/webtest/frames/');


const frame3=await page.frame({url: 'https://ui.vision/demo/webtest/frames/frame_3.html'})
frame3.locator("input[name='mytext3']").fill('welcome')



//nested frame
const childFrmes=await frame3.childFrames()
await childFrmes[0].locator("//*[@id='i5']/div[3]/div").check()



await page.waitForTimeout(5000)

})
