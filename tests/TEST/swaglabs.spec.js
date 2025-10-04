import{test,expect} from '@playwright/test'

test ("swaglabs",async({page})=>{
    await page.goto('https://www.saucedemo.com/v1/')
    await page.locator('//input[@id="user-name"]').fill('standard_user')
    await page.fill('//input[@id="password"]','secret_sauce')
    // await page.locator('//input[@id="password"]').fill('secret_sauce')
    await page.locator('[id="login-button"]').click()

   const items= await page.$$('[id="inventory_container"] [class="inventory_item"]')
   for (const item of items) {
    const text = await item.textContent();
  
    if (text.includes('Backpack')) {
      const button = await item.$('[class="btn_primary btn_inventory"]')
      button.click()
         }
     } 
    
     await page.locator('//div[@id="shopping_cart_container"]').click()
     await expect(page.locator("//div[text()='Sauce Labs Backpack']")).toHaveText("Sauce Labs Backpack")
     await page.locator('[class="btn_action checkout_button"]').click()
     await page.getByPlaceholder('First Name').fill('saran')
     await page.getByPlaceholder('Last Name').fill('ramesh')
     await page.getByPlaceholder('Zip/Postal Code').fill('600055')
     await page.locator('[class="btn_primary cart_button"]').click()
     await page.locator('[class="btn_action cart_button"]').click()
     await page.screenshot({ path:'tests/screenshot/'+Date.now()+'orderpage.png',fullpage:true})
 
     
     await page.waitForTimeout(3000)  

})