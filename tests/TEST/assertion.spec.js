import{test,expect} from '@playwright/test'

// test ("assertion",async({page})=>{
//     await page.goto('https://testautomationpractice.blogspot.com/')
//     await expect(page).toHaveURL('https://testautomationpractice.blogspot.com/')
// })

test("radio button", async({page})=>{
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/")
    await page.locator("//input[@value='radio3']").check()
    // await page.pause()
    

})
// code updated by saravanan for radio module
test("git check", async({page})=>{
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/")
    await page.locator("//input[@value='radio3']").check()
})

console.log("hi")
