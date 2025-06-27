import {test, expect} from '@playwright/test'


test('Test1@sanity', async({page})=>{
    console.log('this is the test1....')
})


test('Test2@sanity', async({page})=>{
    console.log('this is the test2....')
})


test('Test3@reg', async({page})=>{
    console.log('this is the test3....')
})


test('Test4@reg', async({page})=>{
    console.log('this is the test4....')
})


test('Test4@sanity@reg', async({page})=>{
    console.log('this is the test4....')
})


//use command to run spectic tag----    npx playwright test tests/tags.spec.js --project chromium  --grep @sanity 
//                                      npx playwright test tests/tags.spec.js --project chromium  --grep @reg 
//                                      npx playwright test tests/tags.spec.js --project chromium  --grep @reg@sanity 