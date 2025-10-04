exports.LoginPage=class LoginPage {

    constructor(page){
        this.page=page
        this.usernameinput='#user-name'
        this.passwordinput='#password'
        this.loginbutton='#login-button'
    }
    async gotoLoginPage(){
        await this.page.goto('https://www.saucedemo.com/v1/')
    }
    async login(username, password){
        await this.page.locator(this.usernameinput).fill(username)
        await this.page.locator(this.passwordinput).fill(password)
        await this.page.locator(this.loginbutton).click()
    }

}