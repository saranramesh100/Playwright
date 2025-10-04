import { test,expect } from "@playwright/test";
export class Login{
    constructor(page){
        this.page=page;
        this.mobilenumber=page.locator("//h3[text()='Mobile number']")
        this.countrycode=page.locator("//div[contains(text(),'+')]")
        this.indiacode=page.locator("//div[contains(text(),'+54  Argentina')]")
        this.phonenumber=page.locator("//input[@id='phone']")
        this.password=page.locator("//input[@id='password']")
        this.loginbtn=page.locator("//span[(text()='Log in')]//parent::button")
        this.errmsg=page.locator("//div[contains(@data-test,'alert')]//descendant::p")

    }
    async Selectcode(){
        await this.mobilenumber.click();
        await this.countrycode.click();
        await this.indiacode.click();
    }
    async entercreds(number,pwd){
        await this.phonenumber.fill(number);
        await this.password.fill(pwd);
        await this.loginbtn.click()
    }

    async verifyError(error){
        await this.errmsg.waitFor({ timeout: 15000 })
        await expect(this.errmsg).toContainText(error)
    }

}