exports.HomePage=class HomePage {

    constructor(page){
        this.page=page
        this.productlist='id="inventory_container"] [class="inventory_item"]'
        this.addtocart='[class="btn_primary btn_inventory"]'
        this.cart='//div[@id="shopping_cart_container"]'
        this.checkoutclick='[class="btn_action checkout_button"]'
    }
   
    async addproductToCart(productname){
        const items= await this.page.$$(this.productlist)
        for (const item of items) {
        const text = await item.textContent();
  
            if (text.includes(productname)) {
            const button = await item.$(this.addtocart)
            button.click()
            break;
            }
         }  
    }   
    async checkout(){
        await this.page.waitForTimeout(3000) 
        await this.page.locator(this.cart).click()  
        await this.page.waitForTimeout(3000) 
        await this.page.locator(this.checkoutclick).click()
    }
}