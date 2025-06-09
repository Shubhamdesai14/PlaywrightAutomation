//const {test, expect} =require('@playwright/test') ; //we need to add this bock evry time after creating the new test file

import {test, expect} from '@playwright/test'  //alternative of above


        //test name
test ('LocateMultipleElements', async ({page})=>{

//fetch the all links present on the webpage

    await page.goto('https://www.demoblaze.com/') ;

                                // 'a' represnet the all links present in the element
    const links= await page.$$('a');

    //variable
    for(const link of links)
    {
       const linktext= await link.textContent();
       console.log(linktext);
    }

    

    //if there is multiple web element/ check the number of products available on the page


    //page.waitForSelector("//div[@id='tbodyid']//h4/a")    ---if the number of product ot showing the numbe then use this line

                //if there is multiple web element
    const products = await page.$$("//div[@id='tbodyid']//h4/a");
    
    for (const product of products)             //-------failed product or products not shoeing use above line
    {
        const prodName = await product.textContent();
        console.log(prodName)
    }
      

})