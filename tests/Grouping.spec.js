import {test, expect} from '@playwright/test'

test.beforeAll(async()=>{
        console.log('this is beforeAll hook....')
})


test.afterAll(async()=>{
        console.log('this is afterAll hook....')
})


test.beforeEach(async()=>{
        console.log('this is beforeEach hook....')
})

test.afterEach(async()=>{
        console.log('this is afterEach hook....')
})





test.describe('Group1', ()=>{

test('Test1', async({page})=>{
    console.log('this is the test1....')
})


test('Test2', async({page})=>{
    console.log('this is the test2....')
})

})




test.describe('Group2', ()=>{

test('Test3', async({page})=>{
    console.log('this is the test3....')
})


test('Test4', async({page})=>{
    console.log('this is the test4....')
})


})