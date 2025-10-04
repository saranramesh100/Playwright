exports.AddressPage=class AddressPage {

    constructor(page){
        this.page=page
        this.firstnameinput='[id="first-name"]'
        this.lastnameinput='[id="last-name"]'
        this.postcode='[id="postal-code"]'
        this.checkclick='[class="btn_primary cart_button"]'
        this.finish='[class="btn_action cart_button"]'
    }
    
    async address(fname,lname, zcode){
        await this.page.locator(this.firstnameinput).fill(fname)
        await this.page.locator(this.lastnameinput).fill(lname)
        await this.page.locator(this.postcode).fill(zcode)
        await this.page.locator(this.checkclick).click()
        await this.page.locator(this.finish).click()

    }

}