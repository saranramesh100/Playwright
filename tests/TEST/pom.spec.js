import{test,expect} from '@playwright/test'
import { LoginPage } from '../POM/loginpage'
import { HomePage } from '../POM/homepage';
import { AddressPage } from '../POM/address';




const testdata=JSON.parse(JSON.stringify(require("../../testdata/swagtestdata.json")))


test ("swaglabs",async({page})=>{

    // login page
    const login= new LoginPage(page);
    await login.gotoLoginPage()
    await login.login(testdata.username,testdata.password)
    await page.waitForTimeout(3000)

    // Home
    const home= new HomePage(page)
    await home.addproductToCart(testdata.productname)
    await home.checkout();
    await page.waitForTimeout(3000)

    // address
    const order=new AddressPage(page)
    order.address(testdata.fname,testdata.lname,testdata.zcode)
    await page.waitForTimeout(3000)

})